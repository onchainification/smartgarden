// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

contract DummyModule {
  ////////////////////////////////////////////////////////////////////////////
  // STORAGE
  ////////////////////////////////////////////////////////////////////////////

  /// @notice erc-4626 compliance address
  address public vault;

  /// @notice processing cadence in seconds
  uint256 public cadence;

  constructor(address _vault, uint256 _cadence) {
    vault = _vault;
    cadence = _cadence;
  }
}
