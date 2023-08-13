// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {EnumerableSet} from "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";

import {ISafe} from "safe-protocol/interfaces/Accounts.sol";
import {ISafeProtocolManager} from "safe-protocol/interfaces/Manager.sol";
import {SafeTransaction, SafeProtocolAction} from "safe-protocol/DataTypes.sol";

import {BaseModule, PluginMetadata} from "./BaseModule.sol";

import {IGauge} from "../interfaces/IGauge.sol";
import {KeeperCompatibleInterface} from "../interfaces/chainlink/KeeperCompatibleInterface.sol";

/// @title  HarvesterPlugin
/// @notice Plugin which allows multiple gnosis safes to have a configuration to trigger harvest upon conditions being meet
contract HarvesterPlugin is BaseModule, KeeperCompatibleInterface {
  using EnumerableSet for EnumerableSet.AddressSet;

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

  // address (relayer: cl keeper, gelato, AA)
  address public relayer;

  /// @notice Address of the safes with plugin enabled
  EnumerableSet.AddressSet internal safes;

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

    // NOTE: this is a temp solution
    if (!safes.contains(_safe)) safes.add(_safe);
  }

  ////////////////////////////////////////////////////////////////////////////
  // PUBLIC: Relayer/Keeper
  ////////////////////////////////////////////////////////////////////////////

  /// @notice Called by keeper to send funds to underfunded addresses
  /// @param _performData The abi encoded list of safe addresses to trigger harvest
  function performUpkeep(
    bytes calldata _performData
  ) external override onlyRelayer {
    address[] memory needsHarvest = abi.decode(_performData, (address[]));

    for (uint256 i; i < needsHarvest.length; ) {
      _executeFromPlugin(ISafe(needsHarvest[i]));
      unchecked {
        ++i;
      }
    }
  }

  ////////////////////////////////////////////////////////////////////////////
  // PUBLIC VIEW
  ////////////////////////////////////////////////////////////////////////////

  /// @notice Checks whether an upkeep is to be performed.
  /// @return upkeepNeeded_ A boolean indicating whether an upkeep is to be performed.
  /// @return performData_ The calldata to be passed to the upkeep function.
  function checkUpkeep(
    bytes calldata
  )
    external
    view
    override
    returns (bool upkeepNeeded_, bytes memory performData_)
  {
    address[] memory safesReqTrigger = _getTriggableSafes();
    upkeepNeeded_ = safesReqTrigger.length > 0;
    performData_ = abi.encode(safesReqTrigger);
  }

  /// @notice All safe addresses
  function getSafes() public view returns (address[] memory) {
    return safes.values();
  }

  ////////////////////////////////////////////////////////////////////////////
  // INTERNAL
  ////////////////////////////////////////////////////////////////////////////

  /// @notice Gets a list of safe addresses that keepers can trigger
  /// @return list of safe addresses that plugin can trigger harvest action
  function _getTriggableSafes() internal view returns (address[] memory) {
    uint256 cachedLen = safes.length();
    address[] memory needsHarvest = new address[](cachedLen);
    uint256 harvestCount;

    if (cachedLen > 0) {
      for (uint256 i; i < cachedLen; ) {
        address safeAddr = safes.at(i);
        DummyConfig memory config = safeConfigs[safeAddr];
        if ((block.timestamp - config.lastCall) >= config.cadenceSec) {
          needsHarvest[harvestCount] = safeAddr;
          harvestCount++;
        }
        unchecked {
          ++i;
        }
      }

      if (harvestCount != cachedLen) {
        assembly {
          mstore(needsHarvest, harvestCount)
        }
      }
    }

    return needsHarvest;
  }

  /// @notice Executes a Safe transaction. Only executable by trusted relayer
  /// @param _safe Safe account target address
  function _executeFromPlugin(ISafe _safe) internal {
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
      // NOTE: find uniqueness via `block.number`
      nonce: uint256(keccak256(abi.encode(address(_safe), block.number))),
      metadataHash: bytes32(0)
    });

    ISafeProtocolManager(manager).executeTransaction(_safe, transaction);
    config.lastCall = uint64(block.timestamp);

    emit PluginTransactionExec(address(_safe), config.vault, block.timestamp);
  }
}
