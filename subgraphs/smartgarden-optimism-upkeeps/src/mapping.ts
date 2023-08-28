import { BigInt, ethereum, log } from "@graphprotocol/graph-ts";
import { Transfer } from "../generated/KeeperRegistry1_3/ERC20";
import { UpkeepPerformed as UpkeepPerformedEvent } from "../generated/KeeperRegistry1_3/KeeperRegistry1_3";
import { UpkeepPerformed, Harvest } from "../generated/schema";
import { tuplePrefixBytes } from "./utils";

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
  }
}
