// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

import "./modules/DummyModule.sol";

/// @title ModuleFactory
/// @dev   Allows deploying easily a module targeting a specific configuration
contract ModuleFactory {
  ////////////////////////////////////////////////////////////////////////////
  // STORAGE
  ////////////////////////////////////////////////////////////////////////////

  /// @notice handy mapping for testing `deployer` to `module` display in UI
  mapping(address => address) public deployedModules;

  ////////////////////////////////////////////////////////////////////////////
  // EVENTS
  ////////////////////////////////////////////////////////////////////////////

  event ModuleDeployed(address module, address vault, uint256 timestamp);

  /// @notice Deploys a new module
  /// @param _vault target erc-4626 compliance address
  /// @param _timestamp processing cadence in seconds
  function createModule(address _vault, uint256 _timestamp) external {
    DummyModule module = new DummyModule(_vault, _timestamp);
    deployedModules[msg.sender] = address(module);
    emit ModuleDeployed(address(module), _vault, _timestamp);
  }
}
