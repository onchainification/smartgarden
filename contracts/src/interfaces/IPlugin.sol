// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IPlugin {
  struct DummyConfig {
    address vault;
    uint64 cadenceSec;
    uint64 lastCall;
  }

  function setSafeConfig(address safe, DummyConfig calldata config) external;
}
