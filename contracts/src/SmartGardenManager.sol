// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {SafeProtocolManager} from "safe-protocol/SafeProtocolManager.sol";
import {ISafeProtocolPlugin} from "safe-protocol/interfaces/Integrations.sol";

import {IPlugin} from "./interfaces/IPlugin.sol";

contract SmartGardenManager is SafeProtocolManager {
  constructor(
    address _initialOwner,
    address _registry
  ) SafeProtocolManager(_initialOwner, _registry) {}

  function enablePluginWithConfig(
    address plugin,
    bool allowRootAccess,
    IPlugin.DummyConfig calldata config
  ) external noZeroOrSentinelPlugin(plugin) onlyPermittedPlugin(plugin) {
    PluginAccessInfo storage senderSentinelPlugin = enabledPlugins[msg.sender][
      SENTINEL_MODULES
    ];
    PluginAccessInfo storage senderPlugin = enabledPlugins[msg.sender][plugin];

    if (senderPlugin.nextPluginPointer != address(0)) {
      revert PluginAlreadyEnabled(msg.sender, plugin);
    }

    bool requiresRootAccess = ISafeProtocolPlugin(plugin).requiresRootAccess();
    if (allowRootAccess != requiresRootAccess) {
      revert PluginAccessMismatch(plugin, requiresRootAccess, allowRootAccess);
    }

    if (senderSentinelPlugin.nextPluginPointer == address(0)) {
      senderSentinelPlugin.rootAddressGranted = false;
      senderSentinelPlugin.nextPluginPointer = SENTINEL_MODULES;
    }

    senderPlugin.nextPluginPointer = senderSentinelPlugin.nextPluginPointer;
    senderPlugin.rootAddressGranted = allowRootAccess;
    senderSentinelPlugin.nextPluginPointer = plugin;

    IPlugin(plugin).setSafeConfig(msg.sender, config);

    emit PluginEnabled(msg.sender, plugin, allowRootAccess);
  }
}
