// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ISafeProtocolPlugin} from "safe-protocol/interfaces/Integrations.sol";

enum MetadataProviderType {
  IPFS,
  URL,
  Contract,
  Event
}

interface MetadataProvider {
  function retrieveMetadata(
    bytes32 metadataHash
  ) external view returns (bytes memory metadata);
}

struct PluginMetadata {
  string name;
  string version;
  bool requiresRootAccess;
  string iconUrl;
  string appUrl;
}

library PluginMetadataOps {
  function encode(
    PluginMetadata memory data
  ) internal pure returns (bytes memory) {
    return
      abi.encodePacked(
        uint8(0x00), // Format
        uint8(0x00), // Format version
        abi.encode(
          data.name,
          data.version,
          data.requiresRootAccess,
          data.iconUrl,
          data.appUrl
        ) // Plugin Metadata
      );
  }

  function decode(
    bytes calldata data
  ) internal pure returns (PluginMetadata memory) {
    require(
      bytes16(data[0:2]) == bytes16(0x0000),
      "Unsupported format or format version"
    );
    (
      string memory name,
      string memory version,
      bool requiresRootAccess,
      string memory iconUrl,
      string memory appUrl
    ) = abi.decode(data[2:], (string, string, bool, string, string));
    return PluginMetadata(name, version, requiresRootAccess, iconUrl, appUrl);
  }
}

abstract contract BaseModule is ISafeProtocolPlugin, MetadataProvider {
  using PluginMetadataOps for PluginMetadata;

  string public name;
  string public version;
  bool public immutable requiresRootAccess;
  bytes32 public immutable metadataHash;
  bytes private encodedMetadata;

  constructor(PluginMetadata memory metadata) {
    name = metadata.name;
    version = metadata.version;
    requiresRootAccess = metadata.requiresRootAccess;
    // Metadata Format + Format Version + Encoded Metadata
    encodedMetadata = metadata.encode();
    metadataHash = keccak256(encodedMetadata);
  }

  function metadataProvider()
    external
    view
    override
    returns (uint256 providerType, bytes memory location)
  {
    providerType = uint256(MetadataProviderType.Contract);
    location = abi.encode(address(this));
  }

  function retrieveMetadata(
    bytes32 _metadataHash
  ) external view returns (bytes memory metadata) {
    require(metadataHash == _metadataHash, "Cannot retrieve metadata");
    return encodedMetadata;
  }
}
