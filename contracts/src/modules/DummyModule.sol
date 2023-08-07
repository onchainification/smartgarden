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

  ////////////////////////////////////////////////////////////////////////////
  // EVENTS
  ////////////////////////////////////////////////////////////////////////////

  event VaultAddressUpdated(address newVaultAddress, address oldVaultAddress);
  event CadenceUpdated(uint256 newCadence, uint256 oldCadence);

  constructor(address _vault, uint256 _cadence) {
    vault = _vault;
    cadence = _cadence;
  }

  ////////////////////////////////////////////////////////////////////////////
  // PUBLIC: Owner - Config
  ////////////////////////////////////////////////////////////////////////////

  /// @notice Updates the vault erc-4626 address at which rewards will be process
  /// @param _vaultAddr The new vault adress as target
  function setVault(address _vaultAddr) external {
    address oldVaultAddr = vault;

    vault = _vaultAddr;
    emit VaultAddressUpdated(_vaultAddr, oldVaultAddr);
  }

  /// @notice Updates the cadenceat which rewards are processed by the keeper
  /// @param _cadence The new cadence frequency in seconds.
  function setCadence(uint256 _cadence) external {
    uint256 oldCadence = cadence;

    cadence = _cadence;
    emit CadenceUpdated(_cadence, oldCadence);
  }
}
