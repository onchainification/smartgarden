// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import {SafeProtocolRegistry} from "safe-protocol/SafeProtocolRegistry.sol";
import {SmartGardenManager} from "../src/SmartGardenManager.sol";

import {PluginMetadata} from "../src/modules/BaseModule.sol";
import {HarvesterPlugin} from "../src/modules/HarvesterPlugin.sol";

import {Script} from "forge-std/Script.sol";

contract InfraDeployment is Script {
  address constant SAFE_MSIG_OPTI = 0xF55aB9D6eaaB0614073cC1da5C29b093F6e3Aebc;
  address constant RELAYER_EOA = 0x4251b0484A94E77dc558D59BA27A465AE8Db061e;

  function run() public {
    uint256 deployerPrivateKey = vm.envUint("FORGE_PRIVATE_KEY");

    vm.startBroadcast(deployerPrivateKey);

    SafeProtocolRegistry registry = new SafeProtocolRegistry(SAFE_MSIG_OPTI);
    SmartGardenManager manager = new SmartGardenManager(
      SAFE_MSIG_OPTI,
      address(registry)
    );

    PluginMetadata memory data = PluginMetadata({
      name: "Smart-Harvest",
      version: "v0.0.1",
      requiresRootAccess: false,
      iconUrl: "",
      appUrl: ""
    });
    HarvesterPlugin plugin = new HarvesterPlugin(
      address(manager),
      RELAYER_EOA,
      SAFE_MSIG_OPTI,
      data
    );

    vm.stopBroadcast();
  }
}
