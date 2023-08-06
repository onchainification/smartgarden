// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import {ModuleFactory} from "../src/ModuleFactory.sol";

import {Script} from "forge-std/Script.sol";

/**
 * @title ModuleFactory
 * @notice Script for deploying ModuleFactory.
 * @dev https://book.getfoundry.sh/reference/forge/forge-script
 *
 * @dev This script is used to deploy ModuleFactory with forge script
 * example start anvil with `anvil` command and then run
 * forge script contracts/script/ModuleFactory.s.sol:Deploy --rpc-url http://localhost:8545 --broadcast -vvv
 * @dev Scripts can be used for any scripting not just deployment
 */
contract ModuleFactoryScript is Script {
  function run() public {
    // read DEPLOYER_PRIVATE_KEY from environment variables
    uint256 deployerPrivateKey = vm.envUint("DEPLOYER_PRIVATE_KEY");

    // start broadcast any transaction after this point will be submitted to chain
    vm.startBroadcast(deployerPrivateKey);

    // deploy ModuleFactory
    ModuleFactory factory = new ModuleFactory();

    // stop broadcasting transactions
    vm.stopBroadcast();
  }
}
