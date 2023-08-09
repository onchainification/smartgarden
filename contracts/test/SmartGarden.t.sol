//SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/* Testing utilities */
import {Test} from "forge-std/Test.sol";

import {Safe} from "safe-contracts/Safe.sol";
import {SafeProtocolRegistry} from "safe-protocol/SafeProtocolRegistry.sol";
import {Enum} from "safe-protocol/common/Enum.sol";
import {SmartGardenManager} from "../src/SmartGardenManager.sol";
import {PluginMetadata} from "../src/modules/BaseModule.sol";
import {DummyModule} from "../src/modules/DummyModule.sol";

contract SmartGardenTest is Test {
  // ecosystem agents
  address owner = address(14);

  // gnosis safe
  Safe safe = new Safe();

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
  DummyModule module = new DummyModule(address(manager), data);

  function test_basic_integration() public {
    vm.prank(owner);
    registry.addIntegration(address(module), Enum.IntegrationType.Plugin);
  }
}
