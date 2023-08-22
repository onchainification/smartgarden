import { BigInt, Bytes } from "@graphprotocol/graph-ts";
import { ERC20 } from "../generated/VelodromeVoterV2/ERC20";
import { GaugeCreated } from "../generated/VelodromeVoterV2/VelodromeVoterV2";
import { Gauge, GaugePosition, User } from "../generated/schema";
import { Gauge as GaugeTemplate } from "../generated/templates";
import { Deposit, Withdraw } from "../generated/templates/Gauge/Gauge";

export function getUser(address: Bytes): User {
  let user = User.load(address);
  if (!user) {
    user = new User(address);
    user.save();
  }
  return user;
}

export function handleGaugeCreated(event: GaugeCreated): void {
  let gauge = new Gauge(event.params.gauge);
  gauge.protocol = "Velodrome";
  gauge.pool = event.params.pool;
  let erc20 = ERC20.bind(event.params.pool);
  gauge.pool_name = erc20.name();
  gauge.save();

  // also start indexing this new gauge contract
  GaugeTemplate.create(event.params.gauge);
}

export function handleDeposit(event: Deposit): void {
  let user = getUser(event.params.to);
  let gaugePosition = GaugePosition.load(
    event.address.toHexString() + "-" + user.id.toHexString(),
  );
  if (!gaugePosition) {
    gaugePosition = new GaugePosition(
      event.address.toHexString() + "-" + user.id.toHexString(),
    );
    gaugePosition.gauge = event.address;
    gaugePosition.user = user.id;
    gaugePosition.balance = event.params.amount;
    gaugePosition.save();
    return;
  }
  gaugePosition.balance = gaugePosition.balance.plus(event.params.amount);
  gaugePosition.save();
}

export function handleWithdraw(event: Withdraw): void {
  if (event.params.amount > BigInt.fromI32(0)) {
    let user = getUser(event.params.from);
    let gaugePosition = GaugePosition.load(
      event.address.toHexString() + "-" + user.id.toHexString(),
    )!;
    gaugePosition.balance = gaugePosition.balance.minus(event.params.amount);
    gaugePosition.save();
  }
}
