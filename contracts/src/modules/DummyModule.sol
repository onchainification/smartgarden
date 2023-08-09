// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ISafe} from "safe-protocol/interfaces/Accounts.sol";
import {ISafeProtocolManager, SafeRootAccess} from "safe-protocol/interfaces/Manager.sol";

contract DummyModule {
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

  constructor(address _manager) {
    manager = _manager;
  }

  ////////////////////////////////////////////////////////////////////////////
  // PUBLIC: VIEW
  ////////////////////////////////////////////////////////////////////////////

  /**
   * @notice A funtion that returns name of the plugin
   * @return name string name of the plugin
   */
  function name() external view returns (string memory name) {
    name = "dummy";
  }

  /**
   * @notice A function that returns version of the plugin
   * @return version string version of the plugin
   */
  function version() external view returns (string memory version) {
    version = "0.0.1";
  }

  /**
   * @notice A function that returns information about the type of metadata provider and its location.
   *         For more information on metadata provider, refer to https://github.com/safe-global/safe-core-protocol-specs/.
   * @return providerType uint256 Type of metadata provider
   * @return location bytes
   */
  function metadataProvider()
    external
    view
    returns (uint256 providerType, bytes memory location)
  {
    providerType = 0;
    location = abi.encode(0);
  }

  /**
   * @notice A function that indicates if the plugin requires root access to a Safe.
   * @return requiresRootAccess True if root access is required, false otherwise.
   */
  function requiresRootAccess()
    external
    view
    returns (bool requiresRootAccess)
  {
    requiresRootAccess = true;
  }

  ////////////////////////////////////////////////////////////////////////////
  // PUBLIC: Manager - Config
  ////////////////////////////////////////////////////////////////////////////

  function setSafeConfig(address safe, DummyConfig calldata config) external {
    safeConfigs[safe] = config;
  }

  /**
   * @notice Executes a Safe transaction
   * @param manager Address of the Safe{Core} Protocol Manager.
   * @param safe Safe account
   * @param rootAccess Contains the set of actions to be done in the Safe transaction
   */
  function executeFromPlugin(
    ISafeProtocolManager manager,
    ISafe safe,
    SafeRootAccess calldata rootAccess
  ) external {
    manager.executeRootAccess(safe, rootAccess);
  }
}
