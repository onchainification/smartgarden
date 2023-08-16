import { ERC20 } from "../generated/VelodromeVoter/ERC20";
import { GaugeCreated } from "../generated/VelodromeVoter/VelodromeVoter";
import { Gauge } from "../generated/schema";
import { Gauge as GaugeTemplate } from "../generated/templates";

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
