import { BigInt, Bytes } from "@graphprotocol/graph-ts";
import { Deposit, Withdraw } from "../generated/templates/Gauge/Gauge";
import { GaugePosition, User } from "../generated/schema";

export function getUser(address: Bytes): User {
  let user = User.load(address);
  if (!user) {
    user = new User(address);
    user.save();
  }
  return user;
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
