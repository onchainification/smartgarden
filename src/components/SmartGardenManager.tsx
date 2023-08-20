import { useAccount, useNetwork } from "wagmi";

import {
  useSmartGardenManagerGetPluginsPaginated,
  useHarvesterPluginSafeConfigs,
} from "../generated";

import { EnablePlugin } from "./EnablePlugin";
import { DisablePlugin } from "./DisablePlugin";
import { ManagerEnabler } from "./ManagerEnabler";

import { UpdateModuleConfig } from "./Module";

export function SmartGardenManager() {
  const { address } = useAccount();

  const { chain } = useNetwork();
  const etherscan = chain?.blockExplorers?.etherscan;

  const { data: pluginList } = useSmartGardenManagerGetPluginsPaginated({
    args: ["0x0000000000000000000000000000000000000001", BigInt(5), address!],
  });

  // Module section: read config and allow update them
  const getSafeConfig = () => {
    const { data: config } = useHarvesterPluginSafeConfigs({
      args: [address!],
    });

    console.log([config?.[0], config?.[1]]);

    return [config?.[0], config?.[1]];
  };

  return (
    <div>
      <div>
        <h2>
          Display existing enabled plugins for gnosis safe 👀:
          {pluginList?.length > 0 ? (
            <div className="flex flex-row justify-between items-center">
              <a
                href={`${etherscan.url}/address/${pluginList?.[0][0]}`}
                target="_blank"
              >
                {pluginList?.[0][0]}
              </a>
              <DisablePlugin />
            </div>
          ) : (
            <span style={{ marginLeft: 10 }}>"None had being enabled..."</span>
          )}
        </h2>
        {pluginList?.length > 0 && (
          <>
            <h3>Current module config:</h3>
            <div>
              <h5>Gauge address: {getSafeConfig()[0]}</h5>
              {/*
              <UpdateModuleConfig
                addr={moduleAddress}
                method={"setVault"}
                btnTxt={"Update Vault address"}
                newVal={vaultAddress as `0x${string}`}
              />
              */}
            </div>
            <div>
              <h5>
                Cadence:
                {getSafeConfig()[1]?.toLocaleString()}
              </h5>
              {/*
              <UpdateModuleConfig
                addr={moduleAddress}
                method={"setCadence"}
                btnTxt={"Update Cadence"}
                newVal={BigInt(cadenceTs)}
              />
              */}
            </div>
          </>
        )}
      </div>
      <ManagerEnabler addr={address} />
      <EnablePlugin />
    </div>
  );
}
