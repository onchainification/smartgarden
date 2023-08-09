//SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/* Testing utilities */
import {Test} from "forge-std/Test.sol";

import {Safe} from "safe-contracts/Safe.sol";
import {SafeProtocolRegistry} from "safe-protocol/SafeProtocolRegistry.sol";
import {SmartGardenManager} from "../src/SmartGardenManager.sol";

contract SmartGardenTest is Test {
  // ecosystem agents
  address owner = address(14);

  // gnosis safe
  Safe safe = new Safe();

  // safe-protocol sc
  SafeProtocolRegistry registry = new SafeProtocolRegistry(owner);
  SmartGardenManager manager = new SmartGardenManager(owner, address(registry));
}
