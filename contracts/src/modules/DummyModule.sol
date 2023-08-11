// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ISafe} from "safe-protocol/interfaces/Accounts.sol";
import {ISafeProtocolManager} from "safe-protocol/interfaces/Manager.sol";
import {SafeTransaction, SafeProtocolAction} from "safe-protocol/DataTypes.sol";

import {BaseModule, PluginMetadata} from "./BaseModule.sol";

import {IGauge} from "../interfaces/IGauge.sol";

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

  // address (relayer: keeper, gelato, AA)
  address public relayer;

  // address (Safe address) => DummyConfig
  mapping(address => DummyConfig) public safeConfigs;

  ////////////////////////////////////////////////////////////////////////////
  // ERRORS
  ////////////////////////////////////////////////////////////////////////////

  error UntrustedRelayer(address origin);

  error TooSoon(uint256 currentTime, uint256 updateTime, uint256 minDuration);

  ////////////////////////////////////////////////////////////////////////////
  // MODIFIERS
  ////////////////////////////////////////////////////////////////////////////

  modifier onlyRelayer() {
    if (msg.sender != relayer) revert UntrustedRelayer(msg.sender);
    _;
  }

  ////////////////////////////////////////////////////////////////////////////
  // EVENTS
  ////////////////////////////////////////////////////////////////////////////

  /// @dev use for subgraph to display basic info in ui as per `safe` basis
  event PluginTransactionExec(address safe, address gauge, uint256 timestamp);

  constructor(
    address _manager,
    address _relayer,
    PluginMetadata memory _data
  ) BaseModule(_data) {
    manager = _manager;
    relayer = _relayer;
  }

  ////////////////////////////////////////////////////////////////////////////
  // PUBLIC: Manager - Config
  ////////////////////////////////////////////////////////////////////////////

  function setSafeConfig(address _safe, DummyConfig calldata _config) external {
    safeConfigs[_safe] = _config;
  }

  /// @notice Executes a Safe transaction. Only executable by trusted relayer
  /// @param _safe Safe account target address
  function executeFromPlugin(ISafe _safe) external onlyRelayer {
    DummyConfig storage config = safeConfigs[address(_safe)];

    uint256 lastCallTimestampCached = config.lastCall;
    uint256 cadenceCached = config.cadenceSec;

    if ((block.timestamp - lastCallTimestampCached) < cadenceCached) {
      revert TooSoon(block.timestamp, lastCallTimestampCached, cadenceCached);
    }

    SafeProtocolAction[] memory transactions = new SafeProtocolAction[](1);
    transactions[0] = SafeProtocolAction({
      to: payable(config.vault),
      value: 0,
      data: abi.encodeWithSelector(IGauge.getReward.selector, address(_safe))
    });

    SafeTransaction memory transaction = SafeTransaction({
      actions: transactions,
      nonce: 0,
      metadataHash: bytes32(0)
    });

    ISafeProtocolManager(manager).executeTransaction(_safe, transaction);
    config.lastCall = uint64(block.timestamp);

    emit PluginTransactionExec(address(_safe), config.vault, block.timestamp);
  }
}
