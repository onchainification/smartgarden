//SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/* Testing utilities */
import {Test} from "forge-std/Test.sol";

import {SafeProxyFactory} from "safe-contracts/proxies/SafeProxyFactory.sol";
import {SafeProxy} from "safe-contracts/proxies/SafeProxy.sol";
import {Safe} from "safe-contracts/Safe.sol";

import {ISafe} from "safe-protocol/interfaces/Accounts.sol";
import {SafeProtocolRegistry} from "safe-protocol/SafeProtocolRegistry.sol";
import {SafeTransaction, SafeProtocolAction} from "safe-protocol/DataTypes.sol";
import {Enum} from "safe-protocol/common/Enum.sol";

import {MockGauge} from "../src/test/MockGauge.sol";

import {SmartGardenManager} from "../src/SmartGardenManager.sol";
import {PluginMetadata} from "../src/modules/BaseModule.sol";
import {HarvesterPlugin} from "../src/modules/HarvesterPlugin.sol";

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {ERC20PresetFixedSupply} from "@openzeppelin/contracts/token/ERC20/presets/ERC20PresetFixedSupply.sol";

import {IPlugin} from "../src/interfaces/IPlugin.sol";

// NOTE: safe error codes: https://github.com/safe-global/safe-contracts/blob/main/docs/error_codes.md

contract SmartGardenTest is Test {
  uint256 constant DUMMY_REWARD_AMT = 15e18;

  // dummy tokens for payload play
  ERC20PresetFixedSupply tkn;
  ERC20PresetFixedSupply rewardsToken;

  // ecosystem agents
  address owner = address(14);
  address safeOwner = address(3);
  address relayer = address(5);
  address rewardsDepositor = address(15);
  address pluginGov = address(500);

  // gnosis-safe sc
  SafeProxyFactory safeFactory = new SafeProxyFactory();
  SafeProxy s;
  Safe safe = new Safe(); // singleton implementation
  Safe safeProxy; // proxied safe pointer

  // safe-protocol sc
  SafeProtocolRegistry registry = new SafeProtocolRegistry(owner);
  SmartGardenManager manager = new SmartGardenManager(owner, address(registry));

  // mock gauge sc
  MockGauge gauge;

  // dummy plugin
  PluginMetadata data =
    PluginMetadata({
      name: "dummy",
      version: "v0.0.1",
      requiresRootAccess: false,
      iconUrl: "",
      appUrl: ""
    });
  HarvesterPlugin plugin =
    new HarvesterPlugin(address(manager), relayer, pluginGov, data);

  function setUp() public {
    vm.prank(owner);
    registry.addIntegration(address(plugin), Enum.IntegrationType.Plugin);

    address[] memory safeOwners = new address[](1);
    safeOwners[0] = safeOwner;

    bytes memory initializer = abi.encodeWithSelector(
      Safe.setup.selector,
      safeOwners, // owners
      1, // threshold
      address(0), // to
      abi.encode(0), // data
      address(0), // fallbackHandler
      address(0), // paymentToken
      0, // payment
      payable(address(0)) // paymentReceiver
    );
    s = safeFactory.createProxyWithNonce(address(safe), initializer, 50);

    safeProxy = Safe(payable(address(s)));

    // mint tokens to safe
    tkn = new ERC20PresetFixedSupply(
      "TestToken",
      "TT",
      12e18,
      address(safeProxy)
    );

    assertEq(tkn.balanceOf(address(safeProxy)), 12e18);

    rewardsToken = new ERC20PresetFixedSupply(
      "RewardTokens",
      "RT",
      100e18,
      rewardsDepositor
    );

    assertEq(rewardsToken.balanceOf(rewardsDepositor), 100e18);

    // deploy mock gauge
    address[] memory rewards = new address[](1);
    rewards[0] = address(rewardsToken);
    gauge = new MockGauge("GaugeTestToken", "GTT", address(tkn), rewards);

    vm.prank(rewardsDepositor);
    rewardsToken.transfer(address(gauge), DUMMY_REWARD_AMT);

    // manipulate `block.timestamp`. otherwise locally will be ~1
    vm.warp(1691763307);
  }

  function test_basic_safe_flow() public {
    // deposit in gauge
    vm.prank(address(safeProxy));
    tkn.approve(address(gauge), 5e18);
    vm.prank(address(safeProxy));
    gauge.deposit(5e18);

    // verify receipt
    assertEq(gauge.balanceOf(address(safeProxy)), 5e18);

    // enable "manager"
    vm.prank(address(safeProxy));
    safeProxy.enableModule(address(manager));

    assertEq(safeProxy.isModuleEnabled(address(manager)), true);

    vm.prank(address(safeProxy));
    IPlugin.DummyConfig memory config = IPlugin.DummyConfig({
      vault: address(gauge),
      cadenceSec: 86400,
      lastCall: 0
    });
    manager.enablePluginWithConfig(address(plugin), false, config);

    (address vault, uint64 cadenceSec, uint64 lastCall) = plugin.safeConfigs(
      address(safeProxy)
    );
    address[] memory safes = plugin.getSafes();

    assertEq(vault, address(gauge));
    assertEq(lastCall, 0);
    assertEq(cadenceSec, 86400);
    assertEq(safes[0], address(safeProxy));

    uint256 rewardsBalBefore = rewardsToken.balanceOf(address(safeProxy));

    // abstraction of exec via relayer service
    (bool upkeepNeeded, bytes memory performData) = plugin.checkUpkeep(
      new bytes(0)
    );
    vm.prank(address(relayer));
    plugin.performUpkeep(performData);

    // ensure rewards in safe increased
    assertGt(rewardsToken.balanceOf(address(safeProxy)), rewardsBalBefore);

    (, , uint64 lastCallAfter) = plugin.safeConfigs(address(safeProxy));

    // ensure that ts was writen in storage and greater
    assertGt(lastCallAfter, lastCall);

    (upkeepNeeded, ) = plugin.checkUpkeep(new bytes(0));

    assertFalse(upkeepNeeded);

    // revert if we try to trigger right after
    vm.prank(address(relayer));
    vm.expectRevert(
      abi.encodeWithSelector(
        HarvesterPlugin.TooSoon.selector,
        block.timestamp,
        lastCallAfter,
        cadenceSec
      )
    );
    plugin.performUpkeep(performData);

    // ok to trigger after ts >= cadence
    skip(1 days);

    (upkeepNeeded, performData) = plugin.checkUpkeep(new bytes(0));

    vm.prank(address(relayer));
    plugin.performUpkeep(performData);
  }
}
