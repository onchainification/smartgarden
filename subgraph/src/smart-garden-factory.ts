import { ModuleDeployed as ModuleDeployedEvent } from "../generated/SmartGardenFactory/SmartGardenFactory"
import { ModuleDeployed } from "../generated/schema"

export function handleModuleDeployed(event: ModuleDeployedEvent): void {
  let entity = new ModuleDeployed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.module = event.params.module
  entity.vault = event.params.vault
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
