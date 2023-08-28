import { BigInt, ethereum, log } from "@graphprotocol/graph-ts";
import { Transfer } from "../generated/KeeperRegistry1_3/ERC20";
import {
  // ConfigSet as ConfigSetEvent,
  // FundsAdded as FundsAddedEvent,
  // FundsWithdrawn as FundsWithdrawnEvent,
  // KeepersUpdated as KeepersUpdatedEvent,
  // OwnerFundsWithdrawn as OwnerFundsWithdrawnEvent,
  // OwnershipTransferRequested as OwnershipTransferRequestedEvent,
  // OwnershipTransferred as OwnershipTransferredEvent,
  // Paused as PausedEvent,
  // PayeeshipTransferRequested as PayeeshipTransferRequestedEvent,
  // PayeeshipTransferred as PayeeshipTransferredEvent,
  // PaymentWithdrawn as PaymentWithdrawnEvent,
  // Unpaused as UnpausedEvent,
  // UpkeepAdminTransferRequested as UpkeepAdminTransferRequestedEvent,
  // UpkeepAdminTransferred as UpkeepAdminTransferredEvent,
  // UpkeepCanceled as UpkeepCanceledEvent,
  // UpkeepCheckDataUpdated as UpkeepCheckDataUpdatedEvent,
  // UpkeepGasLimitSet as UpkeepGasLimitSetEvent,
  // UpkeepMigrated as UpkeepMigratedEvent,
  // UpkeepPaused as UpkeepPausedEvent,
  UpkeepPerformed as UpkeepPerformedEvent,
  // UpkeepReceived as UpkeepReceivedEvent,
  // UpkeepRegistered as UpkeepRegisteredEvent,
  // UpkeepUnpaused as UpkeepUnpausedEvent,
} from "../generated/KeeperRegistry1_3/KeeperRegistry1_3";
import {
  // ConfigSet,
  // FundsAdded,
  // FundsWithdrawn,
  // KeepersUpdated,
  // OwnerFundsWithdrawn,
  // OwnershipTransferRequested,
  // OwnershipTransferred,
  // Paused,
  // PayeeshipTransferRequested,
  // PayeeshipTransferred,
  // PaymentWithdrawn,
  // Unpaused,
  // UpkeepAdminTransferRequested,
  // UpkeepAdminTransferred,
  // UpkeepCanceled,
  // UpkeepCheckDataUpdated,
  // UpkeepGasLimitSet,
  // UpkeepMigrated,
  // UpkeepPaused,
  UpkeepPerformed,
  Harvest,
  // UpkeepReceived,
  // UpkeepRegistered,
  // UpkeepUnpaused,
} from "../generated/schema";
import { tuplePrefixBytes } from "./utils";

// export function handleConfigSet(event: ConfigSetEvent): void {
//   let entity = new ConfigSet(
//     event.transaction.hash.concatI32(event.logIndex.toI32()),
//   );
//   entity.config_paymentPremiumPPB = event.params.config.paymentPremiumPPB;
//   entity.config_flatFeeMicroLink = event.params.config.flatFeeMicroLink;
//   entity.config_blockCountPerTurn = event.params.config.blockCountPerTurn;
//   entity.config_checkGasLimit = event.params.config.checkGasLimit;
//   entity.config_stalenessSeconds = event.params.config.stalenessSeconds;
//   entity.config_gasCeilingMultiplier = event.params.config.gasCeilingMultiplier;
//   entity.config_minUpkeepSpend = event.params.config.minUpkeepSpend;
//   entity.config_maxPerformGas = event.params.config.maxPerformGas;
//   entity.config_fallbackGasPrice = event.params.config.fallbackGasPrice;
//   entity.config_fallbackLinkPrice = event.params.config.fallbackLinkPrice;
//   entity.config_transcoder = event.params.config.transcoder;
//   entity.config_registrar = event.params.config.registrar;

//   entity.blockNumber = event.block.number;
//   entity.blockTimestamp = event.block.timestamp;
//   entity.transactionHash = event.transaction.hash;

//   entity.save();
// }

// export function handleFundsAdded(event: FundsAddedEvent): void {
//   let entity = new FundsAdded(
//     event.transaction.hash.concatI32(event.logIndex.toI32()),
//   );
//   entity.KeeperRegistry1_3_id = event.params.id;
//   entity.from = event.params.from;
//   entity.amount = event.params.amount;

//   entity.blockNumber = event.block.number;
//   entity.blockTimestamp = event.block.timestamp;
//   entity.transactionHash = event.transaction.hash;

//   entity.save();
// }

// export function handleFundsWithdrawn(event: FundsWithdrawnEvent): void {
//   let entity = new FundsWithdrawn(
//     event.transaction.hash.concatI32(event.logIndex.toI32()),
//   );
//   entity.KeeperRegistry1_3_id = event.params.id;
//   entity.amount = event.params.amount;
//   entity.to = event.params.to;

//   entity.blockNumber = event.block.number;
//   entity.blockTimestamp = event.block.timestamp;
//   entity.transactionHash = event.transaction.hash;

//   entity.save();
// }

// export function handleKeepersUpdated(event: KeepersUpdatedEvent): void {
//   let entity = new KeepersUpdated(
//     event.transaction.hash.concatI32(event.logIndex.toI32()),
//   );
//   entity.keepers = event.params.keepers;
//   entity.payees = event.params.payees;

//   entity.blockNumber = event.block.number;
//   entity.blockTimestamp = event.block.timestamp;
//   entity.transactionHash = event.transaction.hash;

//   entity.save();
// }

// export function handleOwnerFundsWithdrawn(
//   event: OwnerFundsWithdrawnEvent,
// ): void {
//   let entity = new OwnerFundsWithdrawn(
//     event.transaction.hash.concatI32(event.logIndex.toI32()),
//   );
//   entity.amount = event.params.amount;

//   entity.blockNumber = event.block.number;
//   entity.blockTimestamp = event.block.timestamp;
//   entity.transactionHash = event.transaction.hash;

//   entity.save();
// }

// export function handleOwnershipTransferRequested(
//   event: OwnershipTransferRequestedEvent,
// ): void {
//   let entity = new OwnershipTransferRequested(
//     event.transaction.hash.concatI32(event.logIndex.toI32()),
//   );
//   entity.from = event.params.from;
//   entity.to = event.params.to;

//   entity.blockNumber = event.block.number;
//   entity.blockTimestamp = event.block.timestamp;
//   entity.transactionHash = event.transaction.hash;

//   entity.save();
// }

// export function handleOwnershipTransferred(
//   event: OwnershipTransferredEvent,
// ): void {
//   let entity = new OwnershipTransferred(
//     event.transaction.hash.concatI32(event.logIndex.toI32()),
//   );
//   entity.from = event.params.from;
//   entity.to = event.params.to;

//   entity.blockNumber = event.block.number;
//   entity.blockTimestamp = event.block.timestamp;
//   entity.transactionHash = event.transaction.hash;

//   entity.save();
// }

// export function handlePaused(event: PausedEvent): void {
//   let entity = new Paused(
//     event.transaction.hash.concatI32(event.logIndex.toI32()),
//   );
//   entity.account = event.params.account;

//   entity.blockNumber = event.block.number;
//   entity.blockTimestamp = event.block.timestamp;
//   entity.transactionHash = event.transaction.hash;

//   entity.save();
// }

// export function handlePayeeshipTransferRequested(
//   event: PayeeshipTransferRequestedEvent,
// ): void {
//   let entity = new PayeeshipTransferRequested(
//     event.transaction.hash.concatI32(event.logIndex.toI32()),
//   );
//   entity.keeper = event.params.keeper;
//   entity.from = event.params.from;
//   entity.to = event.params.to;

//   entity.blockNumber = event.block.number;
//   entity.blockTimestamp = event.block.timestamp;
//   entity.transactionHash = event.transaction.hash;

//   entity.save();
// }

// export function handlePayeeshipTransferred(
//   event: PayeeshipTransferredEvent,
// ): void {
//   let entity = new PayeeshipTransferred(
//     event.transaction.hash.concatI32(event.logIndex.toI32()),
//   );
//   entity.keeper = event.params.keeper;
//   entity.from = event.params.from;
//   entity.to = event.params.to;

//   entity.blockNumber = event.block.number;
//   entity.blockTimestamp = event.block.timestamp;
//   entity.transactionHash = event.transaction.hash;

//   entity.save();
// }

// export function handlePaymentWithdrawn(event: PaymentWithdrawnEvent): void {
//   let entity = new PaymentWithdrawn(
//     event.transaction.hash.concatI32(event.logIndex.toI32()),
//   );
//   entity.keeper = event.params.keeper;
//   entity.amount = event.params.amount;
//   entity.to = event.params.to;
//   entity.payee = event.params.payee;

//   entity.blockNumber = event.block.number;
//   entity.blockTimestamp = event.block.timestamp;
//   entity.transactionHash = event.transaction.hash;

//   entity.save();
// }

// export function handleUnpaused(event: UnpausedEvent): void {
//   let entity = new Unpaused(
//     event.transaction.hash.concatI32(event.logIndex.toI32()),
//   );
//   entity.account = event.params.account;

//   entity.blockNumber = event.block.number;
//   entity.blockTimestamp = event.block.timestamp;
//   entity.transactionHash = event.transaction.hash;

//   entity.save();
// }

// export function handleUpkeepAdminTransferRequested(
//   event: UpkeepAdminTransferRequestedEvent,
// ): void {
//   let entity = new UpkeepAdminTransferRequested(
//     event.transaction.hash.concatI32(event.logIndex.toI32()),
//   );
//   entity.KeeperRegistry1_3_id = event.params.id;
//   entity.from = event.params.from;
//   entity.to = event.params.to;

//   entity.blockNumber = event.block.number;
//   entity.blockTimestamp = event.block.timestamp;
//   entity.transactionHash = event.transaction.hash;

//   entity.save();
// }

// export function handleUpkeepAdminTransferred(
//   event: UpkeepAdminTransferredEvent,
// ): void {
//   let entity = new UpkeepAdminTransferred(
//     event.transaction.hash.concatI32(event.logIndex.toI32()),
//   );
//   entity.KeeperRegistry1_3_id = event.params.id;
//   entity.from = event.params.from;
//   entity.to = event.params.to;

//   entity.blockNumber = event.block.number;
//   entity.blockTimestamp = event.block.timestamp;
//   entity.transactionHash = event.transaction.hash;

//   entity.save();
// }

// export function handleUpkeepCanceled(event: UpkeepCanceledEvent): void {
//   let entity = new UpkeepCanceled(
//     event.transaction.hash.concatI32(event.logIndex.toI32()),
//   );
//   entity.KeeperRegistry1_3_id = event.params.id;
//   entity.atBlockHeight = event.params.atBlockHeight;

//   entity.blockNumber = event.block.number;
//   entity.blockTimestamp = event.block.timestamp;
//   entity.transactionHash = event.transaction.hash;

//   entity.save();
// }

// export function handleUpkeepCheckDataUpdated(
//   event: UpkeepCheckDataUpdatedEvent,
// ): void {
//   let entity = new UpkeepCheckDataUpdated(
//     event.transaction.hash.concatI32(event.logIndex.toI32()),
//   );
//   entity.KeeperRegistry1_3_id = event.params.id;
//   entity.newCheckData = event.params.newCheckData;

//   entity.blockNumber = event.block.number;
//   entity.blockTimestamp = event.block.timestamp;
//   entity.transactionHash = event.transaction.hash;

//   entity.save();
// }

// export function handleUpkeepGasLimitSet(event: UpkeepGasLimitSetEvent): void {
//   let entity = new UpkeepGasLimitSet(
//     event.transaction.hash.concatI32(event.logIndex.toI32()),
//   );
//   entity.KeeperRegistry1_3_id = event.params.id;
//   entity.gasLimit = event.params.gasLimit;

//   entity.blockNumber = event.block.number;
//   entity.blockTimestamp = event.block.timestamp;
//   entity.transactionHash = event.transaction.hash;

//   entity.save();
// }

// export function handleUpkeepMigrated(event: UpkeepMigratedEvent): void {
//   let entity = new UpkeepMigrated(
//     event.transaction.hash.concatI32(event.logIndex.toI32()),
//   );
//   entity.KeeperRegistry1_3_id = event.params.id;
//   entity.remainingBalance = event.params.remainingBalance;
//   entity.destination = event.params.destination;

//   entity.blockNumber = event.block.number;
//   entity.blockTimestamp = event.block.timestamp;
//   entity.transactionHash = event.transaction.hash;

//   entity.save();
// }

// export function handleUpkeepPaused(event: UpkeepPausedEvent): void {
//   let entity = new UpkeepPaused(
//     event.transaction.hash.concatI32(event.logIndex.toI32()),
//   );
//   entity.KeeperRegistry1_3_id = event.params.id;

//   entity.blockNumber = event.block.number;
//   entity.blockTimestamp = event.block.timestamp;
//   entity.transactionHash = event.transaction.hash;

//   entity.save();
// }

// TODO: retrieve dynamically from smart garden registry?
const HARVESTER_PLUGIN_ID = BigInt.fromString(
  "15275435444678090841310445038221187480372252783087795255404194648563901208280",
);

export function handleUpkeepPerformed(event: UpkeepPerformedEvent): void {
  // harvester plugin logic
  if (event.params.id == HARVESTER_PLUGIN_ID) {
    let entity = new UpkeepPerformed(
      event.transaction.hash.concatI32(event.logIndex.toI32()),
    );
    entity.KeeperRegistry1_3_id = event.params.id;
    entity.success = event.params.success;
    entity.from = event.params.from;
    entity.payment = event.params.payment;
    entity.performData = event.params.performData;

    entity.blockNumber = event.block.number;
    entity.blockTimestamp = event.block.timestamp;
    entity.transactionHash = event.transaction.hash;

    entity.save();

    // DEV:
    // https://automation.chain.link/optimism/15275435444678090841310445038221187480372252783087795255404194648563901208280
    // https://optimistic.etherscan.io/tx/0xae214de5c2daab6c893cbc0231dfdbb5d2f7421d341244611347ab2fedc8b729

    // TODO:
    // if (event.receipt!.logs.includes("Transfer")) {

    let decoded = ethereum.decode(
      "(address[])",
      tuplePrefixBytes(event.params.performData),
    );

    if (!decoded) {
      return;
    }

    let tuple = decoded.toTuple();
    let addresses = tuple[0].toAddressArray();

    // new harvest object for each multisig
    for (let i = 0; i < addresses.length; i++) {
      let msig = addresses[i];
      let harvest = new Harvest(event.transaction.hash.concat(msig));

      harvest.msig = msig;

      // from UpkeepPerformed event:
      harvest.hash = event.transaction.hash;
      harvest.block = event.block.number;
      harvest.timestamp = event.block.timestamp;
      harvest.link_used = event.params.payment;

      // TODO: for each Transfer event {
      // if (event.params.to == harvest.msig) {

      // from Transfer event:
      // harvest.gauge = event.params.from;
      // harvest.token = event.transaction.from;
      // harvest.amount = event.params.value;
      // }
      // }

      // TODO: calcs. needs price sdk
      // harvest.cost = link_used * list_price / 10^18 / n_harvests;
      // harvest.revenue = amount * token_price / 10^18;
      // harvest.profit = harvest.revenue - harvest.cost;

      harvest.save();
    }
    // }
    // }
    // }
  }
}

// export function handleUpkeepReceived(event: UpkeepReceivedEvent): void {
//   let entity = new UpkeepReceived(
//     event.transaction.hash.concatI32(event.logIndex.toI32()),
//   );
//   entity.KeeperRegistry1_3_id = event.params.id;
//   entity.startingBalance = event.params.startingBalance;
//   entity.importedFrom = event.params.importedFrom;

//   entity.blockNumber = event.block.number;
//   entity.blockTimestamp = event.block.timestamp;
//   entity.transactionHash = event.transaction.hash;

//   entity.save();
// }

// export function handleUpkeepRegistered(event: UpkeepRegisteredEvent): void {
//   let entity = new UpkeepRegistered(
//     event.transaction.hash.concatI32(event.logIndex.toI32()),
//   );
//   entity.KeeperRegistry1_3_id = event.params.id;
//   entity.executeGas = event.params.executeGas;
//   entity.admin = event.params.admin;

//   entity.blockNumber = event.block.number;
//   entity.blockTimestamp = event.block.timestamp;
//   entity.transactionHash = event.transaction.hash;

//   entity.save();
// }

// export function handleUpkeepUnpaused(event: UpkeepUnpausedEvent): void {
//   let entity = new UpkeepUnpaused(
//     event.transaction.hash.concatI32(event.logIndex.toI32()),
//   );
//   entity.KeeperRegistry1_3_id = event.params.id;

//   entity.blockNumber = event.block.number;
//   entity.blockTimestamp = event.block.timestamp;
//   entity.transactionHash = event.transaction.hash;

//   entity.save();
// }
