import {
  Deposit as DepositEvent,
  Withdraw as WithdrawEvent,
} from "../generated/sAMMV2USDCDOLAgauge/sAMMV2USDCDOLAgauge";
import { GaugePosition } from "../generated/schema";

export function handleDeposit(event: DepositEvent): void {
  let gaugePosition = GaugePosition.load(event.params.to);
  if (!gaugePosition) {
    gaugePosition = new GaugePosition(event.params.to);
    gaugePosition.balance = event.params.amount;
    gaugePosition.save();
    return;
  }
  gaugePosition.balance = gaugePosition.balance.plus(event.params.amount);
  gaugePosition.save();
}

export function handleWithdraw(event: WithdrawEvent): void {
  let gaugePosition = GaugePosition.load(event.params.from)!;
  gaugePosition.balance = gaugePosition.balance.minus(event.params.amount);
  gaugePosition.save();
}
