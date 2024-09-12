import {
  Address,
  BigInt,
  ethereum,
  // log,
} from "@graphprotocol/graph-ts";
// import { Transfer } from "../generated/KeeperRegistry1_3/ERC20";
import {
  KeeperRegistry1_3,
  UpkeepPerformed as UpkeepPerformedEvent,
} from "../generated/KeeperRegistry1_3/KeeperRegistry1_3";
import { UpkeepPerformed, Harvest } from "../generated/schema";
import { tuplePrefixBytes } from "./utils";
import { Oracle } from "../generated/KeeperRegistry1_3/Oracle";

// TODO: retrieve dynamically from smart garden registry?
const HARVESTER_PLUGIN_ID = BigInt.fromString(
  "15275435444678090841310445038221187480372252783087795255404194648563901208280",
);
const LINK = KeeperRegistry1_3.bind(
  Address.fromString("0x75c0530885F385721fddA23C539AF3701d6183D4"),
).LINK();

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
      let account = addresses[i];
      let harvest = new Harvest(event.transaction.hash.concat(account));

      harvest.account = account;
      harvest.n_accounts = BigInt.fromI32(addresses.length);

      // from UpkeepPerformed event:
      harvest.hash = event.transaction.hash;
      harvest.block = event.block.number;
      harvest.timestamp = event.block.timestamp;
      harvest.link_used = event.params.payment;
      harvest.link_used_per_account = event.params.payment.div(
        BigInt.fromI32(addresses.length),
      );

      // TODO: for each Transfer event {
      // if (event.params.to == harvest.msig) {

      // from Transfer event:
      // harvest.gauge = event.params.from;
      // harvest.token = event.transaction.from;
      // harvest.amount = event.params.value;
      // }
      // }

      let linkusd = Oracle.bind(
        Address.fromString("0xCc232dcFAAE6354cE191Bd574108c1aD03f86450"),
      );
      harvest.link_price = linkusd
        .latestAnswer()
        .divDecimal(BigInt.fromI32(10).pow(8).toBigDecimal()); // linkusd decimals
      harvest.cost = harvest.link_used
        .divDecimal(BigInt.fromI32(10).pow(18).toBigDecimal()) // link decimals
        .times(harvest.link_price);
      harvest.cost_per_account = harvest.link_used_per_account
        .divDecimal(BigInt.fromI32(10).pow(18).toBigDecimal()) // link decimals
        .times(harvest.link_price);

      // harvest.revenue = harvest.amount * token_price / 10^18;
      // harvest.profit = harvest.revenue - harvest.cost;

      harvest.save();
    }
  }
}
