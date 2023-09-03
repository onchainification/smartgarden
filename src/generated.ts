import {
  useContractRead,
  UseContractReadConfig,
  useContractWrite,
  UseContractWriteConfig,
  usePrepareContractWrite,
  UsePrepareContractWriteConfig,
  useContractEvent,
  UseContractEventConfig,
  useNetwork,
  useChainId,
  Address,
} from 'wagmi'
import {
  ReadContractResult,
  WriteContractMode,
  PrepareWriteContractResult,
} from 'wagmi/actions'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BaseGuard
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const baseGuardABI = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'txHash', internalType: 'bytes32', type: 'bytes32' },
      { name: 'success', internalType: 'bool', type: 'bool' },
    ],
    name: 'checkAfterExecution',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'operation', internalType: 'enum Enum.Operation', type: 'uint8' },
      { name: 'safeTxGas', internalType: 'uint256', type: 'uint256' },
      { name: 'baseGas', internalType: 'uint256', type: 'uint256' },
      { name: 'gasPrice', internalType: 'uint256', type: 'uint256' },
      { name: 'gasToken', internalType: 'address', type: 'address' },
      {
        name: 'refundReceiver',
        internalType: 'address payable',
        type: 'address',
      },
      { name: 'signatures', internalType: 'bytes', type: 'bytes' },
      { name: 'msgSender', internalType: 'address', type: 'address' },
    ],
    name: 'checkTransaction',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BaseModule
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const baseModuleABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'metadataHash',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'metadataProvider',
    outputs: [
      { name: 'providerType', internalType: 'uint256', type: 'uint256' },
      { name: 'location', internalType: 'bytes', type: 'bytes' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'requiresRootAccess',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '_metadataHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'retrieveMetadata',
    outputs: [{ name: 'metadata', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'version',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DSTest
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const dsTestABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_named_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_named_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_named_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
      {
        name: 'decimals',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'log_named_decimal_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
      {
        name: 'decimals',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'log_named_decimal_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_named_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_named_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_named_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'logs',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'IS_TEST',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'failed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20ABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: 'name_', internalType: 'string', type: 'string' },
      { name: 'symbol_', internalType: 'string', type: 'string' },
    ],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'subtractedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'decreaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'addedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'increaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC20Burnable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20BurnableABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'burn',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'burnFrom',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'subtractedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'decreaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'addedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'increaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC20PresetFixedSupply
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20PresetFixedSupplyABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'symbol', internalType: 'string', type: 'string' },
      { name: 'initialSupply', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'burn',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'burnFrom',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'subtractedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'decreaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'addedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'increaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FallbackManager
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const fallbackManagerABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'handler',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'ChangedFallbackHandler',
  },
  { stateMutability: 'nonpayable', type: 'fallback' },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'handler', internalType: 'address', type: 'address' }],
    name: 'setFallbackHandler',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Guard
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const guardABI = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'txHash', internalType: 'bytes32', type: 'bytes32' },
      { name: 'success', internalType: 'bool', type: 'bool' },
    ],
    name: 'checkAfterExecution',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'operation', internalType: 'enum Enum.Operation', type: 'uint8' },
      { name: 'safeTxGas', internalType: 'uint256', type: 'uint256' },
      { name: 'baseGas', internalType: 'uint256', type: 'uint256' },
      { name: 'gasPrice', internalType: 'uint256', type: 'uint256' },
      { name: 'gasToken', internalType: 'address', type: 'address' },
      {
        name: 'refundReceiver',
        internalType: 'address payable',
        type: 'address',
      },
      { name: 'signatures', internalType: 'bytes', type: 'bytes' },
      { name: 'msgSender', internalType: 'address', type: 'address' },
    ],
    name: 'checkTransaction',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// GuardManager
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const guardManagerABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'guard',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'ChangedGuard',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'guard', internalType: 'address', type: 'address' }],
    name: 'setGuard',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// HarvesterPlugin
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xf249209905Ed226966E956C104baf8C766d47706)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xf249209905Ed226966E956C104baf8C766d47706)
 * -
 */
export const harvesterPluginABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: '_manager', internalType: 'address', type: 'address' },
      { name: '_relayer', internalType: 'address', type: 'address' },
      { name: '_governance', internalType: 'address', type: 'address' },
      {
        name: '_data',
        internalType: 'struct PluginMetadata',
        type: 'tuple',
        components: [
          { name: 'name', internalType: 'string', type: 'string' },
          { name: 'version', internalType: 'string', type: 'string' },
          { name: 'requiresRootAccess', internalType: 'bool', type: 'bool' },
          { name: 'iconUrl', internalType: 'string', type: 'string' },
          { name: 'appUrl', internalType: 'string', type: 'string' },
        ],
      },
    ],
  },
  {
    type: 'error',
    inputs: [{ name: 'origin', internalType: 'address', type: 'address' }],
    name: 'NotGovernance',
  },
  {
    type: 'error',
    inputs: [{ name: 'origin', internalType: 'address', type: 'address' }],
    name: 'NotManager',
  },
  {
    type: 'error',
    inputs: [
      { name: 'currentTime', internalType: 'uint256', type: 'uint256' },
      { name: 'updateTime', internalType: 'uint256', type: 'uint256' },
      { name: 'minDuration', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'TooSoon',
  },
  {
    type: 'error',
    inputs: [{ name: 'origin', internalType: 'address', type: 'address' }],
    name: 'UntrustedRelayer',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'safe',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'gauge',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'timestamp',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'PluginTransactionExec',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'relayer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'timestamp',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'RelayerAdded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'relayer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'timestamp',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'RelayerRemoved',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_relayer', internalType: 'address', type: 'address' }],
    name: 'addRelayer',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    name: 'checkUpkeep',
    outputs: [
      { name: 'upkeepNeeded_', internalType: 'bool', type: 'bool' },
      { name: 'performData_', internalType: 'bytes', type: 'bytes' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getSafes',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'metadataHash',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'metadataProvider',
    outputs: [
      { name: 'providerType', internalType: 'uint256', type: 'uint256' },
      { name: 'location', internalType: 'bytes', type: 'bytes' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_performData', internalType: 'bytes', type: 'bytes' }],
    name: 'performUpkeep',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_relayer', internalType: 'address', type: 'address' }],
    name: 'removeRelayer',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'requiresRootAccess',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '_metadataHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'retrieveMetadata',
    outputs: [{ name: 'metadata', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'safeConfigs',
    outputs: [
      { name: 'vault', internalType: 'address', type: 'address' },
      { name: 'cadenceSec', internalType: 'uint64', type: 'uint64' },
      { name: 'lastCall', internalType: 'uint64', type: 'uint64' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_safe', internalType: 'address', type: 'address' },
      {
        name: '_config',
        internalType: 'struct HarvesterPlugin.DummyConfig',
        type: 'tuple',
        components: [
          { name: 'vault', internalType: 'address', type: 'address' },
          { name: 'cadenceSec', internalType: 'uint64', type: 'uint64' },
          { name: 'lastCall', internalType: 'uint64', type: 'uint64' },
        ],
      },
    ],
    name: 'setSafeConfig',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'version',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
] as const

/**
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xf249209905Ed226966E956C104baf8C766d47706)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xf249209905Ed226966E956C104baf8C766d47706)
 * -
 */
export const harvesterPluginAddress = {
  10: '0xf249209905Ed226966E956C104baf8C766d47706',
  420: '0xf249209905Ed226966E956C104baf8C766d47706',
  31337: '0xf249209905Ed226966E956C104baf8C766d47706',
} as const

/**
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xf249209905Ed226966E956C104baf8C766d47706)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xf249209905Ed226966E956C104baf8C766d47706)
 * -
 */
export const harvesterPluginConfig = {
  address: harvesterPluginAddress,
  abi: harvesterPluginABI,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// HooksManager
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const hooksManagerABI = [
  {
    type: 'error',
    inputs: [
      { name: 'hooksAddress', internalType: 'address', type: 'address' },
    ],
    name: 'AddressDoesNotImplementHooksInterface',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'safe', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'hooksAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'HooksChanged',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'enabledHooks',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'safe', internalType: 'address', type: 'address' }],
    name: 'getEnabledHooks',
    outputs: [
      { name: 'hooksAddress', internalType: 'address', type: 'address' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'hooks', internalType: 'address', type: 'address' }],
    name: 'setHooks',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'tempHooksAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20ABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20Metadata
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20MetadataABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IGauge
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iGaugeABI = [
  { type: 'error', inputs: [], name: 'NotAlive' },
  { type: 'error', inputs: [], name: 'NotAuthorized' },
  { type: 'error', inputs: [], name: 'NotVoter' },
  { type: 'error', inputs: [], name: 'RewardRateTooHigh' },
  { type: 'error', inputs: [], name: 'ZeroAmount' },
  { type: 'error', inputs: [], name: 'ZeroRewardRate' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'claimed0',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'claimed1',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ClaimFees',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ClaimRewards',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Deposit',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'NotifyReward',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Withdraw',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_amount', internalType: 'uint256', type: 'uint256' },
      { name: '_recipient', internalType: 'address', type: 'address' },
    ],
    name: 'deposit',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_amount', internalType: 'uint256', type: 'uint256' }],
    name: 'deposit',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '_account', internalType: 'address', type: 'address' }],
    name: 'earned',
    outputs: [{ name: '_earned', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'fees0',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'fees1',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'feesVotingReward',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_account', internalType: 'address', type: 'address' }],
    name: 'getReward',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'isPool',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'lastTimeRewardApplicable',
    outputs: [{ name: '_time', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'lastUpdateTime',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'left',
    outputs: [{ name: '_left', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'notifyRewardAmount',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'periodFinish',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'rewardPerToken',
    outputs: [
      { name: '_rewardPerToken', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'rewardPerTokenStored',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'rewardRate',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'rewardRateByEpoch',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'rewardToken',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'rewards',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'stakingToken',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'userRewardPerTokenPaid',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'voter',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_amount', internalType: 'uint256', type: 'uint256' }],
    name: 'withdraw',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IMulticall3
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iMulticall3ABI = [
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'returnData', internalType: 'bytes[]', type: 'bytes[]' },
    ],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call3[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'allowFailure', internalType: 'bool', type: 'bool' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate3',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call3Value[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'allowFailure', internalType: 'bool', type: 'bool' },
          { name: 'value', internalType: 'uint256', type: 'uint256' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate3Value',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'blockAndAggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'blockHash', internalType: 'bytes32', type: 'bytes32' },
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getBasefee',
    outputs: [{ name: 'basefee', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'blockNumber', internalType: 'uint256', type: 'uint256' }],
    name: 'getBlockHash',
    outputs: [{ name: 'blockHash', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getBlockNumber',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getChainId',
    outputs: [{ name: 'chainid', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockCoinbase',
    outputs: [{ name: 'coinbase', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockDifficulty',
    outputs: [{ name: 'difficulty', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockGasLimit',
    outputs: [{ name: 'gaslimit', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockTimestamp',
    outputs: [{ name: 'timestamp', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'addr', internalType: 'address', type: 'address' }],
    name: 'getEthBalance',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getLastBlockHash',
    outputs: [{ name: 'blockHash', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'requireSuccess', internalType: 'bool', type: 'bool' },
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'tryAggregate',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'requireSuccess', internalType: 'bool', type: 'bool' },
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'tryBlockAndAggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'blockHash', internalType: 'bytes32', type: 'bytes32' },
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IPlugin
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iPluginABI = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'safe', internalType: 'address', type: 'address' },
      {
        name: 'config',
        internalType: 'struct IPlugin.DummyConfig',
        type: 'tuple',
        components: [
          { name: 'vault', internalType: 'address', type: 'address' },
          { name: 'cadenceSec', internalType: 'uint64', type: 'uint64' },
          { name: 'lastCall', internalType: 'uint64', type: 'uint64' },
        ],
      },
    ],
    name: 'setSafeConfig',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IProxy
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iProxyABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'masterCopy',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IProxyCreationCallback
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iProxyCreationCallbackABI = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'proxy', internalType: 'contract SafeProxy', type: 'address' },
      { name: '_singleton', internalType: 'address', type: 'address' },
      { name: 'initializer', internalType: 'bytes', type: 'bytes' },
      { name: 'saltNonce', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'proxyCreated',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ISafe
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iSafeABI = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address payable', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'operation', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'execTransactionFromModule',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'operation', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'execTransactionFromModuleReturnData',
    outputs: [
      { name: 'success', internalType: 'bool', type: 'bool' },
      { name: 'returnData', internalType: 'bytes', type: 'bytes' },
    ],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ISafeProtocolFunctionHandler
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iSafeProtocolFunctionHandlerABI = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'safe', internalType: 'contract ISafe', type: 'address' },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'handle',
    outputs: [{ name: 'result', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ISafeProtocolHooks
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iSafeProtocolHooksABI = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'safe', internalType: 'contract ISafe', type: 'address' },
      { name: 'success', internalType: 'bool', type: 'bool' },
      { name: 'preCheckData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'postCheck',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'safe', internalType: 'contract ISafe', type: 'address' },
      {
        name: 'tx',
        internalType: 'struct SafeTransaction',
        type: 'tuple',
        components: [
          {
            name: 'actions',
            internalType: 'struct SafeProtocolAction[]',
            type: 'tuple[]',
            components: [
              { name: 'to', internalType: 'address payable', type: 'address' },
              { name: 'value', internalType: 'uint256', type: 'uint256' },
              { name: 'data', internalType: 'bytes', type: 'bytes' },
            ],
          },
          { name: 'nonce', internalType: 'uint256', type: 'uint256' },
          { name: 'metadataHash', internalType: 'bytes32', type: 'bytes32' },
        ],
      },
      { name: 'executionType', internalType: 'uint256', type: 'uint256' },
      { name: 'executionMeta', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'preCheck',
    outputs: [{ name: 'preCheckData', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'safe', internalType: 'contract ISafe', type: 'address' },
      {
        name: 'rootAccess',
        internalType: 'struct SafeRootAccess',
        type: 'tuple',
        components: [
          {
            name: 'action',
            internalType: 'struct SafeProtocolAction',
            type: 'tuple',
            components: [
              { name: 'to', internalType: 'address payable', type: 'address' },
              { name: 'value', internalType: 'uint256', type: 'uint256' },
              { name: 'data', internalType: 'bytes', type: 'bytes' },
            ],
          },
          { name: 'nonce', internalType: 'uint256', type: 'uint256' },
          { name: 'metadataHash', internalType: 'bytes32', type: 'bytes32' },
        ],
      },
      { name: 'executionType', internalType: 'uint256', type: 'uint256' },
      { name: 'executionMeta', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'preCheckRootAccess',
    outputs: [{ name: 'preCheckData', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ISafeProtocolManager
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iSafeProtocolManagerABI = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'safe', internalType: 'contract ISafe', type: 'address' },
      {
        name: 'rootAccess',
        internalType: 'struct SafeRootAccess',
        type: 'tuple',
        components: [
          {
            name: 'action',
            internalType: 'struct SafeProtocolAction',
            type: 'tuple',
            components: [
              { name: 'to', internalType: 'address payable', type: 'address' },
              { name: 'value', internalType: 'uint256', type: 'uint256' },
              { name: 'data', internalType: 'bytes', type: 'bytes' },
            ],
          },
          { name: 'nonce', internalType: 'uint256', type: 'uint256' },
          { name: 'metadataHash', internalType: 'bytes32', type: 'bytes32' },
        ],
      },
    ],
    name: 'executeRootAccess',
    outputs: [{ name: 'data', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'safe', internalType: 'contract ISafe', type: 'address' },
      {
        name: 'transaction',
        internalType: 'struct SafeTransaction',
        type: 'tuple',
        components: [
          {
            name: 'actions',
            internalType: 'struct SafeProtocolAction[]',
            type: 'tuple[]',
            components: [
              { name: 'to', internalType: 'address payable', type: 'address' },
              { name: 'value', internalType: 'uint256', type: 'uint256' },
              { name: 'data', internalType: 'bytes', type: 'bytes' },
            ],
          },
          { name: 'nonce', internalType: 'uint256', type: 'uint256' },
          { name: 'metadataHash', internalType: 'bytes32', type: 'bytes32' },
        ],
      },
    ],
    name: 'executeTransaction',
    outputs: [{ name: 'data', internalType: 'bytes[]', type: 'bytes[]' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ISafeProtocolPlugin
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iSafeProtocolPluginABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'metadataProvider',
    outputs: [
      { name: 'providerType', internalType: 'uint256', type: 'uint256' },
      { name: 'location', internalType: 'bytes', type: 'bytes' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: 'name', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'requiresRootAccess',
    outputs: [
      { name: 'requiresRootAccess', internalType: 'bool', type: 'bool' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'version',
    outputs: [{ name: 'version', internalType: 'string', type: 'string' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ISafeProtocolRegistry
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iSafeProtocolRegistryABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'integration', internalType: 'address', type: 'address' }],
    name: 'check',
    outputs: [
      { name: 'listedAt', internalType: 'uint64', type: 'uint64' },
      { name: 'flaggedAt', internalType: 'uint64', type: 'uint64' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ISafeProtocolStaticFunctionHandler
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iSafeProtocolStaticFunctionHandlerABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'safe', internalType: 'contract ISafe', type: 'address' },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'handle',
    outputs: [{ name: 'result', internalType: 'bytes', type: 'bytes' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ISignatureValidator
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iSignatureValidatorABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '_data', internalType: 'bytes', type: 'bytes' },
      { name: '_signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'isValidSignature',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// KeeperCompatibleInterface
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const keeperCompatibleInterfaceABI = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'checkData', internalType: 'bytes', type: 'bytes' }],
    name: 'checkUpkeep',
    outputs: [
      { name: 'upkeepNeeded', internalType: 'bool', type: 'bool' },
      { name: 'performData', internalType: 'bytes', type: 'bytes' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'performData', internalType: 'bytes', type: 'bytes' }],
    name: 'performUpkeep',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MetadataProvider
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const metadataProviderABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'metadataHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'retrieveMetadata',
    outputs: [{ name: 'metadata', internalType: 'bytes', type: 'bytes' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MockGauge
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const mockGaugeABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: '_name', internalType: 'string', type: 'string' },
      { name: '_symbol', internalType: 'string', type: 'string' },
      { name: '_lpToken', internalType: 'address', type: 'address' },
      { name: '_rewardTokens', internalType: 'address[]', type: 'address[]' },
    ],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'acccount',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'timestamp',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'RewardClaimed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'subtractedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'decreaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'deposit',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_account', internalType: 'address', type: 'address' }],
    name: 'getReward',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'addedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'increaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'lpToken',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'rewardTokens',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'withdraw',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ModuleManager
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const moduleManagerABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'module',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'DisabledModule',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'module',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'EnabledModule',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'module',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'ExecutionFromModuleFailure',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'module',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'ExecutionFromModuleSuccess',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'prevModule', internalType: 'address', type: 'address' },
      { name: 'module', internalType: 'address', type: 'address' },
    ],
    name: 'disableModule',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'module', internalType: 'address', type: 'address' }],
    name: 'enableModule',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'operation', internalType: 'enum Enum.Operation', type: 'uint8' },
    ],
    name: 'execTransactionFromModule',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'operation', internalType: 'enum Enum.Operation', type: 'uint8' },
    ],
    name: 'execTransactionFromModuleReturnData',
    outputs: [
      { name: 'success', internalType: 'bool', type: 'bool' },
      { name: 'returnData', internalType: 'bytes', type: 'bytes' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'start', internalType: 'address', type: 'address' },
      { name: 'pageSize', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getModulesPaginated',
    outputs: [
      { name: 'array', internalType: 'address[]', type: 'address[]' },
      { name: 'next', internalType: 'address', type: 'address' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'module', internalType: 'address', type: 'address' }],
    name: 'isModuleEnabled',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NativeCurrencyPaymentFallback
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const nativeCurrencyPaymentFallbackABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'SafeReceived',
  },
  { stateMutability: 'payable', type: 'receive' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Ownable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ownableABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Ownable2Step
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ownable2StepABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferStarted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'acceptOwnership',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'pendingOwner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// OwnerManager
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ownerManagerABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'AddedOwner',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'threshold',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ChangedThreshold',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RemovedOwner',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: '_threshold', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'addOwnerWithThreshold',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_threshold', internalType: 'uint256', type: 'uint256' }],
    name: 'changeThreshold',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getOwners',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getThreshold',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'isOwner',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'prevOwner', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: '_threshold', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'removeOwner',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'prevOwner', internalType: 'address', type: 'address' },
      { name: 'oldOwner', internalType: 'address', type: 'address' },
      { name: 'newOwner', internalType: 'address', type: 'address' },
    ],
    name: 'swapOwner',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// RegistryManager
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const registryManagerABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: '_registry', internalType: 'address', type: 'address' },
      { name: 'intitalOwner', internalType: 'address', type: 'address' },
    ],
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'AccountDoesNotImplementValidInterfaceId',
  },
  {
    type: 'error',
    inputs: [
      { name: 'plugin', internalType: 'address', type: 'address' },
      { name: 'listedAt', internalType: 'uint64', type: 'uint64' },
      { name: 'flaggedAt', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'PluginNotPermitted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferStarted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldRegistry',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newRegistry',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RegistryChanged',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'acceptOwnership',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'pendingOwner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'registry',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newRegistry', internalType: 'address', type: 'address' }],
    name: 'setRegistry',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Safe
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const safeABI = [
  { stateMutability: 'nonpayable', type: 'constructor', inputs: [] },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'AddedOwner',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'approvedHash',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'ApproveHash',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'handler',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'ChangedFallbackHandler',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'guard',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'ChangedGuard',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'threshold',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ChangedThreshold',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'module',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'DisabledModule',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'module',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'EnabledModule',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'txHash',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'payment',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ExecutionFailure',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'module',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'ExecutionFromModuleFailure',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'module',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'ExecutionFromModuleSuccess',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'txHash',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'payment',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ExecutionSuccess',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RemovedOwner',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'SafeReceived',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'initiator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'owners',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
      {
        name: 'threshold',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'initializer',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'fallbackHandler',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'SafeSetup',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'msgHash',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'SignMsg',
  },
  { stateMutability: 'nonpayable', type: 'fallback' },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'VERSION',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: '_threshold', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'addOwnerWithThreshold',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'hashToApprove', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'approveHash',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'approvedHashes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_threshold', internalType: 'uint256', type: 'uint256' }],
    name: 'changeThreshold',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'dataHash', internalType: 'bytes32', type: 'bytes32' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'signatures', internalType: 'bytes', type: 'bytes' },
      { name: 'requiredSignatures', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'checkNSignatures',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'dataHash', internalType: 'bytes32', type: 'bytes32' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'signatures', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'checkSignatures',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'prevModule', internalType: 'address', type: 'address' },
      { name: 'module', internalType: 'address', type: 'address' },
    ],
    name: 'disableModule',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'domainSeparator',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'module', internalType: 'address', type: 'address' }],
    name: 'enableModule',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'operation', internalType: 'enum Enum.Operation', type: 'uint8' },
      { name: 'safeTxGas', internalType: 'uint256', type: 'uint256' },
      { name: 'baseGas', internalType: 'uint256', type: 'uint256' },
      { name: 'gasPrice', internalType: 'uint256', type: 'uint256' },
      { name: 'gasToken', internalType: 'address', type: 'address' },
      { name: 'refundReceiver', internalType: 'address', type: 'address' },
      { name: '_nonce', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'encodeTransactionData',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'operation', internalType: 'enum Enum.Operation', type: 'uint8' },
      { name: 'safeTxGas', internalType: 'uint256', type: 'uint256' },
      { name: 'baseGas', internalType: 'uint256', type: 'uint256' },
      { name: 'gasPrice', internalType: 'uint256', type: 'uint256' },
      { name: 'gasToken', internalType: 'address', type: 'address' },
      {
        name: 'refundReceiver',
        internalType: 'address payable',
        type: 'address',
      },
      { name: 'signatures', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'execTransaction',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'operation', internalType: 'enum Enum.Operation', type: 'uint8' },
    ],
    name: 'execTransactionFromModule',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'operation', internalType: 'enum Enum.Operation', type: 'uint8' },
    ],
    name: 'execTransactionFromModuleReturnData',
    outputs: [
      { name: 'success', internalType: 'bool', type: 'bool' },
      { name: 'returnData', internalType: 'bytes', type: 'bytes' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getChainId',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'start', internalType: 'address', type: 'address' },
      { name: 'pageSize', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getModulesPaginated',
    outputs: [
      { name: 'array', internalType: 'address[]', type: 'address[]' },
      { name: 'next', internalType: 'address', type: 'address' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getOwners',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'offset', internalType: 'uint256', type: 'uint256' },
      { name: 'length', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getStorageAt',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getThreshold',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'operation', internalType: 'enum Enum.Operation', type: 'uint8' },
      { name: 'safeTxGas', internalType: 'uint256', type: 'uint256' },
      { name: 'baseGas', internalType: 'uint256', type: 'uint256' },
      { name: 'gasPrice', internalType: 'uint256', type: 'uint256' },
      { name: 'gasToken', internalType: 'address', type: 'address' },
      { name: 'refundReceiver', internalType: 'address', type: 'address' },
      { name: '_nonce', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getTransactionHash',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'module', internalType: 'address', type: 'address' }],
    name: 'isModuleEnabled',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'isOwner',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'nonce',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'prevOwner', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: '_threshold', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'removeOwner',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'handler', internalType: 'address', type: 'address' }],
    name: 'setFallbackHandler',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'guard', internalType: 'address', type: 'address' }],
    name: 'setGuard',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_owners', internalType: 'address[]', type: 'address[]' },
      { name: '_threshold', internalType: 'uint256', type: 'uint256' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'fallbackHandler', internalType: 'address', type: 'address' },
      { name: 'paymentToken', internalType: 'address', type: 'address' },
      { name: 'payment', internalType: 'uint256', type: 'uint256' },
      {
        name: 'paymentReceiver',
        internalType: 'address payable',
        type: 'address',
      },
    ],
    name: 'setup',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    name: 'signedMessages',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'targetContract', internalType: 'address', type: 'address' },
      { name: 'calldataPayload', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'simulateAndRevert',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'prevOwner', internalType: 'address', type: 'address' },
      { name: 'oldOwner', internalType: 'address', type: 'address' },
      { name: 'newOwner', internalType: 'address', type: 'address' },
    ],
    name: 'swapOwner',
    outputs: [],
  },
  { stateMutability: 'payable', type: 'receive' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SafeProtocolManager
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const safeProtocolManagerABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: 'initialOwner', internalType: 'address', type: 'address' },
      { name: '_registry', internalType: 'address', type: 'address' },
    ],
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'AccountDoesNotImplementValidInterfaceId',
  },
  {
    type: 'error',
    inputs: [
      { name: 'safe', internalType: 'address', type: 'address' },
      { name: 'metadataHash', internalType: 'bytes32', type: 'bytes32' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ActionExecutionFailed',
  },
  {
    type: 'error',
    inputs: [
      { name: 'hooksAddress', internalType: 'address', type: 'address' },
    ],
    name: 'AddressDoesNotImplementHooksInterface',
  },
  {
    type: 'error',
    inputs: [{ name: 'plugin', internalType: 'address', type: 'address' }],
    name: 'InvalidPluginAddress',
  },
  {
    type: 'error',
    inputs: [{ name: 'plugin', internalType: 'address', type: 'address' }],
    name: 'InvalidPrevPluginAddress',
  },
  {
    type: 'error',
    inputs: [
      { name: 'safe', internalType: 'address', type: 'address' },
      { name: 'metadataHash', internalType: 'bytes32', type: 'bytes32' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'InvalidToFieldInSafeProtocolAction',
  },
  {
    type: 'error',
    inputs: [
      { name: 'plugin', internalType: 'address', type: 'address' },
      { name: 'requiresRootAccess', internalType: 'bool', type: 'bool' },
      { name: 'providedValue', internalType: 'bool', type: 'bool' },
    ],
    name: 'PluginAccessMismatch',
  },
  {
    type: 'error',
    inputs: [
      { name: 'safe', internalType: 'address', type: 'address' },
      { name: 'plugin', internalType: 'address', type: 'address' },
    ],
    name: 'PluginAlreadyEnabled',
  },
  {
    type: 'error',
    inputs: [{ name: 'plugin', internalType: 'address', type: 'address' }],
    name: 'PluginEnabledOnlyForRootAccess',
  },
  {
    type: 'error',
    inputs: [{ name: 'plugin', internalType: 'address', type: 'address' }],
    name: 'PluginNotEnabled',
  },
  {
    type: 'error',
    inputs: [
      { name: 'plugin', internalType: 'address', type: 'address' },
      { name: 'listedAt', internalType: 'uint64', type: 'uint64' },
      { name: 'flaggedAt', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'PluginNotPermitted',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'PluginRequiresRootAccess',
  },
  {
    type: 'error',
    inputs: [
      { name: 'safe', internalType: 'address', type: 'address' },
      { name: 'metadataHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'RootAccessActionExecutionFailed',
  },
  { type: 'error', inputs: [], name: 'ZeroPageSizeNotAllowed' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'safe', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'metadataHash',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'nonce',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ActionsExecuted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'safe', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'hooksAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'HooksChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferStarted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'safe', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'plugin',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'PluginDisabled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'safe', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'plugin',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'allowRootAccess',
        internalType: 'bool',
        type: 'bool',
        indexed: false,
      },
    ],
    name: 'PluginEnabled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldRegistry',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newRegistry',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RegistryChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'safe', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'metadataHash',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
    ],
    name: 'RootAccessActionExecuted',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'acceptOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'bytes32', type: 'bytes32' },
      { name: 'success', internalType: 'bool', type: 'bool' },
    ],
    name: 'checkAfterExecution',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'operation', internalType: 'enum Enum.Operation', type: 'uint8' },
      { name: 'module', internalType: 'address', type: 'address' },
    ],
    name: 'checkModuleTransaction',
    outputs: [
      { name: 'moduleTxHash', internalType: 'bytes32', type: 'bytes32' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'operation', internalType: 'enum Enum.Operation', type: 'uint8' },
      { name: 'safeTxGas', internalType: 'uint256', type: 'uint256' },
      { name: 'baseGas', internalType: 'uint256', type: 'uint256' },
      { name: 'gasPrice', internalType: 'uint256', type: 'uint256' },
      { name: 'gasToken', internalType: 'address', type: 'address' },
      {
        name: 'refundReceiver',
        internalType: 'address payable',
        type: 'address',
      },
      { name: 'signatures', internalType: 'bytes', type: 'bytes' },
      { name: 'msgSender', internalType: 'address', type: 'address' },
    ],
    name: 'checkTransaction',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'prevPlugin', internalType: 'address', type: 'address' },
      { name: 'plugin', internalType: 'address', type: 'address' },
    ],
    name: 'disablePlugin',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'plugin', internalType: 'address', type: 'address' },
      { name: 'allowRootAccess', internalType: 'bool', type: 'bool' },
    ],
    name: 'enablePlugin',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'enabledHooks',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'enabledPlugins',
    outputs: [
      { name: 'rootAddressGranted', internalType: 'bool', type: 'bool' },
      { name: 'nextPluginPointer', internalType: 'address', type: 'address' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'safe', internalType: 'contract ISafe', type: 'address' },
      {
        name: 'rootAccess',
        internalType: 'struct SafeRootAccess',
        type: 'tuple',
        components: [
          {
            name: 'action',
            internalType: 'struct SafeProtocolAction',
            type: 'tuple',
            components: [
              { name: 'to', internalType: 'address payable', type: 'address' },
              { name: 'value', internalType: 'uint256', type: 'uint256' },
              { name: 'data', internalType: 'bytes', type: 'bytes' },
            ],
          },
          { name: 'nonce', internalType: 'uint256', type: 'uint256' },
          { name: 'metadataHash', internalType: 'bytes32', type: 'bytes32' },
        ],
      },
    ],
    name: 'executeRootAccess',
    outputs: [{ name: 'data', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'safe', internalType: 'contract ISafe', type: 'address' },
      {
        name: 'transaction',
        internalType: 'struct SafeTransaction',
        type: 'tuple',
        components: [
          {
            name: 'actions',
            internalType: 'struct SafeProtocolAction[]',
            type: 'tuple[]',
            components: [
              { name: 'to', internalType: 'address payable', type: 'address' },
              { name: 'value', internalType: 'uint256', type: 'uint256' },
              { name: 'data', internalType: 'bytes', type: 'bytes' },
            ],
          },
          { name: 'nonce', internalType: 'uint256', type: 'uint256' },
          { name: 'metadataHash', internalType: 'bytes32', type: 'bytes32' },
        ],
      },
    ],
    name: 'executeTransaction',
    outputs: [{ name: 'data', internalType: 'bytes[]', type: 'bytes[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'safe', internalType: 'address', type: 'address' }],
    name: 'getEnabledHooks',
    outputs: [
      { name: 'hooksAddress', internalType: 'address', type: 'address' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'safe', internalType: 'address', type: 'address' },
      { name: 'plugin', internalType: 'address', type: 'address' },
    ],
    name: 'getPluginInfo',
    outputs: [
      {
        name: 'enabled',
        internalType: 'struct SafeProtocolManager.PluginAccessInfo',
        type: 'tuple',
        components: [
          { name: 'rootAddressGranted', internalType: 'bool', type: 'bool' },
          {
            name: 'nextPluginPointer',
            internalType: 'address',
            type: 'address',
          },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'start', internalType: 'address', type: 'address' },
      { name: 'pageSize', internalType: 'uint256', type: 'uint256' },
      { name: 'safe', internalType: 'address', type: 'address' },
    ],
    name: 'getPluginsPaginated',
    outputs: [
      { name: 'array', internalType: 'address[]', type: 'address[]' },
      { name: 'next', internalType: 'address', type: 'address' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'safe', internalType: 'address', type: 'address' },
      { name: 'plugin', internalType: 'address', type: 'address' },
    ],
    name: 'isPluginEnabled',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'pendingOwner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'registry',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'hooks', internalType: 'address', type: 'address' }],
    name: 'setHooks',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newRegistry', internalType: 'address', type: 'address' }],
    name: 'setRegistry',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'tempHooksAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SafeProtocolRegistry
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const safeProtocolRegistryABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: 'initialOwner', internalType: 'address', type: 'address' },
    ],
  },
  {
    type: 'error',
    inputs: [{ name: 'integration', internalType: 'address', type: 'address' }],
    name: 'CannotAddIntegration',
  },
  {
    type: 'error',
    inputs: [{ name: 'integration', internalType: 'address', type: 'address' }],
    name: 'CannotFlagIntegration',
  },
  {
    type: 'error',
    inputs: [
      { name: 'integration', internalType: 'address', type: 'address' },
      { name: 'expectedInterfaceId', internalType: 'bytes4', type: 'bytes4' },
    ],
    name: 'IntegrationDoesNotSupportExpectedInterfaceId',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'integration',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'IntegrationAdded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'integration',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'IntegrationFlagged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferStarted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'acceptOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'integration', internalType: 'address', type: 'address' },
      {
        name: 'integrationType',
        internalType: 'enum Enum.IntegrationType',
        type: 'uint8',
      },
    ],
    name: 'addIntegration',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'integration', internalType: 'address', type: 'address' }],
    name: 'check',
    outputs: [
      { name: 'listedAt', internalType: 'uint64', type: 'uint64' },
      { name: 'flaggedAt', internalType: 'uint64', type: 'uint64' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'integration', internalType: 'address', type: 'address' }],
    name: 'flagIntegration',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'listedIntegrations',
    outputs: [
      { name: 'listedAt', internalType: 'uint64', type: 'uint64' },
      { name: 'flaggedAt', internalType: 'uint64', type: 'uint64' },
      {
        name: 'integrationType',
        internalType: 'enum Enum.IntegrationType',
        type: 'uint8',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'pendingOwner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SafeProxy
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const safeProxyABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [{ name: '_singleton', internalType: 'address', type: 'address' }],
  },
  { stateMutability: 'payable', type: 'fallback' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SafeProxyFactory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const safeProxyFactoryABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'proxy',
        internalType: 'contract SafeProxy',
        type: 'address',
        indexed: true,
      },
      {
        name: 'singleton',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'ProxyCreation',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_singleton', internalType: 'address', type: 'address' },
      { name: 'initializer', internalType: 'bytes', type: 'bytes' },
      { name: 'saltNonce', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'createChainSpecificProxyWithNonce',
    outputs: [
      { name: 'proxy', internalType: 'contract SafeProxy', type: 'address' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_singleton', internalType: 'address', type: 'address' },
      { name: 'initializer', internalType: 'bytes', type: 'bytes' },
      { name: 'saltNonce', internalType: 'uint256', type: 'uint256' },
      {
        name: 'callback',
        internalType: 'contract IProxyCreationCallback',
        type: 'address',
      },
    ],
    name: 'createProxyWithCallback',
    outputs: [
      { name: 'proxy', internalType: 'contract SafeProxy', type: 'address' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_singleton', internalType: 'address', type: 'address' },
      { name: 'initializer', internalType: 'bytes', type: 'bytes' },
      { name: 'saltNonce', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'createProxyWithNonce',
    outputs: [
      { name: 'proxy', internalType: 'contract SafeProxy', type: 'address' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getChainId',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [],
    name: 'proxyCreationCode',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SmartGardenManager
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * -
 */
export const smartGardenManagerABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: '_initialOwner', internalType: 'address', type: 'address' },
      { name: '_registry', internalType: 'address', type: 'address' },
    ],
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'AccountDoesNotImplementValidInterfaceId',
  },
  {
    type: 'error',
    inputs: [
      { name: 'safe', internalType: 'address', type: 'address' },
      { name: 'metadataHash', internalType: 'bytes32', type: 'bytes32' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ActionExecutionFailed',
  },
  {
    type: 'error',
    inputs: [
      { name: 'hooksAddress', internalType: 'address', type: 'address' },
    ],
    name: 'AddressDoesNotImplementHooksInterface',
  },
  {
    type: 'error',
    inputs: [{ name: 'plugin', internalType: 'address', type: 'address' }],
    name: 'InvalidPluginAddress',
  },
  {
    type: 'error',
    inputs: [{ name: 'plugin', internalType: 'address', type: 'address' }],
    name: 'InvalidPrevPluginAddress',
  },
  {
    type: 'error',
    inputs: [
      { name: 'safe', internalType: 'address', type: 'address' },
      { name: 'metadataHash', internalType: 'bytes32', type: 'bytes32' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'InvalidToFieldInSafeProtocolAction',
  },
  {
    type: 'error',
    inputs: [
      { name: 'plugin', internalType: 'address', type: 'address' },
      { name: 'requiresRootAccess', internalType: 'bool', type: 'bool' },
      { name: 'providedValue', internalType: 'bool', type: 'bool' },
    ],
    name: 'PluginAccessMismatch',
  },
  {
    type: 'error',
    inputs: [
      { name: 'safe', internalType: 'address', type: 'address' },
      { name: 'plugin', internalType: 'address', type: 'address' },
    ],
    name: 'PluginAlreadyEnabled',
  },
  {
    type: 'error',
    inputs: [{ name: 'plugin', internalType: 'address', type: 'address' }],
    name: 'PluginEnabledOnlyForRootAccess',
  },
  {
    type: 'error',
    inputs: [{ name: 'plugin', internalType: 'address', type: 'address' }],
    name: 'PluginNotEnabled',
  },
  {
    type: 'error',
    inputs: [
      { name: 'plugin', internalType: 'address', type: 'address' },
      { name: 'listedAt', internalType: 'uint64', type: 'uint64' },
      { name: 'flaggedAt', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'PluginNotPermitted',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'PluginRequiresRootAccess',
  },
  {
    type: 'error',
    inputs: [
      { name: 'safe', internalType: 'address', type: 'address' },
      { name: 'metadataHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'RootAccessActionExecutionFailed',
  },
  { type: 'error', inputs: [], name: 'ZeroPageSizeNotAllowed' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'safe', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'metadataHash',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'nonce',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ActionsExecuted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'safe', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'hooksAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'HooksChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferStarted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'safe', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'plugin',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'PluginDisabled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'safe', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'plugin',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'allowRootAccess',
        internalType: 'bool',
        type: 'bool',
        indexed: false,
      },
    ],
    name: 'PluginEnabled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldRegistry',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newRegistry',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RegistryChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'safe', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'metadataHash',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
    ],
    name: 'RootAccessActionExecuted',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'acceptOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'bytes32', type: 'bytes32' },
      { name: 'success', internalType: 'bool', type: 'bool' },
    ],
    name: 'checkAfterExecution',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'operation', internalType: 'enum Enum.Operation', type: 'uint8' },
      { name: 'module', internalType: 'address', type: 'address' },
    ],
    name: 'checkModuleTransaction',
    outputs: [
      { name: 'moduleTxHash', internalType: 'bytes32', type: 'bytes32' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'operation', internalType: 'enum Enum.Operation', type: 'uint8' },
      { name: 'safeTxGas', internalType: 'uint256', type: 'uint256' },
      { name: 'baseGas', internalType: 'uint256', type: 'uint256' },
      { name: 'gasPrice', internalType: 'uint256', type: 'uint256' },
      { name: 'gasToken', internalType: 'address', type: 'address' },
      {
        name: 'refundReceiver',
        internalType: 'address payable',
        type: 'address',
      },
      { name: 'signatures', internalType: 'bytes', type: 'bytes' },
      { name: 'msgSender', internalType: 'address', type: 'address' },
    ],
    name: 'checkTransaction',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'prevPlugin', internalType: 'address', type: 'address' },
      { name: 'plugin', internalType: 'address', type: 'address' },
    ],
    name: 'disablePlugin',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'plugin', internalType: 'address', type: 'address' },
      { name: 'allowRootAccess', internalType: 'bool', type: 'bool' },
    ],
    name: 'enablePlugin',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'plugin', internalType: 'address', type: 'address' },
      { name: 'allowRootAccess', internalType: 'bool', type: 'bool' },
      {
        name: 'config',
        internalType: 'struct IPlugin.DummyConfig',
        type: 'tuple',
        components: [
          { name: 'vault', internalType: 'address', type: 'address' },
          { name: 'cadenceSec', internalType: 'uint64', type: 'uint64' },
          { name: 'lastCall', internalType: 'uint64', type: 'uint64' },
        ],
      },
    ],
    name: 'enablePluginWithConfig',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'enabledHooks',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'enabledPlugins',
    outputs: [
      { name: 'rootAddressGranted', internalType: 'bool', type: 'bool' },
      { name: 'nextPluginPointer', internalType: 'address', type: 'address' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'safe', internalType: 'contract ISafe', type: 'address' },
      {
        name: 'rootAccess',
        internalType: 'struct SafeRootAccess',
        type: 'tuple',
        components: [
          {
            name: 'action',
            internalType: 'struct SafeProtocolAction',
            type: 'tuple',
            components: [
              { name: 'to', internalType: 'address payable', type: 'address' },
              { name: 'value', internalType: 'uint256', type: 'uint256' },
              { name: 'data', internalType: 'bytes', type: 'bytes' },
            ],
          },
          { name: 'nonce', internalType: 'uint256', type: 'uint256' },
          { name: 'metadataHash', internalType: 'bytes32', type: 'bytes32' },
        ],
      },
    ],
    name: 'executeRootAccess',
    outputs: [{ name: 'data', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'safe', internalType: 'contract ISafe', type: 'address' },
      {
        name: 'transaction',
        internalType: 'struct SafeTransaction',
        type: 'tuple',
        components: [
          {
            name: 'actions',
            internalType: 'struct SafeProtocolAction[]',
            type: 'tuple[]',
            components: [
              { name: 'to', internalType: 'address payable', type: 'address' },
              { name: 'value', internalType: 'uint256', type: 'uint256' },
              { name: 'data', internalType: 'bytes', type: 'bytes' },
            ],
          },
          { name: 'nonce', internalType: 'uint256', type: 'uint256' },
          { name: 'metadataHash', internalType: 'bytes32', type: 'bytes32' },
        ],
      },
    ],
    name: 'executeTransaction',
    outputs: [{ name: 'data', internalType: 'bytes[]', type: 'bytes[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'safe', internalType: 'address', type: 'address' }],
    name: 'getEnabledHooks',
    outputs: [
      { name: 'hooksAddress', internalType: 'address', type: 'address' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'safe', internalType: 'address', type: 'address' },
      { name: 'plugin', internalType: 'address', type: 'address' },
    ],
    name: 'getPluginInfo',
    outputs: [
      {
        name: 'enabled',
        internalType: 'struct SafeProtocolManager.PluginAccessInfo',
        type: 'tuple',
        components: [
          { name: 'rootAddressGranted', internalType: 'bool', type: 'bool' },
          {
            name: 'nextPluginPointer',
            internalType: 'address',
            type: 'address',
          },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'start', internalType: 'address', type: 'address' },
      { name: 'pageSize', internalType: 'uint256', type: 'uint256' },
      { name: 'safe', internalType: 'address', type: 'address' },
    ],
    name: 'getPluginsPaginated',
    outputs: [
      { name: 'array', internalType: 'address[]', type: 'address[]' },
      { name: 'next', internalType: 'address', type: 'address' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'safe', internalType: 'address', type: 'address' },
      { name: 'plugin', internalType: 'address', type: 'address' },
    ],
    name: 'isPluginEnabled',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'pendingOwner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'registry',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'hooks', internalType: 'address', type: 'address' }],
    name: 'setHooks',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newRegistry', internalType: 'address', type: 'address' }],
    name: 'setRegistry',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'tempHooksAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
] as const

/**
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * -
 */
export const smartGardenManagerAddress = {
  10: '0xfD20C63554A9916816dC5e5Df596A0333185F263',
  420: '0xfD20C63554A9916816dC5e5Df596A0333185F263',
  31337: '0xfD20C63554A9916816dC5e5Df596A0333185F263',
} as const

/**
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * -
 */
export const smartGardenManagerConfig = {
  address: smartGardenManagerAddress,
  abi: smartGardenManagerABI,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SmartGardenTest
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const smartGardenTestABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'int256[]',
        type: 'int256[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_named_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'int256[]',
        type: 'int256[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_named_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_named_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
      {
        name: 'decimals',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'log_named_decimal_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
      {
        name: 'decimals',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'log_named_decimal_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_named_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_named_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_named_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'logs',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'IS_TEST',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'excludeArtifacts',
    outputs: [
      {
        name: 'excludedArtifacts_',
        internalType: 'string[]',
        type: 'string[]',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'excludeContracts',
    outputs: [
      {
        name: 'excludedContracts_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'excludeSenders',
    outputs: [
      {
        name: 'excludedSenders_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'failed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'setUp',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'targetArtifactSelectors',
    outputs: [
      {
        name: 'targetedArtifactSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'targetArtifacts',
    outputs: [
      {
        name: 'targetedArtifacts_',
        internalType: 'string[]',
        type: 'string[]',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'targetContracts',
    outputs: [
      {
        name: 'targetedContracts_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'targetSelectors',
    outputs: [
      {
        name: 'targetedSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'targetSenders',
    outputs: [
      {
        name: 'targetedSenders_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'test_basic_safe_flow',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// StdAssertions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const stdAssertionsABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'int256[]',
        type: 'int256[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_named_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'int256[]',
        type: 'int256[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_named_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_named_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
      {
        name: 'decimals',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'log_named_decimal_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
      {
        name: 'decimals',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'log_named_decimal_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_named_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_named_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_named_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'logs',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'IS_TEST',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'failed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// StdInvariant
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const stdInvariantABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'excludeArtifacts',
    outputs: [
      {
        name: 'excludedArtifacts_',
        internalType: 'string[]',
        type: 'string[]',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'excludeContracts',
    outputs: [
      {
        name: 'excludedContracts_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'excludeSenders',
    outputs: [
      {
        name: 'excludedSenders_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'targetArtifactSelectors',
    outputs: [
      {
        name: 'targetedArtifactSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'targetArtifacts',
    outputs: [
      {
        name: 'targetedArtifacts_',
        internalType: 'string[]',
        type: 'string[]',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'targetContracts',
    outputs: [
      {
        name: 'targetedContracts_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'targetSelectors',
    outputs: [
      {
        name: 'targetedSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'targetSenders',
    outputs: [
      {
        name: 'targetedSenders_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// StorageAccessible
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const storageAccessibleABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'offset', internalType: 'uint256', type: 'uint256' },
      { name: 'length', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getStorageAt',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'targetContract', internalType: 'address', type: 'address' },
      { name: 'calldataPayload', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'simulateAndRevert',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Test
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const testABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'int256[]',
        type: 'int256[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_named_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'int256[]',
        type: 'int256[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_named_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_named_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
      {
        name: 'decimals',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'log_named_decimal_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
      {
        name: 'decimals',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'log_named_decimal_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_named_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_named_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_named_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'logs',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'IS_TEST',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'excludeArtifacts',
    outputs: [
      {
        name: 'excludedArtifacts_',
        internalType: 'string[]',
        type: 'string[]',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'excludeContracts',
    outputs: [
      {
        name: 'excludedContracts_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'excludeSenders',
    outputs: [
      {
        name: 'excludedSenders_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'failed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'targetArtifactSelectors',
    outputs: [
      {
        name: 'targetedArtifactSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'targetArtifacts',
    outputs: [
      {
        name: 'targetedArtifacts_',
        internalType: 'string[]',
        type: 'string[]',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'targetContracts',
    outputs: [
      {
        name: 'targetedContracts_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'targetSelectors',
    outputs: [
      {
        name: 'targetedSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'targetSenders',
    outputs: [
      {
        name: 'targetedSenders_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Vm
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const vmABI = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'accesses',
    outputs: [
      { name: 'readSlots', internalType: 'bytes32[]', type: 'bytes32[]' },
      { name: 'writeSlots', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'activeFork',
    outputs: [{ name: 'forkId', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    name: 'addr',
    outputs: [{ name: 'keyAddr', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'allowCheatcodes',
    outputs: [],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [{ name: 'condition', internalType: 'bool', type: 'bool' }],
    name: 'assume',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'char', internalType: 'string', type: 'string' }],
    name: 'breakpoint',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'char', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'bool', type: 'bool' },
    ],
    name: 'breakpoint',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'broadcast',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'signer', internalType: 'address', type: 'address' }],
    name: 'broadcast',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    name: 'broadcast',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newChainId', internalType: 'uint256', type: 'uint256' }],
    name: 'chainId',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'clearMockedCalls',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'closeFile',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newCoinbase', internalType: 'address', type: 'address' }],
    name: 'coinbase',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'recursive', internalType: 'bool', type: 'bool' },
    ],
    name: 'createDir',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'urlOrAlias', internalType: 'string', type: 'string' }],
    name: 'createFork',
    outputs: [{ name: 'forkId', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'urlOrAlias', internalType: 'string', type: 'string' },
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'createFork',
    outputs: [{ name: 'forkId', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'urlOrAlias', internalType: 'string', type: 'string' },
      { name: 'txHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'createFork',
    outputs: [{ name: 'forkId', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'urlOrAlias', internalType: 'string', type: 'string' },
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'createSelectFork',
    outputs: [{ name: 'forkId', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'urlOrAlias', internalType: 'string', type: 'string' },
      { name: 'txHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'createSelectFork',
    outputs: [{ name: 'forkId', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'urlOrAlias', internalType: 'string', type: 'string' }],
    name: 'createSelectFork',
    outputs: [{ name: 'forkId', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'newBalance', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'deal',
    outputs: [],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'mnemonic', internalType: 'string', type: 'string' },
      { name: 'index', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'deriveKey',
    outputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'mnemonic', internalType: 'string', type: 'string' },
      { name: 'derivationPath', internalType: 'string', type: 'string' },
      { name: 'index', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'deriveKey',
    outputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'newDifficulty', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'difficulty',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envAddress',
    outputs: [{ name: 'value', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envAddress',
    outputs: [{ name: 'value', internalType: 'address[]', type: 'address[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envBool',
    outputs: [{ name: 'value', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envBool',
    outputs: [{ name: 'value', internalType: 'bool[]', type: 'bool[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envBytes',
    outputs: [{ name: 'value', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envBytes',
    outputs: [{ name: 'value', internalType: 'bytes[]', type: 'bytes[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envBytes32',
    outputs: [{ name: 'value', internalType: 'bytes32[]', type: 'bytes32[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envBytes32',
    outputs: [{ name: 'value', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envInt',
    outputs: [{ name: 'value', internalType: 'int256[]', type: 'int256[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envInt',
    outputs: [{ name: 'value', internalType: 'int256', type: 'int256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'bytes32[]', type: 'bytes32[]' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'int256[]', type: 'int256[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'int256[]', type: 'int256[]' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'bool', type: 'bool' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'address', type: 'address' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'bytes[]', type: 'bytes[]' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'uint256[]', type: 'uint256[]' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'string[]', type: 'string[]' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'int256', type: 'int256' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'int256', type: 'int256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'address[]', type: 'address[]' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'string', type: 'string' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'bool[]', type: 'bool[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'bool[]', type: 'bool[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envString',
    outputs: [{ name: 'value', internalType: 'string[]', type: 'string[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envString',
    outputs: [{ name: 'value', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envUint',
    outputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envUint',
    outputs: [{ name: 'value', internalType: 'uint256[]', type: 'uint256[]' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'newRuntimeBytecode', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'etch',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'callee', internalType: 'address', type: 'address' },
      { name: 'msgValue', internalType: 'uint256', type: 'uint256' },
      { name: 'gas', internalType: 'uint64', type: 'uint64' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'expectCall',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'callee', internalType: 'address', type: 'address' },
      { name: 'msgValue', internalType: 'uint256', type: 'uint256' },
      { name: 'gas', internalType: 'uint64', type: 'uint64' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'count', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'expectCall',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'callee', internalType: 'address', type: 'address' },
      { name: 'msgValue', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'count', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'expectCall',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'callee', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'expectCall',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'callee', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'count', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'expectCall',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'callee', internalType: 'address', type: 'address' },
      { name: 'msgValue', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'expectCall',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'callee', internalType: 'address', type: 'address' },
      { name: 'msgValue', internalType: 'uint256', type: 'uint256' },
      { name: 'minGas', internalType: 'uint64', type: 'uint64' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'expectCallMinGas',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'callee', internalType: 'address', type: 'address' },
      { name: 'msgValue', internalType: 'uint256', type: 'uint256' },
      { name: 'minGas', internalType: 'uint64', type: 'uint64' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'count', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'expectCallMinGas',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'expectEmit',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'checkTopic1', internalType: 'bool', type: 'bool' },
      { name: 'checkTopic2', internalType: 'bool', type: 'bool' },
      { name: 'checkTopic3', internalType: 'bool', type: 'bool' },
      { name: 'checkData', internalType: 'bool', type: 'bool' },
    ],
    name: 'expectEmit',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'checkTopic1', internalType: 'bool', type: 'bool' },
      { name: 'checkTopic2', internalType: 'bool', type: 'bool' },
      { name: 'checkTopic3', internalType: 'bool', type: 'bool' },
      { name: 'checkData', internalType: 'bool', type: 'bool' },
      { name: 'emitter', internalType: 'address', type: 'address' },
    ],
    name: 'expectEmit',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'emitter', internalType: 'address', type: 'address' }],
    name: 'expectEmit',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'revertData', internalType: 'bytes4', type: 'bytes4' }],
    name: 'expectRevert',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'revertData', internalType: 'bytes', type: 'bytes' }],
    name: 'expectRevert',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'expectRevert',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'min', internalType: 'uint64', type: 'uint64' },
      { name: 'max', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'expectSafeMemory',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'min', internalType: 'uint64', type: 'uint64' },
      { name: 'max', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'expectSafeMemoryCall',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newBasefee', internalType: 'uint256', type: 'uint256' }],
    name: 'fee',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'commandInput', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'ffi',
    outputs: [{ name: 'result', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'fsMetadata',
    outputs: [
      {
        name: 'metadata',
        internalType: 'struct VmSafe.FsMetadata',
        type: 'tuple',
        components: [
          { name: 'isDir', internalType: 'bool', type: 'bool' },
          { name: 'isSymlink', internalType: 'bool', type: 'bool' },
          { name: 'length', internalType: 'uint256', type: 'uint256' },
          { name: 'readOnly', internalType: 'bool', type: 'bool' },
          { name: 'modified', internalType: 'uint256', type: 'uint256' },
          { name: 'accessed', internalType: 'uint256', type: 'uint256' },
          { name: 'created', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'artifactPath', internalType: 'string', type: 'string' }],
    name: 'getCode',
    outputs: [
      { name: 'creationBytecode', internalType: 'bytes', type: 'bytes' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'artifactPath', internalType: 'string', type: 'string' }],
    name: 'getDeployedCode',
    outputs: [
      { name: 'runtimeBytecode', internalType: 'bytes', type: 'bytes' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getLabel',
    outputs: [{ name: 'currentLabel', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getNonce',
    outputs: [{ name: 'nonce', internalType: 'uint64', type: 'uint64' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'getRecordedLogs',
    outputs: [
      {
        name: 'logs',
        internalType: 'struct VmSafe.Log[]',
        type: 'tuple[]',
        components: [
          { name: 'topics', internalType: 'bytes32[]', type: 'bytes32[]' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
          { name: 'emitter', internalType: 'address', type: 'address' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'isPersistent',
    outputs: [{ name: 'persistent', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'newLabel', internalType: 'string', type: 'string' },
    ],
    name: 'label',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'slot', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'load',
    outputs: [{ name: 'data', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'accounts', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'makePersistent',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'account0', internalType: 'address', type: 'address' },
      { name: 'account1', internalType: 'address', type: 'address' },
    ],
    name: 'makePersistent',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'makePersistent',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'account0', internalType: 'address', type: 'address' },
      { name: 'account1', internalType: 'address', type: 'address' },
      { name: 'account2', internalType: 'address', type: 'address' },
    ],
    name: 'makePersistent',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'callee', internalType: 'address', type: 'address' },
      { name: 'msgValue', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'returnData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'mockCall',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'callee', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'returnData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'mockCall',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'callee', internalType: 'address', type: 'address' },
      { name: 'msgValue', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'revertData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'mockCallRevert',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'callee', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'revertData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'mockCallRevert',
    outputs: [],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    name: 'parseAddress',
    outputs: [
      { name: 'parsedValue', internalType: 'address', type: 'address' },
    ],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    name: 'parseBool',
    outputs: [{ name: 'parsedValue', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    name: 'parseBytes',
    outputs: [{ name: 'parsedValue', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    name: 'parseBytes32',
    outputs: [
      { name: 'parsedValue', internalType: 'bytes32', type: 'bytes32' },
    ],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    name: 'parseInt',
    outputs: [{ name: 'parsedValue', internalType: 'int256', type: 'int256' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    name: 'parseJson',
    outputs: [{ name: 'abiEncodedData', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJson',
    outputs: [{ name: 'abiEncodedData', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'string', type: 'string' },
      { name: '', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'string', type: 'string' },
      { name: '', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonAddressArray',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'string', type: 'string' },
      { name: '', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonBool',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'string', type: 'string' },
      { name: '', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonBoolArray',
    outputs: [{ name: '', internalType: 'bool[]', type: 'bool[]' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'string', type: 'string' },
      { name: '', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonBytes',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'string', type: 'string' },
      { name: '', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonBytes32',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'string', type: 'string' },
      { name: '', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonBytes32Array',
    outputs: [{ name: '', internalType: 'bytes32[]', type: 'bytes32[]' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'string', type: 'string' },
      { name: '', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonBytesArray',
    outputs: [{ name: '', internalType: 'bytes[]', type: 'bytes[]' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'string', type: 'string' },
      { name: '', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonInt',
    outputs: [{ name: '', internalType: 'int256', type: 'int256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'string', type: 'string' },
      { name: '', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonIntArray',
    outputs: [{ name: '', internalType: 'int256[]', type: 'int256[]' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'string', type: 'string' },
      { name: '', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonString',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'string', type: 'string' },
      { name: '', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonStringArray',
    outputs: [{ name: '', internalType: 'string[]', type: 'string[]' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'string', type: 'string' },
      { name: '', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonUint',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'string', type: 'string' },
      { name: '', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonUintArray',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    name: 'parseUint',
    outputs: [
      { name: 'parsedValue', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'pauseGasMetering',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'msgSender', internalType: 'address', type: 'address' },
      { name: 'txOrigin', internalType: 'address', type: 'address' },
    ],
    name: 'prank',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'msgSender', internalType: 'address', type: 'address' }],
    name: 'prank',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'newPrevrandao', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'prevrandao',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'projectRoot',
    outputs: [{ name: 'path', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'readCallers',
    outputs: [
      {
        name: 'callerMode',
        internalType: 'enum VmSafe.CallerMode',
        type: 'uint8',
      },
      { name: 'msgSender', internalType: 'address', type: 'address' },
      { name: 'txOrigin', internalType: 'address', type: 'address' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'maxDepth', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'readDir',
    outputs: [
      {
        name: 'entries',
        internalType: 'struct VmSafe.DirEntry[]',
        type: 'tuple[]',
        components: [
          { name: 'errorMessage', internalType: 'string', type: 'string' },
          { name: 'path', internalType: 'string', type: 'string' },
          { name: 'depth', internalType: 'uint64', type: 'uint64' },
          { name: 'isDir', internalType: 'bool', type: 'bool' },
          { name: 'isSymlink', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'maxDepth', internalType: 'uint64', type: 'uint64' },
      { name: 'followLinks', internalType: 'bool', type: 'bool' },
    ],
    name: 'readDir',
    outputs: [
      {
        name: 'entries',
        internalType: 'struct VmSafe.DirEntry[]',
        type: 'tuple[]',
        components: [
          { name: 'errorMessage', internalType: 'string', type: 'string' },
          { name: 'path', internalType: 'string', type: 'string' },
          { name: 'depth', internalType: 'uint64', type: 'uint64' },
          { name: 'isDir', internalType: 'bool', type: 'bool' },
          { name: 'isSymlink', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'readDir',
    outputs: [
      {
        name: 'entries',
        internalType: 'struct VmSafe.DirEntry[]',
        type: 'tuple[]',
        components: [
          { name: 'errorMessage', internalType: 'string', type: 'string' },
          { name: 'path', internalType: 'string', type: 'string' },
          { name: 'depth', internalType: 'uint64', type: 'uint64' },
          { name: 'isDir', internalType: 'bool', type: 'bool' },
          { name: 'isSymlink', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'readFile',
    outputs: [{ name: 'data', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'readFileBinary',
    outputs: [{ name: 'data', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'readLine',
    outputs: [{ name: 'line', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'linkPath', internalType: 'string', type: 'string' }],
    name: 'readLink',
    outputs: [{ name: 'targetPath', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'record',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'recordLogs',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    name: 'rememberKey',
    outputs: [{ name: 'keyAddr', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'recursive', internalType: 'bool', type: 'bool' },
    ],
    name: 'removeDir',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'removeFile',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'resetNonce',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'resumeGasMetering',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'snapshotId', internalType: 'uint256', type: 'uint256' }],
    name: 'revertTo',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'accounts', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'revokePersistent',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'revokePersistent',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newHeight', internalType: 'uint256', type: 'uint256' }],
    name: 'roll',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'txHash', internalType: 'bytes32', type: 'bytes32' }],
    name: 'rollFork',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'forkId', internalType: 'uint256', type: 'uint256' },
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'rollFork',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'blockNumber', internalType: 'uint256', type: 'uint256' }],
    name: 'rollFork',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'forkId', internalType: 'uint256', type: 'uint256' },
      { name: 'txHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'rollFork',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'rpcAlias', internalType: 'string', type: 'string' }],
    name: 'rpcUrl',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'rpcUrlStructs',
    outputs: [
      {
        name: 'urls',
        internalType: 'struct VmSafe.Rpc[]',
        type: 'tuple[]',
        components: [
          { name: 'key', internalType: 'string', type: 'string' },
          { name: 'url', internalType: 'string', type: 'string' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'rpcUrls',
    outputs: [
      { name: 'urls', internalType: 'string[2][]', type: 'string[2][]' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'forkId', internalType: 'uint256', type: 'uint256' }],
    name: 'selectFork',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'serializeAddress',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'address', type: 'address' },
    ],
    name: 'serializeAddress',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'bool[]', type: 'bool[]' },
    ],
    name: 'serializeBool',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'bool', type: 'bool' },
    ],
    name: 'serializeBool',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    name: 'serializeBytes',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'serializeBytes',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'serializeBytes32',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'serializeBytes32',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'int256', type: 'int256' },
    ],
    name: 'serializeInt',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'int256[]', type: 'int256[]' },
    ],
    name: 'serializeInt',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'serializeString',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'string', type: 'string' },
    ],
    name: 'serializeString',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'serializeUint',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'serializeUint',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'string', type: 'string' },
    ],
    name: 'setEnv',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'newNonce', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'setNonce',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'newNonce', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'setNonceUnsafe',
    outputs: [],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
      { name: 'digest', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'sign',
    outputs: [
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'skipTest', internalType: 'bool', type: 'bool' }],
    name: 'skip',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'snapshot',
    outputs: [{ name: 'snapshotId', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'startBroadcast',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'signer', internalType: 'address', type: 'address' }],
    name: 'startBroadcast',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    name: 'startBroadcast',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'msgSender', internalType: 'address', type: 'address' }],
    name: 'startPrank',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'msgSender', internalType: 'address', type: 'address' },
      { name: 'txOrigin', internalType: 'address', type: 'address' },
    ],
    name: 'startPrank',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'stopBroadcast',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'stopPrank',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'slot', internalType: 'bytes32', type: 'bytes32' },
      { name: 'value', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'store',
    outputs: [],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [{ name: 'value', internalType: 'address', type: 'address' }],
    name: 'toString',
    outputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
    name: 'toString',
    outputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [{ name: 'value', internalType: 'bytes', type: 'bytes' }],
    name: 'toString',
    outputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [{ name: 'value', internalType: 'bool', type: 'bool' }],
    name: 'toString',
    outputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [{ name: 'value', internalType: 'int256', type: 'int256' }],
    name: 'toString',
    outputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [{ name: 'value', internalType: 'bytes32', type: 'bytes32' }],
    name: 'toString',
    outputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'forkId', internalType: 'uint256', type: 'uint256' },
      { name: 'txHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'transact',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'txHash', internalType: 'bytes32', type: 'bytes32' }],
    name: 'transact',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newGasPrice', internalType: 'uint256', type: 'uint256' }],
    name: 'txGasPrice',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'newTimestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'warp',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'data', internalType: 'string', type: 'string' },
    ],
    name: 'writeFile',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'writeFileBinary',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
    ],
    name: 'writeJson',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'path', internalType: 'string', type: 'string' },
    ],
    name: 'writeJson',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'data', internalType: 'string', type: 'string' },
    ],
    name: 'writeLine',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// VmSafe
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const vmSafeABI = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'accesses',
    outputs: [
      { name: 'readSlots', internalType: 'bytes32[]', type: 'bytes32[]' },
      { name: 'writeSlots', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    name: 'addr',
    outputs: [{ name: 'keyAddr', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [{ name: 'condition', internalType: 'bool', type: 'bool' }],
    name: 'assume',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'char', internalType: 'string', type: 'string' }],
    name: 'breakpoint',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'char', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'bool', type: 'bool' },
    ],
    name: 'breakpoint',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'broadcast',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'signer', internalType: 'address', type: 'address' }],
    name: 'broadcast',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    name: 'broadcast',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'closeFile',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'recursive', internalType: 'bool', type: 'bool' },
    ],
    name: 'createDir',
    outputs: [],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'mnemonic', internalType: 'string', type: 'string' },
      { name: 'index', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'deriveKey',
    outputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'mnemonic', internalType: 'string', type: 'string' },
      { name: 'derivationPath', internalType: 'string', type: 'string' },
      { name: 'index', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'deriveKey',
    outputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envAddress',
    outputs: [{ name: 'value', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envAddress',
    outputs: [{ name: 'value', internalType: 'address[]', type: 'address[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envBool',
    outputs: [{ name: 'value', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envBool',
    outputs: [{ name: 'value', internalType: 'bool[]', type: 'bool[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envBytes',
    outputs: [{ name: 'value', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envBytes',
    outputs: [{ name: 'value', internalType: 'bytes[]', type: 'bytes[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envBytes32',
    outputs: [{ name: 'value', internalType: 'bytes32[]', type: 'bytes32[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envBytes32',
    outputs: [{ name: 'value', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envInt',
    outputs: [{ name: 'value', internalType: 'int256[]', type: 'int256[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envInt',
    outputs: [{ name: 'value', internalType: 'int256', type: 'int256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'bytes32[]', type: 'bytes32[]' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'int256[]', type: 'int256[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'int256[]', type: 'int256[]' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'bool', type: 'bool' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'address', type: 'address' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'bytes[]', type: 'bytes[]' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'uint256[]', type: 'uint256[]' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'string[]', type: 'string[]' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'int256', type: 'int256' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'int256', type: 'int256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'address[]', type: 'address[]' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'string', type: 'string' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'bool[]', type: 'bool[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'bool[]', type: 'bool[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envString',
    outputs: [{ name: 'value', internalType: 'string[]', type: 'string[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envString',
    outputs: [{ name: 'value', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envUint',
    outputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envUint',
    outputs: [{ name: 'value', internalType: 'uint256[]', type: 'uint256[]' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'commandInput', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'ffi',
    outputs: [{ name: 'result', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'fsMetadata',
    outputs: [
      {
        name: 'metadata',
        internalType: 'struct VmSafe.FsMetadata',
        type: 'tuple',
        components: [
          { name: 'isDir', internalType: 'bool', type: 'bool' },
          { name: 'isSymlink', internalType: 'bool', type: 'bool' },
          { name: 'length', internalType: 'uint256', type: 'uint256' },
          { name: 'readOnly', internalType: 'bool', type: 'bool' },
          { name: 'modified', internalType: 'uint256', type: 'uint256' },
          { name: 'accessed', internalType: 'uint256', type: 'uint256' },
          { name: 'created', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'artifactPath', internalType: 'string', type: 'string' }],
    name: 'getCode',
    outputs: [
      { name: 'creationBytecode', internalType: 'bytes', type: 'bytes' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'artifactPath', internalType: 'string', type: 'string' }],
    name: 'getDeployedCode',
    outputs: [
      { name: 'runtimeBytecode', internalType: 'bytes', type: 'bytes' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getLabel',
    outputs: [{ name: 'currentLabel', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getNonce',
    outputs: [{ name: 'nonce', internalType: 'uint64', type: 'uint64' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'getRecordedLogs',
    outputs: [
      {
        name: 'logs',
        internalType: 'struct VmSafe.Log[]',
        type: 'tuple[]',
        components: [
          { name: 'topics', internalType: 'bytes32[]', type: 'bytes32[]' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
          { name: 'emitter', internalType: 'address', type: 'address' },
        ],
      },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'newLabel', internalType: 'string', type: 'string' },
    ],
    name: 'label',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'slot', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'load',
    outputs: [{ name: 'data', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    name: 'parseAddress',
    outputs: [
      { name: 'parsedValue', internalType: 'address', type: 'address' },
    ],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    name: 'parseBool',
    outputs: [{ name: 'parsedValue', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    name: 'parseBytes',
    outputs: [{ name: 'parsedValue', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    name: 'parseBytes32',
    outputs: [
      { name: 'parsedValue', internalType: 'bytes32', type: 'bytes32' },
    ],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    name: 'parseInt',
    outputs: [{ name: 'parsedValue', internalType: 'int256', type: 'int256' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    name: 'parseJson',
    outputs: [{ name: 'abiEncodedData', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJson',
    outputs: [{ name: 'abiEncodedData', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'string', type: 'string' },
      { name: '', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'string', type: 'string' },
      { name: '', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonAddressArray',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'string', type: 'string' },
      { name: '', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonBool',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'string', type: 'string' },
      { name: '', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonBoolArray',
    outputs: [{ name: '', internalType: 'bool[]', type: 'bool[]' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'string', type: 'string' },
      { name: '', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonBytes',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'string', type: 'string' },
      { name: '', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonBytes32',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'string', type: 'string' },
      { name: '', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonBytes32Array',
    outputs: [{ name: '', internalType: 'bytes32[]', type: 'bytes32[]' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'string', type: 'string' },
      { name: '', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonBytesArray',
    outputs: [{ name: '', internalType: 'bytes[]', type: 'bytes[]' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'string', type: 'string' },
      { name: '', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonInt',
    outputs: [{ name: '', internalType: 'int256', type: 'int256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'string', type: 'string' },
      { name: '', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonIntArray',
    outputs: [{ name: '', internalType: 'int256[]', type: 'int256[]' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'string', type: 'string' },
      { name: '', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonString',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'string', type: 'string' },
      { name: '', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonStringArray',
    outputs: [{ name: '', internalType: 'string[]', type: 'string[]' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'string', type: 'string' },
      { name: '', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonUint',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'string', type: 'string' },
      { name: '', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonUintArray',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    name: 'parseUint',
    outputs: [
      { name: 'parsedValue', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'pauseGasMetering',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'projectRoot',
    outputs: [{ name: 'path', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'maxDepth', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'readDir',
    outputs: [
      {
        name: 'entries',
        internalType: 'struct VmSafe.DirEntry[]',
        type: 'tuple[]',
        components: [
          { name: 'errorMessage', internalType: 'string', type: 'string' },
          { name: 'path', internalType: 'string', type: 'string' },
          { name: 'depth', internalType: 'uint64', type: 'uint64' },
          { name: 'isDir', internalType: 'bool', type: 'bool' },
          { name: 'isSymlink', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'maxDepth', internalType: 'uint64', type: 'uint64' },
      { name: 'followLinks', internalType: 'bool', type: 'bool' },
    ],
    name: 'readDir',
    outputs: [
      {
        name: 'entries',
        internalType: 'struct VmSafe.DirEntry[]',
        type: 'tuple[]',
        components: [
          { name: 'errorMessage', internalType: 'string', type: 'string' },
          { name: 'path', internalType: 'string', type: 'string' },
          { name: 'depth', internalType: 'uint64', type: 'uint64' },
          { name: 'isDir', internalType: 'bool', type: 'bool' },
          { name: 'isSymlink', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'readDir',
    outputs: [
      {
        name: 'entries',
        internalType: 'struct VmSafe.DirEntry[]',
        type: 'tuple[]',
        components: [
          { name: 'errorMessage', internalType: 'string', type: 'string' },
          { name: 'path', internalType: 'string', type: 'string' },
          { name: 'depth', internalType: 'uint64', type: 'uint64' },
          { name: 'isDir', internalType: 'bool', type: 'bool' },
          { name: 'isSymlink', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'readFile',
    outputs: [{ name: 'data', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'readFileBinary',
    outputs: [{ name: 'data', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'readLine',
    outputs: [{ name: 'line', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'linkPath', internalType: 'string', type: 'string' }],
    name: 'readLink',
    outputs: [{ name: 'targetPath', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'record',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'recordLogs',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    name: 'rememberKey',
    outputs: [{ name: 'keyAddr', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'recursive', internalType: 'bool', type: 'bool' },
    ],
    name: 'removeDir',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'removeFile',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'resumeGasMetering',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'rpcAlias', internalType: 'string', type: 'string' }],
    name: 'rpcUrl',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'rpcUrlStructs',
    outputs: [
      {
        name: 'urls',
        internalType: 'struct VmSafe.Rpc[]',
        type: 'tuple[]',
        components: [
          { name: 'key', internalType: 'string', type: 'string' },
          { name: 'url', internalType: 'string', type: 'string' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'rpcUrls',
    outputs: [
      { name: 'urls', internalType: 'string[2][]', type: 'string[2][]' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'serializeAddress',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'address', type: 'address' },
    ],
    name: 'serializeAddress',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'bool[]', type: 'bool[]' },
    ],
    name: 'serializeBool',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'bool', type: 'bool' },
    ],
    name: 'serializeBool',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    name: 'serializeBytes',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'serializeBytes',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'serializeBytes32',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'serializeBytes32',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'int256', type: 'int256' },
    ],
    name: 'serializeInt',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'int256[]', type: 'int256[]' },
    ],
    name: 'serializeInt',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'serializeString',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'string', type: 'string' },
    ],
    name: 'serializeString',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'serializeUint',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'serializeUint',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'string', type: 'string' },
    ],
    name: 'setEnv',
    outputs: [],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
      { name: 'digest', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'sign',
    outputs: [
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'startBroadcast',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'signer', internalType: 'address', type: 'address' }],
    name: 'startBroadcast',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    name: 'startBroadcast',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'stopBroadcast',
    outputs: [],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [{ name: 'value', internalType: 'address', type: 'address' }],
    name: 'toString',
    outputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
    name: 'toString',
    outputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [{ name: 'value', internalType: 'bytes', type: 'bytes' }],
    name: 'toString',
    outputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [{ name: 'value', internalType: 'bool', type: 'bool' }],
    name: 'toString',
    outputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [{ name: 'value', internalType: 'int256', type: 'int256' }],
    name: 'toString',
    outputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [{ name: 'value', internalType: 'bytes32', type: 'bytes32' }],
    name: 'toString',
    outputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'data', internalType: 'string', type: 'string' },
    ],
    name: 'writeFile',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'writeFileBinary',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
    ],
    name: 'writeJson',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'path', internalType: 'string', type: 'string' },
    ],
    name: 'writeJson',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'data', internalType: 'string', type: 'string' },
    ],
    name: 'writeLine',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// stdError
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const stdErrorABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'arithmeticError',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'assertionError',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'divisionError',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'encodeStorageError',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'enumConversionError',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'indexOOBError',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'memOverflowError',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'popError',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'zeroVarError',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// stdStorageSafe
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const stdStorageSafeABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'who', internalType: 'address', type: 'address', indexed: false },
      { name: 'fsig', internalType: 'bytes4', type: 'bytes4', indexed: false },
      {
        name: 'keysHash',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'slot',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'SlotFound',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'who', internalType: 'address', type: 'address', indexed: false },
      {
        name: 'slot',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'WARNING_UninitedSlot',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link baseGuardABI}__.
 */
export function useBaseGuardRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof baseGuardABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof baseGuardABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: baseGuardABI,
    ...config,
  } as UseContractReadConfig<typeof baseGuardABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link baseGuardABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function useBaseGuardSupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof baseGuardABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof baseGuardABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: baseGuardABI,
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<typeof baseGuardABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link baseGuardABI}__.
 */
export function useBaseGuardWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof baseGuardABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof baseGuardABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof baseGuardABI, TFunctionName, TMode>({
    abi: baseGuardABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link baseGuardABI}__ and `functionName` set to `"checkAfterExecution"`.
 */
export function useBaseGuardCheckAfterExecution<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof baseGuardABI,
          'checkAfterExecution'
        >['request']['abi'],
        'checkAfterExecution',
        TMode
      > & { functionName?: 'checkAfterExecution' }
    : UseContractWriteConfig<
        typeof baseGuardABI,
        'checkAfterExecution',
        TMode
      > & {
        abi?: never
        functionName?: 'checkAfterExecution'
      } = {} as any,
) {
  return useContractWrite<typeof baseGuardABI, 'checkAfterExecution', TMode>({
    abi: baseGuardABI,
    functionName: 'checkAfterExecution',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link baseGuardABI}__ and `functionName` set to `"checkTransaction"`.
 */
export function useBaseGuardCheckTransaction<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof baseGuardABI,
          'checkTransaction'
        >['request']['abi'],
        'checkTransaction',
        TMode
      > & { functionName?: 'checkTransaction' }
    : UseContractWriteConfig<typeof baseGuardABI, 'checkTransaction', TMode> & {
        abi?: never
        functionName?: 'checkTransaction'
      } = {} as any,
) {
  return useContractWrite<typeof baseGuardABI, 'checkTransaction', TMode>({
    abi: baseGuardABI,
    functionName: 'checkTransaction',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link baseGuardABI}__.
 */
export function usePrepareBaseGuardWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof baseGuardABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: baseGuardABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof baseGuardABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link baseGuardABI}__ and `functionName` set to `"checkAfterExecution"`.
 */
export function usePrepareBaseGuardCheckAfterExecution(
  config: Omit<
    UsePrepareContractWriteConfig<typeof baseGuardABI, 'checkAfterExecution'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: baseGuardABI,
    functionName: 'checkAfterExecution',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof baseGuardABI,
    'checkAfterExecution'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link baseGuardABI}__ and `functionName` set to `"checkTransaction"`.
 */
export function usePrepareBaseGuardCheckTransaction(
  config: Omit<
    UsePrepareContractWriteConfig<typeof baseGuardABI, 'checkTransaction'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: baseGuardABI,
    functionName: 'checkTransaction',
    ...config,
  } as UsePrepareContractWriteConfig<typeof baseGuardABI, 'checkTransaction'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link baseModuleABI}__.
 */
export function useBaseModuleRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof baseModuleABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof baseModuleABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: baseModuleABI,
    ...config,
  } as UseContractReadConfig<typeof baseModuleABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link baseModuleABI}__ and `functionName` set to `"metadataHash"`.
 */
export function useBaseModuleMetadataHash<
  TFunctionName extends 'metadataHash',
  TSelectData = ReadContractResult<typeof baseModuleABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof baseModuleABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: baseModuleABI,
    functionName: 'metadataHash',
    ...config,
  } as UseContractReadConfig<typeof baseModuleABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link baseModuleABI}__ and `functionName` set to `"metadataProvider"`.
 */
export function useBaseModuleMetadataProvider<
  TFunctionName extends 'metadataProvider',
  TSelectData = ReadContractResult<typeof baseModuleABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof baseModuleABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: baseModuleABI,
    functionName: 'metadataProvider',
    ...config,
  } as UseContractReadConfig<typeof baseModuleABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link baseModuleABI}__ and `functionName` set to `"name"`.
 */
export function useBaseModuleName<
  TFunctionName extends 'name',
  TSelectData = ReadContractResult<typeof baseModuleABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof baseModuleABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: baseModuleABI,
    functionName: 'name',
    ...config,
  } as UseContractReadConfig<typeof baseModuleABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link baseModuleABI}__ and `functionName` set to `"requiresRootAccess"`.
 */
export function useBaseModuleRequiresRootAccess<
  TFunctionName extends 'requiresRootAccess',
  TSelectData = ReadContractResult<typeof baseModuleABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof baseModuleABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: baseModuleABI,
    functionName: 'requiresRootAccess',
    ...config,
  } as UseContractReadConfig<typeof baseModuleABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link baseModuleABI}__ and `functionName` set to `"retrieveMetadata"`.
 */
export function useBaseModuleRetrieveMetadata<
  TFunctionName extends 'retrieveMetadata',
  TSelectData = ReadContractResult<typeof baseModuleABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof baseModuleABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: baseModuleABI,
    functionName: 'retrieveMetadata',
    ...config,
  } as UseContractReadConfig<typeof baseModuleABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link baseModuleABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function useBaseModuleSupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof baseModuleABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof baseModuleABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: baseModuleABI,
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<typeof baseModuleABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link baseModuleABI}__ and `functionName` set to `"version"`.
 */
export function useBaseModuleVersion<
  TFunctionName extends 'version',
  TSelectData = ReadContractResult<typeof baseModuleABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof baseModuleABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: baseModuleABI,
    functionName: 'version',
    ...config,
  } as UseContractReadConfig<typeof baseModuleABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link dsTestABI}__.
 */
export function useDsTestRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof dsTestABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof dsTestABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({ abi: dsTestABI, ...config } as UseContractReadConfig<
    typeof dsTestABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link dsTestABI}__ and `functionName` set to `"IS_TEST"`.
 */
export function useDsTestIsTest<
  TFunctionName extends 'IS_TEST',
  TSelectData = ReadContractResult<typeof dsTestABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof dsTestABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: dsTestABI,
    functionName: 'IS_TEST',
    ...config,
  } as UseContractReadConfig<typeof dsTestABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link dsTestABI}__.
 */
export function useDsTestWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof dsTestABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof dsTestABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof dsTestABI, TFunctionName, TMode>({
    abi: dsTestABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link dsTestABI}__ and `functionName` set to `"failed"`.
 */
export function useDsTestFailed<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof dsTestABI,
          'failed'
        >['request']['abi'],
        'failed',
        TMode
      > & { functionName?: 'failed' }
    : UseContractWriteConfig<typeof dsTestABI, 'failed', TMode> & {
        abi?: never
        functionName?: 'failed'
      } = {} as any,
) {
  return useContractWrite<typeof dsTestABI, 'failed', TMode>({
    abi: dsTestABI,
    functionName: 'failed',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link dsTestABI}__.
 */
export function usePrepareDsTestWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof dsTestABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: dsTestABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof dsTestABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link dsTestABI}__ and `functionName` set to `"failed"`.
 */
export function usePrepareDsTestFailed(
  config: Omit<
    UsePrepareContractWriteConfig<typeof dsTestABI, 'failed'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: dsTestABI,
    functionName: 'failed',
    ...config,
  } as UsePrepareContractWriteConfig<typeof dsTestABI, 'failed'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link dsTestABI}__.
 */
export function useDsTestEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof dsTestABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: dsTestABI,
    ...config,
  } as UseContractEventConfig<typeof dsTestABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link dsTestABI}__ and `eventName` set to `"log"`.
 */
export function useDsTestLogEvent(
  config: Omit<
    UseContractEventConfig<typeof dsTestABI, 'log'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: dsTestABI,
    eventName: 'log',
    ...config,
  } as UseContractEventConfig<typeof dsTestABI, 'log'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link dsTestABI}__ and `eventName` set to `"log_address"`.
 */
export function useDsTestLogAddressEvent(
  config: Omit<
    UseContractEventConfig<typeof dsTestABI, 'log_address'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: dsTestABI,
    eventName: 'log_address',
    ...config,
  } as UseContractEventConfig<typeof dsTestABI, 'log_address'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link dsTestABI}__ and `eventName` set to `"log_bytes"`.
 */
export function useDsTestLogBytesEvent(
  config: Omit<
    UseContractEventConfig<typeof dsTestABI, 'log_bytes'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: dsTestABI,
    eventName: 'log_bytes',
    ...config,
  } as UseContractEventConfig<typeof dsTestABI, 'log_bytes'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link dsTestABI}__ and `eventName` set to `"log_bytes32"`.
 */
export function useDsTestLogBytes32Event(
  config: Omit<
    UseContractEventConfig<typeof dsTestABI, 'log_bytes32'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: dsTestABI,
    eventName: 'log_bytes32',
    ...config,
  } as UseContractEventConfig<typeof dsTestABI, 'log_bytes32'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link dsTestABI}__ and `eventName` set to `"log_int"`.
 */
export function useDsTestLogIntEvent(
  config: Omit<
    UseContractEventConfig<typeof dsTestABI, 'log_int'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: dsTestABI,
    eventName: 'log_int',
    ...config,
  } as UseContractEventConfig<typeof dsTestABI, 'log_int'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link dsTestABI}__ and `eventName` set to `"log_named_address"`.
 */
export function useDsTestLogNamedAddressEvent(
  config: Omit<
    UseContractEventConfig<typeof dsTestABI, 'log_named_address'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: dsTestABI,
    eventName: 'log_named_address',
    ...config,
  } as UseContractEventConfig<typeof dsTestABI, 'log_named_address'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link dsTestABI}__ and `eventName` set to `"log_named_bytes"`.
 */
export function useDsTestLogNamedBytesEvent(
  config: Omit<
    UseContractEventConfig<typeof dsTestABI, 'log_named_bytes'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: dsTestABI,
    eventName: 'log_named_bytes',
    ...config,
  } as UseContractEventConfig<typeof dsTestABI, 'log_named_bytes'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link dsTestABI}__ and `eventName` set to `"log_named_bytes32"`.
 */
export function useDsTestLogNamedBytes32Event(
  config: Omit<
    UseContractEventConfig<typeof dsTestABI, 'log_named_bytes32'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: dsTestABI,
    eventName: 'log_named_bytes32',
    ...config,
  } as UseContractEventConfig<typeof dsTestABI, 'log_named_bytes32'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link dsTestABI}__ and `eventName` set to `"log_named_decimal_int"`.
 */
export function useDsTestLogNamedDecimalIntEvent(
  config: Omit<
    UseContractEventConfig<typeof dsTestABI, 'log_named_decimal_int'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: dsTestABI,
    eventName: 'log_named_decimal_int',
    ...config,
  } as UseContractEventConfig<typeof dsTestABI, 'log_named_decimal_int'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link dsTestABI}__ and `eventName` set to `"log_named_decimal_uint"`.
 */
export function useDsTestLogNamedDecimalUintEvent(
  config: Omit<
    UseContractEventConfig<typeof dsTestABI, 'log_named_decimal_uint'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: dsTestABI,
    eventName: 'log_named_decimal_uint',
    ...config,
  } as UseContractEventConfig<typeof dsTestABI, 'log_named_decimal_uint'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link dsTestABI}__ and `eventName` set to `"log_named_int"`.
 */
export function useDsTestLogNamedIntEvent(
  config: Omit<
    UseContractEventConfig<typeof dsTestABI, 'log_named_int'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: dsTestABI,
    eventName: 'log_named_int',
    ...config,
  } as UseContractEventConfig<typeof dsTestABI, 'log_named_int'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link dsTestABI}__ and `eventName` set to `"log_named_string"`.
 */
export function useDsTestLogNamedStringEvent(
  config: Omit<
    UseContractEventConfig<typeof dsTestABI, 'log_named_string'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: dsTestABI,
    eventName: 'log_named_string',
    ...config,
  } as UseContractEventConfig<typeof dsTestABI, 'log_named_string'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link dsTestABI}__ and `eventName` set to `"log_named_uint"`.
 */
export function useDsTestLogNamedUintEvent(
  config: Omit<
    UseContractEventConfig<typeof dsTestABI, 'log_named_uint'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: dsTestABI,
    eventName: 'log_named_uint',
    ...config,
  } as UseContractEventConfig<typeof dsTestABI, 'log_named_uint'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link dsTestABI}__ and `eventName` set to `"log_string"`.
 */
export function useDsTestLogStringEvent(
  config: Omit<
    UseContractEventConfig<typeof dsTestABI, 'log_string'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: dsTestABI,
    eventName: 'log_string',
    ...config,
  } as UseContractEventConfig<typeof dsTestABI, 'log_string'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link dsTestABI}__ and `eventName` set to `"log_uint"`.
 */
export function useDsTestLogUintEvent(
  config: Omit<
    UseContractEventConfig<typeof dsTestABI, 'log_uint'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: dsTestABI,
    eventName: 'log_uint',
    ...config,
  } as UseContractEventConfig<typeof dsTestABI, 'log_uint'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link dsTestABI}__ and `eventName` set to `"logs"`.
 */
export function useDsTestLogsEvent(
  config: Omit<
    UseContractEventConfig<typeof dsTestABI, 'logs'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: dsTestABI,
    eventName: 'logs',
    ...config,
  } as UseContractEventConfig<typeof dsTestABI, 'logs'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
 */
export function useErc20Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({ abi: erc20ABI, ...config } as UseContractReadConfig<
    typeof erc20ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"allowance"`.
 */
export function useErc20Allowance<
  TFunctionName extends 'allowance',
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc20ABI,
    functionName: 'allowance',
    ...config,
  } as UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useErc20BalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc20ABI,
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"decimals"`.
 */
export function useErc20Decimals<
  TFunctionName extends 'decimals',
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc20ABI,
    functionName: 'decimals',
    ...config,
  } as UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"name"`.
 */
export function useErc20Name<
  TFunctionName extends 'name',
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc20ABI,
    functionName: 'name',
    ...config,
  } as UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"symbol"`.
 */
export function useErc20Symbol<
  TFunctionName extends 'symbol',
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc20ABI,
    functionName: 'symbol',
    ...config,
  } as UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"totalSupply"`.
 */
export function useErc20TotalSupply<
  TFunctionName extends 'totalSupply',
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc20ABI,
    functionName: 'totalSupply',
    ...config,
  } as UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__.
 */
export function useErc20Write<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof erc20ABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof erc20ABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof erc20ABI, TFunctionName, TMode>({
    abi: erc20ABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"approve"`.
 */
export function useErc20Approve<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc20ABI,
          'approve'
        >['request']['abi'],
        'approve',
        TMode
      > & { functionName?: 'approve' }
    : UseContractWriteConfig<typeof erc20ABI, 'approve', TMode> & {
        abi?: never
        functionName?: 'approve'
      } = {} as any,
) {
  return useContractWrite<typeof erc20ABI, 'approve', TMode>({
    abi: erc20ABI,
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"decreaseAllowance"`.
 */
export function useErc20DecreaseAllowance<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc20ABI,
          'decreaseAllowance'
        >['request']['abi'],
        'decreaseAllowance',
        TMode
      > & { functionName?: 'decreaseAllowance' }
    : UseContractWriteConfig<typeof erc20ABI, 'decreaseAllowance', TMode> & {
        abi?: never
        functionName?: 'decreaseAllowance'
      } = {} as any,
) {
  return useContractWrite<typeof erc20ABI, 'decreaseAllowance', TMode>({
    abi: erc20ABI,
    functionName: 'decreaseAllowance',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"increaseAllowance"`.
 */
export function useErc20IncreaseAllowance<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc20ABI,
          'increaseAllowance'
        >['request']['abi'],
        'increaseAllowance',
        TMode
      > & { functionName?: 'increaseAllowance' }
    : UseContractWriteConfig<typeof erc20ABI, 'increaseAllowance', TMode> & {
        abi?: never
        functionName?: 'increaseAllowance'
      } = {} as any,
) {
  return useContractWrite<typeof erc20ABI, 'increaseAllowance', TMode>({
    abi: erc20ABI,
    functionName: 'increaseAllowance',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"transfer"`.
 */
export function useErc20Transfer<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc20ABI,
          'transfer'
        >['request']['abi'],
        'transfer',
        TMode
      > & { functionName?: 'transfer' }
    : UseContractWriteConfig<typeof erc20ABI, 'transfer', TMode> & {
        abi?: never
        functionName?: 'transfer'
      } = {} as any,
) {
  return useContractWrite<typeof erc20ABI, 'transfer', TMode>({
    abi: erc20ABI,
    functionName: 'transfer',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useErc20TransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc20ABI,
          'transferFrom'
        >['request']['abi'],
        'transferFrom',
        TMode
      > & { functionName?: 'transferFrom' }
    : UseContractWriteConfig<typeof erc20ABI, 'transferFrom', TMode> & {
        abi?: never
        functionName?: 'transferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof erc20ABI, 'transferFrom', TMode>({
    abi: erc20ABI,
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__.
 */
export function usePrepareErc20Write<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20ABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc20ABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20ABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareErc20Approve(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20ABI, 'approve'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc20ABI,
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20ABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"decreaseAllowance"`.
 */
export function usePrepareErc20DecreaseAllowance(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20ABI, 'decreaseAllowance'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc20ABI,
    functionName: 'decreaseAllowance',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20ABI, 'decreaseAllowance'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"increaseAllowance"`.
 */
export function usePrepareErc20IncreaseAllowance(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20ABI, 'increaseAllowance'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc20ABI,
    functionName: 'increaseAllowance',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20ABI, 'increaseAllowance'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"transfer"`.
 */
export function usePrepareErc20Transfer(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20ABI, 'transfer'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc20ABI,
    functionName: 'transfer',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20ABI, 'transfer'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareErc20TransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20ABI, 'transferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc20ABI,
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20ABI, 'transferFrom'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc20ABI}__.
 */
export function useErc20Event<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof erc20ABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc20ABI,
    ...config,
  } as UseContractEventConfig<typeof erc20ABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc20ABI}__ and `eventName` set to `"Approval"`.
 */
export function useErc20ApprovalEvent(
  config: Omit<
    UseContractEventConfig<typeof erc20ABI, 'Approval'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc20ABI,
    eventName: 'Approval',
    ...config,
  } as UseContractEventConfig<typeof erc20ABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc20ABI}__ and `eventName` set to `"Transfer"`.
 */
export function useErc20TransferEvent(
  config: Omit<
    UseContractEventConfig<typeof erc20ABI, 'Transfer'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc20ABI,
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof erc20ABI, 'Transfer'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20BurnableABI}__.
 */
export function useErc20BurnableRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof erc20BurnableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc20BurnableABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: erc20BurnableABI,
    ...config,
  } as UseContractReadConfig<
    typeof erc20BurnableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20BurnableABI}__ and `functionName` set to `"allowance"`.
 */
export function useErc20BurnableAllowance<
  TFunctionName extends 'allowance',
  TSelectData = ReadContractResult<typeof erc20BurnableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc20BurnableABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc20BurnableABI,
    functionName: 'allowance',
    ...config,
  } as UseContractReadConfig<
    typeof erc20BurnableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20BurnableABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useErc20BurnableBalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof erc20BurnableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc20BurnableABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc20BurnableABI,
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<
    typeof erc20BurnableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20BurnableABI}__ and `functionName` set to `"decimals"`.
 */
export function useErc20BurnableDecimals<
  TFunctionName extends 'decimals',
  TSelectData = ReadContractResult<typeof erc20BurnableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc20BurnableABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc20BurnableABI,
    functionName: 'decimals',
    ...config,
  } as UseContractReadConfig<
    typeof erc20BurnableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20BurnableABI}__ and `functionName` set to `"name"`.
 */
export function useErc20BurnableName<
  TFunctionName extends 'name',
  TSelectData = ReadContractResult<typeof erc20BurnableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc20BurnableABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc20BurnableABI,
    functionName: 'name',
    ...config,
  } as UseContractReadConfig<
    typeof erc20BurnableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20BurnableABI}__ and `functionName` set to `"symbol"`.
 */
export function useErc20BurnableSymbol<
  TFunctionName extends 'symbol',
  TSelectData = ReadContractResult<typeof erc20BurnableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc20BurnableABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc20BurnableABI,
    functionName: 'symbol',
    ...config,
  } as UseContractReadConfig<
    typeof erc20BurnableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20BurnableABI}__ and `functionName` set to `"totalSupply"`.
 */
export function useErc20BurnableTotalSupply<
  TFunctionName extends 'totalSupply',
  TSelectData = ReadContractResult<typeof erc20BurnableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc20BurnableABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc20BurnableABI,
    functionName: 'totalSupply',
    ...config,
  } as UseContractReadConfig<
    typeof erc20BurnableABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20BurnableABI}__.
 */
export function useErc20BurnableWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc20BurnableABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof erc20BurnableABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof erc20BurnableABI, TFunctionName, TMode>({
    abi: erc20BurnableABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20BurnableABI}__ and `functionName` set to `"approve"`.
 */
export function useErc20BurnableApprove<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc20BurnableABI,
          'approve'
        >['request']['abi'],
        'approve',
        TMode
      > & { functionName?: 'approve' }
    : UseContractWriteConfig<typeof erc20BurnableABI, 'approve', TMode> & {
        abi?: never
        functionName?: 'approve'
      } = {} as any,
) {
  return useContractWrite<typeof erc20BurnableABI, 'approve', TMode>({
    abi: erc20BurnableABI,
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20BurnableABI}__ and `functionName` set to `"burn"`.
 */
export function useErc20BurnableBurn<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc20BurnableABI,
          'burn'
        >['request']['abi'],
        'burn',
        TMode
      > & { functionName?: 'burn' }
    : UseContractWriteConfig<typeof erc20BurnableABI, 'burn', TMode> & {
        abi?: never
        functionName?: 'burn'
      } = {} as any,
) {
  return useContractWrite<typeof erc20BurnableABI, 'burn', TMode>({
    abi: erc20BurnableABI,
    functionName: 'burn',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20BurnableABI}__ and `functionName` set to `"burnFrom"`.
 */
export function useErc20BurnableBurnFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc20BurnableABI,
          'burnFrom'
        >['request']['abi'],
        'burnFrom',
        TMode
      > & { functionName?: 'burnFrom' }
    : UseContractWriteConfig<typeof erc20BurnableABI, 'burnFrom', TMode> & {
        abi?: never
        functionName?: 'burnFrom'
      } = {} as any,
) {
  return useContractWrite<typeof erc20BurnableABI, 'burnFrom', TMode>({
    abi: erc20BurnableABI,
    functionName: 'burnFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20BurnableABI}__ and `functionName` set to `"decreaseAllowance"`.
 */
export function useErc20BurnableDecreaseAllowance<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc20BurnableABI,
          'decreaseAllowance'
        >['request']['abi'],
        'decreaseAllowance',
        TMode
      > & { functionName?: 'decreaseAllowance' }
    : UseContractWriteConfig<
        typeof erc20BurnableABI,
        'decreaseAllowance',
        TMode
      > & {
        abi?: never
        functionName?: 'decreaseAllowance'
      } = {} as any,
) {
  return useContractWrite<typeof erc20BurnableABI, 'decreaseAllowance', TMode>({
    abi: erc20BurnableABI,
    functionName: 'decreaseAllowance',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20BurnableABI}__ and `functionName` set to `"increaseAllowance"`.
 */
export function useErc20BurnableIncreaseAllowance<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc20BurnableABI,
          'increaseAllowance'
        >['request']['abi'],
        'increaseAllowance',
        TMode
      > & { functionName?: 'increaseAllowance' }
    : UseContractWriteConfig<
        typeof erc20BurnableABI,
        'increaseAllowance',
        TMode
      > & {
        abi?: never
        functionName?: 'increaseAllowance'
      } = {} as any,
) {
  return useContractWrite<typeof erc20BurnableABI, 'increaseAllowance', TMode>({
    abi: erc20BurnableABI,
    functionName: 'increaseAllowance',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20BurnableABI}__ and `functionName` set to `"transfer"`.
 */
export function useErc20BurnableTransfer<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc20BurnableABI,
          'transfer'
        >['request']['abi'],
        'transfer',
        TMode
      > & { functionName?: 'transfer' }
    : UseContractWriteConfig<typeof erc20BurnableABI, 'transfer', TMode> & {
        abi?: never
        functionName?: 'transfer'
      } = {} as any,
) {
  return useContractWrite<typeof erc20BurnableABI, 'transfer', TMode>({
    abi: erc20BurnableABI,
    functionName: 'transfer',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20BurnableABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useErc20BurnableTransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc20BurnableABI,
          'transferFrom'
        >['request']['abi'],
        'transferFrom',
        TMode
      > & { functionName?: 'transferFrom' }
    : UseContractWriteConfig<typeof erc20BurnableABI, 'transferFrom', TMode> & {
        abi?: never
        functionName?: 'transferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof erc20BurnableABI, 'transferFrom', TMode>({
    abi: erc20BurnableABI,
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20BurnableABI}__.
 */
export function usePrepareErc20BurnableWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20BurnableABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc20BurnableABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20BurnableABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20BurnableABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareErc20BurnableApprove(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20BurnableABI, 'approve'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc20BurnableABI,
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20BurnableABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20BurnableABI}__ and `functionName` set to `"burn"`.
 */
export function usePrepareErc20BurnableBurn(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20BurnableABI, 'burn'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc20BurnableABI,
    functionName: 'burn',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20BurnableABI, 'burn'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20BurnableABI}__ and `functionName` set to `"burnFrom"`.
 */
export function usePrepareErc20BurnableBurnFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20BurnableABI, 'burnFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc20BurnableABI,
    functionName: 'burnFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20BurnableABI, 'burnFrom'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20BurnableABI}__ and `functionName` set to `"decreaseAllowance"`.
 */
export function usePrepareErc20BurnableDecreaseAllowance(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20BurnableABI, 'decreaseAllowance'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc20BurnableABI,
    functionName: 'decreaseAllowance',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof erc20BurnableABI,
    'decreaseAllowance'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20BurnableABI}__ and `functionName` set to `"increaseAllowance"`.
 */
export function usePrepareErc20BurnableIncreaseAllowance(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20BurnableABI, 'increaseAllowance'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc20BurnableABI,
    functionName: 'increaseAllowance',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof erc20BurnableABI,
    'increaseAllowance'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20BurnableABI}__ and `functionName` set to `"transfer"`.
 */
export function usePrepareErc20BurnableTransfer(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20BurnableABI, 'transfer'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc20BurnableABI,
    functionName: 'transfer',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20BurnableABI, 'transfer'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20BurnableABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareErc20BurnableTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20BurnableABI, 'transferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc20BurnableABI,
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20BurnableABI, 'transferFrom'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc20BurnableABI}__.
 */
export function useErc20BurnableEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof erc20BurnableABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc20BurnableABI,
    ...config,
  } as UseContractEventConfig<typeof erc20BurnableABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc20BurnableABI}__ and `eventName` set to `"Approval"`.
 */
export function useErc20BurnableApprovalEvent(
  config: Omit<
    UseContractEventConfig<typeof erc20BurnableABI, 'Approval'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc20BurnableABI,
    eventName: 'Approval',
    ...config,
  } as UseContractEventConfig<typeof erc20BurnableABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc20BurnableABI}__ and `eventName` set to `"Transfer"`.
 */
export function useErc20BurnableTransferEvent(
  config: Omit<
    UseContractEventConfig<typeof erc20BurnableABI, 'Transfer'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc20BurnableABI,
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof erc20BurnableABI, 'Transfer'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20PresetFixedSupplyABI}__.
 */
export function useErc20PresetFixedSupplyRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<
    typeof erc20PresetFixedSupplyABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof erc20PresetFixedSupplyABI,
      TFunctionName,
      TSelectData
    >,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: erc20PresetFixedSupplyABI,
    ...config,
  } as UseContractReadConfig<
    typeof erc20PresetFixedSupplyABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20PresetFixedSupplyABI}__ and `functionName` set to `"allowance"`.
 */
export function useErc20PresetFixedSupplyAllowance<
  TFunctionName extends 'allowance',
  TSelectData = ReadContractResult<
    typeof erc20PresetFixedSupplyABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof erc20PresetFixedSupplyABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc20PresetFixedSupplyABI,
    functionName: 'allowance',
    ...config,
  } as UseContractReadConfig<
    typeof erc20PresetFixedSupplyABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20PresetFixedSupplyABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useErc20PresetFixedSupplyBalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<
    typeof erc20PresetFixedSupplyABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof erc20PresetFixedSupplyABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc20PresetFixedSupplyABI,
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<
    typeof erc20PresetFixedSupplyABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20PresetFixedSupplyABI}__ and `functionName` set to `"decimals"`.
 */
export function useErc20PresetFixedSupplyDecimals<
  TFunctionName extends 'decimals',
  TSelectData = ReadContractResult<
    typeof erc20PresetFixedSupplyABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof erc20PresetFixedSupplyABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc20PresetFixedSupplyABI,
    functionName: 'decimals',
    ...config,
  } as UseContractReadConfig<
    typeof erc20PresetFixedSupplyABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20PresetFixedSupplyABI}__ and `functionName` set to `"name"`.
 */
export function useErc20PresetFixedSupplyName<
  TFunctionName extends 'name',
  TSelectData = ReadContractResult<
    typeof erc20PresetFixedSupplyABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof erc20PresetFixedSupplyABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc20PresetFixedSupplyABI,
    functionName: 'name',
    ...config,
  } as UseContractReadConfig<
    typeof erc20PresetFixedSupplyABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20PresetFixedSupplyABI}__ and `functionName` set to `"symbol"`.
 */
export function useErc20PresetFixedSupplySymbol<
  TFunctionName extends 'symbol',
  TSelectData = ReadContractResult<
    typeof erc20PresetFixedSupplyABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof erc20PresetFixedSupplyABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc20PresetFixedSupplyABI,
    functionName: 'symbol',
    ...config,
  } as UseContractReadConfig<
    typeof erc20PresetFixedSupplyABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20PresetFixedSupplyABI}__ and `functionName` set to `"totalSupply"`.
 */
export function useErc20PresetFixedSupplyTotalSupply<
  TFunctionName extends 'totalSupply',
  TSelectData = ReadContractResult<
    typeof erc20PresetFixedSupplyABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof erc20PresetFixedSupplyABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc20PresetFixedSupplyABI,
    functionName: 'totalSupply',
    ...config,
  } as UseContractReadConfig<
    typeof erc20PresetFixedSupplyABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20PresetFixedSupplyABI}__.
 */
export function useErc20PresetFixedSupplyWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc20PresetFixedSupplyABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<
        typeof erc20PresetFixedSupplyABI,
        TFunctionName,
        TMode
      > & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<
    typeof erc20PresetFixedSupplyABI,
    TFunctionName,
    TMode
  >({ abi: erc20PresetFixedSupplyABI, ...config } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20PresetFixedSupplyABI}__ and `functionName` set to `"approve"`.
 */
export function useErc20PresetFixedSupplyApprove<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc20PresetFixedSupplyABI,
          'approve'
        >['request']['abi'],
        'approve',
        TMode
      > & { functionName?: 'approve' }
    : UseContractWriteConfig<
        typeof erc20PresetFixedSupplyABI,
        'approve',
        TMode
      > & {
        abi?: never
        functionName?: 'approve'
      } = {} as any,
) {
  return useContractWrite<typeof erc20PresetFixedSupplyABI, 'approve', TMode>({
    abi: erc20PresetFixedSupplyABI,
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20PresetFixedSupplyABI}__ and `functionName` set to `"burn"`.
 */
export function useErc20PresetFixedSupplyBurn<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc20PresetFixedSupplyABI,
          'burn'
        >['request']['abi'],
        'burn',
        TMode
      > & { functionName?: 'burn' }
    : UseContractWriteConfig<
        typeof erc20PresetFixedSupplyABI,
        'burn',
        TMode
      > & {
        abi?: never
        functionName?: 'burn'
      } = {} as any,
) {
  return useContractWrite<typeof erc20PresetFixedSupplyABI, 'burn', TMode>({
    abi: erc20PresetFixedSupplyABI,
    functionName: 'burn',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20PresetFixedSupplyABI}__ and `functionName` set to `"burnFrom"`.
 */
export function useErc20PresetFixedSupplyBurnFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc20PresetFixedSupplyABI,
          'burnFrom'
        >['request']['abi'],
        'burnFrom',
        TMode
      > & { functionName?: 'burnFrom' }
    : UseContractWriteConfig<
        typeof erc20PresetFixedSupplyABI,
        'burnFrom',
        TMode
      > & {
        abi?: never
        functionName?: 'burnFrom'
      } = {} as any,
) {
  return useContractWrite<typeof erc20PresetFixedSupplyABI, 'burnFrom', TMode>({
    abi: erc20PresetFixedSupplyABI,
    functionName: 'burnFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20PresetFixedSupplyABI}__ and `functionName` set to `"decreaseAllowance"`.
 */
export function useErc20PresetFixedSupplyDecreaseAllowance<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc20PresetFixedSupplyABI,
          'decreaseAllowance'
        >['request']['abi'],
        'decreaseAllowance',
        TMode
      > & { functionName?: 'decreaseAllowance' }
    : UseContractWriteConfig<
        typeof erc20PresetFixedSupplyABI,
        'decreaseAllowance',
        TMode
      > & {
        abi?: never
        functionName?: 'decreaseAllowance'
      } = {} as any,
) {
  return useContractWrite<
    typeof erc20PresetFixedSupplyABI,
    'decreaseAllowance',
    TMode
  >({
    abi: erc20PresetFixedSupplyABI,
    functionName: 'decreaseAllowance',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20PresetFixedSupplyABI}__ and `functionName` set to `"increaseAllowance"`.
 */
export function useErc20PresetFixedSupplyIncreaseAllowance<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc20PresetFixedSupplyABI,
          'increaseAllowance'
        >['request']['abi'],
        'increaseAllowance',
        TMode
      > & { functionName?: 'increaseAllowance' }
    : UseContractWriteConfig<
        typeof erc20PresetFixedSupplyABI,
        'increaseAllowance',
        TMode
      > & {
        abi?: never
        functionName?: 'increaseAllowance'
      } = {} as any,
) {
  return useContractWrite<
    typeof erc20PresetFixedSupplyABI,
    'increaseAllowance',
    TMode
  >({
    abi: erc20PresetFixedSupplyABI,
    functionName: 'increaseAllowance',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20PresetFixedSupplyABI}__ and `functionName` set to `"transfer"`.
 */
export function useErc20PresetFixedSupplyTransfer<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc20PresetFixedSupplyABI,
          'transfer'
        >['request']['abi'],
        'transfer',
        TMode
      > & { functionName?: 'transfer' }
    : UseContractWriteConfig<
        typeof erc20PresetFixedSupplyABI,
        'transfer',
        TMode
      > & {
        abi?: never
        functionName?: 'transfer'
      } = {} as any,
) {
  return useContractWrite<typeof erc20PresetFixedSupplyABI, 'transfer', TMode>({
    abi: erc20PresetFixedSupplyABI,
    functionName: 'transfer',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20PresetFixedSupplyABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useErc20PresetFixedSupplyTransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc20PresetFixedSupplyABI,
          'transferFrom'
        >['request']['abi'],
        'transferFrom',
        TMode
      > & { functionName?: 'transferFrom' }
    : UseContractWriteConfig<
        typeof erc20PresetFixedSupplyABI,
        'transferFrom',
        TMode
      > & {
        abi?: never
        functionName?: 'transferFrom'
      } = {} as any,
) {
  return useContractWrite<
    typeof erc20PresetFixedSupplyABI,
    'transferFrom',
    TMode
  >({
    abi: erc20PresetFixedSupplyABI,
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20PresetFixedSupplyABI}__.
 */
export function usePrepareErc20PresetFixedSupplyWrite<
  TFunctionName extends string,
>(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof erc20PresetFixedSupplyABI,
      TFunctionName
    >,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc20PresetFixedSupplyABI,
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof erc20PresetFixedSupplyABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20PresetFixedSupplyABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareErc20PresetFixedSupplyApprove(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20PresetFixedSupplyABI, 'approve'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc20PresetFixedSupplyABI,
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof erc20PresetFixedSupplyABI,
    'approve'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20PresetFixedSupplyABI}__ and `functionName` set to `"burn"`.
 */
export function usePrepareErc20PresetFixedSupplyBurn(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20PresetFixedSupplyABI, 'burn'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc20PresetFixedSupplyABI,
    functionName: 'burn',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20PresetFixedSupplyABI, 'burn'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20PresetFixedSupplyABI}__ and `functionName` set to `"burnFrom"`.
 */
export function usePrepareErc20PresetFixedSupplyBurnFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20PresetFixedSupplyABI, 'burnFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc20PresetFixedSupplyABI,
    functionName: 'burnFrom',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof erc20PresetFixedSupplyABI,
    'burnFrom'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20PresetFixedSupplyABI}__ and `functionName` set to `"decreaseAllowance"`.
 */
export function usePrepareErc20PresetFixedSupplyDecreaseAllowance(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof erc20PresetFixedSupplyABI,
      'decreaseAllowance'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc20PresetFixedSupplyABI,
    functionName: 'decreaseAllowance',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof erc20PresetFixedSupplyABI,
    'decreaseAllowance'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20PresetFixedSupplyABI}__ and `functionName` set to `"increaseAllowance"`.
 */
export function usePrepareErc20PresetFixedSupplyIncreaseAllowance(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof erc20PresetFixedSupplyABI,
      'increaseAllowance'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc20PresetFixedSupplyABI,
    functionName: 'increaseAllowance',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof erc20PresetFixedSupplyABI,
    'increaseAllowance'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20PresetFixedSupplyABI}__ and `functionName` set to `"transfer"`.
 */
export function usePrepareErc20PresetFixedSupplyTransfer(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20PresetFixedSupplyABI, 'transfer'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc20PresetFixedSupplyABI,
    functionName: 'transfer',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof erc20PresetFixedSupplyABI,
    'transfer'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20PresetFixedSupplyABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareErc20PresetFixedSupplyTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof erc20PresetFixedSupplyABI,
      'transferFrom'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc20PresetFixedSupplyABI,
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof erc20PresetFixedSupplyABI,
    'transferFrom'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc20PresetFixedSupplyABI}__.
 */
export function useErc20PresetFixedSupplyEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof erc20PresetFixedSupplyABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc20PresetFixedSupplyABI,
    ...config,
  } as UseContractEventConfig<typeof erc20PresetFixedSupplyABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc20PresetFixedSupplyABI}__ and `eventName` set to `"Approval"`.
 */
export function useErc20PresetFixedSupplyApprovalEvent(
  config: Omit<
    UseContractEventConfig<typeof erc20PresetFixedSupplyABI, 'Approval'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc20PresetFixedSupplyABI,
    eventName: 'Approval',
    ...config,
  } as UseContractEventConfig<typeof erc20PresetFixedSupplyABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc20PresetFixedSupplyABI}__ and `eventName` set to `"Transfer"`.
 */
export function useErc20PresetFixedSupplyTransferEvent(
  config: Omit<
    UseContractEventConfig<typeof erc20PresetFixedSupplyABI, 'Transfer'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc20PresetFixedSupplyABI,
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof erc20PresetFixedSupplyABI, 'Transfer'>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link fallbackManagerABI}__.
 */
export function useFallbackManagerWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof fallbackManagerABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<
        typeof fallbackManagerABI,
        TFunctionName,
        TMode
      > & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof fallbackManagerABI, TFunctionName, TMode>({
    abi: fallbackManagerABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link fallbackManagerABI}__ and `functionName` set to `"setFallbackHandler"`.
 */
export function useFallbackManagerSetFallbackHandler<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof fallbackManagerABI,
          'setFallbackHandler'
        >['request']['abi'],
        'setFallbackHandler',
        TMode
      > & { functionName?: 'setFallbackHandler' }
    : UseContractWriteConfig<
        typeof fallbackManagerABI,
        'setFallbackHandler',
        TMode
      > & {
        abi?: never
        functionName?: 'setFallbackHandler'
      } = {} as any,
) {
  return useContractWrite<
    typeof fallbackManagerABI,
    'setFallbackHandler',
    TMode
  >({
    abi: fallbackManagerABI,
    functionName: 'setFallbackHandler',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link fallbackManagerABI}__.
 */
export function usePrepareFallbackManagerWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof fallbackManagerABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: fallbackManagerABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof fallbackManagerABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link fallbackManagerABI}__ and `functionName` set to `"setFallbackHandler"`.
 */
export function usePrepareFallbackManagerSetFallbackHandler(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof fallbackManagerABI,
      'setFallbackHandler'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: fallbackManagerABI,
    functionName: 'setFallbackHandler',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof fallbackManagerABI,
    'setFallbackHandler'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link fallbackManagerABI}__.
 */
export function useFallbackManagerEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof fallbackManagerABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: fallbackManagerABI,
    ...config,
  } as UseContractEventConfig<typeof fallbackManagerABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link fallbackManagerABI}__ and `eventName` set to `"ChangedFallbackHandler"`.
 */
export function useFallbackManagerChangedFallbackHandlerEvent(
  config: Omit<
    UseContractEventConfig<typeof fallbackManagerABI, 'ChangedFallbackHandler'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: fallbackManagerABI,
    eventName: 'ChangedFallbackHandler',
    ...config,
  } as UseContractEventConfig<
    typeof fallbackManagerABI,
    'ChangedFallbackHandler'
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link guardABI}__.
 */
export function useGuardRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof guardABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof guardABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({ abi: guardABI, ...config } as UseContractReadConfig<
    typeof guardABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link guardABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function useGuardSupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof guardABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof guardABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: guardABI,
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<typeof guardABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link guardABI}__.
 */
export function useGuardWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof guardABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof guardABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof guardABI, TFunctionName, TMode>({
    abi: guardABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link guardABI}__ and `functionName` set to `"checkAfterExecution"`.
 */
export function useGuardCheckAfterExecution<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof guardABI,
          'checkAfterExecution'
        >['request']['abi'],
        'checkAfterExecution',
        TMode
      > & { functionName?: 'checkAfterExecution' }
    : UseContractWriteConfig<typeof guardABI, 'checkAfterExecution', TMode> & {
        abi?: never
        functionName?: 'checkAfterExecution'
      } = {} as any,
) {
  return useContractWrite<typeof guardABI, 'checkAfterExecution', TMode>({
    abi: guardABI,
    functionName: 'checkAfterExecution',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link guardABI}__ and `functionName` set to `"checkTransaction"`.
 */
export function useGuardCheckTransaction<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof guardABI,
          'checkTransaction'
        >['request']['abi'],
        'checkTransaction',
        TMode
      > & { functionName?: 'checkTransaction' }
    : UseContractWriteConfig<typeof guardABI, 'checkTransaction', TMode> & {
        abi?: never
        functionName?: 'checkTransaction'
      } = {} as any,
) {
  return useContractWrite<typeof guardABI, 'checkTransaction', TMode>({
    abi: guardABI,
    functionName: 'checkTransaction',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link guardABI}__.
 */
export function usePrepareGuardWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof guardABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: guardABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof guardABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link guardABI}__ and `functionName` set to `"checkAfterExecution"`.
 */
export function usePrepareGuardCheckAfterExecution(
  config: Omit<
    UsePrepareContractWriteConfig<typeof guardABI, 'checkAfterExecution'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: guardABI,
    functionName: 'checkAfterExecution',
    ...config,
  } as UsePrepareContractWriteConfig<typeof guardABI, 'checkAfterExecution'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link guardABI}__ and `functionName` set to `"checkTransaction"`.
 */
export function usePrepareGuardCheckTransaction(
  config: Omit<
    UsePrepareContractWriteConfig<typeof guardABI, 'checkTransaction'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: guardABI,
    functionName: 'checkTransaction',
    ...config,
  } as UsePrepareContractWriteConfig<typeof guardABI, 'checkTransaction'>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link guardManagerABI}__.
 */
export function useGuardManagerWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof guardManagerABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof guardManagerABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof guardManagerABI, TFunctionName, TMode>({
    abi: guardManagerABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link guardManagerABI}__ and `functionName` set to `"setGuard"`.
 */
export function useGuardManagerSetGuard<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof guardManagerABI,
          'setGuard'
        >['request']['abi'],
        'setGuard',
        TMode
      > & { functionName?: 'setGuard' }
    : UseContractWriteConfig<typeof guardManagerABI, 'setGuard', TMode> & {
        abi?: never
        functionName?: 'setGuard'
      } = {} as any,
) {
  return useContractWrite<typeof guardManagerABI, 'setGuard', TMode>({
    abi: guardManagerABI,
    functionName: 'setGuard',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link guardManagerABI}__.
 */
export function usePrepareGuardManagerWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof guardManagerABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: guardManagerABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof guardManagerABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link guardManagerABI}__ and `functionName` set to `"setGuard"`.
 */
export function usePrepareGuardManagerSetGuard(
  config: Omit<
    UsePrepareContractWriteConfig<typeof guardManagerABI, 'setGuard'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: guardManagerABI,
    functionName: 'setGuard',
    ...config,
  } as UsePrepareContractWriteConfig<typeof guardManagerABI, 'setGuard'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link guardManagerABI}__.
 */
export function useGuardManagerEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof guardManagerABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: guardManagerABI,
    ...config,
  } as UseContractEventConfig<typeof guardManagerABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link guardManagerABI}__ and `eventName` set to `"ChangedGuard"`.
 */
export function useGuardManagerChangedGuardEvent(
  config: Omit<
    UseContractEventConfig<typeof guardManagerABI, 'ChangedGuard'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: guardManagerABI,
    eventName: 'ChangedGuard',
    ...config,
  } as UseContractEventConfig<typeof guardManagerABI, 'ChangedGuard'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link harvesterPluginABI}__.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xf249209905Ed226966E956C104baf8C766d47706)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xf249209905Ed226966E956C104baf8C766d47706)
 * -
 */
export function useHarvesterPluginRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof harvesterPluginABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof harvesterPluginABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'address'
  > & { chainId?: keyof typeof harvesterPluginAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: harvesterPluginABI,
    address:
      harvesterPluginAddress[chainId as keyof typeof harvesterPluginAddress],
    ...config,
  } as UseContractReadConfig<
    typeof harvesterPluginABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link harvesterPluginABI}__ and `functionName` set to `"checkUpkeep"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xf249209905Ed226966E956C104baf8C766d47706)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xf249209905Ed226966E956C104baf8C766d47706)
 * -
 */
export function useHarvesterPluginCheckUpkeep<
  TFunctionName extends 'checkUpkeep',
  TSelectData = ReadContractResult<typeof harvesterPluginABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof harvesterPluginABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof harvesterPluginAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: harvesterPluginABI,
    address:
      harvesterPluginAddress[chainId as keyof typeof harvesterPluginAddress],
    functionName: 'checkUpkeep',
    ...config,
  } as UseContractReadConfig<
    typeof harvesterPluginABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link harvesterPluginABI}__ and `functionName` set to `"getSafes"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xf249209905Ed226966E956C104baf8C766d47706)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xf249209905Ed226966E956C104baf8C766d47706)
 * -
 */
export function useHarvesterPluginGetSafes<
  TFunctionName extends 'getSafes',
  TSelectData = ReadContractResult<typeof harvesterPluginABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof harvesterPluginABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof harvesterPluginAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: harvesterPluginABI,
    address:
      harvesterPluginAddress[chainId as keyof typeof harvesterPluginAddress],
    functionName: 'getSafes',
    ...config,
  } as UseContractReadConfig<
    typeof harvesterPluginABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link harvesterPluginABI}__ and `functionName` set to `"metadataHash"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xf249209905Ed226966E956C104baf8C766d47706)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xf249209905Ed226966E956C104baf8C766d47706)
 * -
 */
export function useHarvesterPluginMetadataHash<
  TFunctionName extends 'metadataHash',
  TSelectData = ReadContractResult<typeof harvesterPluginABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof harvesterPluginABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof harvesterPluginAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: harvesterPluginABI,
    address:
      harvesterPluginAddress[chainId as keyof typeof harvesterPluginAddress],
    functionName: 'metadataHash',
    ...config,
  } as UseContractReadConfig<
    typeof harvesterPluginABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link harvesterPluginABI}__ and `functionName` set to `"metadataProvider"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xf249209905Ed226966E956C104baf8C766d47706)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xf249209905Ed226966E956C104baf8C766d47706)
 * -
 */
export function useHarvesterPluginMetadataProvider<
  TFunctionName extends 'metadataProvider',
  TSelectData = ReadContractResult<typeof harvesterPluginABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof harvesterPluginABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof harvesterPluginAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: harvesterPluginABI,
    address:
      harvesterPluginAddress[chainId as keyof typeof harvesterPluginAddress],
    functionName: 'metadataProvider',
    ...config,
  } as UseContractReadConfig<
    typeof harvesterPluginABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link harvesterPluginABI}__ and `functionName` set to `"name"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xf249209905Ed226966E956C104baf8C766d47706)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xf249209905Ed226966E956C104baf8C766d47706)
 * -
 */
export function useHarvesterPluginName<
  TFunctionName extends 'name',
  TSelectData = ReadContractResult<typeof harvesterPluginABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof harvesterPluginABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof harvesterPluginAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: harvesterPluginABI,
    address:
      harvesterPluginAddress[chainId as keyof typeof harvesterPluginAddress],
    functionName: 'name',
    ...config,
  } as UseContractReadConfig<
    typeof harvesterPluginABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link harvesterPluginABI}__ and `functionName` set to `"requiresRootAccess"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xf249209905Ed226966E956C104baf8C766d47706)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xf249209905Ed226966E956C104baf8C766d47706)
 * -
 */
export function useHarvesterPluginRequiresRootAccess<
  TFunctionName extends 'requiresRootAccess',
  TSelectData = ReadContractResult<typeof harvesterPluginABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof harvesterPluginABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof harvesterPluginAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: harvesterPluginABI,
    address:
      harvesterPluginAddress[chainId as keyof typeof harvesterPluginAddress],
    functionName: 'requiresRootAccess',
    ...config,
  } as UseContractReadConfig<
    typeof harvesterPluginABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link harvesterPluginABI}__ and `functionName` set to `"retrieveMetadata"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xf249209905Ed226966E956C104baf8C766d47706)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xf249209905Ed226966E956C104baf8C766d47706)
 * -
 */
export function useHarvesterPluginRetrieveMetadata<
  TFunctionName extends 'retrieveMetadata',
  TSelectData = ReadContractResult<typeof harvesterPluginABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof harvesterPluginABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof harvesterPluginAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: harvesterPluginABI,
    address:
      harvesterPluginAddress[chainId as keyof typeof harvesterPluginAddress],
    functionName: 'retrieveMetadata',
    ...config,
  } as UseContractReadConfig<
    typeof harvesterPluginABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link harvesterPluginABI}__ and `functionName` set to `"safeConfigs"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xf249209905Ed226966E956C104baf8C766d47706)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xf249209905Ed226966E956C104baf8C766d47706)
 * -
 */
export function useHarvesterPluginSafeConfigs<
  TFunctionName extends 'safeConfigs',
  TSelectData = ReadContractResult<typeof harvesterPluginABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof harvesterPluginABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof harvesterPluginAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: harvesterPluginABI,
    address:
      harvesterPluginAddress[chainId as keyof typeof harvesterPluginAddress],
    functionName: 'safeConfigs',
    ...config,
  } as UseContractReadConfig<
    typeof harvesterPluginABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link harvesterPluginABI}__ and `functionName` set to `"supportsInterface"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xf249209905Ed226966E956C104baf8C766d47706)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xf249209905Ed226966E956C104baf8C766d47706)
 * -
 */
export function useHarvesterPluginSupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof harvesterPluginABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof harvesterPluginABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof harvesterPluginAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: harvesterPluginABI,
    address:
      harvesterPluginAddress[chainId as keyof typeof harvesterPluginAddress],
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<
    typeof harvesterPluginABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link harvesterPluginABI}__ and `functionName` set to `"version"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xf249209905Ed226966E956C104baf8C766d47706)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xf249209905Ed226966E956C104baf8C766d47706)
 * -
 */
export function useHarvesterPluginVersion<
  TFunctionName extends 'version',
  TSelectData = ReadContractResult<typeof harvesterPluginABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof harvesterPluginABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof harvesterPluginAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: harvesterPluginABI,
    address:
      harvesterPluginAddress[chainId as keyof typeof harvesterPluginAddress],
    functionName: 'version',
    ...config,
  } as UseContractReadConfig<
    typeof harvesterPluginABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link harvesterPluginABI}__.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xf249209905Ed226966E956C104baf8C766d47706)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xf249209905Ed226966E956C104baf8C766d47706)
 * -
 */
export function useHarvesterPluginWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof harvesterPluginAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof harvesterPluginABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      > & { address?: Address; chainId?: TChainId }
    : UseContractWriteConfig<
        typeof harvesterPluginABI,
        TFunctionName,
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof harvesterPluginABI, TFunctionName, TMode>({
    abi: harvesterPluginABI,
    address:
      harvesterPluginAddress[chainId as keyof typeof harvesterPluginAddress],
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link harvesterPluginABI}__ and `functionName` set to `"addRelayer"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xf249209905Ed226966E956C104baf8C766d47706)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xf249209905Ed226966E956C104baf8C766d47706)
 * -
 */
export function useHarvesterPluginAddRelayer<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof harvesterPluginAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof harvesterPluginABI,
          'addRelayer'
        >['request']['abi'],
        'addRelayer',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'addRelayer' }
    : UseContractWriteConfig<typeof harvesterPluginABI, 'addRelayer', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'addRelayer'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof harvesterPluginABI, 'addRelayer', TMode>({
    abi: harvesterPluginABI,
    address:
      harvesterPluginAddress[chainId as keyof typeof harvesterPluginAddress],
    functionName: 'addRelayer',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link harvesterPluginABI}__ and `functionName` set to `"performUpkeep"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xf249209905Ed226966E956C104baf8C766d47706)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xf249209905Ed226966E956C104baf8C766d47706)
 * -
 */
export function useHarvesterPluginPerformUpkeep<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof harvesterPluginAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof harvesterPluginABI,
          'performUpkeep'
        >['request']['abi'],
        'performUpkeep',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'performUpkeep'
      }
    : UseContractWriteConfig<
        typeof harvesterPluginABI,
        'performUpkeep',
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'performUpkeep'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof harvesterPluginABI, 'performUpkeep', TMode>({
    abi: harvesterPluginABI,
    address:
      harvesterPluginAddress[chainId as keyof typeof harvesterPluginAddress],
    functionName: 'performUpkeep',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link harvesterPluginABI}__ and `functionName` set to `"removeRelayer"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xf249209905Ed226966E956C104baf8C766d47706)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xf249209905Ed226966E956C104baf8C766d47706)
 * -
 */
export function useHarvesterPluginRemoveRelayer<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof harvesterPluginAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof harvesterPluginABI,
          'removeRelayer'
        >['request']['abi'],
        'removeRelayer',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'removeRelayer'
      }
    : UseContractWriteConfig<
        typeof harvesterPluginABI,
        'removeRelayer',
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'removeRelayer'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof harvesterPluginABI, 'removeRelayer', TMode>({
    abi: harvesterPluginABI,
    address:
      harvesterPluginAddress[chainId as keyof typeof harvesterPluginAddress],
    functionName: 'removeRelayer',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link harvesterPluginABI}__ and `functionName` set to `"setSafeConfig"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xf249209905Ed226966E956C104baf8C766d47706)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xf249209905Ed226966E956C104baf8C766d47706)
 * -
 */
export function useHarvesterPluginSetSafeConfig<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof harvesterPluginAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof harvesterPluginABI,
          'setSafeConfig'
        >['request']['abi'],
        'setSafeConfig',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'setSafeConfig'
      }
    : UseContractWriteConfig<
        typeof harvesterPluginABI,
        'setSafeConfig',
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setSafeConfig'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof harvesterPluginABI, 'setSafeConfig', TMode>({
    abi: harvesterPluginABI,
    address:
      harvesterPluginAddress[chainId as keyof typeof harvesterPluginAddress],
    functionName: 'setSafeConfig',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link harvesterPluginABI}__.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xf249209905Ed226966E956C104baf8C766d47706)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xf249209905Ed226966E956C104baf8C766d47706)
 * -
 */
export function usePrepareHarvesterPluginWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof harvesterPluginABI, TFunctionName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof harvesterPluginAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: harvesterPluginABI,
    address:
      harvesterPluginAddress[chainId as keyof typeof harvesterPluginAddress],
    ...config,
  } as UsePrepareContractWriteConfig<typeof harvesterPluginABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link harvesterPluginABI}__ and `functionName` set to `"addRelayer"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xf249209905Ed226966E956C104baf8C766d47706)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xf249209905Ed226966E956C104baf8C766d47706)
 * -
 */
export function usePrepareHarvesterPluginAddRelayer(
  config: Omit<
    UsePrepareContractWriteConfig<typeof harvesterPluginABI, 'addRelayer'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof harvesterPluginAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: harvesterPluginABI,
    address:
      harvesterPluginAddress[chainId as keyof typeof harvesterPluginAddress],
    functionName: 'addRelayer',
    ...config,
  } as UsePrepareContractWriteConfig<typeof harvesterPluginABI, 'addRelayer'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link harvesterPluginABI}__ and `functionName` set to `"performUpkeep"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xf249209905Ed226966E956C104baf8C766d47706)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xf249209905Ed226966E956C104baf8C766d47706)
 * -
 */
export function usePrepareHarvesterPluginPerformUpkeep(
  config: Omit<
    UsePrepareContractWriteConfig<typeof harvesterPluginABI, 'performUpkeep'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof harvesterPluginAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: harvesterPluginABI,
    address:
      harvesterPluginAddress[chainId as keyof typeof harvesterPluginAddress],
    functionName: 'performUpkeep',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof harvesterPluginABI,
    'performUpkeep'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link harvesterPluginABI}__ and `functionName` set to `"removeRelayer"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xf249209905Ed226966E956C104baf8C766d47706)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xf249209905Ed226966E956C104baf8C766d47706)
 * -
 */
export function usePrepareHarvesterPluginRemoveRelayer(
  config: Omit<
    UsePrepareContractWriteConfig<typeof harvesterPluginABI, 'removeRelayer'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof harvesterPluginAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: harvesterPluginABI,
    address:
      harvesterPluginAddress[chainId as keyof typeof harvesterPluginAddress],
    functionName: 'removeRelayer',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof harvesterPluginABI,
    'removeRelayer'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link harvesterPluginABI}__ and `functionName` set to `"setSafeConfig"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xf249209905Ed226966E956C104baf8C766d47706)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xf249209905Ed226966E956C104baf8C766d47706)
 * -
 */
export function usePrepareHarvesterPluginSetSafeConfig(
  config: Omit<
    UsePrepareContractWriteConfig<typeof harvesterPluginABI, 'setSafeConfig'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof harvesterPluginAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: harvesterPluginABI,
    address:
      harvesterPluginAddress[chainId as keyof typeof harvesterPluginAddress],
    functionName: 'setSafeConfig',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof harvesterPluginABI,
    'setSafeConfig'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link harvesterPluginABI}__.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xf249209905Ed226966E956C104baf8C766d47706)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xf249209905Ed226966E956C104baf8C766d47706)
 * -
 */
export function useHarvesterPluginEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof harvesterPluginABI, TEventName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof harvesterPluginAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: harvesterPluginABI,
    address:
      harvesterPluginAddress[chainId as keyof typeof harvesterPluginAddress],
    ...config,
  } as UseContractEventConfig<typeof harvesterPluginABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link harvesterPluginABI}__ and `eventName` set to `"PluginTransactionExec"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xf249209905Ed226966E956C104baf8C766d47706)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xf249209905Ed226966E956C104baf8C766d47706)
 * -
 */
export function useHarvesterPluginPluginTransactionExecEvent(
  config: Omit<
    UseContractEventConfig<typeof harvesterPluginABI, 'PluginTransactionExec'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof harvesterPluginAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: harvesterPluginABI,
    address:
      harvesterPluginAddress[chainId as keyof typeof harvesterPluginAddress],
    eventName: 'PluginTransactionExec',
    ...config,
  } as UseContractEventConfig<
    typeof harvesterPluginABI,
    'PluginTransactionExec'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link harvesterPluginABI}__ and `eventName` set to `"RelayerAdded"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xf249209905Ed226966E956C104baf8C766d47706)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xf249209905Ed226966E956C104baf8C766d47706)
 * -
 */
export function useHarvesterPluginRelayerAddedEvent(
  config: Omit<
    UseContractEventConfig<typeof harvesterPluginABI, 'RelayerAdded'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof harvesterPluginAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: harvesterPluginABI,
    address:
      harvesterPluginAddress[chainId as keyof typeof harvesterPluginAddress],
    eventName: 'RelayerAdded',
    ...config,
  } as UseContractEventConfig<typeof harvesterPluginABI, 'RelayerAdded'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link harvesterPluginABI}__ and `eventName` set to `"RelayerRemoved"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xf249209905Ed226966E956C104baf8C766d47706)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xf249209905Ed226966E956C104baf8C766d47706)
 * -
 */
export function useHarvesterPluginRelayerRemovedEvent(
  config: Omit<
    UseContractEventConfig<typeof harvesterPluginABI, 'RelayerRemoved'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof harvesterPluginAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: harvesterPluginABI,
    address:
      harvesterPluginAddress[chainId as keyof typeof harvesterPluginAddress],
    eventName: 'RelayerRemoved',
    ...config,
  } as UseContractEventConfig<typeof harvesterPluginABI, 'RelayerRemoved'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link hooksManagerABI}__.
 */
export function useHooksManagerRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof hooksManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof hooksManagerABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: hooksManagerABI,
    ...config,
  } as UseContractReadConfig<
    typeof hooksManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link hooksManagerABI}__ and `functionName` set to `"enabledHooks"`.
 */
export function useHooksManagerEnabledHooks<
  TFunctionName extends 'enabledHooks',
  TSelectData = ReadContractResult<typeof hooksManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof hooksManagerABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: hooksManagerABI,
    functionName: 'enabledHooks',
    ...config,
  } as UseContractReadConfig<
    typeof hooksManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link hooksManagerABI}__ and `functionName` set to `"getEnabledHooks"`.
 */
export function useHooksManagerGetEnabledHooks<
  TFunctionName extends 'getEnabledHooks',
  TSelectData = ReadContractResult<typeof hooksManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof hooksManagerABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: hooksManagerABI,
    functionName: 'getEnabledHooks',
    ...config,
  } as UseContractReadConfig<
    typeof hooksManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link hooksManagerABI}__ and `functionName` set to `"tempHooksAddress"`.
 */
export function useHooksManagerTempHooksAddress<
  TFunctionName extends 'tempHooksAddress',
  TSelectData = ReadContractResult<typeof hooksManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof hooksManagerABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: hooksManagerABI,
    functionName: 'tempHooksAddress',
    ...config,
  } as UseContractReadConfig<
    typeof hooksManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link hooksManagerABI}__.
 */
export function useHooksManagerWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof hooksManagerABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof hooksManagerABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof hooksManagerABI, TFunctionName, TMode>({
    abi: hooksManagerABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link hooksManagerABI}__ and `functionName` set to `"setHooks"`.
 */
export function useHooksManagerSetHooks<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof hooksManagerABI,
          'setHooks'
        >['request']['abi'],
        'setHooks',
        TMode
      > & { functionName?: 'setHooks' }
    : UseContractWriteConfig<typeof hooksManagerABI, 'setHooks', TMode> & {
        abi?: never
        functionName?: 'setHooks'
      } = {} as any,
) {
  return useContractWrite<typeof hooksManagerABI, 'setHooks', TMode>({
    abi: hooksManagerABI,
    functionName: 'setHooks',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link hooksManagerABI}__.
 */
export function usePrepareHooksManagerWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof hooksManagerABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: hooksManagerABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof hooksManagerABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link hooksManagerABI}__ and `functionName` set to `"setHooks"`.
 */
export function usePrepareHooksManagerSetHooks(
  config: Omit<
    UsePrepareContractWriteConfig<typeof hooksManagerABI, 'setHooks'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: hooksManagerABI,
    functionName: 'setHooks',
    ...config,
  } as UsePrepareContractWriteConfig<typeof hooksManagerABI, 'setHooks'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link hooksManagerABI}__.
 */
export function useHooksManagerEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof hooksManagerABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: hooksManagerABI,
    ...config,
  } as UseContractEventConfig<typeof hooksManagerABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link hooksManagerABI}__ and `eventName` set to `"HooksChanged"`.
 */
export function useHooksManagerHooksChangedEvent(
  config: Omit<
    UseContractEventConfig<typeof hooksManagerABI, 'HooksChanged'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: hooksManagerABI,
    eventName: 'HooksChanged',
    ...config,
  } as UseContractEventConfig<typeof hooksManagerABI, 'HooksChanged'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc20ABI}__.
 */
export function useIerc20Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof ierc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc20ABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({ abi: ierc20ABI, ...config } as UseContractReadConfig<
    typeof ierc20ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc20ABI}__ and `functionName` set to `"allowance"`.
 */
export function useIerc20Allowance<
  TFunctionName extends 'allowance',
  TSelectData = ReadContractResult<typeof ierc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc20ABI,
    functionName: 'allowance',
    ...config,
  } as UseContractReadConfig<typeof ierc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc20ABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useIerc20BalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof ierc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc20ABI,
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<typeof ierc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc20ABI}__ and `functionName` set to `"totalSupply"`.
 */
export function useIerc20TotalSupply<
  TFunctionName extends 'totalSupply',
  TSelectData = ReadContractResult<typeof ierc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc20ABI,
    functionName: 'totalSupply',
    ...config,
  } as UseContractReadConfig<typeof ierc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc20ABI}__.
 */
export function useIerc20Write<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof ierc20ABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof ierc20ABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof ierc20ABI, TFunctionName, TMode>({
    abi: ierc20ABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc20ABI}__ and `functionName` set to `"approve"`.
 */
export function useIerc20Approve<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc20ABI,
          'approve'
        >['request']['abi'],
        'approve',
        TMode
      > & { functionName?: 'approve' }
    : UseContractWriteConfig<typeof ierc20ABI, 'approve', TMode> & {
        abi?: never
        functionName?: 'approve'
      } = {} as any,
) {
  return useContractWrite<typeof ierc20ABI, 'approve', TMode>({
    abi: ierc20ABI,
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc20ABI}__ and `functionName` set to `"transfer"`.
 */
export function useIerc20Transfer<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc20ABI,
          'transfer'
        >['request']['abi'],
        'transfer',
        TMode
      > & { functionName?: 'transfer' }
    : UseContractWriteConfig<typeof ierc20ABI, 'transfer', TMode> & {
        abi?: never
        functionName?: 'transfer'
      } = {} as any,
) {
  return useContractWrite<typeof ierc20ABI, 'transfer', TMode>({
    abi: ierc20ABI,
    functionName: 'transfer',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc20ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useIerc20TransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc20ABI,
          'transferFrom'
        >['request']['abi'],
        'transferFrom',
        TMode
      > & { functionName?: 'transferFrom' }
    : UseContractWriteConfig<typeof ierc20ABI, 'transferFrom', TMode> & {
        abi?: never
        functionName?: 'transferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof ierc20ABI, 'transferFrom', TMode>({
    abi: ierc20ABI,
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc20ABI}__.
 */
export function usePrepareIerc20Write<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc20ABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc20ABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc20ABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc20ABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareIerc20Approve(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc20ABI, 'approve'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc20ABI,
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc20ABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc20ABI}__ and `functionName` set to `"transfer"`.
 */
export function usePrepareIerc20Transfer(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc20ABI, 'transfer'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc20ABI,
    functionName: 'transfer',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc20ABI, 'transfer'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc20ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareIerc20TransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc20ABI, 'transferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc20ABI,
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc20ABI, 'transferFrom'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc20ABI}__.
 */
export function useIerc20Event<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof ierc20ABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc20ABI,
    ...config,
  } as UseContractEventConfig<typeof ierc20ABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc20ABI}__ and `eventName` set to `"Approval"`.
 */
export function useIerc20ApprovalEvent(
  config: Omit<
    UseContractEventConfig<typeof ierc20ABI, 'Approval'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc20ABI,
    eventName: 'Approval',
    ...config,
  } as UseContractEventConfig<typeof ierc20ABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc20ABI}__ and `eventName` set to `"Transfer"`.
 */
export function useIerc20TransferEvent(
  config: Omit<
    UseContractEventConfig<typeof ierc20ABI, 'Transfer'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc20ABI,
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof ierc20ABI, 'Transfer'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc20MetadataABI}__.
 */
export function useIerc20MetadataRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof ierc20MetadataABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc20MetadataABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc20MetadataABI,
    ...config,
  } as UseContractReadConfig<
    typeof ierc20MetadataABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc20MetadataABI}__ and `functionName` set to `"allowance"`.
 */
export function useIerc20MetadataAllowance<
  TFunctionName extends 'allowance',
  TSelectData = ReadContractResult<typeof ierc20MetadataABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc20MetadataABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc20MetadataABI,
    functionName: 'allowance',
    ...config,
  } as UseContractReadConfig<
    typeof ierc20MetadataABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc20MetadataABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useIerc20MetadataBalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof ierc20MetadataABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc20MetadataABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc20MetadataABI,
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<
    typeof ierc20MetadataABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc20MetadataABI}__ and `functionName` set to `"decimals"`.
 */
export function useIerc20MetadataDecimals<
  TFunctionName extends 'decimals',
  TSelectData = ReadContractResult<typeof ierc20MetadataABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc20MetadataABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc20MetadataABI,
    functionName: 'decimals',
    ...config,
  } as UseContractReadConfig<
    typeof ierc20MetadataABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc20MetadataABI}__ and `functionName` set to `"name"`.
 */
export function useIerc20MetadataName<
  TFunctionName extends 'name',
  TSelectData = ReadContractResult<typeof ierc20MetadataABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc20MetadataABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc20MetadataABI,
    functionName: 'name',
    ...config,
  } as UseContractReadConfig<
    typeof ierc20MetadataABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc20MetadataABI}__ and `functionName` set to `"symbol"`.
 */
export function useIerc20MetadataSymbol<
  TFunctionName extends 'symbol',
  TSelectData = ReadContractResult<typeof ierc20MetadataABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc20MetadataABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc20MetadataABI,
    functionName: 'symbol',
    ...config,
  } as UseContractReadConfig<
    typeof ierc20MetadataABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc20MetadataABI}__ and `functionName` set to `"totalSupply"`.
 */
export function useIerc20MetadataTotalSupply<
  TFunctionName extends 'totalSupply',
  TSelectData = ReadContractResult<typeof ierc20MetadataABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc20MetadataABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc20MetadataABI,
    functionName: 'totalSupply',
    ...config,
  } as UseContractReadConfig<
    typeof ierc20MetadataABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc20MetadataABI}__.
 */
export function useIerc20MetadataWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc20MetadataABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof ierc20MetadataABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof ierc20MetadataABI, TFunctionName, TMode>({
    abi: ierc20MetadataABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc20MetadataABI}__ and `functionName` set to `"approve"`.
 */
export function useIerc20MetadataApprove<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc20MetadataABI,
          'approve'
        >['request']['abi'],
        'approve',
        TMode
      > & { functionName?: 'approve' }
    : UseContractWriteConfig<typeof ierc20MetadataABI, 'approve', TMode> & {
        abi?: never
        functionName?: 'approve'
      } = {} as any,
) {
  return useContractWrite<typeof ierc20MetadataABI, 'approve', TMode>({
    abi: ierc20MetadataABI,
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc20MetadataABI}__ and `functionName` set to `"transfer"`.
 */
export function useIerc20MetadataTransfer<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc20MetadataABI,
          'transfer'
        >['request']['abi'],
        'transfer',
        TMode
      > & { functionName?: 'transfer' }
    : UseContractWriteConfig<typeof ierc20MetadataABI, 'transfer', TMode> & {
        abi?: never
        functionName?: 'transfer'
      } = {} as any,
) {
  return useContractWrite<typeof ierc20MetadataABI, 'transfer', TMode>({
    abi: ierc20MetadataABI,
    functionName: 'transfer',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc20MetadataABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useIerc20MetadataTransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc20MetadataABI,
          'transferFrom'
        >['request']['abi'],
        'transferFrom',
        TMode
      > & { functionName?: 'transferFrom' }
    : UseContractWriteConfig<
        typeof ierc20MetadataABI,
        'transferFrom',
        TMode
      > & {
        abi?: never
        functionName?: 'transferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof ierc20MetadataABI, 'transferFrom', TMode>({
    abi: ierc20MetadataABI,
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc20MetadataABI}__.
 */
export function usePrepareIerc20MetadataWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc20MetadataABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc20MetadataABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc20MetadataABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc20MetadataABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareIerc20MetadataApprove(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc20MetadataABI, 'approve'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc20MetadataABI,
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc20MetadataABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc20MetadataABI}__ and `functionName` set to `"transfer"`.
 */
export function usePrepareIerc20MetadataTransfer(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc20MetadataABI, 'transfer'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc20MetadataABI,
    functionName: 'transfer',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc20MetadataABI, 'transfer'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc20MetadataABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareIerc20MetadataTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc20MetadataABI, 'transferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc20MetadataABI,
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc20MetadataABI, 'transferFrom'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc20MetadataABI}__.
 */
export function useIerc20MetadataEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof ierc20MetadataABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc20MetadataABI,
    ...config,
  } as UseContractEventConfig<typeof ierc20MetadataABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc20MetadataABI}__ and `eventName` set to `"Approval"`.
 */
export function useIerc20MetadataApprovalEvent(
  config: Omit<
    UseContractEventConfig<typeof ierc20MetadataABI, 'Approval'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc20MetadataABI,
    eventName: 'Approval',
    ...config,
  } as UseContractEventConfig<typeof ierc20MetadataABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc20MetadataABI}__ and `eventName` set to `"Transfer"`.
 */
export function useIerc20MetadataTransferEvent(
  config: Omit<
    UseContractEventConfig<typeof ierc20MetadataABI, 'Transfer'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc20MetadataABI,
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof ierc20MetadataABI, 'Transfer'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iGaugeABI}__.
 */
export function useIGaugeRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof iGaugeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iGaugeABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({ abi: iGaugeABI, ...config } as UseContractReadConfig<
    typeof iGaugeABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iGaugeABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useIGaugeBalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof iGaugeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iGaugeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iGaugeABI,
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<typeof iGaugeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iGaugeABI}__ and `functionName` set to `"earned"`.
 */
export function useIGaugeEarned<
  TFunctionName extends 'earned',
  TSelectData = ReadContractResult<typeof iGaugeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iGaugeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iGaugeABI,
    functionName: 'earned',
    ...config,
  } as UseContractReadConfig<typeof iGaugeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iGaugeABI}__ and `functionName` set to `"fees0"`.
 */
export function useIGaugeFees0<
  TFunctionName extends 'fees0',
  TSelectData = ReadContractResult<typeof iGaugeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iGaugeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iGaugeABI,
    functionName: 'fees0',
    ...config,
  } as UseContractReadConfig<typeof iGaugeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iGaugeABI}__ and `functionName` set to `"fees1"`.
 */
export function useIGaugeFees1<
  TFunctionName extends 'fees1',
  TSelectData = ReadContractResult<typeof iGaugeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iGaugeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iGaugeABI,
    functionName: 'fees1',
    ...config,
  } as UseContractReadConfig<typeof iGaugeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iGaugeABI}__ and `functionName` set to `"feesVotingReward"`.
 */
export function useIGaugeFeesVotingReward<
  TFunctionName extends 'feesVotingReward',
  TSelectData = ReadContractResult<typeof iGaugeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iGaugeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iGaugeABI,
    functionName: 'feesVotingReward',
    ...config,
  } as UseContractReadConfig<typeof iGaugeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iGaugeABI}__ and `functionName` set to `"isPool"`.
 */
export function useIGaugeIsPool<
  TFunctionName extends 'isPool',
  TSelectData = ReadContractResult<typeof iGaugeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iGaugeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iGaugeABI,
    functionName: 'isPool',
    ...config,
  } as UseContractReadConfig<typeof iGaugeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iGaugeABI}__ and `functionName` set to `"lastTimeRewardApplicable"`.
 */
export function useIGaugeLastTimeRewardApplicable<
  TFunctionName extends 'lastTimeRewardApplicable',
  TSelectData = ReadContractResult<typeof iGaugeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iGaugeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iGaugeABI,
    functionName: 'lastTimeRewardApplicable',
    ...config,
  } as UseContractReadConfig<typeof iGaugeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iGaugeABI}__ and `functionName` set to `"lastUpdateTime"`.
 */
export function useIGaugeLastUpdateTime<
  TFunctionName extends 'lastUpdateTime',
  TSelectData = ReadContractResult<typeof iGaugeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iGaugeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iGaugeABI,
    functionName: 'lastUpdateTime',
    ...config,
  } as UseContractReadConfig<typeof iGaugeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iGaugeABI}__ and `functionName` set to `"left"`.
 */
export function useIGaugeLeft<
  TFunctionName extends 'left',
  TSelectData = ReadContractResult<typeof iGaugeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iGaugeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iGaugeABI,
    functionName: 'left',
    ...config,
  } as UseContractReadConfig<typeof iGaugeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iGaugeABI}__ and `functionName` set to `"periodFinish"`.
 */
export function useIGaugePeriodFinish<
  TFunctionName extends 'periodFinish',
  TSelectData = ReadContractResult<typeof iGaugeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iGaugeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iGaugeABI,
    functionName: 'periodFinish',
    ...config,
  } as UseContractReadConfig<typeof iGaugeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iGaugeABI}__ and `functionName` set to `"rewardPerToken"`.
 */
export function useIGaugeRewardPerToken<
  TFunctionName extends 'rewardPerToken',
  TSelectData = ReadContractResult<typeof iGaugeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iGaugeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iGaugeABI,
    functionName: 'rewardPerToken',
    ...config,
  } as UseContractReadConfig<typeof iGaugeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iGaugeABI}__ and `functionName` set to `"rewardPerTokenStored"`.
 */
export function useIGaugeRewardPerTokenStored<
  TFunctionName extends 'rewardPerTokenStored',
  TSelectData = ReadContractResult<typeof iGaugeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iGaugeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iGaugeABI,
    functionName: 'rewardPerTokenStored',
    ...config,
  } as UseContractReadConfig<typeof iGaugeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iGaugeABI}__ and `functionName` set to `"rewardRate"`.
 */
export function useIGaugeRewardRate<
  TFunctionName extends 'rewardRate',
  TSelectData = ReadContractResult<typeof iGaugeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iGaugeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iGaugeABI,
    functionName: 'rewardRate',
    ...config,
  } as UseContractReadConfig<typeof iGaugeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iGaugeABI}__ and `functionName` set to `"rewardRateByEpoch"`.
 */
export function useIGaugeRewardRateByEpoch<
  TFunctionName extends 'rewardRateByEpoch',
  TSelectData = ReadContractResult<typeof iGaugeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iGaugeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iGaugeABI,
    functionName: 'rewardRateByEpoch',
    ...config,
  } as UseContractReadConfig<typeof iGaugeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iGaugeABI}__ and `functionName` set to `"rewardToken"`.
 */
export function useIGaugeRewardToken<
  TFunctionName extends 'rewardToken',
  TSelectData = ReadContractResult<typeof iGaugeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iGaugeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iGaugeABI,
    functionName: 'rewardToken',
    ...config,
  } as UseContractReadConfig<typeof iGaugeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iGaugeABI}__ and `functionName` set to `"rewards"`.
 */
export function useIGaugeRewards<
  TFunctionName extends 'rewards',
  TSelectData = ReadContractResult<typeof iGaugeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iGaugeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iGaugeABI,
    functionName: 'rewards',
    ...config,
  } as UseContractReadConfig<typeof iGaugeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iGaugeABI}__ and `functionName` set to `"stakingToken"`.
 */
export function useIGaugeStakingToken<
  TFunctionName extends 'stakingToken',
  TSelectData = ReadContractResult<typeof iGaugeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iGaugeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iGaugeABI,
    functionName: 'stakingToken',
    ...config,
  } as UseContractReadConfig<typeof iGaugeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iGaugeABI}__ and `functionName` set to `"totalSupply"`.
 */
export function useIGaugeTotalSupply<
  TFunctionName extends 'totalSupply',
  TSelectData = ReadContractResult<typeof iGaugeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iGaugeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iGaugeABI,
    functionName: 'totalSupply',
    ...config,
  } as UseContractReadConfig<typeof iGaugeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iGaugeABI}__ and `functionName` set to `"userRewardPerTokenPaid"`.
 */
export function useIGaugeUserRewardPerTokenPaid<
  TFunctionName extends 'userRewardPerTokenPaid',
  TSelectData = ReadContractResult<typeof iGaugeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iGaugeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iGaugeABI,
    functionName: 'userRewardPerTokenPaid',
    ...config,
  } as UseContractReadConfig<typeof iGaugeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iGaugeABI}__ and `functionName` set to `"voter"`.
 */
export function useIGaugeVoter<
  TFunctionName extends 'voter',
  TSelectData = ReadContractResult<typeof iGaugeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iGaugeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iGaugeABI,
    functionName: 'voter',
    ...config,
  } as UseContractReadConfig<typeof iGaugeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iGaugeABI}__.
 */
export function useIGaugeWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof iGaugeABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof iGaugeABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof iGaugeABI, TFunctionName, TMode>({
    abi: iGaugeABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iGaugeABI}__ and `functionName` set to `"deposit"`.
 */
export function useIGaugeDeposit<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof iGaugeABI,
          'deposit'
        >['request']['abi'],
        'deposit',
        TMode
      > & { functionName?: 'deposit' }
    : UseContractWriteConfig<typeof iGaugeABI, 'deposit', TMode> & {
        abi?: never
        functionName?: 'deposit'
      } = {} as any,
) {
  return useContractWrite<typeof iGaugeABI, 'deposit', TMode>({
    abi: iGaugeABI,
    functionName: 'deposit',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iGaugeABI}__ and `functionName` set to `"getReward"`.
 */
export function useIGaugeGetReward<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof iGaugeABI,
          'getReward'
        >['request']['abi'],
        'getReward',
        TMode
      > & { functionName?: 'getReward' }
    : UseContractWriteConfig<typeof iGaugeABI, 'getReward', TMode> & {
        abi?: never
        functionName?: 'getReward'
      } = {} as any,
) {
  return useContractWrite<typeof iGaugeABI, 'getReward', TMode>({
    abi: iGaugeABI,
    functionName: 'getReward',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iGaugeABI}__ and `functionName` set to `"notifyRewardAmount"`.
 */
export function useIGaugeNotifyRewardAmount<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof iGaugeABI,
          'notifyRewardAmount'
        >['request']['abi'],
        'notifyRewardAmount',
        TMode
      > & { functionName?: 'notifyRewardAmount' }
    : UseContractWriteConfig<typeof iGaugeABI, 'notifyRewardAmount', TMode> & {
        abi?: never
        functionName?: 'notifyRewardAmount'
      } = {} as any,
) {
  return useContractWrite<typeof iGaugeABI, 'notifyRewardAmount', TMode>({
    abi: iGaugeABI,
    functionName: 'notifyRewardAmount',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iGaugeABI}__ and `functionName` set to `"withdraw"`.
 */
export function useIGaugeWithdraw<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof iGaugeABI,
          'withdraw'
        >['request']['abi'],
        'withdraw',
        TMode
      > & { functionName?: 'withdraw' }
    : UseContractWriteConfig<typeof iGaugeABI, 'withdraw', TMode> & {
        abi?: never
        functionName?: 'withdraw'
      } = {} as any,
) {
  return useContractWrite<typeof iGaugeABI, 'withdraw', TMode>({
    abi: iGaugeABI,
    functionName: 'withdraw',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iGaugeABI}__.
 */
export function usePrepareIGaugeWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof iGaugeABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iGaugeABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof iGaugeABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iGaugeABI}__ and `functionName` set to `"deposit"`.
 */
export function usePrepareIGaugeDeposit(
  config: Omit<
    UsePrepareContractWriteConfig<typeof iGaugeABI, 'deposit'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iGaugeABI,
    functionName: 'deposit',
    ...config,
  } as UsePrepareContractWriteConfig<typeof iGaugeABI, 'deposit'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iGaugeABI}__ and `functionName` set to `"getReward"`.
 */
export function usePrepareIGaugeGetReward(
  config: Omit<
    UsePrepareContractWriteConfig<typeof iGaugeABI, 'getReward'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iGaugeABI,
    functionName: 'getReward',
    ...config,
  } as UsePrepareContractWriteConfig<typeof iGaugeABI, 'getReward'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iGaugeABI}__ and `functionName` set to `"notifyRewardAmount"`.
 */
export function usePrepareIGaugeNotifyRewardAmount(
  config: Omit<
    UsePrepareContractWriteConfig<typeof iGaugeABI, 'notifyRewardAmount'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iGaugeABI,
    functionName: 'notifyRewardAmount',
    ...config,
  } as UsePrepareContractWriteConfig<typeof iGaugeABI, 'notifyRewardAmount'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iGaugeABI}__ and `functionName` set to `"withdraw"`.
 */
export function usePrepareIGaugeWithdraw(
  config: Omit<
    UsePrepareContractWriteConfig<typeof iGaugeABI, 'withdraw'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iGaugeABI,
    functionName: 'withdraw',
    ...config,
  } as UsePrepareContractWriteConfig<typeof iGaugeABI, 'withdraw'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iGaugeABI}__.
 */
export function useIGaugeEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof iGaugeABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: iGaugeABI,
    ...config,
  } as UseContractEventConfig<typeof iGaugeABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iGaugeABI}__ and `eventName` set to `"ClaimFees"`.
 */
export function useIGaugeClaimFeesEvent(
  config: Omit<
    UseContractEventConfig<typeof iGaugeABI, 'ClaimFees'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: iGaugeABI,
    eventName: 'ClaimFees',
    ...config,
  } as UseContractEventConfig<typeof iGaugeABI, 'ClaimFees'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iGaugeABI}__ and `eventName` set to `"ClaimRewards"`.
 */
export function useIGaugeClaimRewardsEvent(
  config: Omit<
    UseContractEventConfig<typeof iGaugeABI, 'ClaimRewards'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: iGaugeABI,
    eventName: 'ClaimRewards',
    ...config,
  } as UseContractEventConfig<typeof iGaugeABI, 'ClaimRewards'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iGaugeABI}__ and `eventName` set to `"Deposit"`.
 */
export function useIGaugeDepositEvent(
  config: Omit<
    UseContractEventConfig<typeof iGaugeABI, 'Deposit'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: iGaugeABI,
    eventName: 'Deposit',
    ...config,
  } as UseContractEventConfig<typeof iGaugeABI, 'Deposit'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iGaugeABI}__ and `eventName` set to `"NotifyReward"`.
 */
export function useIGaugeNotifyRewardEvent(
  config: Omit<
    UseContractEventConfig<typeof iGaugeABI, 'NotifyReward'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: iGaugeABI,
    eventName: 'NotifyReward',
    ...config,
  } as UseContractEventConfig<typeof iGaugeABI, 'NotifyReward'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iGaugeABI}__ and `eventName` set to `"Withdraw"`.
 */
export function useIGaugeWithdrawEvent(
  config: Omit<
    UseContractEventConfig<typeof iGaugeABI, 'Withdraw'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: iGaugeABI,
    eventName: 'Withdraw',
    ...config,
  } as UseContractEventConfig<typeof iGaugeABI, 'Withdraw'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iMulticall3ABI}__.
 */
export function useIMulticall3Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof iMulticall3ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: iMulticall3ABI,
    ...config,
  } as UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"getBasefee"`.
 */
export function useIMulticall3GetBasefee<
  TFunctionName extends 'getBasefee',
  TSelectData = ReadContractResult<typeof iMulticall3ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iMulticall3ABI,
    functionName: 'getBasefee',
    ...config,
  } as UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"getBlockHash"`.
 */
export function useIMulticall3GetBlockHash<
  TFunctionName extends 'getBlockHash',
  TSelectData = ReadContractResult<typeof iMulticall3ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iMulticall3ABI,
    functionName: 'getBlockHash',
    ...config,
  } as UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"getBlockNumber"`.
 */
export function useIMulticall3GetBlockNumber<
  TFunctionName extends 'getBlockNumber',
  TSelectData = ReadContractResult<typeof iMulticall3ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iMulticall3ABI,
    functionName: 'getBlockNumber',
    ...config,
  } as UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"getChainId"`.
 */
export function useIMulticall3GetChainId<
  TFunctionName extends 'getChainId',
  TSelectData = ReadContractResult<typeof iMulticall3ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iMulticall3ABI,
    functionName: 'getChainId',
    ...config,
  } as UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"getCurrentBlockCoinbase"`.
 */
export function useIMulticall3GetCurrentBlockCoinbase<
  TFunctionName extends 'getCurrentBlockCoinbase',
  TSelectData = ReadContractResult<typeof iMulticall3ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iMulticall3ABI,
    functionName: 'getCurrentBlockCoinbase',
    ...config,
  } as UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"getCurrentBlockDifficulty"`.
 */
export function useIMulticall3GetCurrentBlockDifficulty<
  TFunctionName extends 'getCurrentBlockDifficulty',
  TSelectData = ReadContractResult<typeof iMulticall3ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iMulticall3ABI,
    functionName: 'getCurrentBlockDifficulty',
    ...config,
  } as UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"getCurrentBlockGasLimit"`.
 */
export function useIMulticall3GetCurrentBlockGasLimit<
  TFunctionName extends 'getCurrentBlockGasLimit',
  TSelectData = ReadContractResult<typeof iMulticall3ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iMulticall3ABI,
    functionName: 'getCurrentBlockGasLimit',
    ...config,
  } as UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"getCurrentBlockTimestamp"`.
 */
export function useIMulticall3GetCurrentBlockTimestamp<
  TFunctionName extends 'getCurrentBlockTimestamp',
  TSelectData = ReadContractResult<typeof iMulticall3ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iMulticall3ABI,
    functionName: 'getCurrentBlockTimestamp',
    ...config,
  } as UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"getEthBalance"`.
 */
export function useIMulticall3GetEthBalance<
  TFunctionName extends 'getEthBalance',
  TSelectData = ReadContractResult<typeof iMulticall3ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iMulticall3ABI,
    functionName: 'getEthBalance',
    ...config,
  } as UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"getLastBlockHash"`.
 */
export function useIMulticall3GetLastBlockHash<
  TFunctionName extends 'getLastBlockHash',
  TSelectData = ReadContractResult<typeof iMulticall3ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iMulticall3ABI,
    functionName: 'getLastBlockHash',
    ...config,
  } as UseContractReadConfig<typeof iMulticall3ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iMulticall3ABI}__.
 */
export function useIMulticall3Write<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof iMulticall3ABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof iMulticall3ABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof iMulticall3ABI, TFunctionName, TMode>({
    abi: iMulticall3ABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"aggregate"`.
 */
export function useIMulticall3Aggregate<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof iMulticall3ABI,
          'aggregate'
        >['request']['abi'],
        'aggregate',
        TMode
      > & { functionName?: 'aggregate' }
    : UseContractWriteConfig<typeof iMulticall3ABI, 'aggregate', TMode> & {
        abi?: never
        functionName?: 'aggregate'
      } = {} as any,
) {
  return useContractWrite<typeof iMulticall3ABI, 'aggregate', TMode>({
    abi: iMulticall3ABI,
    functionName: 'aggregate',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"aggregate3"`.
 */
export function useIMulticall3Aggregate3<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof iMulticall3ABI,
          'aggregate3'
        >['request']['abi'],
        'aggregate3',
        TMode
      > & { functionName?: 'aggregate3' }
    : UseContractWriteConfig<typeof iMulticall3ABI, 'aggregate3', TMode> & {
        abi?: never
        functionName?: 'aggregate3'
      } = {} as any,
) {
  return useContractWrite<typeof iMulticall3ABI, 'aggregate3', TMode>({
    abi: iMulticall3ABI,
    functionName: 'aggregate3',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"aggregate3Value"`.
 */
export function useIMulticall3Aggregate3Value<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof iMulticall3ABI,
          'aggregate3Value'
        >['request']['abi'],
        'aggregate3Value',
        TMode
      > & { functionName?: 'aggregate3Value' }
    : UseContractWriteConfig<
        typeof iMulticall3ABI,
        'aggregate3Value',
        TMode
      > & {
        abi?: never
        functionName?: 'aggregate3Value'
      } = {} as any,
) {
  return useContractWrite<typeof iMulticall3ABI, 'aggregate3Value', TMode>({
    abi: iMulticall3ABI,
    functionName: 'aggregate3Value',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"blockAndAggregate"`.
 */
export function useIMulticall3BlockAndAggregate<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof iMulticall3ABI,
          'blockAndAggregate'
        >['request']['abi'],
        'blockAndAggregate',
        TMode
      > & { functionName?: 'blockAndAggregate' }
    : UseContractWriteConfig<
        typeof iMulticall3ABI,
        'blockAndAggregate',
        TMode
      > & {
        abi?: never
        functionName?: 'blockAndAggregate'
      } = {} as any,
) {
  return useContractWrite<typeof iMulticall3ABI, 'blockAndAggregate', TMode>({
    abi: iMulticall3ABI,
    functionName: 'blockAndAggregate',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"tryAggregate"`.
 */
export function useIMulticall3TryAggregate<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof iMulticall3ABI,
          'tryAggregate'
        >['request']['abi'],
        'tryAggregate',
        TMode
      > & { functionName?: 'tryAggregate' }
    : UseContractWriteConfig<typeof iMulticall3ABI, 'tryAggregate', TMode> & {
        abi?: never
        functionName?: 'tryAggregate'
      } = {} as any,
) {
  return useContractWrite<typeof iMulticall3ABI, 'tryAggregate', TMode>({
    abi: iMulticall3ABI,
    functionName: 'tryAggregate',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"tryBlockAndAggregate"`.
 */
export function useIMulticall3TryBlockAndAggregate<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof iMulticall3ABI,
          'tryBlockAndAggregate'
        >['request']['abi'],
        'tryBlockAndAggregate',
        TMode
      > & { functionName?: 'tryBlockAndAggregate' }
    : UseContractWriteConfig<
        typeof iMulticall3ABI,
        'tryBlockAndAggregate',
        TMode
      > & {
        abi?: never
        functionName?: 'tryBlockAndAggregate'
      } = {} as any,
) {
  return useContractWrite<typeof iMulticall3ABI, 'tryBlockAndAggregate', TMode>(
    {
      abi: iMulticall3ABI,
      functionName: 'tryBlockAndAggregate',
      ...config,
    } as any,
  )
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iMulticall3ABI}__.
 */
export function usePrepareIMulticall3Write<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof iMulticall3ABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iMulticall3ABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof iMulticall3ABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"aggregate"`.
 */
export function usePrepareIMulticall3Aggregate(
  config: Omit<
    UsePrepareContractWriteConfig<typeof iMulticall3ABI, 'aggregate'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iMulticall3ABI,
    functionName: 'aggregate',
    ...config,
  } as UsePrepareContractWriteConfig<typeof iMulticall3ABI, 'aggregate'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"aggregate3"`.
 */
export function usePrepareIMulticall3Aggregate3(
  config: Omit<
    UsePrepareContractWriteConfig<typeof iMulticall3ABI, 'aggregate3'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iMulticall3ABI,
    functionName: 'aggregate3',
    ...config,
  } as UsePrepareContractWriteConfig<typeof iMulticall3ABI, 'aggregate3'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"aggregate3Value"`.
 */
export function usePrepareIMulticall3Aggregate3Value(
  config: Omit<
    UsePrepareContractWriteConfig<typeof iMulticall3ABI, 'aggregate3Value'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iMulticall3ABI,
    functionName: 'aggregate3Value',
    ...config,
  } as UsePrepareContractWriteConfig<typeof iMulticall3ABI, 'aggregate3Value'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"blockAndAggregate"`.
 */
export function usePrepareIMulticall3BlockAndAggregate(
  config: Omit<
    UsePrepareContractWriteConfig<typeof iMulticall3ABI, 'blockAndAggregate'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iMulticall3ABI,
    functionName: 'blockAndAggregate',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof iMulticall3ABI,
    'blockAndAggregate'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"tryAggregate"`.
 */
export function usePrepareIMulticall3TryAggregate(
  config: Omit<
    UsePrepareContractWriteConfig<typeof iMulticall3ABI, 'tryAggregate'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iMulticall3ABI,
    functionName: 'tryAggregate',
    ...config,
  } as UsePrepareContractWriteConfig<typeof iMulticall3ABI, 'tryAggregate'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iMulticall3ABI}__ and `functionName` set to `"tryBlockAndAggregate"`.
 */
export function usePrepareIMulticall3TryBlockAndAggregate(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof iMulticall3ABI,
      'tryBlockAndAggregate'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iMulticall3ABI,
    functionName: 'tryBlockAndAggregate',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof iMulticall3ABI,
    'tryBlockAndAggregate'
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iPluginABI}__.
 */
export function useIPluginWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof iPluginABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof iPluginABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof iPluginABI, TFunctionName, TMode>({
    abi: iPluginABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iPluginABI}__ and `functionName` set to `"setSafeConfig"`.
 */
export function useIPluginSetSafeConfig<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof iPluginABI,
          'setSafeConfig'
        >['request']['abi'],
        'setSafeConfig',
        TMode
      > & { functionName?: 'setSafeConfig' }
    : UseContractWriteConfig<typeof iPluginABI, 'setSafeConfig', TMode> & {
        abi?: never
        functionName?: 'setSafeConfig'
      } = {} as any,
) {
  return useContractWrite<typeof iPluginABI, 'setSafeConfig', TMode>({
    abi: iPluginABI,
    functionName: 'setSafeConfig',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iPluginABI}__.
 */
export function usePrepareIPluginWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof iPluginABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iPluginABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof iPluginABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iPluginABI}__ and `functionName` set to `"setSafeConfig"`.
 */
export function usePrepareIPluginSetSafeConfig(
  config: Omit<
    UsePrepareContractWriteConfig<typeof iPluginABI, 'setSafeConfig'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iPluginABI,
    functionName: 'setSafeConfig',
    ...config,
  } as UsePrepareContractWriteConfig<typeof iPluginABI, 'setSafeConfig'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iProxyABI}__.
 */
export function useIProxyRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof iProxyABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iProxyABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({ abi: iProxyABI, ...config } as UseContractReadConfig<
    typeof iProxyABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iProxyABI}__ and `functionName` set to `"masterCopy"`.
 */
export function useIProxyMasterCopy<
  TFunctionName extends 'masterCopy',
  TSelectData = ReadContractResult<typeof iProxyABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iProxyABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iProxyABI,
    functionName: 'masterCopy',
    ...config,
  } as UseContractReadConfig<typeof iProxyABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iProxyCreationCallbackABI}__.
 */
export function useIProxyCreationCallbackWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof iProxyCreationCallbackABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<
        typeof iProxyCreationCallbackABI,
        TFunctionName,
        TMode
      > & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<
    typeof iProxyCreationCallbackABI,
    TFunctionName,
    TMode
  >({ abi: iProxyCreationCallbackABI, ...config } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iProxyCreationCallbackABI}__ and `functionName` set to `"proxyCreated"`.
 */
export function useIProxyCreationCallbackProxyCreated<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof iProxyCreationCallbackABI,
          'proxyCreated'
        >['request']['abi'],
        'proxyCreated',
        TMode
      > & { functionName?: 'proxyCreated' }
    : UseContractWriteConfig<
        typeof iProxyCreationCallbackABI,
        'proxyCreated',
        TMode
      > & {
        abi?: never
        functionName?: 'proxyCreated'
      } = {} as any,
) {
  return useContractWrite<
    typeof iProxyCreationCallbackABI,
    'proxyCreated',
    TMode
  >({
    abi: iProxyCreationCallbackABI,
    functionName: 'proxyCreated',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iProxyCreationCallbackABI}__.
 */
export function usePrepareIProxyCreationCallbackWrite<
  TFunctionName extends string,
>(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof iProxyCreationCallbackABI,
      TFunctionName
    >,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iProxyCreationCallbackABI,
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof iProxyCreationCallbackABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iProxyCreationCallbackABI}__ and `functionName` set to `"proxyCreated"`.
 */
export function usePrepareIProxyCreationCallbackProxyCreated(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof iProxyCreationCallbackABI,
      'proxyCreated'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iProxyCreationCallbackABI,
    functionName: 'proxyCreated',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof iProxyCreationCallbackABI,
    'proxyCreated'
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iSafeABI}__.
 */
export function useISafeWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof iSafeABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof iSafeABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof iSafeABI, TFunctionName, TMode>({
    abi: iSafeABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iSafeABI}__ and `functionName` set to `"execTransactionFromModule"`.
 */
export function useISafeExecTransactionFromModule<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof iSafeABI,
          'execTransactionFromModule'
        >['request']['abi'],
        'execTransactionFromModule',
        TMode
      > & { functionName?: 'execTransactionFromModule' }
    : UseContractWriteConfig<
        typeof iSafeABI,
        'execTransactionFromModule',
        TMode
      > & {
        abi?: never
        functionName?: 'execTransactionFromModule'
      } = {} as any,
) {
  return useContractWrite<typeof iSafeABI, 'execTransactionFromModule', TMode>({
    abi: iSafeABI,
    functionName: 'execTransactionFromModule',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iSafeABI}__ and `functionName` set to `"execTransactionFromModuleReturnData"`.
 */
export function useISafeExecTransactionFromModuleReturnData<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof iSafeABI,
          'execTransactionFromModuleReturnData'
        >['request']['abi'],
        'execTransactionFromModuleReturnData',
        TMode
      > & { functionName?: 'execTransactionFromModuleReturnData' }
    : UseContractWriteConfig<
        typeof iSafeABI,
        'execTransactionFromModuleReturnData',
        TMode
      > & {
        abi?: never
        functionName?: 'execTransactionFromModuleReturnData'
      } = {} as any,
) {
  return useContractWrite<
    typeof iSafeABI,
    'execTransactionFromModuleReturnData',
    TMode
  >({
    abi: iSafeABI,
    functionName: 'execTransactionFromModuleReturnData',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iSafeABI}__.
 */
export function usePrepareISafeWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof iSafeABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iSafeABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof iSafeABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iSafeABI}__ and `functionName` set to `"execTransactionFromModule"`.
 */
export function usePrepareISafeExecTransactionFromModule(
  config: Omit<
    UsePrepareContractWriteConfig<typeof iSafeABI, 'execTransactionFromModule'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iSafeABI,
    functionName: 'execTransactionFromModule',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof iSafeABI,
    'execTransactionFromModule'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iSafeABI}__ and `functionName` set to `"execTransactionFromModuleReturnData"`.
 */
export function usePrepareISafeExecTransactionFromModuleReturnData(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof iSafeABI,
      'execTransactionFromModuleReturnData'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iSafeABI,
    functionName: 'execTransactionFromModuleReturnData',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof iSafeABI,
    'execTransactionFromModuleReturnData'
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iSafeProtocolFunctionHandlerABI}__.
 */
export function useISafeProtocolFunctionHandlerRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<
    typeof iSafeProtocolFunctionHandlerABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof iSafeProtocolFunctionHandlerABI,
      TFunctionName,
      TSelectData
    >,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: iSafeProtocolFunctionHandlerABI,
    ...config,
  } as UseContractReadConfig<
    typeof iSafeProtocolFunctionHandlerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iSafeProtocolFunctionHandlerABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function useISafeProtocolFunctionHandlerSupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<
    typeof iSafeProtocolFunctionHandlerABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof iSafeProtocolFunctionHandlerABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iSafeProtocolFunctionHandlerABI,
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<
    typeof iSafeProtocolFunctionHandlerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iSafeProtocolFunctionHandlerABI}__.
 */
export function useISafeProtocolFunctionHandlerWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof iSafeProtocolFunctionHandlerABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<
        typeof iSafeProtocolFunctionHandlerABI,
        TFunctionName,
        TMode
      > & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<
    typeof iSafeProtocolFunctionHandlerABI,
    TFunctionName,
    TMode
  >({ abi: iSafeProtocolFunctionHandlerABI, ...config } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iSafeProtocolFunctionHandlerABI}__ and `functionName` set to `"handle"`.
 */
export function useISafeProtocolFunctionHandlerHandle<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof iSafeProtocolFunctionHandlerABI,
          'handle'
        >['request']['abi'],
        'handle',
        TMode
      > & { functionName?: 'handle' }
    : UseContractWriteConfig<
        typeof iSafeProtocolFunctionHandlerABI,
        'handle',
        TMode
      > & {
        abi?: never
        functionName?: 'handle'
      } = {} as any,
) {
  return useContractWrite<
    typeof iSafeProtocolFunctionHandlerABI,
    'handle',
    TMode
  >({
    abi: iSafeProtocolFunctionHandlerABI,
    functionName: 'handle',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iSafeProtocolFunctionHandlerABI}__.
 */
export function usePrepareISafeProtocolFunctionHandlerWrite<
  TFunctionName extends string,
>(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof iSafeProtocolFunctionHandlerABI,
      TFunctionName
    >,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iSafeProtocolFunctionHandlerABI,
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof iSafeProtocolFunctionHandlerABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iSafeProtocolFunctionHandlerABI}__ and `functionName` set to `"handle"`.
 */
export function usePrepareISafeProtocolFunctionHandlerHandle(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof iSafeProtocolFunctionHandlerABI,
      'handle'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iSafeProtocolFunctionHandlerABI,
    functionName: 'handle',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof iSafeProtocolFunctionHandlerABI,
    'handle'
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iSafeProtocolHooksABI}__.
 */
export function useISafeProtocolHooksRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof iSafeProtocolHooksABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof iSafeProtocolHooksABI,
      TFunctionName,
      TSelectData
    >,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: iSafeProtocolHooksABI,
    ...config,
  } as UseContractReadConfig<
    typeof iSafeProtocolHooksABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iSafeProtocolHooksABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function useISafeProtocolHooksSupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof iSafeProtocolHooksABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof iSafeProtocolHooksABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iSafeProtocolHooksABI,
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<
    typeof iSafeProtocolHooksABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iSafeProtocolHooksABI}__.
 */
export function useISafeProtocolHooksWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof iSafeProtocolHooksABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<
        typeof iSafeProtocolHooksABI,
        TFunctionName,
        TMode
      > & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof iSafeProtocolHooksABI, TFunctionName, TMode>({
    abi: iSafeProtocolHooksABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iSafeProtocolHooksABI}__ and `functionName` set to `"postCheck"`.
 */
export function useISafeProtocolHooksPostCheck<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof iSafeProtocolHooksABI,
          'postCheck'
        >['request']['abi'],
        'postCheck',
        TMode
      > & { functionName?: 'postCheck' }
    : UseContractWriteConfig<
        typeof iSafeProtocolHooksABI,
        'postCheck',
        TMode
      > & {
        abi?: never
        functionName?: 'postCheck'
      } = {} as any,
) {
  return useContractWrite<typeof iSafeProtocolHooksABI, 'postCheck', TMode>({
    abi: iSafeProtocolHooksABI,
    functionName: 'postCheck',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iSafeProtocolHooksABI}__ and `functionName` set to `"preCheck"`.
 */
export function useISafeProtocolHooksPreCheck<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof iSafeProtocolHooksABI,
          'preCheck'
        >['request']['abi'],
        'preCheck',
        TMode
      > & { functionName?: 'preCheck' }
    : UseContractWriteConfig<
        typeof iSafeProtocolHooksABI,
        'preCheck',
        TMode
      > & {
        abi?: never
        functionName?: 'preCheck'
      } = {} as any,
) {
  return useContractWrite<typeof iSafeProtocolHooksABI, 'preCheck', TMode>({
    abi: iSafeProtocolHooksABI,
    functionName: 'preCheck',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iSafeProtocolHooksABI}__ and `functionName` set to `"preCheckRootAccess"`.
 */
export function useISafeProtocolHooksPreCheckRootAccess<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof iSafeProtocolHooksABI,
          'preCheckRootAccess'
        >['request']['abi'],
        'preCheckRootAccess',
        TMode
      > & { functionName?: 'preCheckRootAccess' }
    : UseContractWriteConfig<
        typeof iSafeProtocolHooksABI,
        'preCheckRootAccess',
        TMode
      > & {
        abi?: never
        functionName?: 'preCheckRootAccess'
      } = {} as any,
) {
  return useContractWrite<
    typeof iSafeProtocolHooksABI,
    'preCheckRootAccess',
    TMode
  >({
    abi: iSafeProtocolHooksABI,
    functionName: 'preCheckRootAccess',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iSafeProtocolHooksABI}__.
 */
export function usePrepareISafeProtocolHooksWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof iSafeProtocolHooksABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iSafeProtocolHooksABI,
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof iSafeProtocolHooksABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iSafeProtocolHooksABI}__ and `functionName` set to `"postCheck"`.
 */
export function usePrepareISafeProtocolHooksPostCheck(
  config: Omit<
    UsePrepareContractWriteConfig<typeof iSafeProtocolHooksABI, 'postCheck'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iSafeProtocolHooksABI,
    functionName: 'postCheck',
    ...config,
  } as UsePrepareContractWriteConfig<typeof iSafeProtocolHooksABI, 'postCheck'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iSafeProtocolHooksABI}__ and `functionName` set to `"preCheck"`.
 */
export function usePrepareISafeProtocolHooksPreCheck(
  config: Omit<
    UsePrepareContractWriteConfig<typeof iSafeProtocolHooksABI, 'preCheck'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iSafeProtocolHooksABI,
    functionName: 'preCheck',
    ...config,
  } as UsePrepareContractWriteConfig<typeof iSafeProtocolHooksABI, 'preCheck'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iSafeProtocolHooksABI}__ and `functionName` set to `"preCheckRootAccess"`.
 */
export function usePrepareISafeProtocolHooksPreCheckRootAccess(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof iSafeProtocolHooksABI,
      'preCheckRootAccess'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iSafeProtocolHooksABI,
    functionName: 'preCheckRootAccess',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof iSafeProtocolHooksABI,
    'preCheckRootAccess'
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iSafeProtocolManagerABI}__.
 */
export function useISafeProtocolManagerWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof iSafeProtocolManagerABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<
        typeof iSafeProtocolManagerABI,
        TFunctionName,
        TMode
      > & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof iSafeProtocolManagerABI, TFunctionName, TMode>(
    { abi: iSafeProtocolManagerABI, ...config } as any,
  )
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iSafeProtocolManagerABI}__ and `functionName` set to `"executeRootAccess"`.
 */
export function useISafeProtocolManagerExecuteRootAccess<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof iSafeProtocolManagerABI,
          'executeRootAccess'
        >['request']['abi'],
        'executeRootAccess',
        TMode
      > & { functionName?: 'executeRootAccess' }
    : UseContractWriteConfig<
        typeof iSafeProtocolManagerABI,
        'executeRootAccess',
        TMode
      > & {
        abi?: never
        functionName?: 'executeRootAccess'
      } = {} as any,
) {
  return useContractWrite<
    typeof iSafeProtocolManagerABI,
    'executeRootAccess',
    TMode
  >({
    abi: iSafeProtocolManagerABI,
    functionName: 'executeRootAccess',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iSafeProtocolManagerABI}__ and `functionName` set to `"executeTransaction"`.
 */
export function useISafeProtocolManagerExecuteTransaction<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof iSafeProtocolManagerABI,
          'executeTransaction'
        >['request']['abi'],
        'executeTransaction',
        TMode
      > & { functionName?: 'executeTransaction' }
    : UseContractWriteConfig<
        typeof iSafeProtocolManagerABI,
        'executeTransaction',
        TMode
      > & {
        abi?: never
        functionName?: 'executeTransaction'
      } = {} as any,
) {
  return useContractWrite<
    typeof iSafeProtocolManagerABI,
    'executeTransaction',
    TMode
  >({
    abi: iSafeProtocolManagerABI,
    functionName: 'executeTransaction',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iSafeProtocolManagerABI}__.
 */
export function usePrepareISafeProtocolManagerWrite<
  TFunctionName extends string,
>(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof iSafeProtocolManagerABI,
      TFunctionName
    >,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iSafeProtocolManagerABI,
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof iSafeProtocolManagerABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iSafeProtocolManagerABI}__ and `functionName` set to `"executeRootAccess"`.
 */
export function usePrepareISafeProtocolManagerExecuteRootAccess(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof iSafeProtocolManagerABI,
      'executeRootAccess'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iSafeProtocolManagerABI,
    functionName: 'executeRootAccess',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof iSafeProtocolManagerABI,
    'executeRootAccess'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iSafeProtocolManagerABI}__ and `functionName` set to `"executeTransaction"`.
 */
export function usePrepareISafeProtocolManagerExecuteTransaction(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof iSafeProtocolManagerABI,
      'executeTransaction'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iSafeProtocolManagerABI,
    functionName: 'executeTransaction',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof iSafeProtocolManagerABI,
    'executeTransaction'
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iSafeProtocolPluginABI}__.
 */
export function useISafeProtocolPluginRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<
    typeof iSafeProtocolPluginABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof iSafeProtocolPluginABI,
      TFunctionName,
      TSelectData
    >,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: iSafeProtocolPluginABI,
    ...config,
  } as UseContractReadConfig<
    typeof iSafeProtocolPluginABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iSafeProtocolPluginABI}__ and `functionName` set to `"metadataProvider"`.
 */
export function useISafeProtocolPluginMetadataProvider<
  TFunctionName extends 'metadataProvider',
  TSelectData = ReadContractResult<
    typeof iSafeProtocolPluginABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof iSafeProtocolPluginABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iSafeProtocolPluginABI,
    functionName: 'metadataProvider',
    ...config,
  } as UseContractReadConfig<
    typeof iSafeProtocolPluginABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iSafeProtocolPluginABI}__ and `functionName` set to `"name"`.
 */
export function useISafeProtocolPluginName<
  TFunctionName extends 'name',
  TSelectData = ReadContractResult<
    typeof iSafeProtocolPluginABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof iSafeProtocolPluginABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iSafeProtocolPluginABI,
    functionName: 'name',
    ...config,
  } as UseContractReadConfig<
    typeof iSafeProtocolPluginABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iSafeProtocolPluginABI}__ and `functionName` set to `"requiresRootAccess"`.
 */
export function useISafeProtocolPluginRequiresRootAccess<
  TFunctionName extends 'requiresRootAccess',
  TSelectData = ReadContractResult<
    typeof iSafeProtocolPluginABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof iSafeProtocolPluginABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iSafeProtocolPluginABI,
    functionName: 'requiresRootAccess',
    ...config,
  } as UseContractReadConfig<
    typeof iSafeProtocolPluginABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iSafeProtocolPluginABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function useISafeProtocolPluginSupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<
    typeof iSafeProtocolPluginABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof iSafeProtocolPluginABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iSafeProtocolPluginABI,
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<
    typeof iSafeProtocolPluginABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iSafeProtocolPluginABI}__ and `functionName` set to `"version"`.
 */
export function useISafeProtocolPluginVersion<
  TFunctionName extends 'version',
  TSelectData = ReadContractResult<
    typeof iSafeProtocolPluginABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof iSafeProtocolPluginABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iSafeProtocolPluginABI,
    functionName: 'version',
    ...config,
  } as UseContractReadConfig<
    typeof iSafeProtocolPluginABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iSafeProtocolRegistryABI}__.
 */
export function useISafeProtocolRegistryRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<
    typeof iSafeProtocolRegistryABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof iSafeProtocolRegistryABI,
      TFunctionName,
      TSelectData
    >,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: iSafeProtocolRegistryABI,
    ...config,
  } as UseContractReadConfig<
    typeof iSafeProtocolRegistryABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iSafeProtocolRegistryABI}__ and `functionName` set to `"check"`.
 */
export function useISafeProtocolRegistryCheck<
  TFunctionName extends 'check',
  TSelectData = ReadContractResult<
    typeof iSafeProtocolRegistryABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof iSafeProtocolRegistryABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iSafeProtocolRegistryABI,
    functionName: 'check',
    ...config,
  } as UseContractReadConfig<
    typeof iSafeProtocolRegistryABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iSafeProtocolRegistryABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function useISafeProtocolRegistrySupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<
    typeof iSafeProtocolRegistryABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof iSafeProtocolRegistryABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iSafeProtocolRegistryABI,
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<
    typeof iSafeProtocolRegistryABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iSafeProtocolStaticFunctionHandlerABI}__.
 */
export function useISafeProtocolStaticFunctionHandlerRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<
    typeof iSafeProtocolStaticFunctionHandlerABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof iSafeProtocolStaticFunctionHandlerABI,
      TFunctionName,
      TSelectData
    >,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: iSafeProtocolStaticFunctionHandlerABI,
    ...config,
  } as UseContractReadConfig<
    typeof iSafeProtocolStaticFunctionHandlerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iSafeProtocolStaticFunctionHandlerABI}__ and `functionName` set to `"handle"`.
 */
export function useISafeProtocolStaticFunctionHandlerHandle<
  TFunctionName extends 'handle',
  TSelectData = ReadContractResult<
    typeof iSafeProtocolStaticFunctionHandlerABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof iSafeProtocolStaticFunctionHandlerABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iSafeProtocolStaticFunctionHandlerABI,
    functionName: 'handle',
    ...config,
  } as UseContractReadConfig<
    typeof iSafeProtocolStaticFunctionHandlerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iSignatureValidatorABI}__.
 */
export function useISignatureValidatorRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<
    typeof iSignatureValidatorABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof iSignatureValidatorABI,
      TFunctionName,
      TSelectData
    >,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: iSignatureValidatorABI,
    ...config,
  } as UseContractReadConfig<
    typeof iSignatureValidatorABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iSignatureValidatorABI}__ and `functionName` set to `"isValidSignature"`.
 */
export function useISignatureValidatorIsValidSignature<
  TFunctionName extends 'isValidSignature',
  TSelectData = ReadContractResult<
    typeof iSignatureValidatorABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof iSignatureValidatorABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: iSignatureValidatorABI,
    functionName: 'isValidSignature',
    ...config,
  } as UseContractReadConfig<
    typeof iSignatureValidatorABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link keeperCompatibleInterfaceABI}__.
 */
export function useKeeperCompatibleInterfaceWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof keeperCompatibleInterfaceABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<
        typeof keeperCompatibleInterfaceABI,
        TFunctionName,
        TMode
      > & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<
    typeof keeperCompatibleInterfaceABI,
    TFunctionName,
    TMode
  >({ abi: keeperCompatibleInterfaceABI, ...config } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link keeperCompatibleInterfaceABI}__ and `functionName` set to `"checkUpkeep"`.
 */
export function useKeeperCompatibleInterfaceCheckUpkeep<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof keeperCompatibleInterfaceABI,
          'checkUpkeep'
        >['request']['abi'],
        'checkUpkeep',
        TMode
      > & { functionName?: 'checkUpkeep' }
    : UseContractWriteConfig<
        typeof keeperCompatibleInterfaceABI,
        'checkUpkeep',
        TMode
      > & {
        abi?: never
        functionName?: 'checkUpkeep'
      } = {} as any,
) {
  return useContractWrite<
    typeof keeperCompatibleInterfaceABI,
    'checkUpkeep',
    TMode
  >({
    abi: keeperCompatibleInterfaceABI,
    functionName: 'checkUpkeep',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link keeperCompatibleInterfaceABI}__ and `functionName` set to `"performUpkeep"`.
 */
export function useKeeperCompatibleInterfacePerformUpkeep<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof keeperCompatibleInterfaceABI,
          'performUpkeep'
        >['request']['abi'],
        'performUpkeep',
        TMode
      > & { functionName?: 'performUpkeep' }
    : UseContractWriteConfig<
        typeof keeperCompatibleInterfaceABI,
        'performUpkeep',
        TMode
      > & {
        abi?: never
        functionName?: 'performUpkeep'
      } = {} as any,
) {
  return useContractWrite<
    typeof keeperCompatibleInterfaceABI,
    'performUpkeep',
    TMode
  >({
    abi: keeperCompatibleInterfaceABI,
    functionName: 'performUpkeep',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link keeperCompatibleInterfaceABI}__.
 */
export function usePrepareKeeperCompatibleInterfaceWrite<
  TFunctionName extends string,
>(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof keeperCompatibleInterfaceABI,
      TFunctionName
    >,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: keeperCompatibleInterfaceABI,
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof keeperCompatibleInterfaceABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link keeperCompatibleInterfaceABI}__ and `functionName` set to `"checkUpkeep"`.
 */
export function usePrepareKeeperCompatibleInterfaceCheckUpkeep(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof keeperCompatibleInterfaceABI,
      'checkUpkeep'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: keeperCompatibleInterfaceABI,
    functionName: 'checkUpkeep',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof keeperCompatibleInterfaceABI,
    'checkUpkeep'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link keeperCompatibleInterfaceABI}__ and `functionName` set to `"performUpkeep"`.
 */
export function usePrepareKeeperCompatibleInterfacePerformUpkeep(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof keeperCompatibleInterfaceABI,
      'performUpkeep'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: keeperCompatibleInterfaceABI,
    functionName: 'performUpkeep',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof keeperCompatibleInterfaceABI,
    'performUpkeep'
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link metadataProviderABI}__.
 */
export function useMetadataProviderRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof metadataProviderABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof metadataProviderABI,
      TFunctionName,
      TSelectData
    >,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: metadataProviderABI,
    ...config,
  } as UseContractReadConfig<
    typeof metadataProviderABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link metadataProviderABI}__ and `functionName` set to `"retrieveMetadata"`.
 */
export function useMetadataProviderRetrieveMetadata<
  TFunctionName extends 'retrieveMetadata',
  TSelectData = ReadContractResult<typeof metadataProviderABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof metadataProviderABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: metadataProviderABI,
    functionName: 'retrieveMetadata',
    ...config,
  } as UseContractReadConfig<
    typeof metadataProviderABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockGaugeABI}__.
 */
export function useMockGaugeRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof mockGaugeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mockGaugeABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: mockGaugeABI,
    ...config,
  } as UseContractReadConfig<typeof mockGaugeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockGaugeABI}__ and `functionName` set to `"allowance"`.
 */
export function useMockGaugeAllowance<
  TFunctionName extends 'allowance',
  TSelectData = ReadContractResult<typeof mockGaugeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mockGaugeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: mockGaugeABI,
    functionName: 'allowance',
    ...config,
  } as UseContractReadConfig<typeof mockGaugeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockGaugeABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useMockGaugeBalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof mockGaugeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mockGaugeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: mockGaugeABI,
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<typeof mockGaugeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockGaugeABI}__ and `functionName` set to `"decimals"`.
 */
export function useMockGaugeDecimals<
  TFunctionName extends 'decimals',
  TSelectData = ReadContractResult<typeof mockGaugeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mockGaugeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: mockGaugeABI,
    functionName: 'decimals',
    ...config,
  } as UseContractReadConfig<typeof mockGaugeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockGaugeABI}__ and `functionName` set to `"lpToken"`.
 */
export function useMockGaugeLpToken<
  TFunctionName extends 'lpToken',
  TSelectData = ReadContractResult<typeof mockGaugeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mockGaugeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: mockGaugeABI,
    functionName: 'lpToken',
    ...config,
  } as UseContractReadConfig<typeof mockGaugeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockGaugeABI}__ and `functionName` set to `"name"`.
 */
export function useMockGaugeName<
  TFunctionName extends 'name',
  TSelectData = ReadContractResult<typeof mockGaugeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mockGaugeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: mockGaugeABI,
    functionName: 'name',
    ...config,
  } as UseContractReadConfig<typeof mockGaugeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockGaugeABI}__ and `functionName` set to `"rewardTokens"`.
 */
export function useMockGaugeRewardTokens<
  TFunctionName extends 'rewardTokens',
  TSelectData = ReadContractResult<typeof mockGaugeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mockGaugeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: mockGaugeABI,
    functionName: 'rewardTokens',
    ...config,
  } as UseContractReadConfig<typeof mockGaugeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockGaugeABI}__ and `functionName` set to `"symbol"`.
 */
export function useMockGaugeSymbol<
  TFunctionName extends 'symbol',
  TSelectData = ReadContractResult<typeof mockGaugeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mockGaugeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: mockGaugeABI,
    functionName: 'symbol',
    ...config,
  } as UseContractReadConfig<typeof mockGaugeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockGaugeABI}__ and `functionName` set to `"totalSupply"`.
 */
export function useMockGaugeTotalSupply<
  TFunctionName extends 'totalSupply',
  TSelectData = ReadContractResult<typeof mockGaugeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mockGaugeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: mockGaugeABI,
    functionName: 'totalSupply',
    ...config,
  } as UseContractReadConfig<typeof mockGaugeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockGaugeABI}__.
 */
export function useMockGaugeWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof mockGaugeABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof mockGaugeABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof mockGaugeABI, TFunctionName, TMode>({
    abi: mockGaugeABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockGaugeABI}__ and `functionName` set to `"approve"`.
 */
export function useMockGaugeApprove<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof mockGaugeABI,
          'approve'
        >['request']['abi'],
        'approve',
        TMode
      > & { functionName?: 'approve' }
    : UseContractWriteConfig<typeof mockGaugeABI, 'approve', TMode> & {
        abi?: never
        functionName?: 'approve'
      } = {} as any,
) {
  return useContractWrite<typeof mockGaugeABI, 'approve', TMode>({
    abi: mockGaugeABI,
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockGaugeABI}__ and `functionName` set to `"decreaseAllowance"`.
 */
export function useMockGaugeDecreaseAllowance<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof mockGaugeABI,
          'decreaseAllowance'
        >['request']['abi'],
        'decreaseAllowance',
        TMode
      > & { functionName?: 'decreaseAllowance' }
    : UseContractWriteConfig<
        typeof mockGaugeABI,
        'decreaseAllowance',
        TMode
      > & {
        abi?: never
        functionName?: 'decreaseAllowance'
      } = {} as any,
) {
  return useContractWrite<typeof mockGaugeABI, 'decreaseAllowance', TMode>({
    abi: mockGaugeABI,
    functionName: 'decreaseAllowance',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockGaugeABI}__ and `functionName` set to `"deposit"`.
 */
export function useMockGaugeDeposit<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof mockGaugeABI,
          'deposit'
        >['request']['abi'],
        'deposit',
        TMode
      > & { functionName?: 'deposit' }
    : UseContractWriteConfig<typeof mockGaugeABI, 'deposit', TMode> & {
        abi?: never
        functionName?: 'deposit'
      } = {} as any,
) {
  return useContractWrite<typeof mockGaugeABI, 'deposit', TMode>({
    abi: mockGaugeABI,
    functionName: 'deposit',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockGaugeABI}__ and `functionName` set to `"getReward"`.
 */
export function useMockGaugeGetReward<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof mockGaugeABI,
          'getReward'
        >['request']['abi'],
        'getReward',
        TMode
      > & { functionName?: 'getReward' }
    : UseContractWriteConfig<typeof mockGaugeABI, 'getReward', TMode> & {
        abi?: never
        functionName?: 'getReward'
      } = {} as any,
) {
  return useContractWrite<typeof mockGaugeABI, 'getReward', TMode>({
    abi: mockGaugeABI,
    functionName: 'getReward',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockGaugeABI}__ and `functionName` set to `"increaseAllowance"`.
 */
export function useMockGaugeIncreaseAllowance<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof mockGaugeABI,
          'increaseAllowance'
        >['request']['abi'],
        'increaseAllowance',
        TMode
      > & { functionName?: 'increaseAllowance' }
    : UseContractWriteConfig<
        typeof mockGaugeABI,
        'increaseAllowance',
        TMode
      > & {
        abi?: never
        functionName?: 'increaseAllowance'
      } = {} as any,
) {
  return useContractWrite<typeof mockGaugeABI, 'increaseAllowance', TMode>({
    abi: mockGaugeABI,
    functionName: 'increaseAllowance',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockGaugeABI}__ and `functionName` set to `"transfer"`.
 */
export function useMockGaugeTransfer<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof mockGaugeABI,
          'transfer'
        >['request']['abi'],
        'transfer',
        TMode
      > & { functionName?: 'transfer' }
    : UseContractWriteConfig<typeof mockGaugeABI, 'transfer', TMode> & {
        abi?: never
        functionName?: 'transfer'
      } = {} as any,
) {
  return useContractWrite<typeof mockGaugeABI, 'transfer', TMode>({
    abi: mockGaugeABI,
    functionName: 'transfer',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockGaugeABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useMockGaugeTransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof mockGaugeABI,
          'transferFrom'
        >['request']['abi'],
        'transferFrom',
        TMode
      > & { functionName?: 'transferFrom' }
    : UseContractWriteConfig<typeof mockGaugeABI, 'transferFrom', TMode> & {
        abi?: never
        functionName?: 'transferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof mockGaugeABI, 'transferFrom', TMode>({
    abi: mockGaugeABI,
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockGaugeABI}__ and `functionName` set to `"withdraw"`.
 */
export function useMockGaugeWithdraw<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof mockGaugeABI,
          'withdraw'
        >['request']['abi'],
        'withdraw',
        TMode
      > & { functionName?: 'withdraw' }
    : UseContractWriteConfig<typeof mockGaugeABI, 'withdraw', TMode> & {
        abi?: never
        functionName?: 'withdraw'
      } = {} as any,
) {
  return useContractWrite<typeof mockGaugeABI, 'withdraw', TMode>({
    abi: mockGaugeABI,
    functionName: 'withdraw',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockGaugeABI}__.
 */
export function usePrepareMockGaugeWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mockGaugeABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: mockGaugeABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof mockGaugeABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockGaugeABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareMockGaugeApprove(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mockGaugeABI, 'approve'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: mockGaugeABI,
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof mockGaugeABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockGaugeABI}__ and `functionName` set to `"decreaseAllowance"`.
 */
export function usePrepareMockGaugeDecreaseAllowance(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mockGaugeABI, 'decreaseAllowance'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: mockGaugeABI,
    functionName: 'decreaseAllowance',
    ...config,
  } as UsePrepareContractWriteConfig<typeof mockGaugeABI, 'decreaseAllowance'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockGaugeABI}__ and `functionName` set to `"deposit"`.
 */
export function usePrepareMockGaugeDeposit(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mockGaugeABI, 'deposit'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: mockGaugeABI,
    functionName: 'deposit',
    ...config,
  } as UsePrepareContractWriteConfig<typeof mockGaugeABI, 'deposit'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockGaugeABI}__ and `functionName` set to `"getReward"`.
 */
export function usePrepareMockGaugeGetReward(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mockGaugeABI, 'getReward'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: mockGaugeABI,
    functionName: 'getReward',
    ...config,
  } as UsePrepareContractWriteConfig<typeof mockGaugeABI, 'getReward'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockGaugeABI}__ and `functionName` set to `"increaseAllowance"`.
 */
export function usePrepareMockGaugeIncreaseAllowance(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mockGaugeABI, 'increaseAllowance'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: mockGaugeABI,
    functionName: 'increaseAllowance',
    ...config,
  } as UsePrepareContractWriteConfig<typeof mockGaugeABI, 'increaseAllowance'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockGaugeABI}__ and `functionName` set to `"transfer"`.
 */
export function usePrepareMockGaugeTransfer(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mockGaugeABI, 'transfer'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: mockGaugeABI,
    functionName: 'transfer',
    ...config,
  } as UsePrepareContractWriteConfig<typeof mockGaugeABI, 'transfer'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockGaugeABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareMockGaugeTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mockGaugeABI, 'transferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: mockGaugeABI,
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof mockGaugeABI, 'transferFrom'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockGaugeABI}__ and `functionName` set to `"withdraw"`.
 */
export function usePrepareMockGaugeWithdraw(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mockGaugeABI, 'withdraw'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: mockGaugeABI,
    functionName: 'withdraw',
    ...config,
  } as UsePrepareContractWriteConfig<typeof mockGaugeABI, 'withdraw'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link mockGaugeABI}__.
 */
export function useMockGaugeEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof mockGaugeABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: mockGaugeABI,
    ...config,
  } as UseContractEventConfig<typeof mockGaugeABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link mockGaugeABI}__ and `eventName` set to `"Approval"`.
 */
export function useMockGaugeApprovalEvent(
  config: Omit<
    UseContractEventConfig<typeof mockGaugeABI, 'Approval'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: mockGaugeABI,
    eventName: 'Approval',
    ...config,
  } as UseContractEventConfig<typeof mockGaugeABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link mockGaugeABI}__ and `eventName` set to `"RewardClaimed"`.
 */
export function useMockGaugeRewardClaimedEvent(
  config: Omit<
    UseContractEventConfig<typeof mockGaugeABI, 'RewardClaimed'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: mockGaugeABI,
    eventName: 'RewardClaimed',
    ...config,
  } as UseContractEventConfig<typeof mockGaugeABI, 'RewardClaimed'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link mockGaugeABI}__ and `eventName` set to `"Transfer"`.
 */
export function useMockGaugeTransferEvent(
  config: Omit<
    UseContractEventConfig<typeof mockGaugeABI, 'Transfer'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: mockGaugeABI,
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof mockGaugeABI, 'Transfer'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link moduleManagerABI}__.
 */
export function useModuleManagerRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof moduleManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof moduleManagerABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: moduleManagerABI,
    ...config,
  } as UseContractReadConfig<
    typeof moduleManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link moduleManagerABI}__ and `functionName` set to `"getModulesPaginated"`.
 */
export function useModuleManagerGetModulesPaginated<
  TFunctionName extends 'getModulesPaginated',
  TSelectData = ReadContractResult<typeof moduleManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof moduleManagerABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: moduleManagerABI,
    functionName: 'getModulesPaginated',
    ...config,
  } as UseContractReadConfig<
    typeof moduleManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link moduleManagerABI}__ and `functionName` set to `"isModuleEnabled"`.
 */
export function useModuleManagerIsModuleEnabled<
  TFunctionName extends 'isModuleEnabled',
  TSelectData = ReadContractResult<typeof moduleManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof moduleManagerABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: moduleManagerABI,
    functionName: 'isModuleEnabled',
    ...config,
  } as UseContractReadConfig<
    typeof moduleManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link moduleManagerABI}__.
 */
export function useModuleManagerWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof moduleManagerABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof moduleManagerABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof moduleManagerABI, TFunctionName, TMode>({
    abi: moduleManagerABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link moduleManagerABI}__ and `functionName` set to `"disableModule"`.
 */
export function useModuleManagerDisableModule<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof moduleManagerABI,
          'disableModule'
        >['request']['abi'],
        'disableModule',
        TMode
      > & { functionName?: 'disableModule' }
    : UseContractWriteConfig<
        typeof moduleManagerABI,
        'disableModule',
        TMode
      > & {
        abi?: never
        functionName?: 'disableModule'
      } = {} as any,
) {
  return useContractWrite<typeof moduleManagerABI, 'disableModule', TMode>({
    abi: moduleManagerABI,
    functionName: 'disableModule',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link moduleManagerABI}__ and `functionName` set to `"enableModule"`.
 */
export function useModuleManagerEnableModule<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof moduleManagerABI,
          'enableModule'
        >['request']['abi'],
        'enableModule',
        TMode
      > & { functionName?: 'enableModule' }
    : UseContractWriteConfig<typeof moduleManagerABI, 'enableModule', TMode> & {
        abi?: never
        functionName?: 'enableModule'
      } = {} as any,
) {
  return useContractWrite<typeof moduleManagerABI, 'enableModule', TMode>({
    abi: moduleManagerABI,
    functionName: 'enableModule',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link moduleManagerABI}__ and `functionName` set to `"execTransactionFromModule"`.
 */
export function useModuleManagerExecTransactionFromModule<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof moduleManagerABI,
          'execTransactionFromModule'
        >['request']['abi'],
        'execTransactionFromModule',
        TMode
      > & { functionName?: 'execTransactionFromModule' }
    : UseContractWriteConfig<
        typeof moduleManagerABI,
        'execTransactionFromModule',
        TMode
      > & {
        abi?: never
        functionName?: 'execTransactionFromModule'
      } = {} as any,
) {
  return useContractWrite<
    typeof moduleManagerABI,
    'execTransactionFromModule',
    TMode
  >({
    abi: moduleManagerABI,
    functionName: 'execTransactionFromModule',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link moduleManagerABI}__ and `functionName` set to `"execTransactionFromModuleReturnData"`.
 */
export function useModuleManagerExecTransactionFromModuleReturnData<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof moduleManagerABI,
          'execTransactionFromModuleReturnData'
        >['request']['abi'],
        'execTransactionFromModuleReturnData',
        TMode
      > & { functionName?: 'execTransactionFromModuleReturnData' }
    : UseContractWriteConfig<
        typeof moduleManagerABI,
        'execTransactionFromModuleReturnData',
        TMode
      > & {
        abi?: never
        functionName?: 'execTransactionFromModuleReturnData'
      } = {} as any,
) {
  return useContractWrite<
    typeof moduleManagerABI,
    'execTransactionFromModuleReturnData',
    TMode
  >({
    abi: moduleManagerABI,
    functionName: 'execTransactionFromModuleReturnData',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link moduleManagerABI}__.
 */
export function usePrepareModuleManagerWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof moduleManagerABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: moduleManagerABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof moduleManagerABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link moduleManagerABI}__ and `functionName` set to `"disableModule"`.
 */
export function usePrepareModuleManagerDisableModule(
  config: Omit<
    UsePrepareContractWriteConfig<typeof moduleManagerABI, 'disableModule'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: moduleManagerABI,
    functionName: 'disableModule',
    ...config,
  } as UsePrepareContractWriteConfig<typeof moduleManagerABI, 'disableModule'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link moduleManagerABI}__ and `functionName` set to `"enableModule"`.
 */
export function usePrepareModuleManagerEnableModule(
  config: Omit<
    UsePrepareContractWriteConfig<typeof moduleManagerABI, 'enableModule'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: moduleManagerABI,
    functionName: 'enableModule',
    ...config,
  } as UsePrepareContractWriteConfig<typeof moduleManagerABI, 'enableModule'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link moduleManagerABI}__ and `functionName` set to `"execTransactionFromModule"`.
 */
export function usePrepareModuleManagerExecTransactionFromModule(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof moduleManagerABI,
      'execTransactionFromModule'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: moduleManagerABI,
    functionName: 'execTransactionFromModule',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof moduleManagerABI,
    'execTransactionFromModule'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link moduleManagerABI}__ and `functionName` set to `"execTransactionFromModuleReturnData"`.
 */
export function usePrepareModuleManagerExecTransactionFromModuleReturnData(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof moduleManagerABI,
      'execTransactionFromModuleReturnData'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: moduleManagerABI,
    functionName: 'execTransactionFromModuleReturnData',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof moduleManagerABI,
    'execTransactionFromModuleReturnData'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link moduleManagerABI}__.
 */
export function useModuleManagerEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof moduleManagerABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: moduleManagerABI,
    ...config,
  } as UseContractEventConfig<typeof moduleManagerABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link moduleManagerABI}__ and `eventName` set to `"DisabledModule"`.
 */
export function useModuleManagerDisabledModuleEvent(
  config: Omit<
    UseContractEventConfig<typeof moduleManagerABI, 'DisabledModule'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: moduleManagerABI,
    eventName: 'DisabledModule',
    ...config,
  } as UseContractEventConfig<typeof moduleManagerABI, 'DisabledModule'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link moduleManagerABI}__ and `eventName` set to `"EnabledModule"`.
 */
export function useModuleManagerEnabledModuleEvent(
  config: Omit<
    UseContractEventConfig<typeof moduleManagerABI, 'EnabledModule'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: moduleManagerABI,
    eventName: 'EnabledModule',
    ...config,
  } as UseContractEventConfig<typeof moduleManagerABI, 'EnabledModule'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link moduleManagerABI}__ and `eventName` set to `"ExecutionFromModuleFailure"`.
 */
export function useModuleManagerExecutionFromModuleFailureEvent(
  config: Omit<
    UseContractEventConfig<
      typeof moduleManagerABI,
      'ExecutionFromModuleFailure'
    >,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: moduleManagerABI,
    eventName: 'ExecutionFromModuleFailure',
    ...config,
  } as UseContractEventConfig<
    typeof moduleManagerABI,
    'ExecutionFromModuleFailure'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link moduleManagerABI}__ and `eventName` set to `"ExecutionFromModuleSuccess"`.
 */
export function useModuleManagerExecutionFromModuleSuccessEvent(
  config: Omit<
    UseContractEventConfig<
      typeof moduleManagerABI,
      'ExecutionFromModuleSuccess'
    >,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: moduleManagerABI,
    eventName: 'ExecutionFromModuleSuccess',
    ...config,
  } as UseContractEventConfig<
    typeof moduleManagerABI,
    'ExecutionFromModuleSuccess'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link nativeCurrencyPaymentFallbackABI}__.
 */
export function useNativeCurrencyPaymentFallbackEvent<
  TEventName extends string,
>(
  config: Omit<
    UseContractEventConfig<typeof nativeCurrencyPaymentFallbackABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: nativeCurrencyPaymentFallbackABI,
    ...config,
  } as UseContractEventConfig<
    typeof nativeCurrencyPaymentFallbackABI,
    TEventName
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link nativeCurrencyPaymentFallbackABI}__ and `eventName` set to `"SafeReceived"`.
 */
export function useNativeCurrencyPaymentFallbackSafeReceivedEvent(
  config: Omit<
    UseContractEventConfig<
      typeof nativeCurrencyPaymentFallbackABI,
      'SafeReceived'
    >,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: nativeCurrencyPaymentFallbackABI,
    eventName: 'SafeReceived',
    ...config,
  } as UseContractEventConfig<
    typeof nativeCurrencyPaymentFallbackABI,
    'SafeReceived'
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ownableABI}__.
 */
export function useOwnableRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof ownableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ownableABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: ownableABI,
    ...config,
  } as UseContractReadConfig<typeof ownableABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ownableABI}__ and `functionName` set to `"owner"`.
 */
export function useOwnableOwner<
  TFunctionName extends 'owner',
  TSelectData = ReadContractResult<typeof ownableABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ownableABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ownableABI,
    functionName: 'owner',
    ...config,
  } as UseContractReadConfig<typeof ownableABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ownableABI}__.
 */
export function useOwnableWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof ownableABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof ownableABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof ownableABI, TFunctionName, TMode>({
    abi: ownableABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ownableABI}__ and `functionName` set to `"renounceOwnership"`.
 */
export function useOwnableRenounceOwnership<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ownableABI,
          'renounceOwnership'
        >['request']['abi'],
        'renounceOwnership',
        TMode
      > & { functionName?: 'renounceOwnership' }
    : UseContractWriteConfig<typeof ownableABI, 'renounceOwnership', TMode> & {
        abi?: never
        functionName?: 'renounceOwnership'
      } = {} as any,
) {
  return useContractWrite<typeof ownableABI, 'renounceOwnership', TMode>({
    abi: ownableABI,
    functionName: 'renounceOwnership',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ownableABI}__ and `functionName` set to `"transferOwnership"`.
 */
export function useOwnableTransferOwnership<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ownableABI,
          'transferOwnership'
        >['request']['abi'],
        'transferOwnership',
        TMode
      > & { functionName?: 'transferOwnership' }
    : UseContractWriteConfig<typeof ownableABI, 'transferOwnership', TMode> & {
        abi?: never
        functionName?: 'transferOwnership'
      } = {} as any,
) {
  return useContractWrite<typeof ownableABI, 'transferOwnership', TMode>({
    abi: ownableABI,
    functionName: 'transferOwnership',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ownableABI}__.
 */
export function usePrepareOwnableWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ownableABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ownableABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof ownableABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ownableABI}__ and `functionName` set to `"renounceOwnership"`.
 */
export function usePrepareOwnableRenounceOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ownableABI, 'renounceOwnership'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ownableABI,
    functionName: 'renounceOwnership',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ownableABI, 'renounceOwnership'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ownableABI}__ and `functionName` set to `"transferOwnership"`.
 */
export function usePrepareOwnableTransferOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ownableABI, 'transferOwnership'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ownableABI,
    functionName: 'transferOwnership',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ownableABI, 'transferOwnership'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ownableABI}__.
 */
export function useOwnableEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof ownableABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: ownableABI,
    ...config,
  } as UseContractEventConfig<typeof ownableABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ownableABI}__ and `eventName` set to `"OwnershipTransferred"`.
 */
export function useOwnableOwnershipTransferredEvent(
  config: Omit<
    UseContractEventConfig<typeof ownableABI, 'OwnershipTransferred'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ownableABI,
    eventName: 'OwnershipTransferred',
    ...config,
  } as UseContractEventConfig<typeof ownableABI, 'OwnershipTransferred'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ownable2StepABI}__.
 */
export function useOwnable2StepRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof ownable2StepABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ownable2StepABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: ownable2StepABI,
    ...config,
  } as UseContractReadConfig<
    typeof ownable2StepABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ownable2StepABI}__ and `functionName` set to `"owner"`.
 */
export function useOwnable2StepOwner<
  TFunctionName extends 'owner',
  TSelectData = ReadContractResult<typeof ownable2StepABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ownable2StepABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ownable2StepABI,
    functionName: 'owner',
    ...config,
  } as UseContractReadConfig<
    typeof ownable2StepABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ownable2StepABI}__ and `functionName` set to `"pendingOwner"`.
 */
export function useOwnable2StepPendingOwner<
  TFunctionName extends 'pendingOwner',
  TSelectData = ReadContractResult<typeof ownable2StepABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ownable2StepABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ownable2StepABI,
    functionName: 'pendingOwner',
    ...config,
  } as UseContractReadConfig<
    typeof ownable2StepABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ownable2StepABI}__.
 */
export function useOwnable2StepWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ownable2StepABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof ownable2StepABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof ownable2StepABI, TFunctionName, TMode>({
    abi: ownable2StepABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ownable2StepABI}__ and `functionName` set to `"acceptOwnership"`.
 */
export function useOwnable2StepAcceptOwnership<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ownable2StepABI,
          'acceptOwnership'
        >['request']['abi'],
        'acceptOwnership',
        TMode
      > & { functionName?: 'acceptOwnership' }
    : UseContractWriteConfig<
        typeof ownable2StepABI,
        'acceptOwnership',
        TMode
      > & {
        abi?: never
        functionName?: 'acceptOwnership'
      } = {} as any,
) {
  return useContractWrite<typeof ownable2StepABI, 'acceptOwnership', TMode>({
    abi: ownable2StepABI,
    functionName: 'acceptOwnership',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ownable2StepABI}__ and `functionName` set to `"renounceOwnership"`.
 */
export function useOwnable2StepRenounceOwnership<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ownable2StepABI,
          'renounceOwnership'
        >['request']['abi'],
        'renounceOwnership',
        TMode
      > & { functionName?: 'renounceOwnership' }
    : UseContractWriteConfig<
        typeof ownable2StepABI,
        'renounceOwnership',
        TMode
      > & {
        abi?: never
        functionName?: 'renounceOwnership'
      } = {} as any,
) {
  return useContractWrite<typeof ownable2StepABI, 'renounceOwnership', TMode>({
    abi: ownable2StepABI,
    functionName: 'renounceOwnership',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ownable2StepABI}__ and `functionName` set to `"transferOwnership"`.
 */
export function useOwnable2StepTransferOwnership<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ownable2StepABI,
          'transferOwnership'
        >['request']['abi'],
        'transferOwnership',
        TMode
      > & { functionName?: 'transferOwnership' }
    : UseContractWriteConfig<
        typeof ownable2StepABI,
        'transferOwnership',
        TMode
      > & {
        abi?: never
        functionName?: 'transferOwnership'
      } = {} as any,
) {
  return useContractWrite<typeof ownable2StepABI, 'transferOwnership', TMode>({
    abi: ownable2StepABI,
    functionName: 'transferOwnership',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ownable2StepABI}__.
 */
export function usePrepareOwnable2StepWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ownable2StepABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ownable2StepABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof ownable2StepABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ownable2StepABI}__ and `functionName` set to `"acceptOwnership"`.
 */
export function usePrepareOwnable2StepAcceptOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ownable2StepABI, 'acceptOwnership'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ownable2StepABI,
    functionName: 'acceptOwnership',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ownable2StepABI, 'acceptOwnership'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ownable2StepABI}__ and `functionName` set to `"renounceOwnership"`.
 */
export function usePrepareOwnable2StepRenounceOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ownable2StepABI, 'renounceOwnership'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ownable2StepABI,
    functionName: 'renounceOwnership',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof ownable2StepABI,
    'renounceOwnership'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ownable2StepABI}__ and `functionName` set to `"transferOwnership"`.
 */
export function usePrepareOwnable2StepTransferOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ownable2StepABI, 'transferOwnership'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ownable2StepABI,
    functionName: 'transferOwnership',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof ownable2StepABI,
    'transferOwnership'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ownable2StepABI}__.
 */
export function useOwnable2StepEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof ownable2StepABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: ownable2StepABI,
    ...config,
  } as UseContractEventConfig<typeof ownable2StepABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ownable2StepABI}__ and `eventName` set to `"OwnershipTransferStarted"`.
 */
export function useOwnable2StepOwnershipTransferStartedEvent(
  config: Omit<
    UseContractEventConfig<typeof ownable2StepABI, 'OwnershipTransferStarted'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ownable2StepABI,
    eventName: 'OwnershipTransferStarted',
    ...config,
  } as UseContractEventConfig<
    typeof ownable2StepABI,
    'OwnershipTransferStarted'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ownable2StepABI}__ and `eventName` set to `"OwnershipTransferred"`.
 */
export function useOwnable2StepOwnershipTransferredEvent(
  config: Omit<
    UseContractEventConfig<typeof ownable2StepABI, 'OwnershipTransferred'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ownable2StepABI,
    eventName: 'OwnershipTransferred',
    ...config,
  } as UseContractEventConfig<typeof ownable2StepABI, 'OwnershipTransferred'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ownerManagerABI}__.
 */
export function useOwnerManagerRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof ownerManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ownerManagerABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: ownerManagerABI,
    ...config,
  } as UseContractReadConfig<
    typeof ownerManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ownerManagerABI}__ and `functionName` set to `"getOwners"`.
 */
export function useOwnerManagerGetOwners<
  TFunctionName extends 'getOwners',
  TSelectData = ReadContractResult<typeof ownerManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ownerManagerABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ownerManagerABI,
    functionName: 'getOwners',
    ...config,
  } as UseContractReadConfig<
    typeof ownerManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ownerManagerABI}__ and `functionName` set to `"getThreshold"`.
 */
export function useOwnerManagerGetThreshold<
  TFunctionName extends 'getThreshold',
  TSelectData = ReadContractResult<typeof ownerManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ownerManagerABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ownerManagerABI,
    functionName: 'getThreshold',
    ...config,
  } as UseContractReadConfig<
    typeof ownerManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ownerManagerABI}__ and `functionName` set to `"isOwner"`.
 */
export function useOwnerManagerIsOwner<
  TFunctionName extends 'isOwner',
  TSelectData = ReadContractResult<typeof ownerManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ownerManagerABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ownerManagerABI,
    functionName: 'isOwner',
    ...config,
  } as UseContractReadConfig<
    typeof ownerManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ownerManagerABI}__.
 */
export function useOwnerManagerWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ownerManagerABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof ownerManagerABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof ownerManagerABI, TFunctionName, TMode>({
    abi: ownerManagerABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ownerManagerABI}__ and `functionName` set to `"addOwnerWithThreshold"`.
 */
export function useOwnerManagerAddOwnerWithThreshold<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ownerManagerABI,
          'addOwnerWithThreshold'
        >['request']['abi'],
        'addOwnerWithThreshold',
        TMode
      > & { functionName?: 'addOwnerWithThreshold' }
    : UseContractWriteConfig<
        typeof ownerManagerABI,
        'addOwnerWithThreshold',
        TMode
      > & {
        abi?: never
        functionName?: 'addOwnerWithThreshold'
      } = {} as any,
) {
  return useContractWrite<
    typeof ownerManagerABI,
    'addOwnerWithThreshold',
    TMode
  >({
    abi: ownerManagerABI,
    functionName: 'addOwnerWithThreshold',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ownerManagerABI}__ and `functionName` set to `"changeThreshold"`.
 */
export function useOwnerManagerChangeThreshold<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ownerManagerABI,
          'changeThreshold'
        >['request']['abi'],
        'changeThreshold',
        TMode
      > & { functionName?: 'changeThreshold' }
    : UseContractWriteConfig<
        typeof ownerManagerABI,
        'changeThreshold',
        TMode
      > & {
        abi?: never
        functionName?: 'changeThreshold'
      } = {} as any,
) {
  return useContractWrite<typeof ownerManagerABI, 'changeThreshold', TMode>({
    abi: ownerManagerABI,
    functionName: 'changeThreshold',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ownerManagerABI}__ and `functionName` set to `"removeOwner"`.
 */
export function useOwnerManagerRemoveOwner<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ownerManagerABI,
          'removeOwner'
        >['request']['abi'],
        'removeOwner',
        TMode
      > & { functionName?: 'removeOwner' }
    : UseContractWriteConfig<typeof ownerManagerABI, 'removeOwner', TMode> & {
        abi?: never
        functionName?: 'removeOwner'
      } = {} as any,
) {
  return useContractWrite<typeof ownerManagerABI, 'removeOwner', TMode>({
    abi: ownerManagerABI,
    functionName: 'removeOwner',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ownerManagerABI}__ and `functionName` set to `"swapOwner"`.
 */
export function useOwnerManagerSwapOwner<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ownerManagerABI,
          'swapOwner'
        >['request']['abi'],
        'swapOwner',
        TMode
      > & { functionName?: 'swapOwner' }
    : UseContractWriteConfig<typeof ownerManagerABI, 'swapOwner', TMode> & {
        abi?: never
        functionName?: 'swapOwner'
      } = {} as any,
) {
  return useContractWrite<typeof ownerManagerABI, 'swapOwner', TMode>({
    abi: ownerManagerABI,
    functionName: 'swapOwner',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ownerManagerABI}__.
 */
export function usePrepareOwnerManagerWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ownerManagerABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ownerManagerABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof ownerManagerABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ownerManagerABI}__ and `functionName` set to `"addOwnerWithThreshold"`.
 */
export function usePrepareOwnerManagerAddOwnerWithThreshold(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof ownerManagerABI,
      'addOwnerWithThreshold'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ownerManagerABI,
    functionName: 'addOwnerWithThreshold',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof ownerManagerABI,
    'addOwnerWithThreshold'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ownerManagerABI}__ and `functionName` set to `"changeThreshold"`.
 */
export function usePrepareOwnerManagerChangeThreshold(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ownerManagerABI, 'changeThreshold'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ownerManagerABI,
    functionName: 'changeThreshold',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ownerManagerABI, 'changeThreshold'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ownerManagerABI}__ and `functionName` set to `"removeOwner"`.
 */
export function usePrepareOwnerManagerRemoveOwner(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ownerManagerABI, 'removeOwner'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ownerManagerABI,
    functionName: 'removeOwner',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ownerManagerABI, 'removeOwner'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ownerManagerABI}__ and `functionName` set to `"swapOwner"`.
 */
export function usePrepareOwnerManagerSwapOwner(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ownerManagerABI, 'swapOwner'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ownerManagerABI,
    functionName: 'swapOwner',
    ...config,
  } as UsePrepareContractWriteConfig<typeof ownerManagerABI, 'swapOwner'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ownerManagerABI}__.
 */
export function useOwnerManagerEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof ownerManagerABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: ownerManagerABI,
    ...config,
  } as UseContractEventConfig<typeof ownerManagerABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ownerManagerABI}__ and `eventName` set to `"AddedOwner"`.
 */
export function useOwnerManagerAddedOwnerEvent(
  config: Omit<
    UseContractEventConfig<typeof ownerManagerABI, 'AddedOwner'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ownerManagerABI,
    eventName: 'AddedOwner',
    ...config,
  } as UseContractEventConfig<typeof ownerManagerABI, 'AddedOwner'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ownerManagerABI}__ and `eventName` set to `"ChangedThreshold"`.
 */
export function useOwnerManagerChangedThresholdEvent(
  config: Omit<
    UseContractEventConfig<typeof ownerManagerABI, 'ChangedThreshold'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ownerManagerABI,
    eventName: 'ChangedThreshold',
    ...config,
  } as UseContractEventConfig<typeof ownerManagerABI, 'ChangedThreshold'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ownerManagerABI}__ and `eventName` set to `"RemovedOwner"`.
 */
export function useOwnerManagerRemovedOwnerEvent(
  config: Omit<
    UseContractEventConfig<typeof ownerManagerABI, 'RemovedOwner'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ownerManagerABI,
    eventName: 'RemovedOwner',
    ...config,
  } as UseContractEventConfig<typeof ownerManagerABI, 'RemovedOwner'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link registryManagerABI}__.
 */
export function useRegistryManagerRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof registryManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof registryManagerABI,
      TFunctionName,
      TSelectData
    >,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: registryManagerABI,
    ...config,
  } as UseContractReadConfig<
    typeof registryManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link registryManagerABI}__ and `functionName` set to `"owner"`.
 */
export function useRegistryManagerOwner<
  TFunctionName extends 'owner',
  TSelectData = ReadContractResult<typeof registryManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof registryManagerABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: registryManagerABI,
    functionName: 'owner',
    ...config,
  } as UseContractReadConfig<
    typeof registryManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link registryManagerABI}__ and `functionName` set to `"pendingOwner"`.
 */
export function useRegistryManagerPendingOwner<
  TFunctionName extends 'pendingOwner',
  TSelectData = ReadContractResult<typeof registryManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof registryManagerABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: registryManagerABI,
    functionName: 'pendingOwner',
    ...config,
  } as UseContractReadConfig<
    typeof registryManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link registryManagerABI}__ and `functionName` set to `"registry"`.
 */
export function useRegistryManagerRegistry<
  TFunctionName extends 'registry',
  TSelectData = ReadContractResult<typeof registryManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof registryManagerABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: registryManagerABI,
    functionName: 'registry',
    ...config,
  } as UseContractReadConfig<
    typeof registryManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link registryManagerABI}__.
 */
export function useRegistryManagerWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof registryManagerABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<
        typeof registryManagerABI,
        TFunctionName,
        TMode
      > & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof registryManagerABI, TFunctionName, TMode>({
    abi: registryManagerABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link registryManagerABI}__ and `functionName` set to `"acceptOwnership"`.
 */
export function useRegistryManagerAcceptOwnership<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof registryManagerABI,
          'acceptOwnership'
        >['request']['abi'],
        'acceptOwnership',
        TMode
      > & { functionName?: 'acceptOwnership' }
    : UseContractWriteConfig<
        typeof registryManagerABI,
        'acceptOwnership',
        TMode
      > & {
        abi?: never
        functionName?: 'acceptOwnership'
      } = {} as any,
) {
  return useContractWrite<typeof registryManagerABI, 'acceptOwnership', TMode>({
    abi: registryManagerABI,
    functionName: 'acceptOwnership',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link registryManagerABI}__ and `functionName` set to `"renounceOwnership"`.
 */
export function useRegistryManagerRenounceOwnership<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof registryManagerABI,
          'renounceOwnership'
        >['request']['abi'],
        'renounceOwnership',
        TMode
      > & { functionName?: 'renounceOwnership' }
    : UseContractWriteConfig<
        typeof registryManagerABI,
        'renounceOwnership',
        TMode
      > & {
        abi?: never
        functionName?: 'renounceOwnership'
      } = {} as any,
) {
  return useContractWrite<
    typeof registryManagerABI,
    'renounceOwnership',
    TMode
  >({
    abi: registryManagerABI,
    functionName: 'renounceOwnership',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link registryManagerABI}__ and `functionName` set to `"setRegistry"`.
 */
export function useRegistryManagerSetRegistry<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof registryManagerABI,
          'setRegistry'
        >['request']['abi'],
        'setRegistry',
        TMode
      > & { functionName?: 'setRegistry' }
    : UseContractWriteConfig<
        typeof registryManagerABI,
        'setRegistry',
        TMode
      > & {
        abi?: never
        functionName?: 'setRegistry'
      } = {} as any,
) {
  return useContractWrite<typeof registryManagerABI, 'setRegistry', TMode>({
    abi: registryManagerABI,
    functionName: 'setRegistry',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link registryManagerABI}__ and `functionName` set to `"transferOwnership"`.
 */
export function useRegistryManagerTransferOwnership<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof registryManagerABI,
          'transferOwnership'
        >['request']['abi'],
        'transferOwnership',
        TMode
      > & { functionName?: 'transferOwnership' }
    : UseContractWriteConfig<
        typeof registryManagerABI,
        'transferOwnership',
        TMode
      > & {
        abi?: never
        functionName?: 'transferOwnership'
      } = {} as any,
) {
  return useContractWrite<
    typeof registryManagerABI,
    'transferOwnership',
    TMode
  >({
    abi: registryManagerABI,
    functionName: 'transferOwnership',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link registryManagerABI}__.
 */
export function usePrepareRegistryManagerWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof registryManagerABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: registryManagerABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof registryManagerABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link registryManagerABI}__ and `functionName` set to `"acceptOwnership"`.
 */
export function usePrepareRegistryManagerAcceptOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<typeof registryManagerABI, 'acceptOwnership'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: registryManagerABI,
    functionName: 'acceptOwnership',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof registryManagerABI,
    'acceptOwnership'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link registryManagerABI}__ and `functionName` set to `"renounceOwnership"`.
 */
export function usePrepareRegistryManagerRenounceOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof registryManagerABI,
      'renounceOwnership'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: registryManagerABI,
    functionName: 'renounceOwnership',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof registryManagerABI,
    'renounceOwnership'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link registryManagerABI}__ and `functionName` set to `"setRegistry"`.
 */
export function usePrepareRegistryManagerSetRegistry(
  config: Omit<
    UsePrepareContractWriteConfig<typeof registryManagerABI, 'setRegistry'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: registryManagerABI,
    functionName: 'setRegistry',
    ...config,
  } as UsePrepareContractWriteConfig<typeof registryManagerABI, 'setRegistry'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link registryManagerABI}__ and `functionName` set to `"transferOwnership"`.
 */
export function usePrepareRegistryManagerTransferOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof registryManagerABI,
      'transferOwnership'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: registryManagerABI,
    functionName: 'transferOwnership',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof registryManagerABI,
    'transferOwnership'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link registryManagerABI}__.
 */
export function useRegistryManagerEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof registryManagerABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: registryManagerABI,
    ...config,
  } as UseContractEventConfig<typeof registryManagerABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link registryManagerABI}__ and `eventName` set to `"OwnershipTransferStarted"`.
 */
export function useRegistryManagerOwnershipTransferStartedEvent(
  config: Omit<
    UseContractEventConfig<
      typeof registryManagerABI,
      'OwnershipTransferStarted'
    >,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: registryManagerABI,
    eventName: 'OwnershipTransferStarted',
    ...config,
  } as UseContractEventConfig<
    typeof registryManagerABI,
    'OwnershipTransferStarted'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link registryManagerABI}__ and `eventName` set to `"OwnershipTransferred"`.
 */
export function useRegistryManagerOwnershipTransferredEvent(
  config: Omit<
    UseContractEventConfig<typeof registryManagerABI, 'OwnershipTransferred'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: registryManagerABI,
    eventName: 'OwnershipTransferred',
    ...config,
  } as UseContractEventConfig<
    typeof registryManagerABI,
    'OwnershipTransferred'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link registryManagerABI}__ and `eventName` set to `"RegistryChanged"`.
 */
export function useRegistryManagerRegistryChangedEvent(
  config: Omit<
    UseContractEventConfig<typeof registryManagerABI, 'RegistryChanged'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: registryManagerABI,
    eventName: 'RegistryChanged',
    ...config,
  } as UseContractEventConfig<typeof registryManagerABI, 'RegistryChanged'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link safeABI}__.
 */
export function useSafeRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof safeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof safeABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({ abi: safeABI, ...config } as UseContractReadConfig<
    typeof safeABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link safeABI}__ and `functionName` set to `"VERSION"`.
 */
export function useSafeVersion<
  TFunctionName extends 'VERSION',
  TSelectData = ReadContractResult<typeof safeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof safeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: safeABI,
    functionName: 'VERSION',
    ...config,
  } as UseContractReadConfig<typeof safeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link safeABI}__ and `functionName` set to `"approvedHashes"`.
 */
export function useSafeApprovedHashes<
  TFunctionName extends 'approvedHashes',
  TSelectData = ReadContractResult<typeof safeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof safeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: safeABI,
    functionName: 'approvedHashes',
    ...config,
  } as UseContractReadConfig<typeof safeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link safeABI}__ and `functionName` set to `"checkNSignatures"`.
 */
export function useSafeCheckNSignatures<
  TFunctionName extends 'checkNSignatures',
  TSelectData = ReadContractResult<typeof safeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof safeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: safeABI,
    functionName: 'checkNSignatures',
    ...config,
  } as UseContractReadConfig<typeof safeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link safeABI}__ and `functionName` set to `"checkSignatures"`.
 */
export function useSafeCheckSignatures<
  TFunctionName extends 'checkSignatures',
  TSelectData = ReadContractResult<typeof safeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof safeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: safeABI,
    functionName: 'checkSignatures',
    ...config,
  } as UseContractReadConfig<typeof safeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link safeABI}__ and `functionName` set to `"domainSeparator"`.
 */
export function useSafeDomainSeparator<
  TFunctionName extends 'domainSeparator',
  TSelectData = ReadContractResult<typeof safeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof safeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: safeABI,
    functionName: 'domainSeparator',
    ...config,
  } as UseContractReadConfig<typeof safeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link safeABI}__ and `functionName` set to `"encodeTransactionData"`.
 */
export function useSafeEncodeTransactionData<
  TFunctionName extends 'encodeTransactionData',
  TSelectData = ReadContractResult<typeof safeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof safeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: safeABI,
    functionName: 'encodeTransactionData',
    ...config,
  } as UseContractReadConfig<typeof safeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link safeABI}__ and `functionName` set to `"getChainId"`.
 */
export function useSafeGetChainId<
  TFunctionName extends 'getChainId',
  TSelectData = ReadContractResult<typeof safeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof safeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: safeABI,
    functionName: 'getChainId',
    ...config,
  } as UseContractReadConfig<typeof safeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link safeABI}__ and `functionName` set to `"getModulesPaginated"`.
 */
export function useSafeGetModulesPaginated<
  TFunctionName extends 'getModulesPaginated',
  TSelectData = ReadContractResult<typeof safeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof safeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: safeABI,
    functionName: 'getModulesPaginated',
    ...config,
  } as UseContractReadConfig<typeof safeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link safeABI}__ and `functionName` set to `"getOwners"`.
 */
export function useSafeGetOwners<
  TFunctionName extends 'getOwners',
  TSelectData = ReadContractResult<typeof safeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof safeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: safeABI,
    functionName: 'getOwners',
    ...config,
  } as UseContractReadConfig<typeof safeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link safeABI}__ and `functionName` set to `"getStorageAt"`.
 */
export function useSafeGetStorageAt<
  TFunctionName extends 'getStorageAt',
  TSelectData = ReadContractResult<typeof safeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof safeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: safeABI,
    functionName: 'getStorageAt',
    ...config,
  } as UseContractReadConfig<typeof safeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link safeABI}__ and `functionName` set to `"getThreshold"`.
 */
export function useSafeGetThreshold<
  TFunctionName extends 'getThreshold',
  TSelectData = ReadContractResult<typeof safeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof safeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: safeABI,
    functionName: 'getThreshold',
    ...config,
  } as UseContractReadConfig<typeof safeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link safeABI}__ and `functionName` set to `"getTransactionHash"`.
 */
export function useSafeGetTransactionHash<
  TFunctionName extends 'getTransactionHash',
  TSelectData = ReadContractResult<typeof safeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof safeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: safeABI,
    functionName: 'getTransactionHash',
    ...config,
  } as UseContractReadConfig<typeof safeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link safeABI}__ and `functionName` set to `"isModuleEnabled"`.
 */
export function useSafeIsModuleEnabled<
  TFunctionName extends 'isModuleEnabled',
  TSelectData = ReadContractResult<typeof safeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof safeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: safeABI,
    functionName: 'isModuleEnabled',
    ...config,
  } as UseContractReadConfig<typeof safeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link safeABI}__ and `functionName` set to `"isOwner"`.
 */
export function useSafeIsOwner<
  TFunctionName extends 'isOwner',
  TSelectData = ReadContractResult<typeof safeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof safeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: safeABI,
    functionName: 'isOwner',
    ...config,
  } as UseContractReadConfig<typeof safeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link safeABI}__ and `functionName` set to `"nonce"`.
 */
export function useSafeNonce<
  TFunctionName extends 'nonce',
  TSelectData = ReadContractResult<typeof safeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof safeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: safeABI,
    functionName: 'nonce',
    ...config,
  } as UseContractReadConfig<typeof safeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link safeABI}__ and `functionName` set to `"signedMessages"`.
 */
export function useSafeSignedMessages<
  TFunctionName extends 'signedMessages',
  TSelectData = ReadContractResult<typeof safeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof safeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: safeABI,
    functionName: 'signedMessages',
    ...config,
  } as UseContractReadConfig<typeof safeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link safeABI}__.
 */
export function useSafeWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof safeABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof safeABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof safeABI, TFunctionName, TMode>({
    abi: safeABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link safeABI}__ and `functionName` set to `"addOwnerWithThreshold"`.
 */
export function useSafeAddOwnerWithThreshold<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof safeABI,
          'addOwnerWithThreshold'
        >['request']['abi'],
        'addOwnerWithThreshold',
        TMode
      > & { functionName?: 'addOwnerWithThreshold' }
    : UseContractWriteConfig<typeof safeABI, 'addOwnerWithThreshold', TMode> & {
        abi?: never
        functionName?: 'addOwnerWithThreshold'
      } = {} as any,
) {
  return useContractWrite<typeof safeABI, 'addOwnerWithThreshold', TMode>({
    abi: safeABI,
    functionName: 'addOwnerWithThreshold',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link safeABI}__ and `functionName` set to `"approveHash"`.
 */
export function useSafeApproveHash<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof safeABI,
          'approveHash'
        >['request']['abi'],
        'approveHash',
        TMode
      > & { functionName?: 'approveHash' }
    : UseContractWriteConfig<typeof safeABI, 'approveHash', TMode> & {
        abi?: never
        functionName?: 'approveHash'
      } = {} as any,
) {
  return useContractWrite<typeof safeABI, 'approveHash', TMode>({
    abi: safeABI,
    functionName: 'approveHash',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link safeABI}__ and `functionName` set to `"changeThreshold"`.
 */
export function useSafeChangeThreshold<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof safeABI,
          'changeThreshold'
        >['request']['abi'],
        'changeThreshold',
        TMode
      > & { functionName?: 'changeThreshold' }
    : UseContractWriteConfig<typeof safeABI, 'changeThreshold', TMode> & {
        abi?: never
        functionName?: 'changeThreshold'
      } = {} as any,
) {
  return useContractWrite<typeof safeABI, 'changeThreshold', TMode>({
    abi: safeABI,
    functionName: 'changeThreshold',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link safeABI}__ and `functionName` set to `"disableModule"`.
 */
export function useSafeDisableModule<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof safeABI,
          'disableModule'
        >['request']['abi'],
        'disableModule',
        TMode
      > & { functionName?: 'disableModule' }
    : UseContractWriteConfig<typeof safeABI, 'disableModule', TMode> & {
        abi?: never
        functionName?: 'disableModule'
      } = {} as any,
) {
  return useContractWrite<typeof safeABI, 'disableModule', TMode>({
    abi: safeABI,
    functionName: 'disableModule',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link safeABI}__ and `functionName` set to `"enableModule"`.
 */
export function useSafeEnableModule<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof safeABI,
          'enableModule'
        >['request']['abi'],
        'enableModule',
        TMode
      > & { functionName?: 'enableModule' }
    : UseContractWriteConfig<typeof safeABI, 'enableModule', TMode> & {
        abi?: never
        functionName?: 'enableModule'
      } = {} as any,
) {
  return useContractWrite<typeof safeABI, 'enableModule', TMode>({
    abi: safeABI,
    functionName: 'enableModule',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link safeABI}__ and `functionName` set to `"execTransaction"`.
 */
export function useSafeExecTransaction<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof safeABI,
          'execTransaction'
        >['request']['abi'],
        'execTransaction',
        TMode
      > & { functionName?: 'execTransaction' }
    : UseContractWriteConfig<typeof safeABI, 'execTransaction', TMode> & {
        abi?: never
        functionName?: 'execTransaction'
      } = {} as any,
) {
  return useContractWrite<typeof safeABI, 'execTransaction', TMode>({
    abi: safeABI,
    functionName: 'execTransaction',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link safeABI}__ and `functionName` set to `"execTransactionFromModule"`.
 */
export function useSafeExecTransactionFromModule<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof safeABI,
          'execTransactionFromModule'
        >['request']['abi'],
        'execTransactionFromModule',
        TMode
      > & { functionName?: 'execTransactionFromModule' }
    : UseContractWriteConfig<
        typeof safeABI,
        'execTransactionFromModule',
        TMode
      > & {
        abi?: never
        functionName?: 'execTransactionFromModule'
      } = {} as any,
) {
  return useContractWrite<typeof safeABI, 'execTransactionFromModule', TMode>({
    abi: safeABI,
    functionName: 'execTransactionFromModule',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link safeABI}__ and `functionName` set to `"execTransactionFromModuleReturnData"`.
 */
export function useSafeExecTransactionFromModuleReturnData<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof safeABI,
          'execTransactionFromModuleReturnData'
        >['request']['abi'],
        'execTransactionFromModuleReturnData',
        TMode
      > & { functionName?: 'execTransactionFromModuleReturnData' }
    : UseContractWriteConfig<
        typeof safeABI,
        'execTransactionFromModuleReturnData',
        TMode
      > & {
        abi?: never
        functionName?: 'execTransactionFromModuleReturnData'
      } = {} as any,
) {
  return useContractWrite<
    typeof safeABI,
    'execTransactionFromModuleReturnData',
    TMode
  >({
    abi: safeABI,
    functionName: 'execTransactionFromModuleReturnData',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link safeABI}__ and `functionName` set to `"removeOwner"`.
 */
export function useSafeRemoveOwner<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof safeABI,
          'removeOwner'
        >['request']['abi'],
        'removeOwner',
        TMode
      > & { functionName?: 'removeOwner' }
    : UseContractWriteConfig<typeof safeABI, 'removeOwner', TMode> & {
        abi?: never
        functionName?: 'removeOwner'
      } = {} as any,
) {
  return useContractWrite<typeof safeABI, 'removeOwner', TMode>({
    abi: safeABI,
    functionName: 'removeOwner',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link safeABI}__ and `functionName` set to `"setFallbackHandler"`.
 */
export function useSafeSetFallbackHandler<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof safeABI,
          'setFallbackHandler'
        >['request']['abi'],
        'setFallbackHandler',
        TMode
      > & { functionName?: 'setFallbackHandler' }
    : UseContractWriteConfig<typeof safeABI, 'setFallbackHandler', TMode> & {
        abi?: never
        functionName?: 'setFallbackHandler'
      } = {} as any,
) {
  return useContractWrite<typeof safeABI, 'setFallbackHandler', TMode>({
    abi: safeABI,
    functionName: 'setFallbackHandler',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link safeABI}__ and `functionName` set to `"setGuard"`.
 */
export function useSafeSetGuard<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof safeABI,
          'setGuard'
        >['request']['abi'],
        'setGuard',
        TMode
      > & { functionName?: 'setGuard' }
    : UseContractWriteConfig<typeof safeABI, 'setGuard', TMode> & {
        abi?: never
        functionName?: 'setGuard'
      } = {} as any,
) {
  return useContractWrite<typeof safeABI, 'setGuard', TMode>({
    abi: safeABI,
    functionName: 'setGuard',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link safeABI}__ and `functionName` set to `"setup"`.
 */
export function useSafeSetup<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof safeABI, 'setup'>['request']['abi'],
        'setup',
        TMode
      > & { functionName?: 'setup' }
    : UseContractWriteConfig<typeof safeABI, 'setup', TMode> & {
        abi?: never
        functionName?: 'setup'
      } = {} as any,
) {
  return useContractWrite<typeof safeABI, 'setup', TMode>({
    abi: safeABI,
    functionName: 'setup',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link safeABI}__ and `functionName` set to `"simulateAndRevert"`.
 */
export function useSafeSimulateAndRevert<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof safeABI,
          'simulateAndRevert'
        >['request']['abi'],
        'simulateAndRevert',
        TMode
      > & { functionName?: 'simulateAndRevert' }
    : UseContractWriteConfig<typeof safeABI, 'simulateAndRevert', TMode> & {
        abi?: never
        functionName?: 'simulateAndRevert'
      } = {} as any,
) {
  return useContractWrite<typeof safeABI, 'simulateAndRevert', TMode>({
    abi: safeABI,
    functionName: 'simulateAndRevert',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link safeABI}__ and `functionName` set to `"swapOwner"`.
 */
export function useSafeSwapOwner<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof safeABI,
          'swapOwner'
        >['request']['abi'],
        'swapOwner',
        TMode
      > & { functionName?: 'swapOwner' }
    : UseContractWriteConfig<typeof safeABI, 'swapOwner', TMode> & {
        abi?: never
        functionName?: 'swapOwner'
      } = {} as any,
) {
  return useContractWrite<typeof safeABI, 'swapOwner', TMode>({
    abi: safeABI,
    functionName: 'swapOwner',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link safeABI}__.
 */
export function usePrepareSafeWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof safeABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: safeABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof safeABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link safeABI}__ and `functionName` set to `"addOwnerWithThreshold"`.
 */
export function usePrepareSafeAddOwnerWithThreshold(
  config: Omit<
    UsePrepareContractWriteConfig<typeof safeABI, 'addOwnerWithThreshold'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: safeABI,
    functionName: 'addOwnerWithThreshold',
    ...config,
  } as UsePrepareContractWriteConfig<typeof safeABI, 'addOwnerWithThreshold'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link safeABI}__ and `functionName` set to `"approveHash"`.
 */
export function usePrepareSafeApproveHash(
  config: Omit<
    UsePrepareContractWriteConfig<typeof safeABI, 'approveHash'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: safeABI,
    functionName: 'approveHash',
    ...config,
  } as UsePrepareContractWriteConfig<typeof safeABI, 'approveHash'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link safeABI}__ and `functionName` set to `"changeThreshold"`.
 */
export function usePrepareSafeChangeThreshold(
  config: Omit<
    UsePrepareContractWriteConfig<typeof safeABI, 'changeThreshold'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: safeABI,
    functionName: 'changeThreshold',
    ...config,
  } as UsePrepareContractWriteConfig<typeof safeABI, 'changeThreshold'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link safeABI}__ and `functionName` set to `"disableModule"`.
 */
export function usePrepareSafeDisableModule(
  config: Omit<
    UsePrepareContractWriteConfig<typeof safeABI, 'disableModule'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: safeABI,
    functionName: 'disableModule',
    ...config,
  } as UsePrepareContractWriteConfig<typeof safeABI, 'disableModule'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link safeABI}__ and `functionName` set to `"enableModule"`.
 */
export function usePrepareSafeEnableModule(
  config: Omit<
    UsePrepareContractWriteConfig<typeof safeABI, 'enableModule'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: safeABI,
    functionName: 'enableModule',
    ...config,
  } as UsePrepareContractWriteConfig<typeof safeABI, 'enableModule'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link safeABI}__ and `functionName` set to `"execTransaction"`.
 */
export function usePrepareSafeExecTransaction(
  config: Omit<
    UsePrepareContractWriteConfig<typeof safeABI, 'execTransaction'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: safeABI,
    functionName: 'execTransaction',
    ...config,
  } as UsePrepareContractWriteConfig<typeof safeABI, 'execTransaction'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link safeABI}__ and `functionName` set to `"execTransactionFromModule"`.
 */
export function usePrepareSafeExecTransactionFromModule(
  config: Omit<
    UsePrepareContractWriteConfig<typeof safeABI, 'execTransactionFromModule'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: safeABI,
    functionName: 'execTransactionFromModule',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof safeABI,
    'execTransactionFromModule'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link safeABI}__ and `functionName` set to `"execTransactionFromModuleReturnData"`.
 */
export function usePrepareSafeExecTransactionFromModuleReturnData(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof safeABI,
      'execTransactionFromModuleReturnData'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: safeABI,
    functionName: 'execTransactionFromModuleReturnData',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof safeABI,
    'execTransactionFromModuleReturnData'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link safeABI}__ and `functionName` set to `"removeOwner"`.
 */
export function usePrepareSafeRemoveOwner(
  config: Omit<
    UsePrepareContractWriteConfig<typeof safeABI, 'removeOwner'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: safeABI,
    functionName: 'removeOwner',
    ...config,
  } as UsePrepareContractWriteConfig<typeof safeABI, 'removeOwner'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link safeABI}__ and `functionName` set to `"setFallbackHandler"`.
 */
export function usePrepareSafeSetFallbackHandler(
  config: Omit<
    UsePrepareContractWriteConfig<typeof safeABI, 'setFallbackHandler'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: safeABI,
    functionName: 'setFallbackHandler',
    ...config,
  } as UsePrepareContractWriteConfig<typeof safeABI, 'setFallbackHandler'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link safeABI}__ and `functionName` set to `"setGuard"`.
 */
export function usePrepareSafeSetGuard(
  config: Omit<
    UsePrepareContractWriteConfig<typeof safeABI, 'setGuard'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: safeABI,
    functionName: 'setGuard',
    ...config,
  } as UsePrepareContractWriteConfig<typeof safeABI, 'setGuard'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link safeABI}__ and `functionName` set to `"setup"`.
 */
export function usePrepareSafeSetup(
  config: Omit<
    UsePrepareContractWriteConfig<typeof safeABI, 'setup'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: safeABI,
    functionName: 'setup',
    ...config,
  } as UsePrepareContractWriteConfig<typeof safeABI, 'setup'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link safeABI}__ and `functionName` set to `"simulateAndRevert"`.
 */
export function usePrepareSafeSimulateAndRevert(
  config: Omit<
    UsePrepareContractWriteConfig<typeof safeABI, 'simulateAndRevert'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: safeABI,
    functionName: 'simulateAndRevert',
    ...config,
  } as UsePrepareContractWriteConfig<typeof safeABI, 'simulateAndRevert'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link safeABI}__ and `functionName` set to `"swapOwner"`.
 */
export function usePrepareSafeSwapOwner(
  config: Omit<
    UsePrepareContractWriteConfig<typeof safeABI, 'swapOwner'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: safeABI,
    functionName: 'swapOwner',
    ...config,
  } as UsePrepareContractWriteConfig<typeof safeABI, 'swapOwner'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link safeABI}__.
 */
export function useSafeEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof safeABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({ abi: safeABI, ...config } as UseContractEventConfig<
    typeof safeABI,
    TEventName
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link safeABI}__ and `eventName` set to `"AddedOwner"`.
 */
export function useSafeAddedOwnerEvent(
  config: Omit<
    UseContractEventConfig<typeof safeABI, 'AddedOwner'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: safeABI,
    eventName: 'AddedOwner',
    ...config,
  } as UseContractEventConfig<typeof safeABI, 'AddedOwner'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link safeABI}__ and `eventName` set to `"ApproveHash"`.
 */
export function useSafeApproveHashEvent(
  config: Omit<
    UseContractEventConfig<typeof safeABI, 'ApproveHash'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: safeABI,
    eventName: 'ApproveHash',
    ...config,
  } as UseContractEventConfig<typeof safeABI, 'ApproveHash'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link safeABI}__ and `eventName` set to `"ChangedFallbackHandler"`.
 */
export function useSafeChangedFallbackHandlerEvent(
  config: Omit<
    UseContractEventConfig<typeof safeABI, 'ChangedFallbackHandler'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: safeABI,
    eventName: 'ChangedFallbackHandler',
    ...config,
  } as UseContractEventConfig<typeof safeABI, 'ChangedFallbackHandler'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link safeABI}__ and `eventName` set to `"ChangedGuard"`.
 */
export function useSafeChangedGuardEvent(
  config: Omit<
    UseContractEventConfig<typeof safeABI, 'ChangedGuard'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: safeABI,
    eventName: 'ChangedGuard',
    ...config,
  } as UseContractEventConfig<typeof safeABI, 'ChangedGuard'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link safeABI}__ and `eventName` set to `"ChangedThreshold"`.
 */
export function useSafeChangedThresholdEvent(
  config: Omit<
    UseContractEventConfig<typeof safeABI, 'ChangedThreshold'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: safeABI,
    eventName: 'ChangedThreshold',
    ...config,
  } as UseContractEventConfig<typeof safeABI, 'ChangedThreshold'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link safeABI}__ and `eventName` set to `"DisabledModule"`.
 */
export function useSafeDisabledModuleEvent(
  config: Omit<
    UseContractEventConfig<typeof safeABI, 'DisabledModule'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: safeABI,
    eventName: 'DisabledModule',
    ...config,
  } as UseContractEventConfig<typeof safeABI, 'DisabledModule'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link safeABI}__ and `eventName` set to `"EnabledModule"`.
 */
export function useSafeEnabledModuleEvent(
  config: Omit<
    UseContractEventConfig<typeof safeABI, 'EnabledModule'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: safeABI,
    eventName: 'EnabledModule',
    ...config,
  } as UseContractEventConfig<typeof safeABI, 'EnabledModule'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link safeABI}__ and `eventName` set to `"ExecutionFailure"`.
 */
export function useSafeExecutionFailureEvent(
  config: Omit<
    UseContractEventConfig<typeof safeABI, 'ExecutionFailure'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: safeABI,
    eventName: 'ExecutionFailure',
    ...config,
  } as UseContractEventConfig<typeof safeABI, 'ExecutionFailure'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link safeABI}__ and `eventName` set to `"ExecutionFromModuleFailure"`.
 */
export function useSafeExecutionFromModuleFailureEvent(
  config: Omit<
    UseContractEventConfig<typeof safeABI, 'ExecutionFromModuleFailure'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: safeABI,
    eventName: 'ExecutionFromModuleFailure',
    ...config,
  } as UseContractEventConfig<typeof safeABI, 'ExecutionFromModuleFailure'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link safeABI}__ and `eventName` set to `"ExecutionFromModuleSuccess"`.
 */
export function useSafeExecutionFromModuleSuccessEvent(
  config: Omit<
    UseContractEventConfig<typeof safeABI, 'ExecutionFromModuleSuccess'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: safeABI,
    eventName: 'ExecutionFromModuleSuccess',
    ...config,
  } as UseContractEventConfig<typeof safeABI, 'ExecutionFromModuleSuccess'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link safeABI}__ and `eventName` set to `"ExecutionSuccess"`.
 */
export function useSafeExecutionSuccessEvent(
  config: Omit<
    UseContractEventConfig<typeof safeABI, 'ExecutionSuccess'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: safeABI,
    eventName: 'ExecutionSuccess',
    ...config,
  } as UseContractEventConfig<typeof safeABI, 'ExecutionSuccess'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link safeABI}__ and `eventName` set to `"RemovedOwner"`.
 */
export function useSafeRemovedOwnerEvent(
  config: Omit<
    UseContractEventConfig<typeof safeABI, 'RemovedOwner'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: safeABI,
    eventName: 'RemovedOwner',
    ...config,
  } as UseContractEventConfig<typeof safeABI, 'RemovedOwner'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link safeABI}__ and `eventName` set to `"SafeReceived"`.
 */
export function useSafeSafeReceivedEvent(
  config: Omit<
    UseContractEventConfig<typeof safeABI, 'SafeReceived'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: safeABI,
    eventName: 'SafeReceived',
    ...config,
  } as UseContractEventConfig<typeof safeABI, 'SafeReceived'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link safeABI}__ and `eventName` set to `"SafeSetup"`.
 */
export function useSafeSafeSetupEvent(
  config: Omit<
    UseContractEventConfig<typeof safeABI, 'SafeSetup'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: safeABI,
    eventName: 'SafeSetup',
    ...config,
  } as UseContractEventConfig<typeof safeABI, 'SafeSetup'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link safeABI}__ and `eventName` set to `"SignMsg"`.
 */
export function useSafeSignMsgEvent(
  config: Omit<
    UseContractEventConfig<typeof safeABI, 'SignMsg'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: safeABI,
    eventName: 'SignMsg',
    ...config,
  } as UseContractEventConfig<typeof safeABI, 'SignMsg'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link safeProtocolManagerABI}__.
 */
export function useSafeProtocolManagerRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<
    typeof safeProtocolManagerABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof safeProtocolManagerABI,
      TFunctionName,
      TSelectData
    >,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: safeProtocolManagerABI,
    ...config,
  } as UseContractReadConfig<
    typeof safeProtocolManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link safeProtocolManagerABI}__ and `functionName` set to `"enabledHooks"`.
 */
export function useSafeProtocolManagerEnabledHooks<
  TFunctionName extends 'enabledHooks',
  TSelectData = ReadContractResult<
    typeof safeProtocolManagerABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof safeProtocolManagerABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: safeProtocolManagerABI,
    functionName: 'enabledHooks',
    ...config,
  } as UseContractReadConfig<
    typeof safeProtocolManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link safeProtocolManagerABI}__ and `functionName` set to `"enabledPlugins"`.
 */
export function useSafeProtocolManagerEnabledPlugins<
  TFunctionName extends 'enabledPlugins',
  TSelectData = ReadContractResult<
    typeof safeProtocolManagerABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof safeProtocolManagerABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: safeProtocolManagerABI,
    functionName: 'enabledPlugins',
    ...config,
  } as UseContractReadConfig<
    typeof safeProtocolManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link safeProtocolManagerABI}__ and `functionName` set to `"getEnabledHooks"`.
 */
export function useSafeProtocolManagerGetEnabledHooks<
  TFunctionName extends 'getEnabledHooks',
  TSelectData = ReadContractResult<
    typeof safeProtocolManagerABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof safeProtocolManagerABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: safeProtocolManagerABI,
    functionName: 'getEnabledHooks',
    ...config,
  } as UseContractReadConfig<
    typeof safeProtocolManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link safeProtocolManagerABI}__ and `functionName` set to `"getPluginInfo"`.
 */
export function useSafeProtocolManagerGetPluginInfo<
  TFunctionName extends 'getPluginInfo',
  TSelectData = ReadContractResult<
    typeof safeProtocolManagerABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof safeProtocolManagerABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: safeProtocolManagerABI,
    functionName: 'getPluginInfo',
    ...config,
  } as UseContractReadConfig<
    typeof safeProtocolManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link safeProtocolManagerABI}__ and `functionName` set to `"getPluginsPaginated"`.
 */
export function useSafeProtocolManagerGetPluginsPaginated<
  TFunctionName extends 'getPluginsPaginated',
  TSelectData = ReadContractResult<
    typeof safeProtocolManagerABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof safeProtocolManagerABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: safeProtocolManagerABI,
    functionName: 'getPluginsPaginated',
    ...config,
  } as UseContractReadConfig<
    typeof safeProtocolManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link safeProtocolManagerABI}__ and `functionName` set to `"isPluginEnabled"`.
 */
export function useSafeProtocolManagerIsPluginEnabled<
  TFunctionName extends 'isPluginEnabled',
  TSelectData = ReadContractResult<
    typeof safeProtocolManagerABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof safeProtocolManagerABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: safeProtocolManagerABI,
    functionName: 'isPluginEnabled',
    ...config,
  } as UseContractReadConfig<
    typeof safeProtocolManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link safeProtocolManagerABI}__ and `functionName` set to `"owner"`.
 */
export function useSafeProtocolManagerOwner<
  TFunctionName extends 'owner',
  TSelectData = ReadContractResult<
    typeof safeProtocolManagerABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof safeProtocolManagerABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: safeProtocolManagerABI,
    functionName: 'owner',
    ...config,
  } as UseContractReadConfig<
    typeof safeProtocolManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link safeProtocolManagerABI}__ and `functionName` set to `"pendingOwner"`.
 */
export function useSafeProtocolManagerPendingOwner<
  TFunctionName extends 'pendingOwner',
  TSelectData = ReadContractResult<
    typeof safeProtocolManagerABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof safeProtocolManagerABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: safeProtocolManagerABI,
    functionName: 'pendingOwner',
    ...config,
  } as UseContractReadConfig<
    typeof safeProtocolManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link safeProtocolManagerABI}__ and `functionName` set to `"registry"`.
 */
export function useSafeProtocolManagerRegistry<
  TFunctionName extends 'registry',
  TSelectData = ReadContractResult<
    typeof safeProtocolManagerABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof safeProtocolManagerABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: safeProtocolManagerABI,
    functionName: 'registry',
    ...config,
  } as UseContractReadConfig<
    typeof safeProtocolManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link safeProtocolManagerABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function useSafeProtocolManagerSupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<
    typeof safeProtocolManagerABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof safeProtocolManagerABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: safeProtocolManagerABI,
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<
    typeof safeProtocolManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link safeProtocolManagerABI}__ and `functionName` set to `"tempHooksAddress"`.
 */
export function useSafeProtocolManagerTempHooksAddress<
  TFunctionName extends 'tempHooksAddress',
  TSelectData = ReadContractResult<
    typeof safeProtocolManagerABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof safeProtocolManagerABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: safeProtocolManagerABI,
    functionName: 'tempHooksAddress',
    ...config,
  } as UseContractReadConfig<
    typeof safeProtocolManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link safeProtocolManagerABI}__.
 */
export function useSafeProtocolManagerWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof safeProtocolManagerABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<
        typeof safeProtocolManagerABI,
        TFunctionName,
        TMode
      > & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof safeProtocolManagerABI, TFunctionName, TMode>({
    abi: safeProtocolManagerABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link safeProtocolManagerABI}__ and `functionName` set to `"acceptOwnership"`.
 */
export function useSafeProtocolManagerAcceptOwnership<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof safeProtocolManagerABI,
          'acceptOwnership'
        >['request']['abi'],
        'acceptOwnership',
        TMode
      > & { functionName?: 'acceptOwnership' }
    : UseContractWriteConfig<
        typeof safeProtocolManagerABI,
        'acceptOwnership',
        TMode
      > & {
        abi?: never
        functionName?: 'acceptOwnership'
      } = {} as any,
) {
  return useContractWrite<
    typeof safeProtocolManagerABI,
    'acceptOwnership',
    TMode
  >({
    abi: safeProtocolManagerABI,
    functionName: 'acceptOwnership',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link safeProtocolManagerABI}__ and `functionName` set to `"checkAfterExecution"`.
 */
export function useSafeProtocolManagerCheckAfterExecution<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof safeProtocolManagerABI,
          'checkAfterExecution'
        >['request']['abi'],
        'checkAfterExecution',
        TMode
      > & { functionName?: 'checkAfterExecution' }
    : UseContractWriteConfig<
        typeof safeProtocolManagerABI,
        'checkAfterExecution',
        TMode
      > & {
        abi?: never
        functionName?: 'checkAfterExecution'
      } = {} as any,
) {
  return useContractWrite<
    typeof safeProtocolManagerABI,
    'checkAfterExecution',
    TMode
  >({
    abi: safeProtocolManagerABI,
    functionName: 'checkAfterExecution',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link safeProtocolManagerABI}__ and `functionName` set to `"checkModuleTransaction"`.
 */
export function useSafeProtocolManagerCheckModuleTransaction<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof safeProtocolManagerABI,
          'checkModuleTransaction'
        >['request']['abi'],
        'checkModuleTransaction',
        TMode
      > & { functionName?: 'checkModuleTransaction' }
    : UseContractWriteConfig<
        typeof safeProtocolManagerABI,
        'checkModuleTransaction',
        TMode
      > & {
        abi?: never
        functionName?: 'checkModuleTransaction'
      } = {} as any,
) {
  return useContractWrite<
    typeof safeProtocolManagerABI,
    'checkModuleTransaction',
    TMode
  >({
    abi: safeProtocolManagerABI,
    functionName: 'checkModuleTransaction',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link safeProtocolManagerABI}__ and `functionName` set to `"checkTransaction"`.
 */
export function useSafeProtocolManagerCheckTransaction<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof safeProtocolManagerABI,
          'checkTransaction'
        >['request']['abi'],
        'checkTransaction',
        TMode
      > & { functionName?: 'checkTransaction' }
    : UseContractWriteConfig<
        typeof safeProtocolManagerABI,
        'checkTransaction',
        TMode
      > & {
        abi?: never
        functionName?: 'checkTransaction'
      } = {} as any,
) {
  return useContractWrite<
    typeof safeProtocolManagerABI,
    'checkTransaction',
    TMode
  >({
    abi: safeProtocolManagerABI,
    functionName: 'checkTransaction',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link safeProtocolManagerABI}__ and `functionName` set to `"disablePlugin"`.
 */
export function useSafeProtocolManagerDisablePlugin<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof safeProtocolManagerABI,
          'disablePlugin'
        >['request']['abi'],
        'disablePlugin',
        TMode
      > & { functionName?: 'disablePlugin' }
    : UseContractWriteConfig<
        typeof safeProtocolManagerABI,
        'disablePlugin',
        TMode
      > & {
        abi?: never
        functionName?: 'disablePlugin'
      } = {} as any,
) {
  return useContractWrite<
    typeof safeProtocolManagerABI,
    'disablePlugin',
    TMode
  >({
    abi: safeProtocolManagerABI,
    functionName: 'disablePlugin',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link safeProtocolManagerABI}__ and `functionName` set to `"enablePlugin"`.
 */
export function useSafeProtocolManagerEnablePlugin<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof safeProtocolManagerABI,
          'enablePlugin'
        >['request']['abi'],
        'enablePlugin',
        TMode
      > & { functionName?: 'enablePlugin' }
    : UseContractWriteConfig<
        typeof safeProtocolManagerABI,
        'enablePlugin',
        TMode
      > & {
        abi?: never
        functionName?: 'enablePlugin'
      } = {} as any,
) {
  return useContractWrite<typeof safeProtocolManagerABI, 'enablePlugin', TMode>(
    {
      abi: safeProtocolManagerABI,
      functionName: 'enablePlugin',
      ...config,
    } as any,
  )
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link safeProtocolManagerABI}__ and `functionName` set to `"executeRootAccess"`.
 */
export function useSafeProtocolManagerExecuteRootAccess<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof safeProtocolManagerABI,
          'executeRootAccess'
        >['request']['abi'],
        'executeRootAccess',
        TMode
      > & { functionName?: 'executeRootAccess' }
    : UseContractWriteConfig<
        typeof safeProtocolManagerABI,
        'executeRootAccess',
        TMode
      > & {
        abi?: never
        functionName?: 'executeRootAccess'
      } = {} as any,
) {
  return useContractWrite<
    typeof safeProtocolManagerABI,
    'executeRootAccess',
    TMode
  >({
    abi: safeProtocolManagerABI,
    functionName: 'executeRootAccess',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link safeProtocolManagerABI}__ and `functionName` set to `"executeTransaction"`.
 */
export function useSafeProtocolManagerExecuteTransaction<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof safeProtocolManagerABI,
          'executeTransaction'
        >['request']['abi'],
        'executeTransaction',
        TMode
      > & { functionName?: 'executeTransaction' }
    : UseContractWriteConfig<
        typeof safeProtocolManagerABI,
        'executeTransaction',
        TMode
      > & {
        abi?: never
        functionName?: 'executeTransaction'
      } = {} as any,
) {
  return useContractWrite<
    typeof safeProtocolManagerABI,
    'executeTransaction',
    TMode
  >({
    abi: safeProtocolManagerABI,
    functionName: 'executeTransaction',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link safeProtocolManagerABI}__ and `functionName` set to `"renounceOwnership"`.
 */
export function useSafeProtocolManagerRenounceOwnership<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof safeProtocolManagerABI,
          'renounceOwnership'
        >['request']['abi'],
        'renounceOwnership',
        TMode
      > & { functionName?: 'renounceOwnership' }
    : UseContractWriteConfig<
        typeof safeProtocolManagerABI,
        'renounceOwnership',
        TMode
      > & {
        abi?: never
        functionName?: 'renounceOwnership'
      } = {} as any,
) {
  return useContractWrite<
    typeof safeProtocolManagerABI,
    'renounceOwnership',
    TMode
  >({
    abi: safeProtocolManagerABI,
    functionName: 'renounceOwnership',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link safeProtocolManagerABI}__ and `functionName` set to `"setHooks"`.
 */
export function useSafeProtocolManagerSetHooks<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof safeProtocolManagerABI,
          'setHooks'
        >['request']['abi'],
        'setHooks',
        TMode
      > & { functionName?: 'setHooks' }
    : UseContractWriteConfig<
        typeof safeProtocolManagerABI,
        'setHooks',
        TMode
      > & {
        abi?: never
        functionName?: 'setHooks'
      } = {} as any,
) {
  return useContractWrite<typeof safeProtocolManagerABI, 'setHooks', TMode>({
    abi: safeProtocolManagerABI,
    functionName: 'setHooks',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link safeProtocolManagerABI}__ and `functionName` set to `"setRegistry"`.
 */
export function useSafeProtocolManagerSetRegistry<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof safeProtocolManagerABI,
          'setRegistry'
        >['request']['abi'],
        'setRegistry',
        TMode
      > & { functionName?: 'setRegistry' }
    : UseContractWriteConfig<
        typeof safeProtocolManagerABI,
        'setRegistry',
        TMode
      > & {
        abi?: never
        functionName?: 'setRegistry'
      } = {} as any,
) {
  return useContractWrite<typeof safeProtocolManagerABI, 'setRegistry', TMode>({
    abi: safeProtocolManagerABI,
    functionName: 'setRegistry',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link safeProtocolManagerABI}__ and `functionName` set to `"transferOwnership"`.
 */
export function useSafeProtocolManagerTransferOwnership<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof safeProtocolManagerABI,
          'transferOwnership'
        >['request']['abi'],
        'transferOwnership',
        TMode
      > & { functionName?: 'transferOwnership' }
    : UseContractWriteConfig<
        typeof safeProtocolManagerABI,
        'transferOwnership',
        TMode
      > & {
        abi?: never
        functionName?: 'transferOwnership'
      } = {} as any,
) {
  return useContractWrite<
    typeof safeProtocolManagerABI,
    'transferOwnership',
    TMode
  >({
    abi: safeProtocolManagerABI,
    functionName: 'transferOwnership',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link safeProtocolManagerABI}__.
 */
export function usePrepareSafeProtocolManagerWrite<
  TFunctionName extends string,
>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof safeProtocolManagerABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: safeProtocolManagerABI,
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof safeProtocolManagerABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link safeProtocolManagerABI}__ and `functionName` set to `"acceptOwnership"`.
 */
export function usePrepareSafeProtocolManagerAcceptOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof safeProtocolManagerABI,
      'acceptOwnership'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: safeProtocolManagerABI,
    functionName: 'acceptOwnership',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof safeProtocolManagerABI,
    'acceptOwnership'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link safeProtocolManagerABI}__ and `functionName` set to `"checkAfterExecution"`.
 */
export function usePrepareSafeProtocolManagerCheckAfterExecution(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof safeProtocolManagerABI,
      'checkAfterExecution'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: safeProtocolManagerABI,
    functionName: 'checkAfterExecution',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof safeProtocolManagerABI,
    'checkAfterExecution'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link safeProtocolManagerABI}__ and `functionName` set to `"checkModuleTransaction"`.
 */
export function usePrepareSafeProtocolManagerCheckModuleTransaction(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof safeProtocolManagerABI,
      'checkModuleTransaction'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: safeProtocolManagerABI,
    functionName: 'checkModuleTransaction',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof safeProtocolManagerABI,
    'checkModuleTransaction'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link safeProtocolManagerABI}__ and `functionName` set to `"checkTransaction"`.
 */
export function usePrepareSafeProtocolManagerCheckTransaction(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof safeProtocolManagerABI,
      'checkTransaction'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: safeProtocolManagerABI,
    functionName: 'checkTransaction',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof safeProtocolManagerABI,
    'checkTransaction'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link safeProtocolManagerABI}__ and `functionName` set to `"disablePlugin"`.
 */
export function usePrepareSafeProtocolManagerDisablePlugin(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof safeProtocolManagerABI,
      'disablePlugin'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: safeProtocolManagerABI,
    functionName: 'disablePlugin',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof safeProtocolManagerABI,
    'disablePlugin'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link safeProtocolManagerABI}__ and `functionName` set to `"enablePlugin"`.
 */
export function usePrepareSafeProtocolManagerEnablePlugin(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof safeProtocolManagerABI,
      'enablePlugin'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: safeProtocolManagerABI,
    functionName: 'enablePlugin',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof safeProtocolManagerABI,
    'enablePlugin'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link safeProtocolManagerABI}__ and `functionName` set to `"executeRootAccess"`.
 */
export function usePrepareSafeProtocolManagerExecuteRootAccess(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof safeProtocolManagerABI,
      'executeRootAccess'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: safeProtocolManagerABI,
    functionName: 'executeRootAccess',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof safeProtocolManagerABI,
    'executeRootAccess'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link safeProtocolManagerABI}__ and `functionName` set to `"executeTransaction"`.
 */
export function usePrepareSafeProtocolManagerExecuteTransaction(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof safeProtocolManagerABI,
      'executeTransaction'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: safeProtocolManagerABI,
    functionName: 'executeTransaction',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof safeProtocolManagerABI,
    'executeTransaction'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link safeProtocolManagerABI}__ and `functionName` set to `"renounceOwnership"`.
 */
export function usePrepareSafeProtocolManagerRenounceOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof safeProtocolManagerABI,
      'renounceOwnership'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: safeProtocolManagerABI,
    functionName: 'renounceOwnership',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof safeProtocolManagerABI,
    'renounceOwnership'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link safeProtocolManagerABI}__ and `functionName` set to `"setHooks"`.
 */
export function usePrepareSafeProtocolManagerSetHooks(
  config: Omit<
    UsePrepareContractWriteConfig<typeof safeProtocolManagerABI, 'setHooks'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: safeProtocolManagerABI,
    functionName: 'setHooks',
    ...config,
  } as UsePrepareContractWriteConfig<typeof safeProtocolManagerABI, 'setHooks'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link safeProtocolManagerABI}__ and `functionName` set to `"setRegistry"`.
 */
export function usePrepareSafeProtocolManagerSetRegistry(
  config: Omit<
    UsePrepareContractWriteConfig<typeof safeProtocolManagerABI, 'setRegistry'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: safeProtocolManagerABI,
    functionName: 'setRegistry',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof safeProtocolManagerABI,
    'setRegistry'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link safeProtocolManagerABI}__ and `functionName` set to `"transferOwnership"`.
 */
export function usePrepareSafeProtocolManagerTransferOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof safeProtocolManagerABI,
      'transferOwnership'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: safeProtocolManagerABI,
    functionName: 'transferOwnership',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof safeProtocolManagerABI,
    'transferOwnership'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link safeProtocolManagerABI}__.
 */
export function useSafeProtocolManagerEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof safeProtocolManagerABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: safeProtocolManagerABI,
    ...config,
  } as UseContractEventConfig<typeof safeProtocolManagerABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link safeProtocolManagerABI}__ and `eventName` set to `"ActionsExecuted"`.
 */
export function useSafeProtocolManagerActionsExecutedEvent(
  config: Omit<
    UseContractEventConfig<typeof safeProtocolManagerABI, 'ActionsExecuted'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: safeProtocolManagerABI,
    eventName: 'ActionsExecuted',
    ...config,
  } as UseContractEventConfig<typeof safeProtocolManagerABI, 'ActionsExecuted'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link safeProtocolManagerABI}__ and `eventName` set to `"HooksChanged"`.
 */
export function useSafeProtocolManagerHooksChangedEvent(
  config: Omit<
    UseContractEventConfig<typeof safeProtocolManagerABI, 'HooksChanged'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: safeProtocolManagerABI,
    eventName: 'HooksChanged',
    ...config,
  } as UseContractEventConfig<typeof safeProtocolManagerABI, 'HooksChanged'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link safeProtocolManagerABI}__ and `eventName` set to `"OwnershipTransferStarted"`.
 */
export function useSafeProtocolManagerOwnershipTransferStartedEvent(
  config: Omit<
    UseContractEventConfig<
      typeof safeProtocolManagerABI,
      'OwnershipTransferStarted'
    >,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: safeProtocolManagerABI,
    eventName: 'OwnershipTransferStarted',
    ...config,
  } as UseContractEventConfig<
    typeof safeProtocolManagerABI,
    'OwnershipTransferStarted'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link safeProtocolManagerABI}__ and `eventName` set to `"OwnershipTransferred"`.
 */
export function useSafeProtocolManagerOwnershipTransferredEvent(
  config: Omit<
    UseContractEventConfig<
      typeof safeProtocolManagerABI,
      'OwnershipTransferred'
    >,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: safeProtocolManagerABI,
    eventName: 'OwnershipTransferred',
    ...config,
  } as UseContractEventConfig<
    typeof safeProtocolManagerABI,
    'OwnershipTransferred'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link safeProtocolManagerABI}__ and `eventName` set to `"PluginDisabled"`.
 */
export function useSafeProtocolManagerPluginDisabledEvent(
  config: Omit<
    UseContractEventConfig<typeof safeProtocolManagerABI, 'PluginDisabled'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: safeProtocolManagerABI,
    eventName: 'PluginDisabled',
    ...config,
  } as UseContractEventConfig<typeof safeProtocolManagerABI, 'PluginDisabled'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link safeProtocolManagerABI}__ and `eventName` set to `"PluginEnabled"`.
 */
export function useSafeProtocolManagerPluginEnabledEvent(
  config: Omit<
    UseContractEventConfig<typeof safeProtocolManagerABI, 'PluginEnabled'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: safeProtocolManagerABI,
    eventName: 'PluginEnabled',
    ...config,
  } as UseContractEventConfig<typeof safeProtocolManagerABI, 'PluginEnabled'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link safeProtocolManagerABI}__ and `eventName` set to `"RegistryChanged"`.
 */
export function useSafeProtocolManagerRegistryChangedEvent(
  config: Omit<
    UseContractEventConfig<typeof safeProtocolManagerABI, 'RegistryChanged'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: safeProtocolManagerABI,
    eventName: 'RegistryChanged',
    ...config,
  } as UseContractEventConfig<typeof safeProtocolManagerABI, 'RegistryChanged'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link safeProtocolManagerABI}__ and `eventName` set to `"RootAccessActionExecuted"`.
 */
export function useSafeProtocolManagerRootAccessActionExecutedEvent(
  config: Omit<
    UseContractEventConfig<
      typeof safeProtocolManagerABI,
      'RootAccessActionExecuted'
    >,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: safeProtocolManagerABI,
    eventName: 'RootAccessActionExecuted',
    ...config,
  } as UseContractEventConfig<
    typeof safeProtocolManagerABI,
    'RootAccessActionExecuted'
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link safeProtocolRegistryABI}__.
 */
export function useSafeProtocolRegistryRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<
    typeof safeProtocolRegistryABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof safeProtocolRegistryABI,
      TFunctionName,
      TSelectData
    >,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: safeProtocolRegistryABI,
    ...config,
  } as UseContractReadConfig<
    typeof safeProtocolRegistryABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link safeProtocolRegistryABI}__ and `functionName` set to `"check"`.
 */
export function useSafeProtocolRegistryCheck<
  TFunctionName extends 'check',
  TSelectData = ReadContractResult<
    typeof safeProtocolRegistryABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof safeProtocolRegistryABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: safeProtocolRegistryABI,
    functionName: 'check',
    ...config,
  } as UseContractReadConfig<
    typeof safeProtocolRegistryABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link safeProtocolRegistryABI}__ and `functionName` set to `"listedIntegrations"`.
 */
export function useSafeProtocolRegistryListedIntegrations<
  TFunctionName extends 'listedIntegrations',
  TSelectData = ReadContractResult<
    typeof safeProtocolRegistryABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof safeProtocolRegistryABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: safeProtocolRegistryABI,
    functionName: 'listedIntegrations',
    ...config,
  } as UseContractReadConfig<
    typeof safeProtocolRegistryABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link safeProtocolRegistryABI}__ and `functionName` set to `"owner"`.
 */
export function useSafeProtocolRegistryOwner<
  TFunctionName extends 'owner',
  TSelectData = ReadContractResult<
    typeof safeProtocolRegistryABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof safeProtocolRegistryABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: safeProtocolRegistryABI,
    functionName: 'owner',
    ...config,
  } as UseContractReadConfig<
    typeof safeProtocolRegistryABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link safeProtocolRegistryABI}__ and `functionName` set to `"pendingOwner"`.
 */
export function useSafeProtocolRegistryPendingOwner<
  TFunctionName extends 'pendingOwner',
  TSelectData = ReadContractResult<
    typeof safeProtocolRegistryABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof safeProtocolRegistryABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: safeProtocolRegistryABI,
    functionName: 'pendingOwner',
    ...config,
  } as UseContractReadConfig<
    typeof safeProtocolRegistryABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link safeProtocolRegistryABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function useSafeProtocolRegistrySupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<
    typeof safeProtocolRegistryABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof safeProtocolRegistryABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: safeProtocolRegistryABI,
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<
    typeof safeProtocolRegistryABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link safeProtocolRegistryABI}__.
 */
export function useSafeProtocolRegistryWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof safeProtocolRegistryABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<
        typeof safeProtocolRegistryABI,
        TFunctionName,
        TMode
      > & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof safeProtocolRegistryABI, TFunctionName, TMode>(
    { abi: safeProtocolRegistryABI, ...config } as any,
  )
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link safeProtocolRegistryABI}__ and `functionName` set to `"acceptOwnership"`.
 */
export function useSafeProtocolRegistryAcceptOwnership<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof safeProtocolRegistryABI,
          'acceptOwnership'
        >['request']['abi'],
        'acceptOwnership',
        TMode
      > & { functionName?: 'acceptOwnership' }
    : UseContractWriteConfig<
        typeof safeProtocolRegistryABI,
        'acceptOwnership',
        TMode
      > & {
        abi?: never
        functionName?: 'acceptOwnership'
      } = {} as any,
) {
  return useContractWrite<
    typeof safeProtocolRegistryABI,
    'acceptOwnership',
    TMode
  >({
    abi: safeProtocolRegistryABI,
    functionName: 'acceptOwnership',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link safeProtocolRegistryABI}__ and `functionName` set to `"addIntegration"`.
 */
export function useSafeProtocolRegistryAddIntegration<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof safeProtocolRegistryABI,
          'addIntegration'
        >['request']['abi'],
        'addIntegration',
        TMode
      > & { functionName?: 'addIntegration' }
    : UseContractWriteConfig<
        typeof safeProtocolRegistryABI,
        'addIntegration',
        TMode
      > & {
        abi?: never
        functionName?: 'addIntegration'
      } = {} as any,
) {
  return useContractWrite<
    typeof safeProtocolRegistryABI,
    'addIntegration',
    TMode
  >({
    abi: safeProtocolRegistryABI,
    functionName: 'addIntegration',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link safeProtocolRegistryABI}__ and `functionName` set to `"flagIntegration"`.
 */
export function useSafeProtocolRegistryFlagIntegration<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof safeProtocolRegistryABI,
          'flagIntegration'
        >['request']['abi'],
        'flagIntegration',
        TMode
      > & { functionName?: 'flagIntegration' }
    : UseContractWriteConfig<
        typeof safeProtocolRegistryABI,
        'flagIntegration',
        TMode
      > & {
        abi?: never
        functionName?: 'flagIntegration'
      } = {} as any,
) {
  return useContractWrite<
    typeof safeProtocolRegistryABI,
    'flagIntegration',
    TMode
  >({
    abi: safeProtocolRegistryABI,
    functionName: 'flagIntegration',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link safeProtocolRegistryABI}__ and `functionName` set to `"renounceOwnership"`.
 */
export function useSafeProtocolRegistryRenounceOwnership<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof safeProtocolRegistryABI,
          'renounceOwnership'
        >['request']['abi'],
        'renounceOwnership',
        TMode
      > & { functionName?: 'renounceOwnership' }
    : UseContractWriteConfig<
        typeof safeProtocolRegistryABI,
        'renounceOwnership',
        TMode
      > & {
        abi?: never
        functionName?: 'renounceOwnership'
      } = {} as any,
) {
  return useContractWrite<
    typeof safeProtocolRegistryABI,
    'renounceOwnership',
    TMode
  >({
    abi: safeProtocolRegistryABI,
    functionName: 'renounceOwnership',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link safeProtocolRegistryABI}__ and `functionName` set to `"transferOwnership"`.
 */
export function useSafeProtocolRegistryTransferOwnership<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof safeProtocolRegistryABI,
          'transferOwnership'
        >['request']['abi'],
        'transferOwnership',
        TMode
      > & { functionName?: 'transferOwnership' }
    : UseContractWriteConfig<
        typeof safeProtocolRegistryABI,
        'transferOwnership',
        TMode
      > & {
        abi?: never
        functionName?: 'transferOwnership'
      } = {} as any,
) {
  return useContractWrite<
    typeof safeProtocolRegistryABI,
    'transferOwnership',
    TMode
  >({
    abi: safeProtocolRegistryABI,
    functionName: 'transferOwnership',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link safeProtocolRegistryABI}__.
 */
export function usePrepareSafeProtocolRegistryWrite<
  TFunctionName extends string,
>(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof safeProtocolRegistryABI,
      TFunctionName
    >,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: safeProtocolRegistryABI,
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof safeProtocolRegistryABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link safeProtocolRegistryABI}__ and `functionName` set to `"acceptOwnership"`.
 */
export function usePrepareSafeProtocolRegistryAcceptOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof safeProtocolRegistryABI,
      'acceptOwnership'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: safeProtocolRegistryABI,
    functionName: 'acceptOwnership',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof safeProtocolRegistryABI,
    'acceptOwnership'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link safeProtocolRegistryABI}__ and `functionName` set to `"addIntegration"`.
 */
export function usePrepareSafeProtocolRegistryAddIntegration(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof safeProtocolRegistryABI,
      'addIntegration'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: safeProtocolRegistryABI,
    functionName: 'addIntegration',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof safeProtocolRegistryABI,
    'addIntegration'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link safeProtocolRegistryABI}__ and `functionName` set to `"flagIntegration"`.
 */
export function usePrepareSafeProtocolRegistryFlagIntegration(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof safeProtocolRegistryABI,
      'flagIntegration'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: safeProtocolRegistryABI,
    functionName: 'flagIntegration',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof safeProtocolRegistryABI,
    'flagIntegration'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link safeProtocolRegistryABI}__ and `functionName` set to `"renounceOwnership"`.
 */
export function usePrepareSafeProtocolRegistryRenounceOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof safeProtocolRegistryABI,
      'renounceOwnership'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: safeProtocolRegistryABI,
    functionName: 'renounceOwnership',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof safeProtocolRegistryABI,
    'renounceOwnership'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link safeProtocolRegistryABI}__ and `functionName` set to `"transferOwnership"`.
 */
export function usePrepareSafeProtocolRegistryTransferOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof safeProtocolRegistryABI,
      'transferOwnership'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: safeProtocolRegistryABI,
    functionName: 'transferOwnership',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof safeProtocolRegistryABI,
    'transferOwnership'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link safeProtocolRegistryABI}__.
 */
export function useSafeProtocolRegistryEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof safeProtocolRegistryABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: safeProtocolRegistryABI,
    ...config,
  } as UseContractEventConfig<typeof safeProtocolRegistryABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link safeProtocolRegistryABI}__ and `eventName` set to `"IntegrationAdded"`.
 */
export function useSafeProtocolRegistryIntegrationAddedEvent(
  config: Omit<
    UseContractEventConfig<typeof safeProtocolRegistryABI, 'IntegrationAdded'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: safeProtocolRegistryABI,
    eventName: 'IntegrationAdded',
    ...config,
  } as UseContractEventConfig<
    typeof safeProtocolRegistryABI,
    'IntegrationAdded'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link safeProtocolRegistryABI}__ and `eventName` set to `"IntegrationFlagged"`.
 */
export function useSafeProtocolRegistryIntegrationFlaggedEvent(
  config: Omit<
    UseContractEventConfig<
      typeof safeProtocolRegistryABI,
      'IntegrationFlagged'
    >,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: safeProtocolRegistryABI,
    eventName: 'IntegrationFlagged',
    ...config,
  } as UseContractEventConfig<
    typeof safeProtocolRegistryABI,
    'IntegrationFlagged'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link safeProtocolRegistryABI}__ and `eventName` set to `"OwnershipTransferStarted"`.
 */
export function useSafeProtocolRegistryOwnershipTransferStartedEvent(
  config: Omit<
    UseContractEventConfig<
      typeof safeProtocolRegistryABI,
      'OwnershipTransferStarted'
    >,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: safeProtocolRegistryABI,
    eventName: 'OwnershipTransferStarted',
    ...config,
  } as UseContractEventConfig<
    typeof safeProtocolRegistryABI,
    'OwnershipTransferStarted'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link safeProtocolRegistryABI}__ and `eventName` set to `"OwnershipTransferred"`.
 */
export function useSafeProtocolRegistryOwnershipTransferredEvent(
  config: Omit<
    UseContractEventConfig<
      typeof safeProtocolRegistryABI,
      'OwnershipTransferred'
    >,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: safeProtocolRegistryABI,
    eventName: 'OwnershipTransferred',
    ...config,
  } as UseContractEventConfig<
    typeof safeProtocolRegistryABI,
    'OwnershipTransferred'
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link safeProxyFactoryABI}__.
 */
export function useSafeProxyFactoryRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof safeProxyFactoryABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof safeProxyFactoryABI,
      TFunctionName,
      TSelectData
    >,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: safeProxyFactoryABI,
    ...config,
  } as UseContractReadConfig<
    typeof safeProxyFactoryABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link safeProxyFactoryABI}__ and `functionName` set to `"getChainId"`.
 */
export function useSafeProxyFactoryGetChainId<
  TFunctionName extends 'getChainId',
  TSelectData = ReadContractResult<typeof safeProxyFactoryABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof safeProxyFactoryABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: safeProxyFactoryABI,
    functionName: 'getChainId',
    ...config,
  } as UseContractReadConfig<
    typeof safeProxyFactoryABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link safeProxyFactoryABI}__ and `functionName` set to `"proxyCreationCode"`.
 */
export function useSafeProxyFactoryProxyCreationCode<
  TFunctionName extends 'proxyCreationCode',
  TSelectData = ReadContractResult<typeof safeProxyFactoryABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof safeProxyFactoryABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: safeProxyFactoryABI,
    functionName: 'proxyCreationCode',
    ...config,
  } as UseContractReadConfig<
    typeof safeProxyFactoryABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link safeProxyFactoryABI}__.
 */
export function useSafeProxyFactoryWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof safeProxyFactoryABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<
        typeof safeProxyFactoryABI,
        TFunctionName,
        TMode
      > & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof safeProxyFactoryABI, TFunctionName, TMode>({
    abi: safeProxyFactoryABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link safeProxyFactoryABI}__ and `functionName` set to `"createChainSpecificProxyWithNonce"`.
 */
export function useSafeProxyFactoryCreateChainSpecificProxyWithNonce<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof safeProxyFactoryABI,
          'createChainSpecificProxyWithNonce'
        >['request']['abi'],
        'createChainSpecificProxyWithNonce',
        TMode
      > & { functionName?: 'createChainSpecificProxyWithNonce' }
    : UseContractWriteConfig<
        typeof safeProxyFactoryABI,
        'createChainSpecificProxyWithNonce',
        TMode
      > & {
        abi?: never
        functionName?: 'createChainSpecificProxyWithNonce'
      } = {} as any,
) {
  return useContractWrite<
    typeof safeProxyFactoryABI,
    'createChainSpecificProxyWithNonce',
    TMode
  >({
    abi: safeProxyFactoryABI,
    functionName: 'createChainSpecificProxyWithNonce',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link safeProxyFactoryABI}__ and `functionName` set to `"createProxyWithCallback"`.
 */
export function useSafeProxyFactoryCreateProxyWithCallback<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof safeProxyFactoryABI,
          'createProxyWithCallback'
        >['request']['abi'],
        'createProxyWithCallback',
        TMode
      > & { functionName?: 'createProxyWithCallback' }
    : UseContractWriteConfig<
        typeof safeProxyFactoryABI,
        'createProxyWithCallback',
        TMode
      > & {
        abi?: never
        functionName?: 'createProxyWithCallback'
      } = {} as any,
) {
  return useContractWrite<
    typeof safeProxyFactoryABI,
    'createProxyWithCallback',
    TMode
  >({
    abi: safeProxyFactoryABI,
    functionName: 'createProxyWithCallback',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link safeProxyFactoryABI}__ and `functionName` set to `"createProxyWithNonce"`.
 */
export function useSafeProxyFactoryCreateProxyWithNonce<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof safeProxyFactoryABI,
          'createProxyWithNonce'
        >['request']['abi'],
        'createProxyWithNonce',
        TMode
      > & { functionName?: 'createProxyWithNonce' }
    : UseContractWriteConfig<
        typeof safeProxyFactoryABI,
        'createProxyWithNonce',
        TMode
      > & {
        abi?: never
        functionName?: 'createProxyWithNonce'
      } = {} as any,
) {
  return useContractWrite<
    typeof safeProxyFactoryABI,
    'createProxyWithNonce',
    TMode
  >({
    abi: safeProxyFactoryABI,
    functionName: 'createProxyWithNonce',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link safeProxyFactoryABI}__.
 */
export function usePrepareSafeProxyFactoryWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof safeProxyFactoryABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: safeProxyFactoryABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof safeProxyFactoryABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link safeProxyFactoryABI}__ and `functionName` set to `"createChainSpecificProxyWithNonce"`.
 */
export function usePrepareSafeProxyFactoryCreateChainSpecificProxyWithNonce(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof safeProxyFactoryABI,
      'createChainSpecificProxyWithNonce'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: safeProxyFactoryABI,
    functionName: 'createChainSpecificProxyWithNonce',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof safeProxyFactoryABI,
    'createChainSpecificProxyWithNonce'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link safeProxyFactoryABI}__ and `functionName` set to `"createProxyWithCallback"`.
 */
export function usePrepareSafeProxyFactoryCreateProxyWithCallback(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof safeProxyFactoryABI,
      'createProxyWithCallback'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: safeProxyFactoryABI,
    functionName: 'createProxyWithCallback',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof safeProxyFactoryABI,
    'createProxyWithCallback'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link safeProxyFactoryABI}__ and `functionName` set to `"createProxyWithNonce"`.
 */
export function usePrepareSafeProxyFactoryCreateProxyWithNonce(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof safeProxyFactoryABI,
      'createProxyWithNonce'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: safeProxyFactoryABI,
    functionName: 'createProxyWithNonce',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof safeProxyFactoryABI,
    'createProxyWithNonce'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link safeProxyFactoryABI}__.
 */
export function useSafeProxyFactoryEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof safeProxyFactoryABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: safeProxyFactoryABI,
    ...config,
  } as UseContractEventConfig<typeof safeProxyFactoryABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link safeProxyFactoryABI}__ and `eventName` set to `"ProxyCreation"`.
 */
export function useSafeProxyFactoryProxyCreationEvent(
  config: Omit<
    UseContractEventConfig<typeof safeProxyFactoryABI, 'ProxyCreation'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: safeProxyFactoryABI,
    eventName: 'ProxyCreation',
    ...config,
  } as UseContractEventConfig<typeof safeProxyFactoryABI, 'ProxyCreation'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link smartGardenManagerABI}__.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * -
 */
export function useSmartGardenManagerRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof smartGardenManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof smartGardenManagerABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'address'
  > & { chainId?: keyof typeof smartGardenManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: smartGardenManagerABI,
    address:
      smartGardenManagerAddress[
        chainId as keyof typeof smartGardenManagerAddress
      ],
    ...config,
  } as UseContractReadConfig<
    typeof smartGardenManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link smartGardenManagerABI}__ and `functionName` set to `"enabledHooks"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * -
 */
export function useSmartGardenManagerEnabledHooks<
  TFunctionName extends 'enabledHooks',
  TSelectData = ReadContractResult<typeof smartGardenManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof smartGardenManagerABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof smartGardenManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: smartGardenManagerABI,
    address:
      smartGardenManagerAddress[
        chainId as keyof typeof smartGardenManagerAddress
      ],
    functionName: 'enabledHooks',
    ...config,
  } as UseContractReadConfig<
    typeof smartGardenManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link smartGardenManagerABI}__ and `functionName` set to `"enabledPlugins"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * -
 */
export function useSmartGardenManagerEnabledPlugins<
  TFunctionName extends 'enabledPlugins',
  TSelectData = ReadContractResult<typeof smartGardenManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof smartGardenManagerABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof smartGardenManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: smartGardenManagerABI,
    address:
      smartGardenManagerAddress[
        chainId as keyof typeof smartGardenManagerAddress
      ],
    functionName: 'enabledPlugins',
    ...config,
  } as UseContractReadConfig<
    typeof smartGardenManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link smartGardenManagerABI}__ and `functionName` set to `"getEnabledHooks"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * -
 */
export function useSmartGardenManagerGetEnabledHooks<
  TFunctionName extends 'getEnabledHooks',
  TSelectData = ReadContractResult<typeof smartGardenManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof smartGardenManagerABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof smartGardenManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: smartGardenManagerABI,
    address:
      smartGardenManagerAddress[
        chainId as keyof typeof smartGardenManagerAddress
      ],
    functionName: 'getEnabledHooks',
    ...config,
  } as UseContractReadConfig<
    typeof smartGardenManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link smartGardenManagerABI}__ and `functionName` set to `"getPluginInfo"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * -
 */
export function useSmartGardenManagerGetPluginInfo<
  TFunctionName extends 'getPluginInfo',
  TSelectData = ReadContractResult<typeof smartGardenManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof smartGardenManagerABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof smartGardenManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: smartGardenManagerABI,
    address:
      smartGardenManagerAddress[
        chainId as keyof typeof smartGardenManagerAddress
      ],
    functionName: 'getPluginInfo',
    ...config,
  } as UseContractReadConfig<
    typeof smartGardenManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link smartGardenManagerABI}__ and `functionName` set to `"getPluginsPaginated"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * -
 */
export function useSmartGardenManagerGetPluginsPaginated<
  TFunctionName extends 'getPluginsPaginated',
  TSelectData = ReadContractResult<typeof smartGardenManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof smartGardenManagerABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof smartGardenManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: smartGardenManagerABI,
    address:
      smartGardenManagerAddress[
        chainId as keyof typeof smartGardenManagerAddress
      ],
    functionName: 'getPluginsPaginated',
    ...config,
  } as UseContractReadConfig<
    typeof smartGardenManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link smartGardenManagerABI}__ and `functionName` set to `"isPluginEnabled"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * -
 */
export function useSmartGardenManagerIsPluginEnabled<
  TFunctionName extends 'isPluginEnabled',
  TSelectData = ReadContractResult<typeof smartGardenManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof smartGardenManagerABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof smartGardenManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: smartGardenManagerABI,
    address:
      smartGardenManagerAddress[
        chainId as keyof typeof smartGardenManagerAddress
      ],
    functionName: 'isPluginEnabled',
    ...config,
  } as UseContractReadConfig<
    typeof smartGardenManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link smartGardenManagerABI}__ and `functionName` set to `"owner"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * -
 */
export function useSmartGardenManagerOwner<
  TFunctionName extends 'owner',
  TSelectData = ReadContractResult<typeof smartGardenManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof smartGardenManagerABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof smartGardenManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: smartGardenManagerABI,
    address:
      smartGardenManagerAddress[
        chainId as keyof typeof smartGardenManagerAddress
      ],
    functionName: 'owner',
    ...config,
  } as UseContractReadConfig<
    typeof smartGardenManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link smartGardenManagerABI}__ and `functionName` set to `"pendingOwner"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * -
 */
export function useSmartGardenManagerPendingOwner<
  TFunctionName extends 'pendingOwner',
  TSelectData = ReadContractResult<typeof smartGardenManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof smartGardenManagerABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof smartGardenManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: smartGardenManagerABI,
    address:
      smartGardenManagerAddress[
        chainId as keyof typeof smartGardenManagerAddress
      ],
    functionName: 'pendingOwner',
    ...config,
  } as UseContractReadConfig<
    typeof smartGardenManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link smartGardenManagerABI}__ and `functionName` set to `"registry"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * -
 */
export function useSmartGardenManagerRegistry<
  TFunctionName extends 'registry',
  TSelectData = ReadContractResult<typeof smartGardenManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof smartGardenManagerABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof smartGardenManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: smartGardenManagerABI,
    address:
      smartGardenManagerAddress[
        chainId as keyof typeof smartGardenManagerAddress
      ],
    functionName: 'registry',
    ...config,
  } as UseContractReadConfig<
    typeof smartGardenManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link smartGardenManagerABI}__ and `functionName` set to `"supportsInterface"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * -
 */
export function useSmartGardenManagerSupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof smartGardenManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof smartGardenManagerABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof smartGardenManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: smartGardenManagerABI,
    address:
      smartGardenManagerAddress[
        chainId as keyof typeof smartGardenManagerAddress
      ],
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<
    typeof smartGardenManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link smartGardenManagerABI}__ and `functionName` set to `"tempHooksAddress"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * -
 */
export function useSmartGardenManagerTempHooksAddress<
  TFunctionName extends 'tempHooksAddress',
  TSelectData = ReadContractResult<typeof smartGardenManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof smartGardenManagerABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof smartGardenManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: smartGardenManagerABI,
    address:
      smartGardenManagerAddress[
        chainId as keyof typeof smartGardenManagerAddress
      ],
    functionName: 'tempHooksAddress',
    ...config,
  } as UseContractReadConfig<
    typeof smartGardenManagerABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link smartGardenManagerABI}__.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * -
 */
export function useSmartGardenManagerWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof smartGardenManagerAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof smartGardenManagerABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      > & { address?: Address; chainId?: TChainId }
    : UseContractWriteConfig<
        typeof smartGardenManagerABI,
        TFunctionName,
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof smartGardenManagerABI, TFunctionName, TMode>({
    abi: smartGardenManagerABI,
    address:
      smartGardenManagerAddress[
        chainId as keyof typeof smartGardenManagerAddress
      ],
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link smartGardenManagerABI}__ and `functionName` set to `"acceptOwnership"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * -
 */
export function useSmartGardenManagerAcceptOwnership<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof smartGardenManagerAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof smartGardenManagerABI,
          'acceptOwnership'
        >['request']['abi'],
        'acceptOwnership',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'acceptOwnership'
      }
    : UseContractWriteConfig<
        typeof smartGardenManagerABI,
        'acceptOwnership',
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'acceptOwnership'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<
    typeof smartGardenManagerABI,
    'acceptOwnership',
    TMode
  >({
    abi: smartGardenManagerABI,
    address:
      smartGardenManagerAddress[
        chainId as keyof typeof smartGardenManagerAddress
      ],
    functionName: 'acceptOwnership',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link smartGardenManagerABI}__ and `functionName` set to `"checkAfterExecution"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * -
 */
export function useSmartGardenManagerCheckAfterExecution<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof smartGardenManagerAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof smartGardenManagerABI,
          'checkAfterExecution'
        >['request']['abi'],
        'checkAfterExecution',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'checkAfterExecution'
      }
    : UseContractWriteConfig<
        typeof smartGardenManagerABI,
        'checkAfterExecution',
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'checkAfterExecution'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<
    typeof smartGardenManagerABI,
    'checkAfterExecution',
    TMode
  >({
    abi: smartGardenManagerABI,
    address:
      smartGardenManagerAddress[
        chainId as keyof typeof smartGardenManagerAddress
      ],
    functionName: 'checkAfterExecution',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link smartGardenManagerABI}__ and `functionName` set to `"checkModuleTransaction"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * -
 */
export function useSmartGardenManagerCheckModuleTransaction<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof smartGardenManagerAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof smartGardenManagerABI,
          'checkModuleTransaction'
        >['request']['abi'],
        'checkModuleTransaction',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'checkModuleTransaction'
      }
    : UseContractWriteConfig<
        typeof smartGardenManagerABI,
        'checkModuleTransaction',
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'checkModuleTransaction'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<
    typeof smartGardenManagerABI,
    'checkModuleTransaction',
    TMode
  >({
    abi: smartGardenManagerABI,
    address:
      smartGardenManagerAddress[
        chainId as keyof typeof smartGardenManagerAddress
      ],
    functionName: 'checkModuleTransaction',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link smartGardenManagerABI}__ and `functionName` set to `"checkTransaction"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * -
 */
export function useSmartGardenManagerCheckTransaction<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof smartGardenManagerAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof smartGardenManagerABI,
          'checkTransaction'
        >['request']['abi'],
        'checkTransaction',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'checkTransaction'
      }
    : UseContractWriteConfig<
        typeof smartGardenManagerABI,
        'checkTransaction',
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'checkTransaction'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<
    typeof smartGardenManagerABI,
    'checkTransaction',
    TMode
  >({
    abi: smartGardenManagerABI,
    address:
      smartGardenManagerAddress[
        chainId as keyof typeof smartGardenManagerAddress
      ],
    functionName: 'checkTransaction',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link smartGardenManagerABI}__ and `functionName` set to `"disablePlugin"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * -
 */
export function useSmartGardenManagerDisablePlugin<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof smartGardenManagerAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof smartGardenManagerABI,
          'disablePlugin'
        >['request']['abi'],
        'disablePlugin',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'disablePlugin'
      }
    : UseContractWriteConfig<
        typeof smartGardenManagerABI,
        'disablePlugin',
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'disablePlugin'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof smartGardenManagerABI, 'disablePlugin', TMode>(
    {
      abi: smartGardenManagerABI,
      address:
        smartGardenManagerAddress[
          chainId as keyof typeof smartGardenManagerAddress
        ],
      functionName: 'disablePlugin',
      ...config,
    } as any,
  )
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link smartGardenManagerABI}__ and `functionName` set to `"enablePlugin"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * -
 */
export function useSmartGardenManagerEnablePlugin<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof smartGardenManagerAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof smartGardenManagerABI,
          'enablePlugin'
        >['request']['abi'],
        'enablePlugin',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'enablePlugin'
      }
    : UseContractWriteConfig<
        typeof smartGardenManagerABI,
        'enablePlugin',
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'enablePlugin'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof smartGardenManagerABI, 'enablePlugin', TMode>({
    abi: smartGardenManagerABI,
    address:
      smartGardenManagerAddress[
        chainId as keyof typeof smartGardenManagerAddress
      ],
    functionName: 'enablePlugin',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link smartGardenManagerABI}__ and `functionName` set to `"enablePluginWithConfig"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * -
 */
export function useSmartGardenManagerEnablePluginWithConfig<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof smartGardenManagerAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof smartGardenManagerABI,
          'enablePluginWithConfig'
        >['request']['abi'],
        'enablePluginWithConfig',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'enablePluginWithConfig'
      }
    : UseContractWriteConfig<
        typeof smartGardenManagerABI,
        'enablePluginWithConfig',
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'enablePluginWithConfig'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<
    typeof smartGardenManagerABI,
    'enablePluginWithConfig',
    TMode
  >({
    abi: smartGardenManagerABI,
    address:
      smartGardenManagerAddress[
        chainId as keyof typeof smartGardenManagerAddress
      ],
    functionName: 'enablePluginWithConfig',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link smartGardenManagerABI}__ and `functionName` set to `"executeRootAccess"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * -
 */
export function useSmartGardenManagerExecuteRootAccess<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof smartGardenManagerAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof smartGardenManagerABI,
          'executeRootAccess'
        >['request']['abi'],
        'executeRootAccess',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'executeRootAccess'
      }
    : UseContractWriteConfig<
        typeof smartGardenManagerABI,
        'executeRootAccess',
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'executeRootAccess'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<
    typeof smartGardenManagerABI,
    'executeRootAccess',
    TMode
  >({
    abi: smartGardenManagerABI,
    address:
      smartGardenManagerAddress[
        chainId as keyof typeof smartGardenManagerAddress
      ],
    functionName: 'executeRootAccess',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link smartGardenManagerABI}__ and `functionName` set to `"executeTransaction"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * -
 */
export function useSmartGardenManagerExecuteTransaction<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof smartGardenManagerAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof smartGardenManagerABI,
          'executeTransaction'
        >['request']['abi'],
        'executeTransaction',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'executeTransaction'
      }
    : UseContractWriteConfig<
        typeof smartGardenManagerABI,
        'executeTransaction',
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'executeTransaction'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<
    typeof smartGardenManagerABI,
    'executeTransaction',
    TMode
  >({
    abi: smartGardenManagerABI,
    address:
      smartGardenManagerAddress[
        chainId as keyof typeof smartGardenManagerAddress
      ],
    functionName: 'executeTransaction',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link smartGardenManagerABI}__ and `functionName` set to `"renounceOwnership"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * -
 */
export function useSmartGardenManagerRenounceOwnership<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof smartGardenManagerAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof smartGardenManagerABI,
          'renounceOwnership'
        >['request']['abi'],
        'renounceOwnership',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'renounceOwnership'
      }
    : UseContractWriteConfig<
        typeof smartGardenManagerABI,
        'renounceOwnership',
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'renounceOwnership'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<
    typeof smartGardenManagerABI,
    'renounceOwnership',
    TMode
  >({
    abi: smartGardenManagerABI,
    address:
      smartGardenManagerAddress[
        chainId as keyof typeof smartGardenManagerAddress
      ],
    functionName: 'renounceOwnership',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link smartGardenManagerABI}__ and `functionName` set to `"setHooks"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * -
 */
export function useSmartGardenManagerSetHooks<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof smartGardenManagerAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof smartGardenManagerABI,
          'setHooks'
        >['request']['abi'],
        'setHooks',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'setHooks' }
    : UseContractWriteConfig<
        typeof smartGardenManagerABI,
        'setHooks',
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setHooks'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof smartGardenManagerABI, 'setHooks', TMode>({
    abi: smartGardenManagerABI,
    address:
      smartGardenManagerAddress[
        chainId as keyof typeof smartGardenManagerAddress
      ],
    functionName: 'setHooks',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link smartGardenManagerABI}__ and `functionName` set to `"setRegistry"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * -
 */
export function useSmartGardenManagerSetRegistry<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof smartGardenManagerAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof smartGardenManagerABI,
          'setRegistry'
        >['request']['abi'],
        'setRegistry',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'setRegistry'
      }
    : UseContractWriteConfig<
        typeof smartGardenManagerABI,
        'setRegistry',
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setRegistry'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof smartGardenManagerABI, 'setRegistry', TMode>({
    abi: smartGardenManagerABI,
    address:
      smartGardenManagerAddress[
        chainId as keyof typeof smartGardenManagerAddress
      ],
    functionName: 'setRegistry',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link smartGardenManagerABI}__ and `functionName` set to `"transferOwnership"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * -
 */
export function useSmartGardenManagerTransferOwnership<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof smartGardenManagerAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof smartGardenManagerABI,
          'transferOwnership'
        >['request']['abi'],
        'transferOwnership',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'transferOwnership'
      }
    : UseContractWriteConfig<
        typeof smartGardenManagerABI,
        'transferOwnership',
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'transferOwnership'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<
    typeof smartGardenManagerABI,
    'transferOwnership',
    TMode
  >({
    abi: smartGardenManagerABI,
    address:
      smartGardenManagerAddress[
        chainId as keyof typeof smartGardenManagerAddress
      ],
    functionName: 'transferOwnership',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link smartGardenManagerABI}__.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * -
 */
export function usePrepareSmartGardenManagerWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof smartGardenManagerABI, TFunctionName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof smartGardenManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: smartGardenManagerABI,
    address:
      smartGardenManagerAddress[
        chainId as keyof typeof smartGardenManagerAddress
      ],
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof smartGardenManagerABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link smartGardenManagerABI}__ and `functionName` set to `"acceptOwnership"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * -
 */
export function usePrepareSmartGardenManagerAcceptOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof smartGardenManagerABI,
      'acceptOwnership'
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof smartGardenManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: smartGardenManagerABI,
    address:
      smartGardenManagerAddress[
        chainId as keyof typeof smartGardenManagerAddress
      ],
    functionName: 'acceptOwnership',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof smartGardenManagerABI,
    'acceptOwnership'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link smartGardenManagerABI}__ and `functionName` set to `"checkAfterExecution"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * -
 */
export function usePrepareSmartGardenManagerCheckAfterExecution(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof smartGardenManagerABI,
      'checkAfterExecution'
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof smartGardenManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: smartGardenManagerABI,
    address:
      smartGardenManagerAddress[
        chainId as keyof typeof smartGardenManagerAddress
      ],
    functionName: 'checkAfterExecution',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof smartGardenManagerABI,
    'checkAfterExecution'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link smartGardenManagerABI}__ and `functionName` set to `"checkModuleTransaction"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * -
 */
export function usePrepareSmartGardenManagerCheckModuleTransaction(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof smartGardenManagerABI,
      'checkModuleTransaction'
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof smartGardenManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: smartGardenManagerABI,
    address:
      smartGardenManagerAddress[
        chainId as keyof typeof smartGardenManagerAddress
      ],
    functionName: 'checkModuleTransaction',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof smartGardenManagerABI,
    'checkModuleTransaction'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link smartGardenManagerABI}__ and `functionName` set to `"checkTransaction"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * -
 */
export function usePrepareSmartGardenManagerCheckTransaction(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof smartGardenManagerABI,
      'checkTransaction'
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof smartGardenManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: smartGardenManagerABI,
    address:
      smartGardenManagerAddress[
        chainId as keyof typeof smartGardenManagerAddress
      ],
    functionName: 'checkTransaction',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof smartGardenManagerABI,
    'checkTransaction'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link smartGardenManagerABI}__ and `functionName` set to `"disablePlugin"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * -
 */
export function usePrepareSmartGardenManagerDisablePlugin(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof smartGardenManagerABI,
      'disablePlugin'
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof smartGardenManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: smartGardenManagerABI,
    address:
      smartGardenManagerAddress[
        chainId as keyof typeof smartGardenManagerAddress
      ],
    functionName: 'disablePlugin',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof smartGardenManagerABI,
    'disablePlugin'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link smartGardenManagerABI}__ and `functionName` set to `"enablePlugin"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * -
 */
export function usePrepareSmartGardenManagerEnablePlugin(
  config: Omit<
    UsePrepareContractWriteConfig<typeof smartGardenManagerABI, 'enablePlugin'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof smartGardenManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: smartGardenManagerABI,
    address:
      smartGardenManagerAddress[
        chainId as keyof typeof smartGardenManagerAddress
      ],
    functionName: 'enablePlugin',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof smartGardenManagerABI,
    'enablePlugin'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link smartGardenManagerABI}__ and `functionName` set to `"enablePluginWithConfig"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * -
 */
export function usePrepareSmartGardenManagerEnablePluginWithConfig(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof smartGardenManagerABI,
      'enablePluginWithConfig'
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof smartGardenManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: smartGardenManagerABI,
    address:
      smartGardenManagerAddress[
        chainId as keyof typeof smartGardenManagerAddress
      ],
    functionName: 'enablePluginWithConfig',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof smartGardenManagerABI,
    'enablePluginWithConfig'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link smartGardenManagerABI}__ and `functionName` set to `"executeRootAccess"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * -
 */
export function usePrepareSmartGardenManagerExecuteRootAccess(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof smartGardenManagerABI,
      'executeRootAccess'
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof smartGardenManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: smartGardenManagerABI,
    address:
      smartGardenManagerAddress[
        chainId as keyof typeof smartGardenManagerAddress
      ],
    functionName: 'executeRootAccess',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof smartGardenManagerABI,
    'executeRootAccess'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link smartGardenManagerABI}__ and `functionName` set to `"executeTransaction"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * -
 */
export function usePrepareSmartGardenManagerExecuteTransaction(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof smartGardenManagerABI,
      'executeTransaction'
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof smartGardenManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: smartGardenManagerABI,
    address:
      smartGardenManagerAddress[
        chainId as keyof typeof smartGardenManagerAddress
      ],
    functionName: 'executeTransaction',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof smartGardenManagerABI,
    'executeTransaction'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link smartGardenManagerABI}__ and `functionName` set to `"renounceOwnership"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * -
 */
export function usePrepareSmartGardenManagerRenounceOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof smartGardenManagerABI,
      'renounceOwnership'
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof smartGardenManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: smartGardenManagerABI,
    address:
      smartGardenManagerAddress[
        chainId as keyof typeof smartGardenManagerAddress
      ],
    functionName: 'renounceOwnership',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof smartGardenManagerABI,
    'renounceOwnership'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link smartGardenManagerABI}__ and `functionName` set to `"setHooks"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * -
 */
export function usePrepareSmartGardenManagerSetHooks(
  config: Omit<
    UsePrepareContractWriteConfig<typeof smartGardenManagerABI, 'setHooks'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof smartGardenManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: smartGardenManagerABI,
    address:
      smartGardenManagerAddress[
        chainId as keyof typeof smartGardenManagerAddress
      ],
    functionName: 'setHooks',
    ...config,
  } as UsePrepareContractWriteConfig<typeof smartGardenManagerABI, 'setHooks'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link smartGardenManagerABI}__ and `functionName` set to `"setRegistry"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * -
 */
export function usePrepareSmartGardenManagerSetRegistry(
  config: Omit<
    UsePrepareContractWriteConfig<typeof smartGardenManagerABI, 'setRegistry'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof smartGardenManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: smartGardenManagerABI,
    address:
      smartGardenManagerAddress[
        chainId as keyof typeof smartGardenManagerAddress
      ],
    functionName: 'setRegistry',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof smartGardenManagerABI,
    'setRegistry'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link smartGardenManagerABI}__ and `functionName` set to `"transferOwnership"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * -
 */
export function usePrepareSmartGardenManagerTransferOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof smartGardenManagerABI,
      'transferOwnership'
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof smartGardenManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: smartGardenManagerABI,
    address:
      smartGardenManagerAddress[
        chainId as keyof typeof smartGardenManagerAddress
      ],
    functionName: 'transferOwnership',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof smartGardenManagerABI,
    'transferOwnership'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link smartGardenManagerABI}__.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * -
 */
export function useSmartGardenManagerEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof smartGardenManagerABI, TEventName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof smartGardenManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: smartGardenManagerABI,
    address:
      smartGardenManagerAddress[
        chainId as keyof typeof smartGardenManagerAddress
      ],
    ...config,
  } as UseContractEventConfig<typeof smartGardenManagerABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link smartGardenManagerABI}__ and `eventName` set to `"ActionsExecuted"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * -
 */
export function useSmartGardenManagerActionsExecutedEvent(
  config: Omit<
    UseContractEventConfig<typeof smartGardenManagerABI, 'ActionsExecuted'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof smartGardenManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: smartGardenManagerABI,
    address:
      smartGardenManagerAddress[
        chainId as keyof typeof smartGardenManagerAddress
      ],
    eventName: 'ActionsExecuted',
    ...config,
  } as UseContractEventConfig<typeof smartGardenManagerABI, 'ActionsExecuted'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link smartGardenManagerABI}__ and `eventName` set to `"HooksChanged"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * -
 */
export function useSmartGardenManagerHooksChangedEvent(
  config: Omit<
    UseContractEventConfig<typeof smartGardenManagerABI, 'HooksChanged'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof smartGardenManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: smartGardenManagerABI,
    address:
      smartGardenManagerAddress[
        chainId as keyof typeof smartGardenManagerAddress
      ],
    eventName: 'HooksChanged',
    ...config,
  } as UseContractEventConfig<typeof smartGardenManagerABI, 'HooksChanged'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link smartGardenManagerABI}__ and `eventName` set to `"OwnershipTransferStarted"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * -
 */
export function useSmartGardenManagerOwnershipTransferStartedEvent(
  config: Omit<
    UseContractEventConfig<
      typeof smartGardenManagerABI,
      'OwnershipTransferStarted'
    >,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof smartGardenManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: smartGardenManagerABI,
    address:
      smartGardenManagerAddress[
        chainId as keyof typeof smartGardenManagerAddress
      ],
    eventName: 'OwnershipTransferStarted',
    ...config,
  } as UseContractEventConfig<
    typeof smartGardenManagerABI,
    'OwnershipTransferStarted'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link smartGardenManagerABI}__ and `eventName` set to `"OwnershipTransferred"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * -
 */
export function useSmartGardenManagerOwnershipTransferredEvent(
  config: Omit<
    UseContractEventConfig<
      typeof smartGardenManagerABI,
      'OwnershipTransferred'
    >,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof smartGardenManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: smartGardenManagerABI,
    address:
      smartGardenManagerAddress[
        chainId as keyof typeof smartGardenManagerAddress
      ],
    eventName: 'OwnershipTransferred',
    ...config,
  } as UseContractEventConfig<
    typeof smartGardenManagerABI,
    'OwnershipTransferred'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link smartGardenManagerABI}__ and `eventName` set to `"PluginDisabled"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * -
 */
export function useSmartGardenManagerPluginDisabledEvent(
  config: Omit<
    UseContractEventConfig<typeof smartGardenManagerABI, 'PluginDisabled'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof smartGardenManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: smartGardenManagerABI,
    address:
      smartGardenManagerAddress[
        chainId as keyof typeof smartGardenManagerAddress
      ],
    eventName: 'PluginDisabled',
    ...config,
  } as UseContractEventConfig<typeof smartGardenManagerABI, 'PluginDisabled'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link smartGardenManagerABI}__ and `eventName` set to `"PluginEnabled"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * -
 */
export function useSmartGardenManagerPluginEnabledEvent(
  config: Omit<
    UseContractEventConfig<typeof smartGardenManagerABI, 'PluginEnabled'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof smartGardenManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: smartGardenManagerABI,
    address:
      smartGardenManagerAddress[
        chainId as keyof typeof smartGardenManagerAddress
      ],
    eventName: 'PluginEnabled',
    ...config,
  } as UseContractEventConfig<typeof smartGardenManagerABI, 'PluginEnabled'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link smartGardenManagerABI}__ and `eventName` set to `"RegistryChanged"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * -
 */
export function useSmartGardenManagerRegistryChangedEvent(
  config: Omit<
    UseContractEventConfig<typeof smartGardenManagerABI, 'RegistryChanged'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof smartGardenManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: smartGardenManagerABI,
    address:
      smartGardenManagerAddress[
        chainId as keyof typeof smartGardenManagerAddress
      ],
    eventName: 'RegistryChanged',
    ...config,
  } as UseContractEventConfig<typeof smartGardenManagerABI, 'RegistryChanged'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link smartGardenManagerABI}__ and `eventName` set to `"RootAccessActionExecuted"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xfD20C63554A9916816dC5e5Df596A0333185F263)
 * -
 */
export function useSmartGardenManagerRootAccessActionExecutedEvent(
  config: Omit<
    UseContractEventConfig<
      typeof smartGardenManagerABI,
      'RootAccessActionExecuted'
    >,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof smartGardenManagerAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: smartGardenManagerABI,
    address:
      smartGardenManagerAddress[
        chainId as keyof typeof smartGardenManagerAddress
      ],
    eventName: 'RootAccessActionExecuted',
    ...config,
  } as UseContractEventConfig<
    typeof smartGardenManagerABI,
    'RootAccessActionExecuted'
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link smartGardenTestABI}__.
 */
export function useSmartGardenTestRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof smartGardenTestABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof smartGardenTestABI,
      TFunctionName,
      TSelectData
    >,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: smartGardenTestABI,
    ...config,
  } as UseContractReadConfig<
    typeof smartGardenTestABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link smartGardenTestABI}__ and `functionName` set to `"IS_TEST"`.
 */
export function useSmartGardenTestIsTest<
  TFunctionName extends 'IS_TEST',
  TSelectData = ReadContractResult<typeof smartGardenTestABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof smartGardenTestABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: smartGardenTestABI,
    functionName: 'IS_TEST',
    ...config,
  } as UseContractReadConfig<
    typeof smartGardenTestABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link smartGardenTestABI}__ and `functionName` set to `"excludeArtifacts"`.
 */
export function useSmartGardenTestExcludeArtifacts<
  TFunctionName extends 'excludeArtifacts',
  TSelectData = ReadContractResult<typeof smartGardenTestABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof smartGardenTestABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: smartGardenTestABI,
    functionName: 'excludeArtifacts',
    ...config,
  } as UseContractReadConfig<
    typeof smartGardenTestABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link smartGardenTestABI}__ and `functionName` set to `"excludeContracts"`.
 */
export function useSmartGardenTestExcludeContracts<
  TFunctionName extends 'excludeContracts',
  TSelectData = ReadContractResult<typeof smartGardenTestABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof smartGardenTestABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: smartGardenTestABI,
    functionName: 'excludeContracts',
    ...config,
  } as UseContractReadConfig<
    typeof smartGardenTestABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link smartGardenTestABI}__ and `functionName` set to `"excludeSenders"`.
 */
export function useSmartGardenTestExcludeSenders<
  TFunctionName extends 'excludeSenders',
  TSelectData = ReadContractResult<typeof smartGardenTestABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof smartGardenTestABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: smartGardenTestABI,
    functionName: 'excludeSenders',
    ...config,
  } as UseContractReadConfig<
    typeof smartGardenTestABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link smartGardenTestABI}__ and `functionName` set to `"targetArtifactSelectors"`.
 */
export function useSmartGardenTestTargetArtifactSelectors<
  TFunctionName extends 'targetArtifactSelectors',
  TSelectData = ReadContractResult<typeof smartGardenTestABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof smartGardenTestABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: smartGardenTestABI,
    functionName: 'targetArtifactSelectors',
    ...config,
  } as UseContractReadConfig<
    typeof smartGardenTestABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link smartGardenTestABI}__ and `functionName` set to `"targetArtifacts"`.
 */
export function useSmartGardenTestTargetArtifacts<
  TFunctionName extends 'targetArtifacts',
  TSelectData = ReadContractResult<typeof smartGardenTestABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof smartGardenTestABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: smartGardenTestABI,
    functionName: 'targetArtifacts',
    ...config,
  } as UseContractReadConfig<
    typeof smartGardenTestABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link smartGardenTestABI}__ and `functionName` set to `"targetContracts"`.
 */
export function useSmartGardenTestTargetContracts<
  TFunctionName extends 'targetContracts',
  TSelectData = ReadContractResult<typeof smartGardenTestABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof smartGardenTestABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: smartGardenTestABI,
    functionName: 'targetContracts',
    ...config,
  } as UseContractReadConfig<
    typeof smartGardenTestABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link smartGardenTestABI}__ and `functionName` set to `"targetSelectors"`.
 */
export function useSmartGardenTestTargetSelectors<
  TFunctionName extends 'targetSelectors',
  TSelectData = ReadContractResult<typeof smartGardenTestABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof smartGardenTestABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: smartGardenTestABI,
    functionName: 'targetSelectors',
    ...config,
  } as UseContractReadConfig<
    typeof smartGardenTestABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link smartGardenTestABI}__ and `functionName` set to `"targetSenders"`.
 */
export function useSmartGardenTestTargetSenders<
  TFunctionName extends 'targetSenders',
  TSelectData = ReadContractResult<typeof smartGardenTestABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof smartGardenTestABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: smartGardenTestABI,
    functionName: 'targetSenders',
    ...config,
  } as UseContractReadConfig<
    typeof smartGardenTestABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link smartGardenTestABI}__.
 */
export function useSmartGardenTestWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof smartGardenTestABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<
        typeof smartGardenTestABI,
        TFunctionName,
        TMode
      > & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof smartGardenTestABI, TFunctionName, TMode>({
    abi: smartGardenTestABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link smartGardenTestABI}__ and `functionName` set to `"failed"`.
 */
export function useSmartGardenTestFailed<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof smartGardenTestABI,
          'failed'
        >['request']['abi'],
        'failed',
        TMode
      > & { functionName?: 'failed' }
    : UseContractWriteConfig<typeof smartGardenTestABI, 'failed', TMode> & {
        abi?: never
        functionName?: 'failed'
      } = {} as any,
) {
  return useContractWrite<typeof smartGardenTestABI, 'failed', TMode>({
    abi: smartGardenTestABI,
    functionName: 'failed',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link smartGardenTestABI}__ and `functionName` set to `"setUp"`.
 */
export function useSmartGardenTestSetUp<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof smartGardenTestABI,
          'setUp'
        >['request']['abi'],
        'setUp',
        TMode
      > & { functionName?: 'setUp' }
    : UseContractWriteConfig<typeof smartGardenTestABI, 'setUp', TMode> & {
        abi?: never
        functionName?: 'setUp'
      } = {} as any,
) {
  return useContractWrite<typeof smartGardenTestABI, 'setUp', TMode>({
    abi: smartGardenTestABI,
    functionName: 'setUp',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link smartGardenTestABI}__ and `functionName` set to `"test_basic_safe_flow"`.
 */
export function useSmartGardenTestTestBasicSafeFlow<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof smartGardenTestABI,
          'test_basic_safe_flow'
        >['request']['abi'],
        'test_basic_safe_flow',
        TMode
      > & { functionName?: 'test_basic_safe_flow' }
    : UseContractWriteConfig<
        typeof smartGardenTestABI,
        'test_basic_safe_flow',
        TMode
      > & {
        abi?: never
        functionName?: 'test_basic_safe_flow'
      } = {} as any,
) {
  return useContractWrite<
    typeof smartGardenTestABI,
    'test_basic_safe_flow',
    TMode
  >({
    abi: smartGardenTestABI,
    functionName: 'test_basic_safe_flow',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link smartGardenTestABI}__.
 */
export function usePrepareSmartGardenTestWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof smartGardenTestABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: smartGardenTestABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof smartGardenTestABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link smartGardenTestABI}__ and `functionName` set to `"failed"`.
 */
export function usePrepareSmartGardenTestFailed(
  config: Omit<
    UsePrepareContractWriteConfig<typeof smartGardenTestABI, 'failed'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: smartGardenTestABI,
    functionName: 'failed',
    ...config,
  } as UsePrepareContractWriteConfig<typeof smartGardenTestABI, 'failed'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link smartGardenTestABI}__ and `functionName` set to `"setUp"`.
 */
export function usePrepareSmartGardenTestSetUp(
  config: Omit<
    UsePrepareContractWriteConfig<typeof smartGardenTestABI, 'setUp'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: smartGardenTestABI,
    functionName: 'setUp',
    ...config,
  } as UsePrepareContractWriteConfig<typeof smartGardenTestABI, 'setUp'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link smartGardenTestABI}__ and `functionName` set to `"test_basic_safe_flow"`.
 */
export function usePrepareSmartGardenTestTestBasicSafeFlow(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof smartGardenTestABI,
      'test_basic_safe_flow'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: smartGardenTestABI,
    functionName: 'test_basic_safe_flow',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof smartGardenTestABI,
    'test_basic_safe_flow'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link smartGardenTestABI}__.
 */
export function useSmartGardenTestEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof smartGardenTestABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: smartGardenTestABI,
    ...config,
  } as UseContractEventConfig<typeof smartGardenTestABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link smartGardenTestABI}__ and `eventName` set to `"log"`.
 */
export function useSmartGardenTestLogEvent(
  config: Omit<
    UseContractEventConfig<typeof smartGardenTestABI, 'log'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: smartGardenTestABI,
    eventName: 'log',
    ...config,
  } as UseContractEventConfig<typeof smartGardenTestABI, 'log'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link smartGardenTestABI}__ and `eventName` set to `"log_address"`.
 */
export function useSmartGardenTestLogAddressEvent(
  config: Omit<
    UseContractEventConfig<typeof smartGardenTestABI, 'log_address'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: smartGardenTestABI,
    eventName: 'log_address',
    ...config,
  } as UseContractEventConfig<typeof smartGardenTestABI, 'log_address'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link smartGardenTestABI}__ and `eventName` set to `"log_array"`.
 */
export function useSmartGardenTestLogArrayEvent(
  config: Omit<
    UseContractEventConfig<typeof smartGardenTestABI, 'log_array'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: smartGardenTestABI,
    eventName: 'log_array',
    ...config,
  } as UseContractEventConfig<typeof smartGardenTestABI, 'log_array'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link smartGardenTestABI}__ and `eventName` set to `"log_bytes"`.
 */
export function useSmartGardenTestLogBytesEvent(
  config: Omit<
    UseContractEventConfig<typeof smartGardenTestABI, 'log_bytes'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: smartGardenTestABI,
    eventName: 'log_bytes',
    ...config,
  } as UseContractEventConfig<typeof smartGardenTestABI, 'log_bytes'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link smartGardenTestABI}__ and `eventName` set to `"log_bytes32"`.
 */
export function useSmartGardenTestLogBytes32Event(
  config: Omit<
    UseContractEventConfig<typeof smartGardenTestABI, 'log_bytes32'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: smartGardenTestABI,
    eventName: 'log_bytes32',
    ...config,
  } as UseContractEventConfig<typeof smartGardenTestABI, 'log_bytes32'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link smartGardenTestABI}__ and `eventName` set to `"log_int"`.
 */
export function useSmartGardenTestLogIntEvent(
  config: Omit<
    UseContractEventConfig<typeof smartGardenTestABI, 'log_int'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: smartGardenTestABI,
    eventName: 'log_int',
    ...config,
  } as UseContractEventConfig<typeof smartGardenTestABI, 'log_int'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link smartGardenTestABI}__ and `eventName` set to `"log_named_address"`.
 */
export function useSmartGardenTestLogNamedAddressEvent(
  config: Omit<
    UseContractEventConfig<typeof smartGardenTestABI, 'log_named_address'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: smartGardenTestABI,
    eventName: 'log_named_address',
    ...config,
  } as UseContractEventConfig<typeof smartGardenTestABI, 'log_named_address'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link smartGardenTestABI}__ and `eventName` set to `"log_named_array"`.
 */
export function useSmartGardenTestLogNamedArrayEvent(
  config: Omit<
    UseContractEventConfig<typeof smartGardenTestABI, 'log_named_array'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: smartGardenTestABI,
    eventName: 'log_named_array',
    ...config,
  } as UseContractEventConfig<typeof smartGardenTestABI, 'log_named_array'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link smartGardenTestABI}__ and `eventName` set to `"log_named_bytes"`.
 */
export function useSmartGardenTestLogNamedBytesEvent(
  config: Omit<
    UseContractEventConfig<typeof smartGardenTestABI, 'log_named_bytes'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: smartGardenTestABI,
    eventName: 'log_named_bytes',
    ...config,
  } as UseContractEventConfig<typeof smartGardenTestABI, 'log_named_bytes'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link smartGardenTestABI}__ and `eventName` set to `"log_named_bytes32"`.
 */
export function useSmartGardenTestLogNamedBytes32Event(
  config: Omit<
    UseContractEventConfig<typeof smartGardenTestABI, 'log_named_bytes32'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: smartGardenTestABI,
    eventName: 'log_named_bytes32',
    ...config,
  } as UseContractEventConfig<typeof smartGardenTestABI, 'log_named_bytes32'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link smartGardenTestABI}__ and `eventName` set to `"log_named_decimal_int"`.
 */
export function useSmartGardenTestLogNamedDecimalIntEvent(
  config: Omit<
    UseContractEventConfig<typeof smartGardenTestABI, 'log_named_decimal_int'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: smartGardenTestABI,
    eventName: 'log_named_decimal_int',
    ...config,
  } as UseContractEventConfig<
    typeof smartGardenTestABI,
    'log_named_decimal_int'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link smartGardenTestABI}__ and `eventName` set to `"log_named_decimal_uint"`.
 */
export function useSmartGardenTestLogNamedDecimalUintEvent(
  config: Omit<
    UseContractEventConfig<typeof smartGardenTestABI, 'log_named_decimal_uint'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: smartGardenTestABI,
    eventName: 'log_named_decimal_uint',
    ...config,
  } as UseContractEventConfig<
    typeof smartGardenTestABI,
    'log_named_decimal_uint'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link smartGardenTestABI}__ and `eventName` set to `"log_named_int"`.
 */
export function useSmartGardenTestLogNamedIntEvent(
  config: Omit<
    UseContractEventConfig<typeof smartGardenTestABI, 'log_named_int'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: smartGardenTestABI,
    eventName: 'log_named_int',
    ...config,
  } as UseContractEventConfig<typeof smartGardenTestABI, 'log_named_int'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link smartGardenTestABI}__ and `eventName` set to `"log_named_string"`.
 */
export function useSmartGardenTestLogNamedStringEvent(
  config: Omit<
    UseContractEventConfig<typeof smartGardenTestABI, 'log_named_string'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: smartGardenTestABI,
    eventName: 'log_named_string',
    ...config,
  } as UseContractEventConfig<typeof smartGardenTestABI, 'log_named_string'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link smartGardenTestABI}__ and `eventName` set to `"log_named_uint"`.
 */
export function useSmartGardenTestLogNamedUintEvent(
  config: Omit<
    UseContractEventConfig<typeof smartGardenTestABI, 'log_named_uint'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: smartGardenTestABI,
    eventName: 'log_named_uint',
    ...config,
  } as UseContractEventConfig<typeof smartGardenTestABI, 'log_named_uint'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link smartGardenTestABI}__ and `eventName` set to `"log_string"`.
 */
export function useSmartGardenTestLogStringEvent(
  config: Omit<
    UseContractEventConfig<typeof smartGardenTestABI, 'log_string'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: smartGardenTestABI,
    eventName: 'log_string',
    ...config,
  } as UseContractEventConfig<typeof smartGardenTestABI, 'log_string'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link smartGardenTestABI}__ and `eventName` set to `"log_uint"`.
 */
export function useSmartGardenTestLogUintEvent(
  config: Omit<
    UseContractEventConfig<typeof smartGardenTestABI, 'log_uint'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: smartGardenTestABI,
    eventName: 'log_uint',
    ...config,
  } as UseContractEventConfig<typeof smartGardenTestABI, 'log_uint'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link smartGardenTestABI}__ and `eventName` set to `"logs"`.
 */
export function useSmartGardenTestLogsEvent(
  config: Omit<
    UseContractEventConfig<typeof smartGardenTestABI, 'logs'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: smartGardenTestABI,
    eventName: 'logs',
    ...config,
  } as UseContractEventConfig<typeof smartGardenTestABI, 'logs'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link stdAssertionsABI}__.
 */
export function useStdAssertionsRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof stdAssertionsABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof stdAssertionsABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: stdAssertionsABI,
    ...config,
  } as UseContractReadConfig<
    typeof stdAssertionsABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link stdAssertionsABI}__ and `functionName` set to `"IS_TEST"`.
 */
export function useStdAssertionsIsTest<
  TFunctionName extends 'IS_TEST',
  TSelectData = ReadContractResult<typeof stdAssertionsABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof stdAssertionsABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: stdAssertionsABI,
    functionName: 'IS_TEST',
    ...config,
  } as UseContractReadConfig<
    typeof stdAssertionsABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link stdAssertionsABI}__.
 */
export function useStdAssertionsWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof stdAssertionsABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof stdAssertionsABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof stdAssertionsABI, TFunctionName, TMode>({
    abi: stdAssertionsABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link stdAssertionsABI}__ and `functionName` set to `"failed"`.
 */
export function useStdAssertionsFailed<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof stdAssertionsABI,
          'failed'
        >['request']['abi'],
        'failed',
        TMode
      > & { functionName?: 'failed' }
    : UseContractWriteConfig<typeof stdAssertionsABI, 'failed', TMode> & {
        abi?: never
        functionName?: 'failed'
      } = {} as any,
) {
  return useContractWrite<typeof stdAssertionsABI, 'failed', TMode>({
    abi: stdAssertionsABI,
    functionName: 'failed',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link stdAssertionsABI}__.
 */
export function usePrepareStdAssertionsWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof stdAssertionsABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: stdAssertionsABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof stdAssertionsABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link stdAssertionsABI}__ and `functionName` set to `"failed"`.
 */
export function usePrepareStdAssertionsFailed(
  config: Omit<
    UsePrepareContractWriteConfig<typeof stdAssertionsABI, 'failed'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: stdAssertionsABI,
    functionName: 'failed',
    ...config,
  } as UsePrepareContractWriteConfig<typeof stdAssertionsABI, 'failed'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link stdAssertionsABI}__.
 */
export function useStdAssertionsEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof stdAssertionsABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: stdAssertionsABI,
    ...config,
  } as UseContractEventConfig<typeof stdAssertionsABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link stdAssertionsABI}__ and `eventName` set to `"log"`.
 */
export function useStdAssertionsLogEvent(
  config: Omit<
    UseContractEventConfig<typeof stdAssertionsABI, 'log'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: stdAssertionsABI,
    eventName: 'log',
    ...config,
  } as UseContractEventConfig<typeof stdAssertionsABI, 'log'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link stdAssertionsABI}__ and `eventName` set to `"log_address"`.
 */
export function useStdAssertionsLogAddressEvent(
  config: Omit<
    UseContractEventConfig<typeof stdAssertionsABI, 'log_address'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: stdAssertionsABI,
    eventName: 'log_address',
    ...config,
  } as UseContractEventConfig<typeof stdAssertionsABI, 'log_address'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link stdAssertionsABI}__ and `eventName` set to `"log_array"`.
 */
export function useStdAssertionsLogArrayEvent(
  config: Omit<
    UseContractEventConfig<typeof stdAssertionsABI, 'log_array'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: stdAssertionsABI,
    eventName: 'log_array',
    ...config,
  } as UseContractEventConfig<typeof stdAssertionsABI, 'log_array'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link stdAssertionsABI}__ and `eventName` set to `"log_bytes"`.
 */
export function useStdAssertionsLogBytesEvent(
  config: Omit<
    UseContractEventConfig<typeof stdAssertionsABI, 'log_bytes'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: stdAssertionsABI,
    eventName: 'log_bytes',
    ...config,
  } as UseContractEventConfig<typeof stdAssertionsABI, 'log_bytes'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link stdAssertionsABI}__ and `eventName` set to `"log_bytes32"`.
 */
export function useStdAssertionsLogBytes32Event(
  config: Omit<
    UseContractEventConfig<typeof stdAssertionsABI, 'log_bytes32'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: stdAssertionsABI,
    eventName: 'log_bytes32',
    ...config,
  } as UseContractEventConfig<typeof stdAssertionsABI, 'log_bytes32'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link stdAssertionsABI}__ and `eventName` set to `"log_int"`.
 */
export function useStdAssertionsLogIntEvent(
  config: Omit<
    UseContractEventConfig<typeof stdAssertionsABI, 'log_int'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: stdAssertionsABI,
    eventName: 'log_int',
    ...config,
  } as UseContractEventConfig<typeof stdAssertionsABI, 'log_int'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link stdAssertionsABI}__ and `eventName` set to `"log_named_address"`.
 */
export function useStdAssertionsLogNamedAddressEvent(
  config: Omit<
    UseContractEventConfig<typeof stdAssertionsABI, 'log_named_address'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: stdAssertionsABI,
    eventName: 'log_named_address',
    ...config,
  } as UseContractEventConfig<typeof stdAssertionsABI, 'log_named_address'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link stdAssertionsABI}__ and `eventName` set to `"log_named_array"`.
 */
export function useStdAssertionsLogNamedArrayEvent(
  config: Omit<
    UseContractEventConfig<typeof stdAssertionsABI, 'log_named_array'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: stdAssertionsABI,
    eventName: 'log_named_array',
    ...config,
  } as UseContractEventConfig<typeof stdAssertionsABI, 'log_named_array'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link stdAssertionsABI}__ and `eventName` set to `"log_named_bytes"`.
 */
export function useStdAssertionsLogNamedBytesEvent(
  config: Omit<
    UseContractEventConfig<typeof stdAssertionsABI, 'log_named_bytes'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: stdAssertionsABI,
    eventName: 'log_named_bytes',
    ...config,
  } as UseContractEventConfig<typeof stdAssertionsABI, 'log_named_bytes'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link stdAssertionsABI}__ and `eventName` set to `"log_named_bytes32"`.
 */
export function useStdAssertionsLogNamedBytes32Event(
  config: Omit<
    UseContractEventConfig<typeof stdAssertionsABI, 'log_named_bytes32'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: stdAssertionsABI,
    eventName: 'log_named_bytes32',
    ...config,
  } as UseContractEventConfig<typeof stdAssertionsABI, 'log_named_bytes32'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link stdAssertionsABI}__ and `eventName` set to `"log_named_decimal_int"`.
 */
export function useStdAssertionsLogNamedDecimalIntEvent(
  config: Omit<
    UseContractEventConfig<typeof stdAssertionsABI, 'log_named_decimal_int'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: stdAssertionsABI,
    eventName: 'log_named_decimal_int',
    ...config,
  } as UseContractEventConfig<typeof stdAssertionsABI, 'log_named_decimal_int'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link stdAssertionsABI}__ and `eventName` set to `"log_named_decimal_uint"`.
 */
export function useStdAssertionsLogNamedDecimalUintEvent(
  config: Omit<
    UseContractEventConfig<typeof stdAssertionsABI, 'log_named_decimal_uint'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: stdAssertionsABI,
    eventName: 'log_named_decimal_uint',
    ...config,
  } as UseContractEventConfig<
    typeof stdAssertionsABI,
    'log_named_decimal_uint'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link stdAssertionsABI}__ and `eventName` set to `"log_named_int"`.
 */
export function useStdAssertionsLogNamedIntEvent(
  config: Omit<
    UseContractEventConfig<typeof stdAssertionsABI, 'log_named_int'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: stdAssertionsABI,
    eventName: 'log_named_int',
    ...config,
  } as UseContractEventConfig<typeof stdAssertionsABI, 'log_named_int'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link stdAssertionsABI}__ and `eventName` set to `"log_named_string"`.
 */
export function useStdAssertionsLogNamedStringEvent(
  config: Omit<
    UseContractEventConfig<typeof stdAssertionsABI, 'log_named_string'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: stdAssertionsABI,
    eventName: 'log_named_string',
    ...config,
  } as UseContractEventConfig<typeof stdAssertionsABI, 'log_named_string'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link stdAssertionsABI}__ and `eventName` set to `"log_named_uint"`.
 */
export function useStdAssertionsLogNamedUintEvent(
  config: Omit<
    UseContractEventConfig<typeof stdAssertionsABI, 'log_named_uint'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: stdAssertionsABI,
    eventName: 'log_named_uint',
    ...config,
  } as UseContractEventConfig<typeof stdAssertionsABI, 'log_named_uint'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link stdAssertionsABI}__ and `eventName` set to `"log_string"`.
 */
export function useStdAssertionsLogStringEvent(
  config: Omit<
    UseContractEventConfig<typeof stdAssertionsABI, 'log_string'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: stdAssertionsABI,
    eventName: 'log_string',
    ...config,
  } as UseContractEventConfig<typeof stdAssertionsABI, 'log_string'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link stdAssertionsABI}__ and `eventName` set to `"log_uint"`.
 */
export function useStdAssertionsLogUintEvent(
  config: Omit<
    UseContractEventConfig<typeof stdAssertionsABI, 'log_uint'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: stdAssertionsABI,
    eventName: 'log_uint',
    ...config,
  } as UseContractEventConfig<typeof stdAssertionsABI, 'log_uint'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link stdAssertionsABI}__ and `eventName` set to `"logs"`.
 */
export function useStdAssertionsLogsEvent(
  config: Omit<
    UseContractEventConfig<typeof stdAssertionsABI, 'logs'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: stdAssertionsABI,
    eventName: 'logs',
    ...config,
  } as UseContractEventConfig<typeof stdAssertionsABI, 'logs'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link stdInvariantABI}__.
 */
export function useStdInvariantRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof stdInvariantABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof stdInvariantABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: stdInvariantABI,
    ...config,
  } as UseContractReadConfig<
    typeof stdInvariantABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link stdInvariantABI}__ and `functionName` set to `"excludeArtifacts"`.
 */
export function useStdInvariantExcludeArtifacts<
  TFunctionName extends 'excludeArtifacts',
  TSelectData = ReadContractResult<typeof stdInvariantABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof stdInvariantABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: stdInvariantABI,
    functionName: 'excludeArtifacts',
    ...config,
  } as UseContractReadConfig<
    typeof stdInvariantABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link stdInvariantABI}__ and `functionName` set to `"excludeContracts"`.
 */
export function useStdInvariantExcludeContracts<
  TFunctionName extends 'excludeContracts',
  TSelectData = ReadContractResult<typeof stdInvariantABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof stdInvariantABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: stdInvariantABI,
    functionName: 'excludeContracts',
    ...config,
  } as UseContractReadConfig<
    typeof stdInvariantABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link stdInvariantABI}__ and `functionName` set to `"excludeSenders"`.
 */
export function useStdInvariantExcludeSenders<
  TFunctionName extends 'excludeSenders',
  TSelectData = ReadContractResult<typeof stdInvariantABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof stdInvariantABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: stdInvariantABI,
    functionName: 'excludeSenders',
    ...config,
  } as UseContractReadConfig<
    typeof stdInvariantABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link stdInvariantABI}__ and `functionName` set to `"targetArtifactSelectors"`.
 */
export function useStdInvariantTargetArtifactSelectors<
  TFunctionName extends 'targetArtifactSelectors',
  TSelectData = ReadContractResult<typeof stdInvariantABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof stdInvariantABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: stdInvariantABI,
    functionName: 'targetArtifactSelectors',
    ...config,
  } as UseContractReadConfig<
    typeof stdInvariantABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link stdInvariantABI}__ and `functionName` set to `"targetArtifacts"`.
 */
export function useStdInvariantTargetArtifacts<
  TFunctionName extends 'targetArtifacts',
  TSelectData = ReadContractResult<typeof stdInvariantABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof stdInvariantABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: stdInvariantABI,
    functionName: 'targetArtifacts',
    ...config,
  } as UseContractReadConfig<
    typeof stdInvariantABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link stdInvariantABI}__ and `functionName` set to `"targetContracts"`.
 */
export function useStdInvariantTargetContracts<
  TFunctionName extends 'targetContracts',
  TSelectData = ReadContractResult<typeof stdInvariantABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof stdInvariantABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: stdInvariantABI,
    functionName: 'targetContracts',
    ...config,
  } as UseContractReadConfig<
    typeof stdInvariantABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link stdInvariantABI}__ and `functionName` set to `"targetSelectors"`.
 */
export function useStdInvariantTargetSelectors<
  TFunctionName extends 'targetSelectors',
  TSelectData = ReadContractResult<typeof stdInvariantABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof stdInvariantABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: stdInvariantABI,
    functionName: 'targetSelectors',
    ...config,
  } as UseContractReadConfig<
    typeof stdInvariantABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link stdInvariantABI}__ and `functionName` set to `"targetSenders"`.
 */
export function useStdInvariantTargetSenders<
  TFunctionName extends 'targetSenders',
  TSelectData = ReadContractResult<typeof stdInvariantABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof stdInvariantABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: stdInvariantABI,
    functionName: 'targetSenders',
    ...config,
  } as UseContractReadConfig<
    typeof stdInvariantABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link storageAccessibleABI}__.
 */
export function useStorageAccessibleRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof storageAccessibleABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof storageAccessibleABI,
      TFunctionName,
      TSelectData
    >,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: storageAccessibleABI,
    ...config,
  } as UseContractReadConfig<
    typeof storageAccessibleABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link storageAccessibleABI}__ and `functionName` set to `"getStorageAt"`.
 */
export function useStorageAccessibleGetStorageAt<
  TFunctionName extends 'getStorageAt',
  TSelectData = ReadContractResult<typeof storageAccessibleABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof storageAccessibleABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: storageAccessibleABI,
    functionName: 'getStorageAt',
    ...config,
  } as UseContractReadConfig<
    typeof storageAccessibleABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link storageAccessibleABI}__.
 */
export function useStorageAccessibleWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof storageAccessibleABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<
        typeof storageAccessibleABI,
        TFunctionName,
        TMode
      > & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof storageAccessibleABI, TFunctionName, TMode>({
    abi: storageAccessibleABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link storageAccessibleABI}__ and `functionName` set to `"simulateAndRevert"`.
 */
export function useStorageAccessibleSimulateAndRevert<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof storageAccessibleABI,
          'simulateAndRevert'
        >['request']['abi'],
        'simulateAndRevert',
        TMode
      > & { functionName?: 'simulateAndRevert' }
    : UseContractWriteConfig<
        typeof storageAccessibleABI,
        'simulateAndRevert',
        TMode
      > & {
        abi?: never
        functionName?: 'simulateAndRevert'
      } = {} as any,
) {
  return useContractWrite<
    typeof storageAccessibleABI,
    'simulateAndRevert',
    TMode
  >({
    abi: storageAccessibleABI,
    functionName: 'simulateAndRevert',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link storageAccessibleABI}__.
 */
export function usePrepareStorageAccessibleWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof storageAccessibleABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: storageAccessibleABI,
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof storageAccessibleABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link storageAccessibleABI}__ and `functionName` set to `"simulateAndRevert"`.
 */
export function usePrepareStorageAccessibleSimulateAndRevert(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof storageAccessibleABI,
      'simulateAndRevert'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: storageAccessibleABI,
    functionName: 'simulateAndRevert',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof storageAccessibleABI,
    'simulateAndRevert'
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link testABI}__.
 */
export function useTestRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof testABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof testABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({ abi: testABI, ...config } as UseContractReadConfig<
    typeof testABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link testABI}__ and `functionName` set to `"IS_TEST"`.
 */
export function useTestIsTest<
  TFunctionName extends 'IS_TEST',
  TSelectData = ReadContractResult<typeof testABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof testABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: testABI,
    functionName: 'IS_TEST',
    ...config,
  } as UseContractReadConfig<typeof testABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link testABI}__ and `functionName` set to `"excludeArtifacts"`.
 */
export function useTestExcludeArtifacts<
  TFunctionName extends 'excludeArtifacts',
  TSelectData = ReadContractResult<typeof testABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof testABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: testABI,
    functionName: 'excludeArtifacts',
    ...config,
  } as UseContractReadConfig<typeof testABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link testABI}__ and `functionName` set to `"excludeContracts"`.
 */
export function useTestExcludeContracts<
  TFunctionName extends 'excludeContracts',
  TSelectData = ReadContractResult<typeof testABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof testABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: testABI,
    functionName: 'excludeContracts',
    ...config,
  } as UseContractReadConfig<typeof testABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link testABI}__ and `functionName` set to `"excludeSenders"`.
 */
export function useTestExcludeSenders<
  TFunctionName extends 'excludeSenders',
  TSelectData = ReadContractResult<typeof testABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof testABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: testABI,
    functionName: 'excludeSenders',
    ...config,
  } as UseContractReadConfig<typeof testABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link testABI}__ and `functionName` set to `"targetArtifactSelectors"`.
 */
export function useTestTargetArtifactSelectors<
  TFunctionName extends 'targetArtifactSelectors',
  TSelectData = ReadContractResult<typeof testABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof testABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: testABI,
    functionName: 'targetArtifactSelectors',
    ...config,
  } as UseContractReadConfig<typeof testABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link testABI}__ and `functionName` set to `"targetArtifacts"`.
 */
export function useTestTargetArtifacts<
  TFunctionName extends 'targetArtifacts',
  TSelectData = ReadContractResult<typeof testABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof testABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: testABI,
    functionName: 'targetArtifacts',
    ...config,
  } as UseContractReadConfig<typeof testABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link testABI}__ and `functionName` set to `"targetContracts"`.
 */
export function useTestTargetContracts<
  TFunctionName extends 'targetContracts',
  TSelectData = ReadContractResult<typeof testABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof testABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: testABI,
    functionName: 'targetContracts',
    ...config,
  } as UseContractReadConfig<typeof testABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link testABI}__ and `functionName` set to `"targetSelectors"`.
 */
export function useTestTargetSelectors<
  TFunctionName extends 'targetSelectors',
  TSelectData = ReadContractResult<typeof testABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof testABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: testABI,
    functionName: 'targetSelectors',
    ...config,
  } as UseContractReadConfig<typeof testABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link testABI}__ and `functionName` set to `"targetSenders"`.
 */
export function useTestTargetSenders<
  TFunctionName extends 'targetSenders',
  TSelectData = ReadContractResult<typeof testABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof testABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: testABI,
    functionName: 'targetSenders',
    ...config,
  } as UseContractReadConfig<typeof testABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link testABI}__.
 */
export function useTestWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof testABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof testABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof testABI, TFunctionName, TMode>({
    abi: testABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link testABI}__ and `functionName` set to `"failed"`.
 */
export function useTestFailed<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof testABI, 'failed'>['request']['abi'],
        'failed',
        TMode
      > & { functionName?: 'failed' }
    : UseContractWriteConfig<typeof testABI, 'failed', TMode> & {
        abi?: never
        functionName?: 'failed'
      } = {} as any,
) {
  return useContractWrite<typeof testABI, 'failed', TMode>({
    abi: testABI,
    functionName: 'failed',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link testABI}__.
 */
export function usePrepareTestWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof testABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: testABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof testABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link testABI}__ and `functionName` set to `"failed"`.
 */
export function usePrepareTestFailed(
  config: Omit<
    UsePrepareContractWriteConfig<typeof testABI, 'failed'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: testABI,
    functionName: 'failed',
    ...config,
  } as UsePrepareContractWriteConfig<typeof testABI, 'failed'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testABI}__.
 */
export function useTestEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof testABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({ abi: testABI, ...config } as UseContractEventConfig<
    typeof testABI,
    TEventName
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testABI}__ and `eventName` set to `"log"`.
 */
export function useTestLogEvent(
  config: Omit<
    UseContractEventConfig<typeof testABI, 'log'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: testABI,
    eventName: 'log',
    ...config,
  } as UseContractEventConfig<typeof testABI, 'log'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testABI}__ and `eventName` set to `"log_address"`.
 */
export function useTestLogAddressEvent(
  config: Omit<
    UseContractEventConfig<typeof testABI, 'log_address'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: testABI,
    eventName: 'log_address',
    ...config,
  } as UseContractEventConfig<typeof testABI, 'log_address'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testABI}__ and `eventName` set to `"log_array"`.
 */
export function useTestLogArrayEvent(
  config: Omit<
    UseContractEventConfig<typeof testABI, 'log_array'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: testABI,
    eventName: 'log_array',
    ...config,
  } as UseContractEventConfig<typeof testABI, 'log_array'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testABI}__ and `eventName` set to `"log_bytes"`.
 */
export function useTestLogBytesEvent(
  config: Omit<
    UseContractEventConfig<typeof testABI, 'log_bytes'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: testABI,
    eventName: 'log_bytes',
    ...config,
  } as UseContractEventConfig<typeof testABI, 'log_bytes'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testABI}__ and `eventName` set to `"log_bytes32"`.
 */
export function useTestLogBytes32Event(
  config: Omit<
    UseContractEventConfig<typeof testABI, 'log_bytes32'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: testABI,
    eventName: 'log_bytes32',
    ...config,
  } as UseContractEventConfig<typeof testABI, 'log_bytes32'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testABI}__ and `eventName` set to `"log_int"`.
 */
export function useTestLogIntEvent(
  config: Omit<
    UseContractEventConfig<typeof testABI, 'log_int'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: testABI,
    eventName: 'log_int',
    ...config,
  } as UseContractEventConfig<typeof testABI, 'log_int'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testABI}__ and `eventName` set to `"log_named_address"`.
 */
export function useTestLogNamedAddressEvent(
  config: Omit<
    UseContractEventConfig<typeof testABI, 'log_named_address'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: testABI,
    eventName: 'log_named_address',
    ...config,
  } as UseContractEventConfig<typeof testABI, 'log_named_address'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testABI}__ and `eventName` set to `"log_named_array"`.
 */
export function useTestLogNamedArrayEvent(
  config: Omit<
    UseContractEventConfig<typeof testABI, 'log_named_array'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: testABI,
    eventName: 'log_named_array',
    ...config,
  } as UseContractEventConfig<typeof testABI, 'log_named_array'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testABI}__ and `eventName` set to `"log_named_bytes"`.
 */
export function useTestLogNamedBytesEvent(
  config: Omit<
    UseContractEventConfig<typeof testABI, 'log_named_bytes'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: testABI,
    eventName: 'log_named_bytes',
    ...config,
  } as UseContractEventConfig<typeof testABI, 'log_named_bytes'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testABI}__ and `eventName` set to `"log_named_bytes32"`.
 */
export function useTestLogNamedBytes32Event(
  config: Omit<
    UseContractEventConfig<typeof testABI, 'log_named_bytes32'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: testABI,
    eventName: 'log_named_bytes32',
    ...config,
  } as UseContractEventConfig<typeof testABI, 'log_named_bytes32'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testABI}__ and `eventName` set to `"log_named_decimal_int"`.
 */
export function useTestLogNamedDecimalIntEvent(
  config: Omit<
    UseContractEventConfig<typeof testABI, 'log_named_decimal_int'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: testABI,
    eventName: 'log_named_decimal_int',
    ...config,
  } as UseContractEventConfig<typeof testABI, 'log_named_decimal_int'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testABI}__ and `eventName` set to `"log_named_decimal_uint"`.
 */
export function useTestLogNamedDecimalUintEvent(
  config: Omit<
    UseContractEventConfig<typeof testABI, 'log_named_decimal_uint'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: testABI,
    eventName: 'log_named_decimal_uint',
    ...config,
  } as UseContractEventConfig<typeof testABI, 'log_named_decimal_uint'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testABI}__ and `eventName` set to `"log_named_int"`.
 */
export function useTestLogNamedIntEvent(
  config: Omit<
    UseContractEventConfig<typeof testABI, 'log_named_int'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: testABI,
    eventName: 'log_named_int',
    ...config,
  } as UseContractEventConfig<typeof testABI, 'log_named_int'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testABI}__ and `eventName` set to `"log_named_string"`.
 */
export function useTestLogNamedStringEvent(
  config: Omit<
    UseContractEventConfig<typeof testABI, 'log_named_string'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: testABI,
    eventName: 'log_named_string',
    ...config,
  } as UseContractEventConfig<typeof testABI, 'log_named_string'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testABI}__ and `eventName` set to `"log_named_uint"`.
 */
export function useTestLogNamedUintEvent(
  config: Omit<
    UseContractEventConfig<typeof testABI, 'log_named_uint'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: testABI,
    eventName: 'log_named_uint',
    ...config,
  } as UseContractEventConfig<typeof testABI, 'log_named_uint'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testABI}__ and `eventName` set to `"log_string"`.
 */
export function useTestLogStringEvent(
  config: Omit<
    UseContractEventConfig<typeof testABI, 'log_string'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: testABI,
    eventName: 'log_string',
    ...config,
  } as UseContractEventConfig<typeof testABI, 'log_string'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testABI}__ and `eventName` set to `"log_uint"`.
 */
export function useTestLogUintEvent(
  config: Omit<
    UseContractEventConfig<typeof testABI, 'log_uint'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: testABI,
    eventName: 'log_uint',
    ...config,
  } as UseContractEventConfig<typeof testABI, 'log_uint'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link testABI}__ and `eventName` set to `"logs"`.
 */
export function useTestLogsEvent(
  config: Omit<
    UseContractEventConfig<typeof testABI, 'logs'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: testABI,
    eventName: 'logs',
    ...config,
  } as UseContractEventConfig<typeof testABI, 'logs'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmABI}__.
 */
export function useVmRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof vmABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({ abi: vmABI, ...config } as UseContractReadConfig<
    typeof vmABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"activeFork"`.
 */
export function useVmActiveFork<
  TFunctionName extends 'activeFork',
  TSelectData = ReadContractResult<typeof vmABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmABI,
    functionName: 'activeFork',
    ...config,
  } as UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"addr"`.
 */
export function useVmAddr<
  TFunctionName extends 'addr',
  TSelectData = ReadContractResult<typeof vmABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmABI,
    functionName: 'addr',
    ...config,
  } as UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"assume"`.
 */
export function useVmAssume<
  TFunctionName extends 'assume',
  TSelectData = ReadContractResult<typeof vmABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmABI,
    functionName: 'assume',
    ...config,
  } as UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"deriveKey"`.
 */
export function useVmDeriveKey<
  TFunctionName extends 'deriveKey',
  TSelectData = ReadContractResult<typeof vmABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmABI,
    functionName: 'deriveKey',
    ...config,
  } as UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"envAddress"`.
 */
export function useVmEnvAddress<
  TFunctionName extends 'envAddress',
  TSelectData = ReadContractResult<typeof vmABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmABI,
    functionName: 'envAddress',
    ...config,
  } as UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"envBool"`.
 */
export function useVmEnvBool<
  TFunctionName extends 'envBool',
  TSelectData = ReadContractResult<typeof vmABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmABI,
    functionName: 'envBool',
    ...config,
  } as UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"envBytes"`.
 */
export function useVmEnvBytes<
  TFunctionName extends 'envBytes',
  TSelectData = ReadContractResult<typeof vmABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmABI,
    functionName: 'envBytes',
    ...config,
  } as UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"envBytes32"`.
 */
export function useVmEnvBytes32<
  TFunctionName extends 'envBytes32',
  TSelectData = ReadContractResult<typeof vmABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmABI,
    functionName: 'envBytes32',
    ...config,
  } as UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"envInt"`.
 */
export function useVmEnvInt<
  TFunctionName extends 'envInt',
  TSelectData = ReadContractResult<typeof vmABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmABI,
    functionName: 'envInt',
    ...config,
  } as UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"envString"`.
 */
export function useVmEnvString<
  TFunctionName extends 'envString',
  TSelectData = ReadContractResult<typeof vmABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmABI,
    functionName: 'envString',
    ...config,
  } as UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"envUint"`.
 */
export function useVmEnvUint<
  TFunctionName extends 'envUint',
  TSelectData = ReadContractResult<typeof vmABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmABI,
    functionName: 'envUint',
    ...config,
  } as UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"fsMetadata"`.
 */
export function useVmFsMetadata<
  TFunctionName extends 'fsMetadata',
  TSelectData = ReadContractResult<typeof vmABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmABI,
    functionName: 'fsMetadata',
    ...config,
  } as UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"getCode"`.
 */
export function useVmGetCode<
  TFunctionName extends 'getCode',
  TSelectData = ReadContractResult<typeof vmABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmABI,
    functionName: 'getCode',
    ...config,
  } as UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"getDeployedCode"`.
 */
export function useVmGetDeployedCode<
  TFunctionName extends 'getDeployedCode',
  TSelectData = ReadContractResult<typeof vmABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmABI,
    functionName: 'getDeployedCode',
    ...config,
  } as UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"getNonce"`.
 */
export function useVmGetNonce<
  TFunctionName extends 'getNonce',
  TSelectData = ReadContractResult<typeof vmABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmABI,
    functionName: 'getNonce',
    ...config,
  } as UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"isPersistent"`.
 */
export function useVmIsPersistent<
  TFunctionName extends 'isPersistent',
  TSelectData = ReadContractResult<typeof vmABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmABI,
    functionName: 'isPersistent',
    ...config,
  } as UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"load"`.
 */
export function useVmLoad<
  TFunctionName extends 'load',
  TSelectData = ReadContractResult<typeof vmABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmABI,
    functionName: 'load',
    ...config,
  } as UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"parseAddress"`.
 */
export function useVmParseAddress<
  TFunctionName extends 'parseAddress',
  TSelectData = ReadContractResult<typeof vmABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmABI,
    functionName: 'parseAddress',
    ...config,
  } as UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"parseBool"`.
 */
export function useVmParseBool<
  TFunctionName extends 'parseBool',
  TSelectData = ReadContractResult<typeof vmABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmABI,
    functionName: 'parseBool',
    ...config,
  } as UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"parseBytes"`.
 */
export function useVmParseBytes<
  TFunctionName extends 'parseBytes',
  TSelectData = ReadContractResult<typeof vmABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmABI,
    functionName: 'parseBytes',
    ...config,
  } as UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"parseBytes32"`.
 */
export function useVmParseBytes32<
  TFunctionName extends 'parseBytes32',
  TSelectData = ReadContractResult<typeof vmABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmABI,
    functionName: 'parseBytes32',
    ...config,
  } as UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"parseInt"`.
 */
export function useVmParseInt<
  TFunctionName extends 'parseInt',
  TSelectData = ReadContractResult<typeof vmABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmABI,
    functionName: 'parseInt',
    ...config,
  } as UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"parseJson"`.
 */
export function useVmParseJson<
  TFunctionName extends 'parseJson',
  TSelectData = ReadContractResult<typeof vmABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmABI,
    functionName: 'parseJson',
    ...config,
  } as UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"parseUint"`.
 */
export function useVmParseUint<
  TFunctionName extends 'parseUint',
  TSelectData = ReadContractResult<typeof vmABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmABI,
    functionName: 'parseUint',
    ...config,
  } as UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"projectRoot"`.
 */
export function useVmProjectRoot<
  TFunctionName extends 'projectRoot',
  TSelectData = ReadContractResult<typeof vmABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmABI,
    functionName: 'projectRoot',
    ...config,
  } as UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"readDir"`.
 */
export function useVmReadDir<
  TFunctionName extends 'readDir',
  TSelectData = ReadContractResult<typeof vmABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmABI,
    functionName: 'readDir',
    ...config,
  } as UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"readFile"`.
 */
export function useVmReadFile<
  TFunctionName extends 'readFile',
  TSelectData = ReadContractResult<typeof vmABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmABI,
    functionName: 'readFile',
    ...config,
  } as UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"readFileBinary"`.
 */
export function useVmReadFileBinary<
  TFunctionName extends 'readFileBinary',
  TSelectData = ReadContractResult<typeof vmABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmABI,
    functionName: 'readFileBinary',
    ...config,
  } as UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"readLine"`.
 */
export function useVmReadLine<
  TFunctionName extends 'readLine',
  TSelectData = ReadContractResult<typeof vmABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmABI,
    functionName: 'readLine',
    ...config,
  } as UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"readLink"`.
 */
export function useVmReadLink<
  TFunctionName extends 'readLink',
  TSelectData = ReadContractResult<typeof vmABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmABI,
    functionName: 'readLink',
    ...config,
  } as UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"rpcUrl"`.
 */
export function useVmRpcUrl<
  TFunctionName extends 'rpcUrl',
  TSelectData = ReadContractResult<typeof vmABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmABI,
    functionName: 'rpcUrl',
    ...config,
  } as UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"rpcUrlStructs"`.
 */
export function useVmRpcUrlStructs<
  TFunctionName extends 'rpcUrlStructs',
  TSelectData = ReadContractResult<typeof vmABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmABI,
    functionName: 'rpcUrlStructs',
    ...config,
  } as UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"rpcUrls"`.
 */
export function useVmRpcUrls<
  TFunctionName extends 'rpcUrls',
  TSelectData = ReadContractResult<typeof vmABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmABI,
    functionName: 'rpcUrls',
    ...config,
  } as UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"sign"`.
 */
export function useVmSign<
  TFunctionName extends 'sign',
  TSelectData = ReadContractResult<typeof vmABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmABI,
    functionName: 'sign',
    ...config,
  } as UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"toString"`.
 */
export function useVmToString<
  TFunctionName extends 'toString',
  TSelectData = ReadContractResult<typeof vmABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmABI,
    functionName: 'toString',
    ...config,
  } as UseContractReadConfig<typeof vmABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__.
 */
export function useVmWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof vmABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof vmABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, TFunctionName, TMode>({
    abi: vmABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"accesses"`.
 */
export function useVmAccesses<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof vmABI, 'accesses'>['request']['abi'],
        'accesses',
        TMode
      > & { functionName?: 'accesses' }
    : UseContractWriteConfig<typeof vmABI, 'accesses', TMode> & {
        abi?: never
        functionName?: 'accesses'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'accesses', TMode>({
    abi: vmABI,
    functionName: 'accesses',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"allowCheatcodes"`.
 */
export function useVmAllowCheatcodes<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmABI,
          'allowCheatcodes'
        >['request']['abi'],
        'allowCheatcodes',
        TMode
      > & { functionName?: 'allowCheatcodes' }
    : UseContractWriteConfig<typeof vmABI, 'allowCheatcodes', TMode> & {
        abi?: never
        functionName?: 'allowCheatcodes'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'allowCheatcodes', TMode>({
    abi: vmABI,
    functionName: 'allowCheatcodes',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"breakpoint"`.
 */
export function useVmBreakpoint<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmABI,
          'breakpoint'
        >['request']['abi'],
        'breakpoint',
        TMode
      > & { functionName?: 'breakpoint' }
    : UseContractWriteConfig<typeof vmABI, 'breakpoint', TMode> & {
        abi?: never
        functionName?: 'breakpoint'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'breakpoint', TMode>({
    abi: vmABI,
    functionName: 'breakpoint',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"broadcast"`.
 */
export function useVmBroadcast<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof vmABI, 'broadcast'>['request']['abi'],
        'broadcast',
        TMode
      > & { functionName?: 'broadcast' }
    : UseContractWriteConfig<typeof vmABI, 'broadcast', TMode> & {
        abi?: never
        functionName?: 'broadcast'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'broadcast', TMode>({
    abi: vmABI,
    functionName: 'broadcast',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"chainId"`.
 */
export function useVmChainId<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof vmABI, 'chainId'>['request']['abi'],
        'chainId',
        TMode
      > & { functionName?: 'chainId' }
    : UseContractWriteConfig<typeof vmABI, 'chainId', TMode> & {
        abi?: never
        functionName?: 'chainId'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'chainId', TMode>({
    abi: vmABI,
    functionName: 'chainId',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"clearMockedCalls"`.
 */
export function useVmClearMockedCalls<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmABI,
          'clearMockedCalls'
        >['request']['abi'],
        'clearMockedCalls',
        TMode
      > & { functionName?: 'clearMockedCalls' }
    : UseContractWriteConfig<typeof vmABI, 'clearMockedCalls', TMode> & {
        abi?: never
        functionName?: 'clearMockedCalls'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'clearMockedCalls', TMode>({
    abi: vmABI,
    functionName: 'clearMockedCalls',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"closeFile"`.
 */
export function useVmCloseFile<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof vmABI, 'closeFile'>['request']['abi'],
        'closeFile',
        TMode
      > & { functionName?: 'closeFile' }
    : UseContractWriteConfig<typeof vmABI, 'closeFile', TMode> & {
        abi?: never
        functionName?: 'closeFile'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'closeFile', TMode>({
    abi: vmABI,
    functionName: 'closeFile',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"coinbase"`.
 */
export function useVmCoinbase<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof vmABI, 'coinbase'>['request']['abi'],
        'coinbase',
        TMode
      > & { functionName?: 'coinbase' }
    : UseContractWriteConfig<typeof vmABI, 'coinbase', TMode> & {
        abi?: never
        functionName?: 'coinbase'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'coinbase', TMode>({
    abi: vmABI,
    functionName: 'coinbase',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"createDir"`.
 */
export function useVmCreateDir<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof vmABI, 'createDir'>['request']['abi'],
        'createDir',
        TMode
      > & { functionName?: 'createDir' }
    : UseContractWriteConfig<typeof vmABI, 'createDir', TMode> & {
        abi?: never
        functionName?: 'createDir'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'createDir', TMode>({
    abi: vmABI,
    functionName: 'createDir',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"createFork"`.
 */
export function useVmCreateFork<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmABI,
          'createFork'
        >['request']['abi'],
        'createFork',
        TMode
      > & { functionName?: 'createFork' }
    : UseContractWriteConfig<typeof vmABI, 'createFork', TMode> & {
        abi?: never
        functionName?: 'createFork'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'createFork', TMode>({
    abi: vmABI,
    functionName: 'createFork',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"createSelectFork"`.
 */
export function useVmCreateSelectFork<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmABI,
          'createSelectFork'
        >['request']['abi'],
        'createSelectFork',
        TMode
      > & { functionName?: 'createSelectFork' }
    : UseContractWriteConfig<typeof vmABI, 'createSelectFork', TMode> & {
        abi?: never
        functionName?: 'createSelectFork'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'createSelectFork', TMode>({
    abi: vmABI,
    functionName: 'createSelectFork',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"deal"`.
 */
export function useVmDeal<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof vmABI, 'deal'>['request']['abi'],
        'deal',
        TMode
      > & { functionName?: 'deal' }
    : UseContractWriteConfig<typeof vmABI, 'deal', TMode> & {
        abi?: never
        functionName?: 'deal'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'deal', TMode>({
    abi: vmABI,
    functionName: 'deal',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"difficulty"`.
 */
export function useVmDifficulty<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmABI,
          'difficulty'
        >['request']['abi'],
        'difficulty',
        TMode
      > & { functionName?: 'difficulty' }
    : UseContractWriteConfig<typeof vmABI, 'difficulty', TMode> & {
        abi?: never
        functionName?: 'difficulty'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'difficulty', TMode>({
    abi: vmABI,
    functionName: 'difficulty',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"envOr"`.
 */
export function useVmEnvOr<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof vmABI, 'envOr'>['request']['abi'],
        'envOr',
        TMode
      > & { functionName?: 'envOr' }
    : UseContractWriteConfig<typeof vmABI, 'envOr', TMode> & {
        abi?: never
        functionName?: 'envOr'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'envOr', TMode>({
    abi: vmABI,
    functionName: 'envOr',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"etch"`.
 */
export function useVmEtch<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof vmABI, 'etch'>['request']['abi'],
        'etch',
        TMode
      > & { functionName?: 'etch' }
    : UseContractWriteConfig<typeof vmABI, 'etch', TMode> & {
        abi?: never
        functionName?: 'etch'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'etch', TMode>({
    abi: vmABI,
    functionName: 'etch',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"expectCall"`.
 */
export function useVmExpectCall<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmABI,
          'expectCall'
        >['request']['abi'],
        'expectCall',
        TMode
      > & { functionName?: 'expectCall' }
    : UseContractWriteConfig<typeof vmABI, 'expectCall', TMode> & {
        abi?: never
        functionName?: 'expectCall'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'expectCall', TMode>({
    abi: vmABI,
    functionName: 'expectCall',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"expectCallMinGas"`.
 */
export function useVmExpectCallMinGas<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmABI,
          'expectCallMinGas'
        >['request']['abi'],
        'expectCallMinGas',
        TMode
      > & { functionName?: 'expectCallMinGas' }
    : UseContractWriteConfig<typeof vmABI, 'expectCallMinGas', TMode> & {
        abi?: never
        functionName?: 'expectCallMinGas'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'expectCallMinGas', TMode>({
    abi: vmABI,
    functionName: 'expectCallMinGas',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"expectEmit"`.
 */
export function useVmExpectEmit<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmABI,
          'expectEmit'
        >['request']['abi'],
        'expectEmit',
        TMode
      > & { functionName?: 'expectEmit' }
    : UseContractWriteConfig<typeof vmABI, 'expectEmit', TMode> & {
        abi?: never
        functionName?: 'expectEmit'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'expectEmit', TMode>({
    abi: vmABI,
    functionName: 'expectEmit',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"expectRevert"`.
 */
export function useVmExpectRevert<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmABI,
          'expectRevert'
        >['request']['abi'],
        'expectRevert',
        TMode
      > & { functionName?: 'expectRevert' }
    : UseContractWriteConfig<typeof vmABI, 'expectRevert', TMode> & {
        abi?: never
        functionName?: 'expectRevert'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'expectRevert', TMode>({
    abi: vmABI,
    functionName: 'expectRevert',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"expectSafeMemory"`.
 */
export function useVmExpectSafeMemory<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmABI,
          'expectSafeMemory'
        >['request']['abi'],
        'expectSafeMemory',
        TMode
      > & { functionName?: 'expectSafeMemory' }
    : UseContractWriteConfig<typeof vmABI, 'expectSafeMemory', TMode> & {
        abi?: never
        functionName?: 'expectSafeMemory'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'expectSafeMemory', TMode>({
    abi: vmABI,
    functionName: 'expectSafeMemory',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"expectSafeMemoryCall"`.
 */
export function useVmExpectSafeMemoryCall<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmABI,
          'expectSafeMemoryCall'
        >['request']['abi'],
        'expectSafeMemoryCall',
        TMode
      > & { functionName?: 'expectSafeMemoryCall' }
    : UseContractWriteConfig<typeof vmABI, 'expectSafeMemoryCall', TMode> & {
        abi?: never
        functionName?: 'expectSafeMemoryCall'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'expectSafeMemoryCall', TMode>({
    abi: vmABI,
    functionName: 'expectSafeMemoryCall',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"fee"`.
 */
export function useVmFee<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof vmABI, 'fee'>['request']['abi'],
        'fee',
        TMode
      > & { functionName?: 'fee' }
    : UseContractWriteConfig<typeof vmABI, 'fee', TMode> & {
        abi?: never
        functionName?: 'fee'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'fee', TMode>({
    abi: vmABI,
    functionName: 'fee',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"ffi"`.
 */
export function useVmFfi<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof vmABI, 'ffi'>['request']['abi'],
        'ffi',
        TMode
      > & { functionName?: 'ffi' }
    : UseContractWriteConfig<typeof vmABI, 'ffi', TMode> & {
        abi?: never
        functionName?: 'ffi'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'ffi', TMode>({
    abi: vmABI,
    functionName: 'ffi',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"getLabel"`.
 */
export function useVmGetLabel<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof vmABI, 'getLabel'>['request']['abi'],
        'getLabel',
        TMode
      > & { functionName?: 'getLabel' }
    : UseContractWriteConfig<typeof vmABI, 'getLabel', TMode> & {
        abi?: never
        functionName?: 'getLabel'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'getLabel', TMode>({
    abi: vmABI,
    functionName: 'getLabel',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"getRecordedLogs"`.
 */
export function useVmGetRecordedLogs<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmABI,
          'getRecordedLogs'
        >['request']['abi'],
        'getRecordedLogs',
        TMode
      > & { functionName?: 'getRecordedLogs' }
    : UseContractWriteConfig<typeof vmABI, 'getRecordedLogs', TMode> & {
        abi?: never
        functionName?: 'getRecordedLogs'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'getRecordedLogs', TMode>({
    abi: vmABI,
    functionName: 'getRecordedLogs',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"label"`.
 */
export function useVmLabel<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof vmABI, 'label'>['request']['abi'],
        'label',
        TMode
      > & { functionName?: 'label' }
    : UseContractWriteConfig<typeof vmABI, 'label', TMode> & {
        abi?: never
        functionName?: 'label'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'label', TMode>({
    abi: vmABI,
    functionName: 'label',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"makePersistent"`.
 */
export function useVmMakePersistent<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmABI,
          'makePersistent'
        >['request']['abi'],
        'makePersistent',
        TMode
      > & { functionName?: 'makePersistent' }
    : UseContractWriteConfig<typeof vmABI, 'makePersistent', TMode> & {
        abi?: never
        functionName?: 'makePersistent'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'makePersistent', TMode>({
    abi: vmABI,
    functionName: 'makePersistent',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"mockCall"`.
 */
export function useVmMockCall<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof vmABI, 'mockCall'>['request']['abi'],
        'mockCall',
        TMode
      > & { functionName?: 'mockCall' }
    : UseContractWriteConfig<typeof vmABI, 'mockCall', TMode> & {
        abi?: never
        functionName?: 'mockCall'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'mockCall', TMode>({
    abi: vmABI,
    functionName: 'mockCall',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"mockCallRevert"`.
 */
export function useVmMockCallRevert<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmABI,
          'mockCallRevert'
        >['request']['abi'],
        'mockCallRevert',
        TMode
      > & { functionName?: 'mockCallRevert' }
    : UseContractWriteConfig<typeof vmABI, 'mockCallRevert', TMode> & {
        abi?: never
        functionName?: 'mockCallRevert'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'mockCallRevert', TMode>({
    abi: vmABI,
    functionName: 'mockCallRevert',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"parseJsonAddress"`.
 */
export function useVmParseJsonAddress<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmABI,
          'parseJsonAddress'
        >['request']['abi'],
        'parseJsonAddress',
        TMode
      > & { functionName?: 'parseJsonAddress' }
    : UseContractWriteConfig<typeof vmABI, 'parseJsonAddress', TMode> & {
        abi?: never
        functionName?: 'parseJsonAddress'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'parseJsonAddress', TMode>({
    abi: vmABI,
    functionName: 'parseJsonAddress',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"parseJsonAddressArray"`.
 */
export function useVmParseJsonAddressArray<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmABI,
          'parseJsonAddressArray'
        >['request']['abi'],
        'parseJsonAddressArray',
        TMode
      > & { functionName?: 'parseJsonAddressArray' }
    : UseContractWriteConfig<typeof vmABI, 'parseJsonAddressArray', TMode> & {
        abi?: never
        functionName?: 'parseJsonAddressArray'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'parseJsonAddressArray', TMode>({
    abi: vmABI,
    functionName: 'parseJsonAddressArray',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"parseJsonBool"`.
 */
export function useVmParseJsonBool<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmABI,
          'parseJsonBool'
        >['request']['abi'],
        'parseJsonBool',
        TMode
      > & { functionName?: 'parseJsonBool' }
    : UseContractWriteConfig<typeof vmABI, 'parseJsonBool', TMode> & {
        abi?: never
        functionName?: 'parseJsonBool'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'parseJsonBool', TMode>({
    abi: vmABI,
    functionName: 'parseJsonBool',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"parseJsonBoolArray"`.
 */
export function useVmParseJsonBoolArray<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmABI,
          'parseJsonBoolArray'
        >['request']['abi'],
        'parseJsonBoolArray',
        TMode
      > & { functionName?: 'parseJsonBoolArray' }
    : UseContractWriteConfig<typeof vmABI, 'parseJsonBoolArray', TMode> & {
        abi?: never
        functionName?: 'parseJsonBoolArray'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'parseJsonBoolArray', TMode>({
    abi: vmABI,
    functionName: 'parseJsonBoolArray',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"parseJsonBytes"`.
 */
export function useVmParseJsonBytes<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmABI,
          'parseJsonBytes'
        >['request']['abi'],
        'parseJsonBytes',
        TMode
      > & { functionName?: 'parseJsonBytes' }
    : UseContractWriteConfig<typeof vmABI, 'parseJsonBytes', TMode> & {
        abi?: never
        functionName?: 'parseJsonBytes'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'parseJsonBytes', TMode>({
    abi: vmABI,
    functionName: 'parseJsonBytes',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"parseJsonBytes32"`.
 */
export function useVmParseJsonBytes32<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmABI,
          'parseJsonBytes32'
        >['request']['abi'],
        'parseJsonBytes32',
        TMode
      > & { functionName?: 'parseJsonBytes32' }
    : UseContractWriteConfig<typeof vmABI, 'parseJsonBytes32', TMode> & {
        abi?: never
        functionName?: 'parseJsonBytes32'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'parseJsonBytes32', TMode>({
    abi: vmABI,
    functionName: 'parseJsonBytes32',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"parseJsonBytes32Array"`.
 */
export function useVmParseJsonBytes32Array<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmABI,
          'parseJsonBytes32Array'
        >['request']['abi'],
        'parseJsonBytes32Array',
        TMode
      > & { functionName?: 'parseJsonBytes32Array' }
    : UseContractWriteConfig<typeof vmABI, 'parseJsonBytes32Array', TMode> & {
        abi?: never
        functionName?: 'parseJsonBytes32Array'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'parseJsonBytes32Array', TMode>({
    abi: vmABI,
    functionName: 'parseJsonBytes32Array',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"parseJsonBytesArray"`.
 */
export function useVmParseJsonBytesArray<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmABI,
          'parseJsonBytesArray'
        >['request']['abi'],
        'parseJsonBytesArray',
        TMode
      > & { functionName?: 'parseJsonBytesArray' }
    : UseContractWriteConfig<typeof vmABI, 'parseJsonBytesArray', TMode> & {
        abi?: never
        functionName?: 'parseJsonBytesArray'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'parseJsonBytesArray', TMode>({
    abi: vmABI,
    functionName: 'parseJsonBytesArray',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"parseJsonInt"`.
 */
export function useVmParseJsonInt<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmABI,
          'parseJsonInt'
        >['request']['abi'],
        'parseJsonInt',
        TMode
      > & { functionName?: 'parseJsonInt' }
    : UseContractWriteConfig<typeof vmABI, 'parseJsonInt', TMode> & {
        abi?: never
        functionName?: 'parseJsonInt'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'parseJsonInt', TMode>({
    abi: vmABI,
    functionName: 'parseJsonInt',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"parseJsonIntArray"`.
 */
export function useVmParseJsonIntArray<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmABI,
          'parseJsonIntArray'
        >['request']['abi'],
        'parseJsonIntArray',
        TMode
      > & { functionName?: 'parseJsonIntArray' }
    : UseContractWriteConfig<typeof vmABI, 'parseJsonIntArray', TMode> & {
        abi?: never
        functionName?: 'parseJsonIntArray'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'parseJsonIntArray', TMode>({
    abi: vmABI,
    functionName: 'parseJsonIntArray',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"parseJsonString"`.
 */
export function useVmParseJsonString<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmABI,
          'parseJsonString'
        >['request']['abi'],
        'parseJsonString',
        TMode
      > & { functionName?: 'parseJsonString' }
    : UseContractWriteConfig<typeof vmABI, 'parseJsonString', TMode> & {
        abi?: never
        functionName?: 'parseJsonString'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'parseJsonString', TMode>({
    abi: vmABI,
    functionName: 'parseJsonString',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"parseJsonStringArray"`.
 */
export function useVmParseJsonStringArray<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmABI,
          'parseJsonStringArray'
        >['request']['abi'],
        'parseJsonStringArray',
        TMode
      > & { functionName?: 'parseJsonStringArray' }
    : UseContractWriteConfig<typeof vmABI, 'parseJsonStringArray', TMode> & {
        abi?: never
        functionName?: 'parseJsonStringArray'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'parseJsonStringArray', TMode>({
    abi: vmABI,
    functionName: 'parseJsonStringArray',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"parseJsonUint"`.
 */
export function useVmParseJsonUint<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmABI,
          'parseJsonUint'
        >['request']['abi'],
        'parseJsonUint',
        TMode
      > & { functionName?: 'parseJsonUint' }
    : UseContractWriteConfig<typeof vmABI, 'parseJsonUint', TMode> & {
        abi?: never
        functionName?: 'parseJsonUint'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'parseJsonUint', TMode>({
    abi: vmABI,
    functionName: 'parseJsonUint',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"parseJsonUintArray"`.
 */
export function useVmParseJsonUintArray<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmABI,
          'parseJsonUintArray'
        >['request']['abi'],
        'parseJsonUintArray',
        TMode
      > & { functionName?: 'parseJsonUintArray' }
    : UseContractWriteConfig<typeof vmABI, 'parseJsonUintArray', TMode> & {
        abi?: never
        functionName?: 'parseJsonUintArray'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'parseJsonUintArray', TMode>({
    abi: vmABI,
    functionName: 'parseJsonUintArray',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"pauseGasMetering"`.
 */
export function useVmPauseGasMetering<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmABI,
          'pauseGasMetering'
        >['request']['abi'],
        'pauseGasMetering',
        TMode
      > & { functionName?: 'pauseGasMetering' }
    : UseContractWriteConfig<typeof vmABI, 'pauseGasMetering', TMode> & {
        abi?: never
        functionName?: 'pauseGasMetering'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'pauseGasMetering', TMode>({
    abi: vmABI,
    functionName: 'pauseGasMetering',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"prank"`.
 */
export function useVmPrank<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof vmABI, 'prank'>['request']['abi'],
        'prank',
        TMode
      > & { functionName?: 'prank' }
    : UseContractWriteConfig<typeof vmABI, 'prank', TMode> & {
        abi?: never
        functionName?: 'prank'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'prank', TMode>({
    abi: vmABI,
    functionName: 'prank',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"prevrandao"`.
 */
export function useVmPrevrandao<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmABI,
          'prevrandao'
        >['request']['abi'],
        'prevrandao',
        TMode
      > & { functionName?: 'prevrandao' }
    : UseContractWriteConfig<typeof vmABI, 'prevrandao', TMode> & {
        abi?: never
        functionName?: 'prevrandao'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'prevrandao', TMode>({
    abi: vmABI,
    functionName: 'prevrandao',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"readCallers"`.
 */
export function useVmReadCallers<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmABI,
          'readCallers'
        >['request']['abi'],
        'readCallers',
        TMode
      > & { functionName?: 'readCallers' }
    : UseContractWriteConfig<typeof vmABI, 'readCallers', TMode> & {
        abi?: never
        functionName?: 'readCallers'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'readCallers', TMode>({
    abi: vmABI,
    functionName: 'readCallers',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"record"`.
 */
export function useVmRecord<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof vmABI, 'record'>['request']['abi'],
        'record',
        TMode
      > & { functionName?: 'record' }
    : UseContractWriteConfig<typeof vmABI, 'record', TMode> & {
        abi?: never
        functionName?: 'record'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'record', TMode>({
    abi: vmABI,
    functionName: 'record',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"recordLogs"`.
 */
export function useVmRecordLogs<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmABI,
          'recordLogs'
        >['request']['abi'],
        'recordLogs',
        TMode
      > & { functionName?: 'recordLogs' }
    : UseContractWriteConfig<typeof vmABI, 'recordLogs', TMode> & {
        abi?: never
        functionName?: 'recordLogs'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'recordLogs', TMode>({
    abi: vmABI,
    functionName: 'recordLogs',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"rememberKey"`.
 */
export function useVmRememberKey<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmABI,
          'rememberKey'
        >['request']['abi'],
        'rememberKey',
        TMode
      > & { functionName?: 'rememberKey' }
    : UseContractWriteConfig<typeof vmABI, 'rememberKey', TMode> & {
        abi?: never
        functionName?: 'rememberKey'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'rememberKey', TMode>({
    abi: vmABI,
    functionName: 'rememberKey',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"removeDir"`.
 */
export function useVmRemoveDir<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof vmABI, 'removeDir'>['request']['abi'],
        'removeDir',
        TMode
      > & { functionName?: 'removeDir' }
    : UseContractWriteConfig<typeof vmABI, 'removeDir', TMode> & {
        abi?: never
        functionName?: 'removeDir'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'removeDir', TMode>({
    abi: vmABI,
    functionName: 'removeDir',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"removeFile"`.
 */
export function useVmRemoveFile<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmABI,
          'removeFile'
        >['request']['abi'],
        'removeFile',
        TMode
      > & { functionName?: 'removeFile' }
    : UseContractWriteConfig<typeof vmABI, 'removeFile', TMode> & {
        abi?: never
        functionName?: 'removeFile'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'removeFile', TMode>({
    abi: vmABI,
    functionName: 'removeFile',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"resetNonce"`.
 */
export function useVmResetNonce<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmABI,
          'resetNonce'
        >['request']['abi'],
        'resetNonce',
        TMode
      > & { functionName?: 'resetNonce' }
    : UseContractWriteConfig<typeof vmABI, 'resetNonce', TMode> & {
        abi?: never
        functionName?: 'resetNonce'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'resetNonce', TMode>({
    abi: vmABI,
    functionName: 'resetNonce',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"resumeGasMetering"`.
 */
export function useVmResumeGasMetering<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmABI,
          'resumeGasMetering'
        >['request']['abi'],
        'resumeGasMetering',
        TMode
      > & { functionName?: 'resumeGasMetering' }
    : UseContractWriteConfig<typeof vmABI, 'resumeGasMetering', TMode> & {
        abi?: never
        functionName?: 'resumeGasMetering'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'resumeGasMetering', TMode>({
    abi: vmABI,
    functionName: 'resumeGasMetering',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"revertTo"`.
 */
export function useVmRevertTo<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof vmABI, 'revertTo'>['request']['abi'],
        'revertTo',
        TMode
      > & { functionName?: 'revertTo' }
    : UseContractWriteConfig<typeof vmABI, 'revertTo', TMode> & {
        abi?: never
        functionName?: 'revertTo'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'revertTo', TMode>({
    abi: vmABI,
    functionName: 'revertTo',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"revokePersistent"`.
 */
export function useVmRevokePersistent<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmABI,
          'revokePersistent'
        >['request']['abi'],
        'revokePersistent',
        TMode
      > & { functionName?: 'revokePersistent' }
    : UseContractWriteConfig<typeof vmABI, 'revokePersistent', TMode> & {
        abi?: never
        functionName?: 'revokePersistent'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'revokePersistent', TMode>({
    abi: vmABI,
    functionName: 'revokePersistent',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"roll"`.
 */
export function useVmRoll<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof vmABI, 'roll'>['request']['abi'],
        'roll',
        TMode
      > & { functionName?: 'roll' }
    : UseContractWriteConfig<typeof vmABI, 'roll', TMode> & {
        abi?: never
        functionName?: 'roll'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'roll', TMode>({
    abi: vmABI,
    functionName: 'roll',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"rollFork"`.
 */
export function useVmRollFork<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof vmABI, 'rollFork'>['request']['abi'],
        'rollFork',
        TMode
      > & { functionName?: 'rollFork' }
    : UseContractWriteConfig<typeof vmABI, 'rollFork', TMode> & {
        abi?: never
        functionName?: 'rollFork'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'rollFork', TMode>({
    abi: vmABI,
    functionName: 'rollFork',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"selectFork"`.
 */
export function useVmSelectFork<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmABI,
          'selectFork'
        >['request']['abi'],
        'selectFork',
        TMode
      > & { functionName?: 'selectFork' }
    : UseContractWriteConfig<typeof vmABI, 'selectFork', TMode> & {
        abi?: never
        functionName?: 'selectFork'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'selectFork', TMode>({
    abi: vmABI,
    functionName: 'selectFork',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"serializeAddress"`.
 */
export function useVmSerializeAddress<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmABI,
          'serializeAddress'
        >['request']['abi'],
        'serializeAddress',
        TMode
      > & { functionName?: 'serializeAddress' }
    : UseContractWriteConfig<typeof vmABI, 'serializeAddress', TMode> & {
        abi?: never
        functionName?: 'serializeAddress'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'serializeAddress', TMode>({
    abi: vmABI,
    functionName: 'serializeAddress',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"serializeBool"`.
 */
export function useVmSerializeBool<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmABI,
          'serializeBool'
        >['request']['abi'],
        'serializeBool',
        TMode
      > & { functionName?: 'serializeBool' }
    : UseContractWriteConfig<typeof vmABI, 'serializeBool', TMode> & {
        abi?: never
        functionName?: 'serializeBool'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'serializeBool', TMode>({
    abi: vmABI,
    functionName: 'serializeBool',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"serializeBytes"`.
 */
export function useVmSerializeBytes<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmABI,
          'serializeBytes'
        >['request']['abi'],
        'serializeBytes',
        TMode
      > & { functionName?: 'serializeBytes' }
    : UseContractWriteConfig<typeof vmABI, 'serializeBytes', TMode> & {
        abi?: never
        functionName?: 'serializeBytes'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'serializeBytes', TMode>({
    abi: vmABI,
    functionName: 'serializeBytes',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"serializeBytes32"`.
 */
export function useVmSerializeBytes32<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmABI,
          'serializeBytes32'
        >['request']['abi'],
        'serializeBytes32',
        TMode
      > & { functionName?: 'serializeBytes32' }
    : UseContractWriteConfig<typeof vmABI, 'serializeBytes32', TMode> & {
        abi?: never
        functionName?: 'serializeBytes32'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'serializeBytes32', TMode>({
    abi: vmABI,
    functionName: 'serializeBytes32',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"serializeInt"`.
 */
export function useVmSerializeInt<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmABI,
          'serializeInt'
        >['request']['abi'],
        'serializeInt',
        TMode
      > & { functionName?: 'serializeInt' }
    : UseContractWriteConfig<typeof vmABI, 'serializeInt', TMode> & {
        abi?: never
        functionName?: 'serializeInt'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'serializeInt', TMode>({
    abi: vmABI,
    functionName: 'serializeInt',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"serializeString"`.
 */
export function useVmSerializeString<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmABI,
          'serializeString'
        >['request']['abi'],
        'serializeString',
        TMode
      > & { functionName?: 'serializeString' }
    : UseContractWriteConfig<typeof vmABI, 'serializeString', TMode> & {
        abi?: never
        functionName?: 'serializeString'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'serializeString', TMode>({
    abi: vmABI,
    functionName: 'serializeString',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"serializeUint"`.
 */
export function useVmSerializeUint<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmABI,
          'serializeUint'
        >['request']['abi'],
        'serializeUint',
        TMode
      > & { functionName?: 'serializeUint' }
    : UseContractWriteConfig<typeof vmABI, 'serializeUint', TMode> & {
        abi?: never
        functionName?: 'serializeUint'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'serializeUint', TMode>({
    abi: vmABI,
    functionName: 'serializeUint',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"setEnv"`.
 */
export function useVmSetEnv<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof vmABI, 'setEnv'>['request']['abi'],
        'setEnv',
        TMode
      > & { functionName?: 'setEnv' }
    : UseContractWriteConfig<typeof vmABI, 'setEnv', TMode> & {
        abi?: never
        functionName?: 'setEnv'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'setEnv', TMode>({
    abi: vmABI,
    functionName: 'setEnv',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"setNonce"`.
 */
export function useVmSetNonce<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof vmABI, 'setNonce'>['request']['abi'],
        'setNonce',
        TMode
      > & { functionName?: 'setNonce' }
    : UseContractWriteConfig<typeof vmABI, 'setNonce', TMode> & {
        abi?: never
        functionName?: 'setNonce'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'setNonce', TMode>({
    abi: vmABI,
    functionName: 'setNonce',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"setNonceUnsafe"`.
 */
export function useVmSetNonceUnsafe<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmABI,
          'setNonceUnsafe'
        >['request']['abi'],
        'setNonceUnsafe',
        TMode
      > & { functionName?: 'setNonceUnsafe' }
    : UseContractWriteConfig<typeof vmABI, 'setNonceUnsafe', TMode> & {
        abi?: never
        functionName?: 'setNonceUnsafe'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'setNonceUnsafe', TMode>({
    abi: vmABI,
    functionName: 'setNonceUnsafe',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"skip"`.
 */
export function useVmSkip<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof vmABI, 'skip'>['request']['abi'],
        'skip',
        TMode
      > & { functionName?: 'skip' }
    : UseContractWriteConfig<typeof vmABI, 'skip', TMode> & {
        abi?: never
        functionName?: 'skip'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'skip', TMode>({
    abi: vmABI,
    functionName: 'skip',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"snapshot"`.
 */
export function useVmSnapshot<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof vmABI, 'snapshot'>['request']['abi'],
        'snapshot',
        TMode
      > & { functionName?: 'snapshot' }
    : UseContractWriteConfig<typeof vmABI, 'snapshot', TMode> & {
        abi?: never
        functionName?: 'snapshot'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'snapshot', TMode>({
    abi: vmABI,
    functionName: 'snapshot',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"startBroadcast"`.
 */
export function useVmStartBroadcast<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmABI,
          'startBroadcast'
        >['request']['abi'],
        'startBroadcast',
        TMode
      > & { functionName?: 'startBroadcast' }
    : UseContractWriteConfig<typeof vmABI, 'startBroadcast', TMode> & {
        abi?: never
        functionName?: 'startBroadcast'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'startBroadcast', TMode>({
    abi: vmABI,
    functionName: 'startBroadcast',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"startPrank"`.
 */
export function useVmStartPrank<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmABI,
          'startPrank'
        >['request']['abi'],
        'startPrank',
        TMode
      > & { functionName?: 'startPrank' }
    : UseContractWriteConfig<typeof vmABI, 'startPrank', TMode> & {
        abi?: never
        functionName?: 'startPrank'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'startPrank', TMode>({
    abi: vmABI,
    functionName: 'startPrank',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"stopBroadcast"`.
 */
export function useVmStopBroadcast<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmABI,
          'stopBroadcast'
        >['request']['abi'],
        'stopBroadcast',
        TMode
      > & { functionName?: 'stopBroadcast' }
    : UseContractWriteConfig<typeof vmABI, 'stopBroadcast', TMode> & {
        abi?: never
        functionName?: 'stopBroadcast'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'stopBroadcast', TMode>({
    abi: vmABI,
    functionName: 'stopBroadcast',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"stopPrank"`.
 */
export function useVmStopPrank<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof vmABI, 'stopPrank'>['request']['abi'],
        'stopPrank',
        TMode
      > & { functionName?: 'stopPrank' }
    : UseContractWriteConfig<typeof vmABI, 'stopPrank', TMode> & {
        abi?: never
        functionName?: 'stopPrank'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'stopPrank', TMode>({
    abi: vmABI,
    functionName: 'stopPrank',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"store"`.
 */
export function useVmStore<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof vmABI, 'store'>['request']['abi'],
        'store',
        TMode
      > & { functionName?: 'store' }
    : UseContractWriteConfig<typeof vmABI, 'store', TMode> & {
        abi?: never
        functionName?: 'store'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'store', TMode>({
    abi: vmABI,
    functionName: 'store',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"transact"`.
 */
export function useVmTransact<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof vmABI, 'transact'>['request']['abi'],
        'transact',
        TMode
      > & { functionName?: 'transact' }
    : UseContractWriteConfig<typeof vmABI, 'transact', TMode> & {
        abi?: never
        functionName?: 'transact'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'transact', TMode>({
    abi: vmABI,
    functionName: 'transact',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"txGasPrice"`.
 */
export function useVmTxGasPrice<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmABI,
          'txGasPrice'
        >['request']['abi'],
        'txGasPrice',
        TMode
      > & { functionName?: 'txGasPrice' }
    : UseContractWriteConfig<typeof vmABI, 'txGasPrice', TMode> & {
        abi?: never
        functionName?: 'txGasPrice'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'txGasPrice', TMode>({
    abi: vmABI,
    functionName: 'txGasPrice',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"warp"`.
 */
export function useVmWarp<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof vmABI, 'warp'>['request']['abi'],
        'warp',
        TMode
      > & { functionName?: 'warp' }
    : UseContractWriteConfig<typeof vmABI, 'warp', TMode> & {
        abi?: never
        functionName?: 'warp'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'warp', TMode>({
    abi: vmABI,
    functionName: 'warp',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"writeFile"`.
 */
export function useVmWriteFile<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof vmABI, 'writeFile'>['request']['abi'],
        'writeFile',
        TMode
      > & { functionName?: 'writeFile' }
    : UseContractWriteConfig<typeof vmABI, 'writeFile', TMode> & {
        abi?: never
        functionName?: 'writeFile'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'writeFile', TMode>({
    abi: vmABI,
    functionName: 'writeFile',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"writeFileBinary"`.
 */
export function useVmWriteFileBinary<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmABI,
          'writeFileBinary'
        >['request']['abi'],
        'writeFileBinary',
        TMode
      > & { functionName?: 'writeFileBinary' }
    : UseContractWriteConfig<typeof vmABI, 'writeFileBinary', TMode> & {
        abi?: never
        functionName?: 'writeFileBinary'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'writeFileBinary', TMode>({
    abi: vmABI,
    functionName: 'writeFileBinary',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"writeJson"`.
 */
export function useVmWriteJson<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof vmABI, 'writeJson'>['request']['abi'],
        'writeJson',
        TMode
      > & { functionName?: 'writeJson' }
    : UseContractWriteConfig<typeof vmABI, 'writeJson', TMode> & {
        abi?: never
        functionName?: 'writeJson'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'writeJson', TMode>({
    abi: vmABI,
    functionName: 'writeJson',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"writeLine"`.
 */
export function useVmWriteLine<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof vmABI, 'writeLine'>['request']['abi'],
        'writeLine',
        TMode
      > & { functionName?: 'writeLine' }
    : UseContractWriteConfig<typeof vmABI, 'writeLine', TMode> & {
        abi?: never
        functionName?: 'writeLine'
      } = {} as any,
) {
  return useContractWrite<typeof vmABI, 'writeLine', TMode>({
    abi: vmABI,
    functionName: 'writeLine',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__.
 */
export function usePrepareVmWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"accesses"`.
 */
export function usePrepareVmAccesses(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'accesses'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'accesses',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'accesses'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"allowCheatcodes"`.
 */
export function usePrepareVmAllowCheatcodes(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'allowCheatcodes'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'allowCheatcodes',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'allowCheatcodes'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"breakpoint"`.
 */
export function usePrepareVmBreakpoint(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'breakpoint'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'breakpoint',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'breakpoint'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"broadcast"`.
 */
export function usePrepareVmBroadcast(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'broadcast'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'broadcast',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'broadcast'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"chainId"`.
 */
export function usePrepareVmChainId(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'chainId'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'chainId',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'chainId'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"clearMockedCalls"`.
 */
export function usePrepareVmClearMockedCalls(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'clearMockedCalls'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'clearMockedCalls',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'clearMockedCalls'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"closeFile"`.
 */
export function usePrepareVmCloseFile(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'closeFile'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'closeFile',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'closeFile'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"coinbase"`.
 */
export function usePrepareVmCoinbase(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'coinbase'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'coinbase',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'coinbase'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"createDir"`.
 */
export function usePrepareVmCreateDir(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'createDir'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'createDir',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'createDir'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"createFork"`.
 */
export function usePrepareVmCreateFork(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'createFork'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'createFork',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'createFork'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"createSelectFork"`.
 */
export function usePrepareVmCreateSelectFork(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'createSelectFork'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'createSelectFork',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'createSelectFork'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"deal"`.
 */
export function usePrepareVmDeal(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'deal'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'deal',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'deal'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"difficulty"`.
 */
export function usePrepareVmDifficulty(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'difficulty'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'difficulty',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'difficulty'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"envOr"`.
 */
export function usePrepareVmEnvOr(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'envOr'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'envOr',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'envOr'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"etch"`.
 */
export function usePrepareVmEtch(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'etch'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'etch',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'etch'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"expectCall"`.
 */
export function usePrepareVmExpectCall(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'expectCall'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'expectCall',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'expectCall'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"expectCallMinGas"`.
 */
export function usePrepareVmExpectCallMinGas(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'expectCallMinGas'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'expectCallMinGas',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'expectCallMinGas'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"expectEmit"`.
 */
export function usePrepareVmExpectEmit(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'expectEmit'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'expectEmit',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'expectEmit'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"expectRevert"`.
 */
export function usePrepareVmExpectRevert(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'expectRevert'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'expectRevert',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'expectRevert'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"expectSafeMemory"`.
 */
export function usePrepareVmExpectSafeMemory(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'expectSafeMemory'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'expectSafeMemory',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'expectSafeMemory'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"expectSafeMemoryCall"`.
 */
export function usePrepareVmExpectSafeMemoryCall(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'expectSafeMemoryCall'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'expectSafeMemoryCall',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'expectSafeMemoryCall'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"fee"`.
 */
export function usePrepareVmFee(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'fee'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'fee',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'fee'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"ffi"`.
 */
export function usePrepareVmFfi(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'ffi'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'ffi',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'ffi'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"getLabel"`.
 */
export function usePrepareVmGetLabel(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'getLabel'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'getLabel',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'getLabel'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"getRecordedLogs"`.
 */
export function usePrepareVmGetRecordedLogs(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'getRecordedLogs'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'getRecordedLogs',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'getRecordedLogs'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"label"`.
 */
export function usePrepareVmLabel(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'label'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'label',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'label'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"makePersistent"`.
 */
export function usePrepareVmMakePersistent(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'makePersistent'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'makePersistent',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'makePersistent'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"mockCall"`.
 */
export function usePrepareVmMockCall(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'mockCall'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'mockCall',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'mockCall'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"mockCallRevert"`.
 */
export function usePrepareVmMockCallRevert(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'mockCallRevert'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'mockCallRevert',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'mockCallRevert'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"parseJsonAddress"`.
 */
export function usePrepareVmParseJsonAddress(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'parseJsonAddress'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'parseJsonAddress',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'parseJsonAddress'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"parseJsonAddressArray"`.
 */
export function usePrepareVmParseJsonAddressArray(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'parseJsonAddressArray'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'parseJsonAddressArray',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'parseJsonAddressArray'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"parseJsonBool"`.
 */
export function usePrepareVmParseJsonBool(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'parseJsonBool'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'parseJsonBool',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'parseJsonBool'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"parseJsonBoolArray"`.
 */
export function usePrepareVmParseJsonBoolArray(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'parseJsonBoolArray'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'parseJsonBoolArray',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'parseJsonBoolArray'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"parseJsonBytes"`.
 */
export function usePrepareVmParseJsonBytes(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'parseJsonBytes'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'parseJsonBytes',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'parseJsonBytes'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"parseJsonBytes32"`.
 */
export function usePrepareVmParseJsonBytes32(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'parseJsonBytes32'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'parseJsonBytes32',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'parseJsonBytes32'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"parseJsonBytes32Array"`.
 */
export function usePrepareVmParseJsonBytes32Array(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'parseJsonBytes32Array'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'parseJsonBytes32Array',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'parseJsonBytes32Array'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"parseJsonBytesArray"`.
 */
export function usePrepareVmParseJsonBytesArray(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'parseJsonBytesArray'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'parseJsonBytesArray',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'parseJsonBytesArray'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"parseJsonInt"`.
 */
export function usePrepareVmParseJsonInt(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'parseJsonInt'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'parseJsonInt',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'parseJsonInt'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"parseJsonIntArray"`.
 */
export function usePrepareVmParseJsonIntArray(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'parseJsonIntArray'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'parseJsonIntArray',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'parseJsonIntArray'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"parseJsonString"`.
 */
export function usePrepareVmParseJsonString(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'parseJsonString'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'parseJsonString',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'parseJsonString'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"parseJsonStringArray"`.
 */
export function usePrepareVmParseJsonStringArray(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'parseJsonStringArray'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'parseJsonStringArray',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'parseJsonStringArray'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"parseJsonUint"`.
 */
export function usePrepareVmParseJsonUint(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'parseJsonUint'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'parseJsonUint',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'parseJsonUint'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"parseJsonUintArray"`.
 */
export function usePrepareVmParseJsonUintArray(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'parseJsonUintArray'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'parseJsonUintArray',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'parseJsonUintArray'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"pauseGasMetering"`.
 */
export function usePrepareVmPauseGasMetering(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'pauseGasMetering'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'pauseGasMetering',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'pauseGasMetering'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"prank"`.
 */
export function usePrepareVmPrank(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'prank'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'prank',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'prank'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"prevrandao"`.
 */
export function usePrepareVmPrevrandao(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'prevrandao'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'prevrandao',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'prevrandao'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"readCallers"`.
 */
export function usePrepareVmReadCallers(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'readCallers'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'readCallers',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'readCallers'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"record"`.
 */
export function usePrepareVmRecord(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'record'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'record',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'record'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"recordLogs"`.
 */
export function usePrepareVmRecordLogs(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'recordLogs'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'recordLogs',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'recordLogs'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"rememberKey"`.
 */
export function usePrepareVmRememberKey(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'rememberKey'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'rememberKey',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'rememberKey'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"removeDir"`.
 */
export function usePrepareVmRemoveDir(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'removeDir'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'removeDir',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'removeDir'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"removeFile"`.
 */
export function usePrepareVmRemoveFile(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'removeFile'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'removeFile',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'removeFile'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"resetNonce"`.
 */
export function usePrepareVmResetNonce(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'resetNonce'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'resetNonce',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'resetNonce'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"resumeGasMetering"`.
 */
export function usePrepareVmResumeGasMetering(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'resumeGasMetering'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'resumeGasMetering',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'resumeGasMetering'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"revertTo"`.
 */
export function usePrepareVmRevertTo(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'revertTo'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'revertTo',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'revertTo'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"revokePersistent"`.
 */
export function usePrepareVmRevokePersistent(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'revokePersistent'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'revokePersistent',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'revokePersistent'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"roll"`.
 */
export function usePrepareVmRoll(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'roll'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'roll',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'roll'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"rollFork"`.
 */
export function usePrepareVmRollFork(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'rollFork'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'rollFork',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'rollFork'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"selectFork"`.
 */
export function usePrepareVmSelectFork(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'selectFork'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'selectFork',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'selectFork'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"serializeAddress"`.
 */
export function usePrepareVmSerializeAddress(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'serializeAddress'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'serializeAddress',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'serializeAddress'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"serializeBool"`.
 */
export function usePrepareVmSerializeBool(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'serializeBool'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'serializeBool',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'serializeBool'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"serializeBytes"`.
 */
export function usePrepareVmSerializeBytes(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'serializeBytes'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'serializeBytes',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'serializeBytes'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"serializeBytes32"`.
 */
export function usePrepareVmSerializeBytes32(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'serializeBytes32'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'serializeBytes32',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'serializeBytes32'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"serializeInt"`.
 */
export function usePrepareVmSerializeInt(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'serializeInt'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'serializeInt',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'serializeInt'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"serializeString"`.
 */
export function usePrepareVmSerializeString(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'serializeString'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'serializeString',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'serializeString'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"serializeUint"`.
 */
export function usePrepareVmSerializeUint(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'serializeUint'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'serializeUint',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'serializeUint'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"setEnv"`.
 */
export function usePrepareVmSetEnv(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'setEnv'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'setEnv',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'setEnv'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"setNonce"`.
 */
export function usePrepareVmSetNonce(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'setNonce'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'setNonce',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'setNonce'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"setNonceUnsafe"`.
 */
export function usePrepareVmSetNonceUnsafe(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'setNonceUnsafe'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'setNonceUnsafe',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'setNonceUnsafe'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"skip"`.
 */
export function usePrepareVmSkip(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'skip'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'skip',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'skip'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"snapshot"`.
 */
export function usePrepareVmSnapshot(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'snapshot'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'snapshot',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'snapshot'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"startBroadcast"`.
 */
export function usePrepareVmStartBroadcast(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'startBroadcast'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'startBroadcast',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'startBroadcast'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"startPrank"`.
 */
export function usePrepareVmStartPrank(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'startPrank'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'startPrank',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'startPrank'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"stopBroadcast"`.
 */
export function usePrepareVmStopBroadcast(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'stopBroadcast'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'stopBroadcast',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'stopBroadcast'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"stopPrank"`.
 */
export function usePrepareVmStopPrank(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'stopPrank'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'stopPrank',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'stopPrank'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"store"`.
 */
export function usePrepareVmStore(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'store'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'store',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'store'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"transact"`.
 */
export function usePrepareVmTransact(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'transact'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'transact',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'transact'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"txGasPrice"`.
 */
export function usePrepareVmTxGasPrice(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'txGasPrice'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'txGasPrice',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'txGasPrice'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"warp"`.
 */
export function usePrepareVmWarp(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'warp'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'warp',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'warp'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"writeFile"`.
 */
export function usePrepareVmWriteFile(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'writeFile'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'writeFile',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'writeFile'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"writeFileBinary"`.
 */
export function usePrepareVmWriteFileBinary(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'writeFileBinary'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'writeFileBinary',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'writeFileBinary'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"writeJson"`.
 */
export function usePrepareVmWriteJson(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'writeJson'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'writeJson',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'writeJson'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmABI}__ and `functionName` set to `"writeLine"`.
 */
export function usePrepareVmWriteLine(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmABI, 'writeLine'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmABI,
    functionName: 'writeLine',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmABI, 'writeLine'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmSafeABI}__.
 */
export function useVmSafeRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof vmSafeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({ abi: vmSafeABI, ...config } as UseContractReadConfig<
    typeof vmSafeABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"addr"`.
 */
export function useVmSafeAddr<
  TFunctionName extends 'addr',
  TSelectData = ReadContractResult<typeof vmSafeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmSafeABI,
    functionName: 'addr',
    ...config,
  } as UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"assume"`.
 */
export function useVmSafeAssume<
  TFunctionName extends 'assume',
  TSelectData = ReadContractResult<typeof vmSafeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmSafeABI,
    functionName: 'assume',
    ...config,
  } as UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"deriveKey"`.
 */
export function useVmSafeDeriveKey<
  TFunctionName extends 'deriveKey',
  TSelectData = ReadContractResult<typeof vmSafeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmSafeABI,
    functionName: 'deriveKey',
    ...config,
  } as UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"envAddress"`.
 */
export function useVmSafeEnvAddress<
  TFunctionName extends 'envAddress',
  TSelectData = ReadContractResult<typeof vmSafeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmSafeABI,
    functionName: 'envAddress',
    ...config,
  } as UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"envBool"`.
 */
export function useVmSafeEnvBool<
  TFunctionName extends 'envBool',
  TSelectData = ReadContractResult<typeof vmSafeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmSafeABI,
    functionName: 'envBool',
    ...config,
  } as UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"envBytes"`.
 */
export function useVmSafeEnvBytes<
  TFunctionName extends 'envBytes',
  TSelectData = ReadContractResult<typeof vmSafeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmSafeABI,
    functionName: 'envBytes',
    ...config,
  } as UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"envBytes32"`.
 */
export function useVmSafeEnvBytes32<
  TFunctionName extends 'envBytes32',
  TSelectData = ReadContractResult<typeof vmSafeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmSafeABI,
    functionName: 'envBytes32',
    ...config,
  } as UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"envInt"`.
 */
export function useVmSafeEnvInt<
  TFunctionName extends 'envInt',
  TSelectData = ReadContractResult<typeof vmSafeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmSafeABI,
    functionName: 'envInt',
    ...config,
  } as UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"envString"`.
 */
export function useVmSafeEnvString<
  TFunctionName extends 'envString',
  TSelectData = ReadContractResult<typeof vmSafeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmSafeABI,
    functionName: 'envString',
    ...config,
  } as UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"envUint"`.
 */
export function useVmSafeEnvUint<
  TFunctionName extends 'envUint',
  TSelectData = ReadContractResult<typeof vmSafeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmSafeABI,
    functionName: 'envUint',
    ...config,
  } as UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"fsMetadata"`.
 */
export function useVmSafeFsMetadata<
  TFunctionName extends 'fsMetadata',
  TSelectData = ReadContractResult<typeof vmSafeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmSafeABI,
    functionName: 'fsMetadata',
    ...config,
  } as UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"getCode"`.
 */
export function useVmSafeGetCode<
  TFunctionName extends 'getCode',
  TSelectData = ReadContractResult<typeof vmSafeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmSafeABI,
    functionName: 'getCode',
    ...config,
  } as UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"getDeployedCode"`.
 */
export function useVmSafeGetDeployedCode<
  TFunctionName extends 'getDeployedCode',
  TSelectData = ReadContractResult<typeof vmSafeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmSafeABI,
    functionName: 'getDeployedCode',
    ...config,
  } as UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"getNonce"`.
 */
export function useVmSafeGetNonce<
  TFunctionName extends 'getNonce',
  TSelectData = ReadContractResult<typeof vmSafeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmSafeABI,
    functionName: 'getNonce',
    ...config,
  } as UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"load"`.
 */
export function useVmSafeLoad<
  TFunctionName extends 'load',
  TSelectData = ReadContractResult<typeof vmSafeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmSafeABI,
    functionName: 'load',
    ...config,
  } as UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"parseAddress"`.
 */
export function useVmSafeParseAddress<
  TFunctionName extends 'parseAddress',
  TSelectData = ReadContractResult<typeof vmSafeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmSafeABI,
    functionName: 'parseAddress',
    ...config,
  } as UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"parseBool"`.
 */
export function useVmSafeParseBool<
  TFunctionName extends 'parseBool',
  TSelectData = ReadContractResult<typeof vmSafeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmSafeABI,
    functionName: 'parseBool',
    ...config,
  } as UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"parseBytes"`.
 */
export function useVmSafeParseBytes<
  TFunctionName extends 'parseBytes',
  TSelectData = ReadContractResult<typeof vmSafeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmSafeABI,
    functionName: 'parseBytes',
    ...config,
  } as UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"parseBytes32"`.
 */
export function useVmSafeParseBytes32<
  TFunctionName extends 'parseBytes32',
  TSelectData = ReadContractResult<typeof vmSafeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmSafeABI,
    functionName: 'parseBytes32',
    ...config,
  } as UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"parseInt"`.
 */
export function useVmSafeParseInt<
  TFunctionName extends 'parseInt',
  TSelectData = ReadContractResult<typeof vmSafeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmSafeABI,
    functionName: 'parseInt',
    ...config,
  } as UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"parseJson"`.
 */
export function useVmSafeParseJson<
  TFunctionName extends 'parseJson',
  TSelectData = ReadContractResult<typeof vmSafeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmSafeABI,
    functionName: 'parseJson',
    ...config,
  } as UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"parseUint"`.
 */
export function useVmSafeParseUint<
  TFunctionName extends 'parseUint',
  TSelectData = ReadContractResult<typeof vmSafeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmSafeABI,
    functionName: 'parseUint',
    ...config,
  } as UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"projectRoot"`.
 */
export function useVmSafeProjectRoot<
  TFunctionName extends 'projectRoot',
  TSelectData = ReadContractResult<typeof vmSafeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmSafeABI,
    functionName: 'projectRoot',
    ...config,
  } as UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"readDir"`.
 */
export function useVmSafeReadDir<
  TFunctionName extends 'readDir',
  TSelectData = ReadContractResult<typeof vmSafeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmSafeABI,
    functionName: 'readDir',
    ...config,
  } as UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"readFile"`.
 */
export function useVmSafeReadFile<
  TFunctionName extends 'readFile',
  TSelectData = ReadContractResult<typeof vmSafeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmSafeABI,
    functionName: 'readFile',
    ...config,
  } as UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"readFileBinary"`.
 */
export function useVmSafeReadFileBinary<
  TFunctionName extends 'readFileBinary',
  TSelectData = ReadContractResult<typeof vmSafeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmSafeABI,
    functionName: 'readFileBinary',
    ...config,
  } as UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"readLine"`.
 */
export function useVmSafeReadLine<
  TFunctionName extends 'readLine',
  TSelectData = ReadContractResult<typeof vmSafeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmSafeABI,
    functionName: 'readLine',
    ...config,
  } as UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"readLink"`.
 */
export function useVmSafeReadLink<
  TFunctionName extends 'readLink',
  TSelectData = ReadContractResult<typeof vmSafeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmSafeABI,
    functionName: 'readLink',
    ...config,
  } as UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"rpcUrl"`.
 */
export function useVmSafeRpcUrl<
  TFunctionName extends 'rpcUrl',
  TSelectData = ReadContractResult<typeof vmSafeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmSafeABI,
    functionName: 'rpcUrl',
    ...config,
  } as UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"rpcUrlStructs"`.
 */
export function useVmSafeRpcUrlStructs<
  TFunctionName extends 'rpcUrlStructs',
  TSelectData = ReadContractResult<typeof vmSafeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmSafeABI,
    functionName: 'rpcUrlStructs',
    ...config,
  } as UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"rpcUrls"`.
 */
export function useVmSafeRpcUrls<
  TFunctionName extends 'rpcUrls',
  TSelectData = ReadContractResult<typeof vmSafeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmSafeABI,
    functionName: 'rpcUrls',
    ...config,
  } as UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"sign"`.
 */
export function useVmSafeSign<
  TFunctionName extends 'sign',
  TSelectData = ReadContractResult<typeof vmSafeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmSafeABI,
    functionName: 'sign',
    ...config,
  } as UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"toString"`.
 */
export function useVmSafeToString<
  TFunctionName extends 'toString',
  TSelectData = ReadContractResult<typeof vmSafeABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: vmSafeABI,
    functionName: 'toString',
    ...config,
  } as UseContractReadConfig<typeof vmSafeABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmSafeABI}__.
 */
export function useVmSafeWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof vmSafeABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof vmSafeABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof vmSafeABI, TFunctionName, TMode>({
    abi: vmSafeABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"accesses"`.
 */
export function useVmSafeAccesses<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmSafeABI,
          'accesses'
        >['request']['abi'],
        'accesses',
        TMode
      > & { functionName?: 'accesses' }
    : UseContractWriteConfig<typeof vmSafeABI, 'accesses', TMode> & {
        abi?: never
        functionName?: 'accesses'
      } = {} as any,
) {
  return useContractWrite<typeof vmSafeABI, 'accesses', TMode>({
    abi: vmSafeABI,
    functionName: 'accesses',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"breakpoint"`.
 */
export function useVmSafeBreakpoint<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmSafeABI,
          'breakpoint'
        >['request']['abi'],
        'breakpoint',
        TMode
      > & { functionName?: 'breakpoint' }
    : UseContractWriteConfig<typeof vmSafeABI, 'breakpoint', TMode> & {
        abi?: never
        functionName?: 'breakpoint'
      } = {} as any,
) {
  return useContractWrite<typeof vmSafeABI, 'breakpoint', TMode>({
    abi: vmSafeABI,
    functionName: 'breakpoint',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"broadcast"`.
 */
export function useVmSafeBroadcast<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmSafeABI,
          'broadcast'
        >['request']['abi'],
        'broadcast',
        TMode
      > & { functionName?: 'broadcast' }
    : UseContractWriteConfig<typeof vmSafeABI, 'broadcast', TMode> & {
        abi?: never
        functionName?: 'broadcast'
      } = {} as any,
) {
  return useContractWrite<typeof vmSafeABI, 'broadcast', TMode>({
    abi: vmSafeABI,
    functionName: 'broadcast',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"closeFile"`.
 */
export function useVmSafeCloseFile<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmSafeABI,
          'closeFile'
        >['request']['abi'],
        'closeFile',
        TMode
      > & { functionName?: 'closeFile' }
    : UseContractWriteConfig<typeof vmSafeABI, 'closeFile', TMode> & {
        abi?: never
        functionName?: 'closeFile'
      } = {} as any,
) {
  return useContractWrite<typeof vmSafeABI, 'closeFile', TMode>({
    abi: vmSafeABI,
    functionName: 'closeFile',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"createDir"`.
 */
export function useVmSafeCreateDir<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmSafeABI,
          'createDir'
        >['request']['abi'],
        'createDir',
        TMode
      > & { functionName?: 'createDir' }
    : UseContractWriteConfig<typeof vmSafeABI, 'createDir', TMode> & {
        abi?: never
        functionName?: 'createDir'
      } = {} as any,
) {
  return useContractWrite<typeof vmSafeABI, 'createDir', TMode>({
    abi: vmSafeABI,
    functionName: 'createDir',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"envOr"`.
 */
export function useVmSafeEnvOr<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof vmSafeABI, 'envOr'>['request']['abi'],
        'envOr',
        TMode
      > & { functionName?: 'envOr' }
    : UseContractWriteConfig<typeof vmSafeABI, 'envOr', TMode> & {
        abi?: never
        functionName?: 'envOr'
      } = {} as any,
) {
  return useContractWrite<typeof vmSafeABI, 'envOr', TMode>({
    abi: vmSafeABI,
    functionName: 'envOr',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"ffi"`.
 */
export function useVmSafeFfi<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof vmSafeABI, 'ffi'>['request']['abi'],
        'ffi',
        TMode
      > & { functionName?: 'ffi' }
    : UseContractWriteConfig<typeof vmSafeABI, 'ffi', TMode> & {
        abi?: never
        functionName?: 'ffi'
      } = {} as any,
) {
  return useContractWrite<typeof vmSafeABI, 'ffi', TMode>({
    abi: vmSafeABI,
    functionName: 'ffi',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"getLabel"`.
 */
export function useVmSafeGetLabel<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmSafeABI,
          'getLabel'
        >['request']['abi'],
        'getLabel',
        TMode
      > & { functionName?: 'getLabel' }
    : UseContractWriteConfig<typeof vmSafeABI, 'getLabel', TMode> & {
        abi?: never
        functionName?: 'getLabel'
      } = {} as any,
) {
  return useContractWrite<typeof vmSafeABI, 'getLabel', TMode>({
    abi: vmSafeABI,
    functionName: 'getLabel',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"getRecordedLogs"`.
 */
export function useVmSafeGetRecordedLogs<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmSafeABI,
          'getRecordedLogs'
        >['request']['abi'],
        'getRecordedLogs',
        TMode
      > & { functionName?: 'getRecordedLogs' }
    : UseContractWriteConfig<typeof vmSafeABI, 'getRecordedLogs', TMode> & {
        abi?: never
        functionName?: 'getRecordedLogs'
      } = {} as any,
) {
  return useContractWrite<typeof vmSafeABI, 'getRecordedLogs', TMode>({
    abi: vmSafeABI,
    functionName: 'getRecordedLogs',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"label"`.
 */
export function useVmSafeLabel<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof vmSafeABI, 'label'>['request']['abi'],
        'label',
        TMode
      > & { functionName?: 'label' }
    : UseContractWriteConfig<typeof vmSafeABI, 'label', TMode> & {
        abi?: never
        functionName?: 'label'
      } = {} as any,
) {
  return useContractWrite<typeof vmSafeABI, 'label', TMode>({
    abi: vmSafeABI,
    functionName: 'label',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"parseJsonAddress"`.
 */
export function useVmSafeParseJsonAddress<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmSafeABI,
          'parseJsonAddress'
        >['request']['abi'],
        'parseJsonAddress',
        TMode
      > & { functionName?: 'parseJsonAddress' }
    : UseContractWriteConfig<typeof vmSafeABI, 'parseJsonAddress', TMode> & {
        abi?: never
        functionName?: 'parseJsonAddress'
      } = {} as any,
) {
  return useContractWrite<typeof vmSafeABI, 'parseJsonAddress', TMode>({
    abi: vmSafeABI,
    functionName: 'parseJsonAddress',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"parseJsonAddressArray"`.
 */
export function useVmSafeParseJsonAddressArray<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmSafeABI,
          'parseJsonAddressArray'
        >['request']['abi'],
        'parseJsonAddressArray',
        TMode
      > & { functionName?: 'parseJsonAddressArray' }
    : UseContractWriteConfig<
        typeof vmSafeABI,
        'parseJsonAddressArray',
        TMode
      > & {
        abi?: never
        functionName?: 'parseJsonAddressArray'
      } = {} as any,
) {
  return useContractWrite<typeof vmSafeABI, 'parseJsonAddressArray', TMode>({
    abi: vmSafeABI,
    functionName: 'parseJsonAddressArray',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"parseJsonBool"`.
 */
export function useVmSafeParseJsonBool<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmSafeABI,
          'parseJsonBool'
        >['request']['abi'],
        'parseJsonBool',
        TMode
      > & { functionName?: 'parseJsonBool' }
    : UseContractWriteConfig<typeof vmSafeABI, 'parseJsonBool', TMode> & {
        abi?: never
        functionName?: 'parseJsonBool'
      } = {} as any,
) {
  return useContractWrite<typeof vmSafeABI, 'parseJsonBool', TMode>({
    abi: vmSafeABI,
    functionName: 'parseJsonBool',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"parseJsonBoolArray"`.
 */
export function useVmSafeParseJsonBoolArray<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmSafeABI,
          'parseJsonBoolArray'
        >['request']['abi'],
        'parseJsonBoolArray',
        TMode
      > & { functionName?: 'parseJsonBoolArray' }
    : UseContractWriteConfig<typeof vmSafeABI, 'parseJsonBoolArray', TMode> & {
        abi?: never
        functionName?: 'parseJsonBoolArray'
      } = {} as any,
) {
  return useContractWrite<typeof vmSafeABI, 'parseJsonBoolArray', TMode>({
    abi: vmSafeABI,
    functionName: 'parseJsonBoolArray',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"parseJsonBytes"`.
 */
export function useVmSafeParseJsonBytes<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmSafeABI,
          'parseJsonBytes'
        >['request']['abi'],
        'parseJsonBytes',
        TMode
      > & { functionName?: 'parseJsonBytes' }
    : UseContractWriteConfig<typeof vmSafeABI, 'parseJsonBytes', TMode> & {
        abi?: never
        functionName?: 'parseJsonBytes'
      } = {} as any,
) {
  return useContractWrite<typeof vmSafeABI, 'parseJsonBytes', TMode>({
    abi: vmSafeABI,
    functionName: 'parseJsonBytes',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"parseJsonBytes32"`.
 */
export function useVmSafeParseJsonBytes32<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmSafeABI,
          'parseJsonBytes32'
        >['request']['abi'],
        'parseJsonBytes32',
        TMode
      > & { functionName?: 'parseJsonBytes32' }
    : UseContractWriteConfig<typeof vmSafeABI, 'parseJsonBytes32', TMode> & {
        abi?: never
        functionName?: 'parseJsonBytes32'
      } = {} as any,
) {
  return useContractWrite<typeof vmSafeABI, 'parseJsonBytes32', TMode>({
    abi: vmSafeABI,
    functionName: 'parseJsonBytes32',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"parseJsonBytes32Array"`.
 */
export function useVmSafeParseJsonBytes32Array<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmSafeABI,
          'parseJsonBytes32Array'
        >['request']['abi'],
        'parseJsonBytes32Array',
        TMode
      > & { functionName?: 'parseJsonBytes32Array' }
    : UseContractWriteConfig<
        typeof vmSafeABI,
        'parseJsonBytes32Array',
        TMode
      > & {
        abi?: never
        functionName?: 'parseJsonBytes32Array'
      } = {} as any,
) {
  return useContractWrite<typeof vmSafeABI, 'parseJsonBytes32Array', TMode>({
    abi: vmSafeABI,
    functionName: 'parseJsonBytes32Array',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"parseJsonBytesArray"`.
 */
export function useVmSafeParseJsonBytesArray<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmSafeABI,
          'parseJsonBytesArray'
        >['request']['abi'],
        'parseJsonBytesArray',
        TMode
      > & { functionName?: 'parseJsonBytesArray' }
    : UseContractWriteConfig<typeof vmSafeABI, 'parseJsonBytesArray', TMode> & {
        abi?: never
        functionName?: 'parseJsonBytesArray'
      } = {} as any,
) {
  return useContractWrite<typeof vmSafeABI, 'parseJsonBytesArray', TMode>({
    abi: vmSafeABI,
    functionName: 'parseJsonBytesArray',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"parseJsonInt"`.
 */
export function useVmSafeParseJsonInt<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmSafeABI,
          'parseJsonInt'
        >['request']['abi'],
        'parseJsonInt',
        TMode
      > & { functionName?: 'parseJsonInt' }
    : UseContractWriteConfig<typeof vmSafeABI, 'parseJsonInt', TMode> & {
        abi?: never
        functionName?: 'parseJsonInt'
      } = {} as any,
) {
  return useContractWrite<typeof vmSafeABI, 'parseJsonInt', TMode>({
    abi: vmSafeABI,
    functionName: 'parseJsonInt',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"parseJsonIntArray"`.
 */
export function useVmSafeParseJsonIntArray<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmSafeABI,
          'parseJsonIntArray'
        >['request']['abi'],
        'parseJsonIntArray',
        TMode
      > & { functionName?: 'parseJsonIntArray' }
    : UseContractWriteConfig<typeof vmSafeABI, 'parseJsonIntArray', TMode> & {
        abi?: never
        functionName?: 'parseJsonIntArray'
      } = {} as any,
) {
  return useContractWrite<typeof vmSafeABI, 'parseJsonIntArray', TMode>({
    abi: vmSafeABI,
    functionName: 'parseJsonIntArray',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"parseJsonString"`.
 */
export function useVmSafeParseJsonString<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmSafeABI,
          'parseJsonString'
        >['request']['abi'],
        'parseJsonString',
        TMode
      > & { functionName?: 'parseJsonString' }
    : UseContractWriteConfig<typeof vmSafeABI, 'parseJsonString', TMode> & {
        abi?: never
        functionName?: 'parseJsonString'
      } = {} as any,
) {
  return useContractWrite<typeof vmSafeABI, 'parseJsonString', TMode>({
    abi: vmSafeABI,
    functionName: 'parseJsonString',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"parseJsonStringArray"`.
 */
export function useVmSafeParseJsonStringArray<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmSafeABI,
          'parseJsonStringArray'
        >['request']['abi'],
        'parseJsonStringArray',
        TMode
      > & { functionName?: 'parseJsonStringArray' }
    : UseContractWriteConfig<
        typeof vmSafeABI,
        'parseJsonStringArray',
        TMode
      > & {
        abi?: never
        functionName?: 'parseJsonStringArray'
      } = {} as any,
) {
  return useContractWrite<typeof vmSafeABI, 'parseJsonStringArray', TMode>({
    abi: vmSafeABI,
    functionName: 'parseJsonStringArray',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"parseJsonUint"`.
 */
export function useVmSafeParseJsonUint<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmSafeABI,
          'parseJsonUint'
        >['request']['abi'],
        'parseJsonUint',
        TMode
      > & { functionName?: 'parseJsonUint' }
    : UseContractWriteConfig<typeof vmSafeABI, 'parseJsonUint', TMode> & {
        abi?: never
        functionName?: 'parseJsonUint'
      } = {} as any,
) {
  return useContractWrite<typeof vmSafeABI, 'parseJsonUint', TMode>({
    abi: vmSafeABI,
    functionName: 'parseJsonUint',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"parseJsonUintArray"`.
 */
export function useVmSafeParseJsonUintArray<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmSafeABI,
          'parseJsonUintArray'
        >['request']['abi'],
        'parseJsonUintArray',
        TMode
      > & { functionName?: 'parseJsonUintArray' }
    : UseContractWriteConfig<typeof vmSafeABI, 'parseJsonUintArray', TMode> & {
        abi?: never
        functionName?: 'parseJsonUintArray'
      } = {} as any,
) {
  return useContractWrite<typeof vmSafeABI, 'parseJsonUintArray', TMode>({
    abi: vmSafeABI,
    functionName: 'parseJsonUintArray',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"pauseGasMetering"`.
 */
export function useVmSafePauseGasMetering<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmSafeABI,
          'pauseGasMetering'
        >['request']['abi'],
        'pauseGasMetering',
        TMode
      > & { functionName?: 'pauseGasMetering' }
    : UseContractWriteConfig<typeof vmSafeABI, 'pauseGasMetering', TMode> & {
        abi?: never
        functionName?: 'pauseGasMetering'
      } = {} as any,
) {
  return useContractWrite<typeof vmSafeABI, 'pauseGasMetering', TMode>({
    abi: vmSafeABI,
    functionName: 'pauseGasMetering',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"record"`.
 */
export function useVmSafeRecord<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmSafeABI,
          'record'
        >['request']['abi'],
        'record',
        TMode
      > & { functionName?: 'record' }
    : UseContractWriteConfig<typeof vmSafeABI, 'record', TMode> & {
        abi?: never
        functionName?: 'record'
      } = {} as any,
) {
  return useContractWrite<typeof vmSafeABI, 'record', TMode>({
    abi: vmSafeABI,
    functionName: 'record',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"recordLogs"`.
 */
export function useVmSafeRecordLogs<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmSafeABI,
          'recordLogs'
        >['request']['abi'],
        'recordLogs',
        TMode
      > & { functionName?: 'recordLogs' }
    : UseContractWriteConfig<typeof vmSafeABI, 'recordLogs', TMode> & {
        abi?: never
        functionName?: 'recordLogs'
      } = {} as any,
) {
  return useContractWrite<typeof vmSafeABI, 'recordLogs', TMode>({
    abi: vmSafeABI,
    functionName: 'recordLogs',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"rememberKey"`.
 */
export function useVmSafeRememberKey<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmSafeABI,
          'rememberKey'
        >['request']['abi'],
        'rememberKey',
        TMode
      > & { functionName?: 'rememberKey' }
    : UseContractWriteConfig<typeof vmSafeABI, 'rememberKey', TMode> & {
        abi?: never
        functionName?: 'rememberKey'
      } = {} as any,
) {
  return useContractWrite<typeof vmSafeABI, 'rememberKey', TMode>({
    abi: vmSafeABI,
    functionName: 'rememberKey',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"removeDir"`.
 */
export function useVmSafeRemoveDir<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmSafeABI,
          'removeDir'
        >['request']['abi'],
        'removeDir',
        TMode
      > & { functionName?: 'removeDir' }
    : UseContractWriteConfig<typeof vmSafeABI, 'removeDir', TMode> & {
        abi?: never
        functionName?: 'removeDir'
      } = {} as any,
) {
  return useContractWrite<typeof vmSafeABI, 'removeDir', TMode>({
    abi: vmSafeABI,
    functionName: 'removeDir',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"removeFile"`.
 */
export function useVmSafeRemoveFile<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmSafeABI,
          'removeFile'
        >['request']['abi'],
        'removeFile',
        TMode
      > & { functionName?: 'removeFile' }
    : UseContractWriteConfig<typeof vmSafeABI, 'removeFile', TMode> & {
        abi?: never
        functionName?: 'removeFile'
      } = {} as any,
) {
  return useContractWrite<typeof vmSafeABI, 'removeFile', TMode>({
    abi: vmSafeABI,
    functionName: 'removeFile',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"resumeGasMetering"`.
 */
export function useVmSafeResumeGasMetering<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmSafeABI,
          'resumeGasMetering'
        >['request']['abi'],
        'resumeGasMetering',
        TMode
      > & { functionName?: 'resumeGasMetering' }
    : UseContractWriteConfig<typeof vmSafeABI, 'resumeGasMetering', TMode> & {
        abi?: never
        functionName?: 'resumeGasMetering'
      } = {} as any,
) {
  return useContractWrite<typeof vmSafeABI, 'resumeGasMetering', TMode>({
    abi: vmSafeABI,
    functionName: 'resumeGasMetering',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"serializeAddress"`.
 */
export function useVmSafeSerializeAddress<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmSafeABI,
          'serializeAddress'
        >['request']['abi'],
        'serializeAddress',
        TMode
      > & { functionName?: 'serializeAddress' }
    : UseContractWriteConfig<typeof vmSafeABI, 'serializeAddress', TMode> & {
        abi?: never
        functionName?: 'serializeAddress'
      } = {} as any,
) {
  return useContractWrite<typeof vmSafeABI, 'serializeAddress', TMode>({
    abi: vmSafeABI,
    functionName: 'serializeAddress',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"serializeBool"`.
 */
export function useVmSafeSerializeBool<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmSafeABI,
          'serializeBool'
        >['request']['abi'],
        'serializeBool',
        TMode
      > & { functionName?: 'serializeBool' }
    : UseContractWriteConfig<typeof vmSafeABI, 'serializeBool', TMode> & {
        abi?: never
        functionName?: 'serializeBool'
      } = {} as any,
) {
  return useContractWrite<typeof vmSafeABI, 'serializeBool', TMode>({
    abi: vmSafeABI,
    functionName: 'serializeBool',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"serializeBytes"`.
 */
export function useVmSafeSerializeBytes<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmSafeABI,
          'serializeBytes'
        >['request']['abi'],
        'serializeBytes',
        TMode
      > & { functionName?: 'serializeBytes' }
    : UseContractWriteConfig<typeof vmSafeABI, 'serializeBytes', TMode> & {
        abi?: never
        functionName?: 'serializeBytes'
      } = {} as any,
) {
  return useContractWrite<typeof vmSafeABI, 'serializeBytes', TMode>({
    abi: vmSafeABI,
    functionName: 'serializeBytes',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"serializeBytes32"`.
 */
export function useVmSafeSerializeBytes32<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmSafeABI,
          'serializeBytes32'
        >['request']['abi'],
        'serializeBytes32',
        TMode
      > & { functionName?: 'serializeBytes32' }
    : UseContractWriteConfig<typeof vmSafeABI, 'serializeBytes32', TMode> & {
        abi?: never
        functionName?: 'serializeBytes32'
      } = {} as any,
) {
  return useContractWrite<typeof vmSafeABI, 'serializeBytes32', TMode>({
    abi: vmSafeABI,
    functionName: 'serializeBytes32',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"serializeInt"`.
 */
export function useVmSafeSerializeInt<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmSafeABI,
          'serializeInt'
        >['request']['abi'],
        'serializeInt',
        TMode
      > & { functionName?: 'serializeInt' }
    : UseContractWriteConfig<typeof vmSafeABI, 'serializeInt', TMode> & {
        abi?: never
        functionName?: 'serializeInt'
      } = {} as any,
) {
  return useContractWrite<typeof vmSafeABI, 'serializeInt', TMode>({
    abi: vmSafeABI,
    functionName: 'serializeInt',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"serializeString"`.
 */
export function useVmSafeSerializeString<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmSafeABI,
          'serializeString'
        >['request']['abi'],
        'serializeString',
        TMode
      > & { functionName?: 'serializeString' }
    : UseContractWriteConfig<typeof vmSafeABI, 'serializeString', TMode> & {
        abi?: never
        functionName?: 'serializeString'
      } = {} as any,
) {
  return useContractWrite<typeof vmSafeABI, 'serializeString', TMode>({
    abi: vmSafeABI,
    functionName: 'serializeString',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"serializeUint"`.
 */
export function useVmSafeSerializeUint<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmSafeABI,
          'serializeUint'
        >['request']['abi'],
        'serializeUint',
        TMode
      > & { functionName?: 'serializeUint' }
    : UseContractWriteConfig<typeof vmSafeABI, 'serializeUint', TMode> & {
        abi?: never
        functionName?: 'serializeUint'
      } = {} as any,
) {
  return useContractWrite<typeof vmSafeABI, 'serializeUint', TMode>({
    abi: vmSafeABI,
    functionName: 'serializeUint',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"setEnv"`.
 */
export function useVmSafeSetEnv<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmSafeABI,
          'setEnv'
        >['request']['abi'],
        'setEnv',
        TMode
      > & { functionName?: 'setEnv' }
    : UseContractWriteConfig<typeof vmSafeABI, 'setEnv', TMode> & {
        abi?: never
        functionName?: 'setEnv'
      } = {} as any,
) {
  return useContractWrite<typeof vmSafeABI, 'setEnv', TMode>({
    abi: vmSafeABI,
    functionName: 'setEnv',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"startBroadcast"`.
 */
export function useVmSafeStartBroadcast<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmSafeABI,
          'startBroadcast'
        >['request']['abi'],
        'startBroadcast',
        TMode
      > & { functionName?: 'startBroadcast' }
    : UseContractWriteConfig<typeof vmSafeABI, 'startBroadcast', TMode> & {
        abi?: never
        functionName?: 'startBroadcast'
      } = {} as any,
) {
  return useContractWrite<typeof vmSafeABI, 'startBroadcast', TMode>({
    abi: vmSafeABI,
    functionName: 'startBroadcast',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"stopBroadcast"`.
 */
export function useVmSafeStopBroadcast<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmSafeABI,
          'stopBroadcast'
        >['request']['abi'],
        'stopBroadcast',
        TMode
      > & { functionName?: 'stopBroadcast' }
    : UseContractWriteConfig<typeof vmSafeABI, 'stopBroadcast', TMode> & {
        abi?: never
        functionName?: 'stopBroadcast'
      } = {} as any,
) {
  return useContractWrite<typeof vmSafeABI, 'stopBroadcast', TMode>({
    abi: vmSafeABI,
    functionName: 'stopBroadcast',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"writeFile"`.
 */
export function useVmSafeWriteFile<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmSafeABI,
          'writeFile'
        >['request']['abi'],
        'writeFile',
        TMode
      > & { functionName?: 'writeFile' }
    : UseContractWriteConfig<typeof vmSafeABI, 'writeFile', TMode> & {
        abi?: never
        functionName?: 'writeFile'
      } = {} as any,
) {
  return useContractWrite<typeof vmSafeABI, 'writeFile', TMode>({
    abi: vmSafeABI,
    functionName: 'writeFile',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"writeFileBinary"`.
 */
export function useVmSafeWriteFileBinary<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmSafeABI,
          'writeFileBinary'
        >['request']['abi'],
        'writeFileBinary',
        TMode
      > & { functionName?: 'writeFileBinary' }
    : UseContractWriteConfig<typeof vmSafeABI, 'writeFileBinary', TMode> & {
        abi?: never
        functionName?: 'writeFileBinary'
      } = {} as any,
) {
  return useContractWrite<typeof vmSafeABI, 'writeFileBinary', TMode>({
    abi: vmSafeABI,
    functionName: 'writeFileBinary',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"writeJson"`.
 */
export function useVmSafeWriteJson<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmSafeABI,
          'writeJson'
        >['request']['abi'],
        'writeJson',
        TMode
      > & { functionName?: 'writeJson' }
    : UseContractWriteConfig<typeof vmSafeABI, 'writeJson', TMode> & {
        abi?: never
        functionName?: 'writeJson'
      } = {} as any,
) {
  return useContractWrite<typeof vmSafeABI, 'writeJson', TMode>({
    abi: vmSafeABI,
    functionName: 'writeJson',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"writeLine"`.
 */
export function useVmSafeWriteLine<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof vmSafeABI,
          'writeLine'
        >['request']['abi'],
        'writeLine',
        TMode
      > & { functionName?: 'writeLine' }
    : UseContractWriteConfig<typeof vmSafeABI, 'writeLine', TMode> & {
        abi?: never
        functionName?: 'writeLine'
      } = {} as any,
) {
  return useContractWrite<typeof vmSafeABI, 'writeLine', TMode>({
    abi: vmSafeABI,
    functionName: 'writeLine',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmSafeABI}__.
 */
export function usePrepareVmSafeWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmSafeABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmSafeABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmSafeABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"accesses"`.
 */
export function usePrepareVmSafeAccesses(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmSafeABI, 'accesses'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmSafeABI,
    functionName: 'accesses',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmSafeABI, 'accesses'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"breakpoint"`.
 */
export function usePrepareVmSafeBreakpoint(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmSafeABI, 'breakpoint'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmSafeABI,
    functionName: 'breakpoint',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmSafeABI, 'breakpoint'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"broadcast"`.
 */
export function usePrepareVmSafeBroadcast(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmSafeABI, 'broadcast'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmSafeABI,
    functionName: 'broadcast',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmSafeABI, 'broadcast'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"closeFile"`.
 */
export function usePrepareVmSafeCloseFile(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmSafeABI, 'closeFile'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmSafeABI,
    functionName: 'closeFile',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmSafeABI, 'closeFile'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"createDir"`.
 */
export function usePrepareVmSafeCreateDir(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmSafeABI, 'createDir'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmSafeABI,
    functionName: 'createDir',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmSafeABI, 'createDir'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"envOr"`.
 */
export function usePrepareVmSafeEnvOr(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmSafeABI, 'envOr'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmSafeABI,
    functionName: 'envOr',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmSafeABI, 'envOr'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"ffi"`.
 */
export function usePrepareVmSafeFfi(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmSafeABI, 'ffi'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmSafeABI,
    functionName: 'ffi',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmSafeABI, 'ffi'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"getLabel"`.
 */
export function usePrepareVmSafeGetLabel(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmSafeABI, 'getLabel'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmSafeABI,
    functionName: 'getLabel',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmSafeABI, 'getLabel'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"getRecordedLogs"`.
 */
export function usePrepareVmSafeGetRecordedLogs(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmSafeABI, 'getRecordedLogs'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmSafeABI,
    functionName: 'getRecordedLogs',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmSafeABI, 'getRecordedLogs'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"label"`.
 */
export function usePrepareVmSafeLabel(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmSafeABI, 'label'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmSafeABI,
    functionName: 'label',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmSafeABI, 'label'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"parseJsonAddress"`.
 */
export function usePrepareVmSafeParseJsonAddress(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmSafeABI, 'parseJsonAddress'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmSafeABI,
    functionName: 'parseJsonAddress',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmSafeABI, 'parseJsonAddress'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"parseJsonAddressArray"`.
 */
export function usePrepareVmSafeParseJsonAddressArray(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmSafeABI, 'parseJsonAddressArray'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmSafeABI,
    functionName: 'parseJsonAddressArray',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmSafeABI, 'parseJsonAddressArray'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"parseJsonBool"`.
 */
export function usePrepareVmSafeParseJsonBool(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmSafeABI, 'parseJsonBool'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmSafeABI,
    functionName: 'parseJsonBool',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmSafeABI, 'parseJsonBool'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"parseJsonBoolArray"`.
 */
export function usePrepareVmSafeParseJsonBoolArray(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmSafeABI, 'parseJsonBoolArray'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmSafeABI,
    functionName: 'parseJsonBoolArray',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmSafeABI, 'parseJsonBoolArray'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"parseJsonBytes"`.
 */
export function usePrepareVmSafeParseJsonBytes(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmSafeABI, 'parseJsonBytes'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmSafeABI,
    functionName: 'parseJsonBytes',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmSafeABI, 'parseJsonBytes'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"parseJsonBytes32"`.
 */
export function usePrepareVmSafeParseJsonBytes32(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmSafeABI, 'parseJsonBytes32'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmSafeABI,
    functionName: 'parseJsonBytes32',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmSafeABI, 'parseJsonBytes32'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"parseJsonBytes32Array"`.
 */
export function usePrepareVmSafeParseJsonBytes32Array(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmSafeABI, 'parseJsonBytes32Array'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmSafeABI,
    functionName: 'parseJsonBytes32Array',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmSafeABI, 'parseJsonBytes32Array'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"parseJsonBytesArray"`.
 */
export function usePrepareVmSafeParseJsonBytesArray(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmSafeABI, 'parseJsonBytesArray'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmSafeABI,
    functionName: 'parseJsonBytesArray',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmSafeABI, 'parseJsonBytesArray'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"parseJsonInt"`.
 */
export function usePrepareVmSafeParseJsonInt(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmSafeABI, 'parseJsonInt'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmSafeABI,
    functionName: 'parseJsonInt',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmSafeABI, 'parseJsonInt'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"parseJsonIntArray"`.
 */
export function usePrepareVmSafeParseJsonIntArray(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmSafeABI, 'parseJsonIntArray'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmSafeABI,
    functionName: 'parseJsonIntArray',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmSafeABI, 'parseJsonIntArray'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"parseJsonString"`.
 */
export function usePrepareVmSafeParseJsonString(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmSafeABI, 'parseJsonString'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmSafeABI,
    functionName: 'parseJsonString',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmSafeABI, 'parseJsonString'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"parseJsonStringArray"`.
 */
export function usePrepareVmSafeParseJsonStringArray(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmSafeABI, 'parseJsonStringArray'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmSafeABI,
    functionName: 'parseJsonStringArray',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmSafeABI, 'parseJsonStringArray'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"parseJsonUint"`.
 */
export function usePrepareVmSafeParseJsonUint(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmSafeABI, 'parseJsonUint'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmSafeABI,
    functionName: 'parseJsonUint',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmSafeABI, 'parseJsonUint'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"parseJsonUintArray"`.
 */
export function usePrepareVmSafeParseJsonUintArray(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmSafeABI, 'parseJsonUintArray'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmSafeABI,
    functionName: 'parseJsonUintArray',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmSafeABI, 'parseJsonUintArray'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"pauseGasMetering"`.
 */
export function usePrepareVmSafePauseGasMetering(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmSafeABI, 'pauseGasMetering'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmSafeABI,
    functionName: 'pauseGasMetering',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmSafeABI, 'pauseGasMetering'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"record"`.
 */
export function usePrepareVmSafeRecord(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmSafeABI, 'record'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmSafeABI,
    functionName: 'record',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmSafeABI, 'record'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"recordLogs"`.
 */
export function usePrepareVmSafeRecordLogs(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmSafeABI, 'recordLogs'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmSafeABI,
    functionName: 'recordLogs',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmSafeABI, 'recordLogs'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"rememberKey"`.
 */
export function usePrepareVmSafeRememberKey(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmSafeABI, 'rememberKey'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmSafeABI,
    functionName: 'rememberKey',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmSafeABI, 'rememberKey'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"removeDir"`.
 */
export function usePrepareVmSafeRemoveDir(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmSafeABI, 'removeDir'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmSafeABI,
    functionName: 'removeDir',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmSafeABI, 'removeDir'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"removeFile"`.
 */
export function usePrepareVmSafeRemoveFile(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmSafeABI, 'removeFile'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmSafeABI,
    functionName: 'removeFile',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmSafeABI, 'removeFile'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"resumeGasMetering"`.
 */
export function usePrepareVmSafeResumeGasMetering(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmSafeABI, 'resumeGasMetering'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmSafeABI,
    functionName: 'resumeGasMetering',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmSafeABI, 'resumeGasMetering'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"serializeAddress"`.
 */
export function usePrepareVmSafeSerializeAddress(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmSafeABI, 'serializeAddress'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmSafeABI,
    functionName: 'serializeAddress',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmSafeABI, 'serializeAddress'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"serializeBool"`.
 */
export function usePrepareVmSafeSerializeBool(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmSafeABI, 'serializeBool'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmSafeABI,
    functionName: 'serializeBool',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmSafeABI, 'serializeBool'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"serializeBytes"`.
 */
export function usePrepareVmSafeSerializeBytes(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmSafeABI, 'serializeBytes'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmSafeABI,
    functionName: 'serializeBytes',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmSafeABI, 'serializeBytes'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"serializeBytes32"`.
 */
export function usePrepareVmSafeSerializeBytes32(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmSafeABI, 'serializeBytes32'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmSafeABI,
    functionName: 'serializeBytes32',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmSafeABI, 'serializeBytes32'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"serializeInt"`.
 */
export function usePrepareVmSafeSerializeInt(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmSafeABI, 'serializeInt'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmSafeABI,
    functionName: 'serializeInt',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmSafeABI, 'serializeInt'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"serializeString"`.
 */
export function usePrepareVmSafeSerializeString(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmSafeABI, 'serializeString'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmSafeABI,
    functionName: 'serializeString',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmSafeABI, 'serializeString'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"serializeUint"`.
 */
export function usePrepareVmSafeSerializeUint(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmSafeABI, 'serializeUint'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmSafeABI,
    functionName: 'serializeUint',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmSafeABI, 'serializeUint'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"setEnv"`.
 */
export function usePrepareVmSafeSetEnv(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmSafeABI, 'setEnv'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmSafeABI,
    functionName: 'setEnv',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmSafeABI, 'setEnv'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"startBroadcast"`.
 */
export function usePrepareVmSafeStartBroadcast(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmSafeABI, 'startBroadcast'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmSafeABI,
    functionName: 'startBroadcast',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmSafeABI, 'startBroadcast'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"stopBroadcast"`.
 */
export function usePrepareVmSafeStopBroadcast(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmSafeABI, 'stopBroadcast'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmSafeABI,
    functionName: 'stopBroadcast',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmSafeABI, 'stopBroadcast'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"writeFile"`.
 */
export function usePrepareVmSafeWriteFile(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmSafeABI, 'writeFile'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmSafeABI,
    functionName: 'writeFile',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmSafeABI, 'writeFile'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"writeFileBinary"`.
 */
export function usePrepareVmSafeWriteFileBinary(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmSafeABI, 'writeFileBinary'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmSafeABI,
    functionName: 'writeFileBinary',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmSafeABI, 'writeFileBinary'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"writeJson"`.
 */
export function usePrepareVmSafeWriteJson(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmSafeABI, 'writeJson'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmSafeABI,
    functionName: 'writeJson',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmSafeABI, 'writeJson'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link vmSafeABI}__ and `functionName` set to `"writeLine"`.
 */
export function usePrepareVmSafeWriteLine(
  config: Omit<
    UsePrepareContractWriteConfig<typeof vmSafeABI, 'writeLine'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: vmSafeABI,
    functionName: 'writeLine',
    ...config,
  } as UsePrepareContractWriteConfig<typeof vmSafeABI, 'writeLine'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link stdErrorABI}__.
 */
export function useStdErrorRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof stdErrorABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof stdErrorABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: stdErrorABI,
    ...config,
  } as UseContractReadConfig<typeof stdErrorABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link stdErrorABI}__ and `functionName` set to `"arithmeticError"`.
 */
export function useStdErrorArithmeticError<
  TFunctionName extends 'arithmeticError',
  TSelectData = ReadContractResult<typeof stdErrorABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof stdErrorABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: stdErrorABI,
    functionName: 'arithmeticError',
    ...config,
  } as UseContractReadConfig<typeof stdErrorABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link stdErrorABI}__ and `functionName` set to `"assertionError"`.
 */
export function useStdErrorAssertionError<
  TFunctionName extends 'assertionError',
  TSelectData = ReadContractResult<typeof stdErrorABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof stdErrorABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: stdErrorABI,
    functionName: 'assertionError',
    ...config,
  } as UseContractReadConfig<typeof stdErrorABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link stdErrorABI}__ and `functionName` set to `"divisionError"`.
 */
export function useStdErrorDivisionError<
  TFunctionName extends 'divisionError',
  TSelectData = ReadContractResult<typeof stdErrorABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof stdErrorABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: stdErrorABI,
    functionName: 'divisionError',
    ...config,
  } as UseContractReadConfig<typeof stdErrorABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link stdErrorABI}__ and `functionName` set to `"encodeStorageError"`.
 */
export function useStdErrorEncodeStorageError<
  TFunctionName extends 'encodeStorageError',
  TSelectData = ReadContractResult<typeof stdErrorABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof stdErrorABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: stdErrorABI,
    functionName: 'encodeStorageError',
    ...config,
  } as UseContractReadConfig<typeof stdErrorABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link stdErrorABI}__ and `functionName` set to `"enumConversionError"`.
 */
export function useStdErrorEnumConversionError<
  TFunctionName extends 'enumConversionError',
  TSelectData = ReadContractResult<typeof stdErrorABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof stdErrorABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: stdErrorABI,
    functionName: 'enumConversionError',
    ...config,
  } as UseContractReadConfig<typeof stdErrorABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link stdErrorABI}__ and `functionName` set to `"indexOOBError"`.
 */
export function useStdErrorIndexOobError<
  TFunctionName extends 'indexOOBError',
  TSelectData = ReadContractResult<typeof stdErrorABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof stdErrorABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: stdErrorABI,
    functionName: 'indexOOBError',
    ...config,
  } as UseContractReadConfig<typeof stdErrorABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link stdErrorABI}__ and `functionName` set to `"memOverflowError"`.
 */
export function useStdErrorMemOverflowError<
  TFunctionName extends 'memOverflowError',
  TSelectData = ReadContractResult<typeof stdErrorABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof stdErrorABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: stdErrorABI,
    functionName: 'memOverflowError',
    ...config,
  } as UseContractReadConfig<typeof stdErrorABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link stdErrorABI}__ and `functionName` set to `"popError"`.
 */
export function useStdErrorPopError<
  TFunctionName extends 'popError',
  TSelectData = ReadContractResult<typeof stdErrorABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof stdErrorABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: stdErrorABI,
    functionName: 'popError',
    ...config,
  } as UseContractReadConfig<typeof stdErrorABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link stdErrorABI}__ and `functionName` set to `"zeroVarError"`.
 */
export function useStdErrorZeroVarError<
  TFunctionName extends 'zeroVarError',
  TSelectData = ReadContractResult<typeof stdErrorABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof stdErrorABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: stdErrorABI,
    functionName: 'zeroVarError',
    ...config,
  } as UseContractReadConfig<typeof stdErrorABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link stdStorageSafeABI}__.
 */
export function useStdStorageSafeEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof stdStorageSafeABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: stdStorageSafeABI,
    ...config,
  } as UseContractEventConfig<typeof stdStorageSafeABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link stdStorageSafeABI}__ and `eventName` set to `"SlotFound"`.
 */
export function useStdStorageSafeSlotFoundEvent(
  config: Omit<
    UseContractEventConfig<typeof stdStorageSafeABI, 'SlotFound'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: stdStorageSafeABI,
    eventName: 'SlotFound',
    ...config,
  } as UseContractEventConfig<typeof stdStorageSafeABI, 'SlotFound'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link stdStorageSafeABI}__ and `eventName` set to `"WARNING_UninitedSlot"`.
 */
export function useStdStorageSafeWarningUninitedSlotEvent(
  config: Omit<
    UseContractEventConfig<typeof stdStorageSafeABI, 'WARNING_UninitedSlot'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: stdStorageSafeABI,
    eventName: 'WARNING_UninitedSlot',
    ...config,
  } as UseContractEventConfig<typeof stdStorageSafeABI, 'WARNING_UninitedSlot'>)
}
