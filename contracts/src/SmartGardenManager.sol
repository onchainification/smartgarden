// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {SafeProtocolManager} from "safe-protocol/SafeProtocolManager.sol";
import {ISafeProtocolPlugin} from "safe-protocol/interfaces/Integrations.sol";

import {IModule} from "./interfaces/IModule.sol";

contract SmartGardenManager is SafeProtocolManager {
  constructor(
    address _initialOwner,
    address _registry
  ) SafeProtocolManager(_initialOwner, _registry) {}

  // TODO: add another method which accepts config in `enablePlugin`
  function enablePluginWithConfig(
    address plugin,
    bool allowRootAccess,
    IModule.DummyConfig calldata config
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

    // Tweak config here?
    IModule(plugin).setSafeConfig(msg.sender, config);

    emit PluginEnabled(msg.sender, plugin, allowRootAccess);
  }
}
