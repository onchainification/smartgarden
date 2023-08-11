//SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/* Testing utilities */
import {Test} from "forge-std/Test.sol";

import {SafeProxyFactory} from "safe-contracts/proxies/SafeProxyFactory.sol";
import {SafeProxy} from "safe-contracts/proxies/SafeProxy.sol";
import {Safe} from "safe-contracts/Safe.sol";

import {ISafe} from "safe-protocol/interfaces/Accounts.sol";
import {SafeProtocolRegistry} from "safe-protocol/SafeProtocolRegistry.sol";
import {SafeRootAccess, SafeProtocolAction} from "safe-protocol/DataTypes.sol";
import {Enum} from "safe-protocol/common/Enum.sol";

import {SmartGardenManager} from "../src/SmartGardenManager.sol";
import {PluginMetadata} from "../src/modules/BaseModule.sol";
import {DummyModule} from "../src/modules/DummyModule.sol";

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {ERC20PresetFixedSupply} from "@openzeppelin/contracts/token/ERC20/presets/ERC20PresetFixedSupply.sol";

import {IPlugin} from "../src/interfaces/IPlugin.sol";

// NOTE: safe error codes: https://github.com/safe-global/safe-contracts/blob/main/docs/error_codes.md

contract SmartGardenTest is Test {
  // dummy tokens for payload play
  ERC20PresetFixedSupply tkn;

  // ecosystem agents
  address owner = address(14);
  address safeOwner = address(3);

  // gnosis-safe sc
  SafeProxyFactory safeFactory = new SafeProxyFactory();
  SafeProxy s;
  Safe safe = new Safe(); // singleton implementation
  Safe safeProxy; // proxied safe pointer

  // safe-protocol sc
  SafeProtocolRegistry registry = new SafeProtocolRegistry(owner);
  SmartGardenManager manager = new SmartGardenManager(owner, address(registry));

  // dummy plugin
  PluginMetadata data =
    PluginMetadata({
      name: "dummy",
      version: "v0.0.1",
      requiresRootAccess: true,
      iconUrl: "",
      appUrl: ""
    });
  DummyModule plugin = new DummyModule(address(manager), data);

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
  }

  function test_basic_safe_flow() public {
    // enable "manager"
    vm.prank(address(safeProxy));
    safeProxy.enableModule(address(manager));

    assertEq(safeProxy.isModuleEnabled(address(manager)), true);

    vm.prank(address(safeProxy));
    IPlugin.DummyConfig memory config = IPlugin.DummyConfig({
      vault: address(2),
      cadenceSec: 86400,
      lastCall: 0
    });
    manager.enablePluginWithConfig(address(plugin), true, config);

    (address vault, uint64 cadenceSec, uint64 lastCall) = plugin.safeConfigs(
      address(safeProxy)
    );

    assertEq(vault, address(2));
    assertEq(lastCall, 0);
    assertEq(cadenceSec, 86400);

    SafeProtocolAction memory payload = SafeProtocolAction({
      to: payable(address(tkn)),
      value: 0,
      data: abi.encodeWithSelector(IERC20.transfer.selector, address(1), 1e18)
    });

    SafeRootAccess memory rootAccess = SafeRootAccess({
      action: payload,
      nonce: 0,
      metadataHash: bytes32(0)
    });

    vm.prank(address(plugin));
    plugin.executeFromPlugin(manager, ISafe(address(safeProxy)), rootAccess);
  }
}
