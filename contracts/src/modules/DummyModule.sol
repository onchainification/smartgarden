// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ISafe} from "safe-protocol/interfaces/Accounts.sol";
import {ISafeProtocolManager, SafeRootAccess} from "safe-protocol/interfaces/Manager.sol";

import {BaseModule, PluginMetadata} from "./BaseModule.sol";

contract DummyModule is BaseModule {
  ////////////////////////////////////////////////////////////////////////////
  // STRUCT
  ////////////////////////////////////////////////////////////////////////////

  struct DummyConfig {
    address vault;
    uint64 cadenceSec;
    uint64 lastCall;
  }

  ////////////////////////////////////////////////////////////////////////////
  // STORAGE
  ////////////////////////////////////////////////////////////////////////////

  // address (SafeProtocolManager)
  address manager;

  // address (Safe address) => DummyConfig
  mapping(address => DummyConfig) public safeConfigs;

  constructor(address _manager, PluginMetadata memory _data) BaseModule(_data) {
    manager = _manager;
  }

  ////////////////////////////////////////////////////////////////////////////
  // PUBLIC: Manager - Config
  ////////////////////////////////////////////////////////////////////////////

  function setSafeConfig(address _safe, DummyConfig calldata _config) external {
    safeConfigs[_safe] = _config;
  }

  /// @notice Executes a Safe transaction
  /// @param _manager Address of the Safe{Core} Protocol Manager.
  /// @param _safe Safe account
  /// @param _rootAccess Contains the set of actions to be done in the Safe transaction
  function executeFromPlugin(
    ISafeProtocolManager _manager,
    ISafe _safe,
    SafeRootAccess calldata _rootAccess
  ) external {
    _manager.executeRootAccess(_safe, _rootAccess);
  }
}
