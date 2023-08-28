import { useAccount } from "wagmi";

import { useSmartGardenManagerGetPluginsPaginated } from "../generated";

import { EnablePlugin } from "./EnablePlugin";
import { ManagerEnabler } from "./ManagerEnabler";
import { PluginsActiveTable } from "./PluginsActiveTable";

import { UpdateModuleConfig } from "./Module";

export function SmartGardenManager() {
  const { address } = useAccount();

  const { data: pluginList } = useSmartGardenManagerGetPluginsPaginated({
    args: ["0x0000000000000000000000000000000000000001", BigInt(5), address!],
  });

  return (
    <div>
      <div>
        <h2>
          Display existing enabled plugins for gnosis safe 👀:
          {pluginList?.length > 0 ? (
            <div className="flex flex-row justify-between items-center">
              <PluginsActiveTable pluginArray={pluginList} />
            </div>
          ) : (
            <span style={{ marginLeft: 10 }}>"None had being enabled..."</span>
          )}
        </h2>
      </div>
      <ManagerEnabler addr={address} />
      <EnablePlugin />
    </div>
  );
}
