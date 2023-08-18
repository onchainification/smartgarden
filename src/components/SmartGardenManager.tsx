import { useState } from "react";
import { useAccount, useNetwork } from "wagmi";

import {
  useSmartGardenManagerGetPluginsPaginated,
  useHarvesterPluginSafeConfigs,
} from "../generated";

import { EnablePlugin } from "./EnablePlugin";
import { DisablePlugin } from "./DisablePlugin";
import { ManagerEnabler } from "./ManagerEnabler";

import { UpdateModuleConfig } from "./Module";

// https://optimistic.etherscan.io/address/0xa1034Ed2C9eb616d6F7f318614316e64682e7923
const GAUGE_USDC_DOLA_ADDRESS = "0xa1034Ed2C9eb616d6F7f318614316e64682e7923";

export function SmartGardenManager() {
  const { address } = useAccount();

  const { chain } = useNetwork();
  const etherscan = chain?.blockExplorers?.etherscan;

  const [vaultAddress, setVaultAddress] = useState(GAUGE_USDC_DOLA_ADDRESS);

  /**
   * defaulting: 86400 (1-day)
   */
  const [cadenceTs, setCadenceTs] = useState(86400);

  /**
   * options for feeding the <options> html -> (10min, 1h, 1d, 3d, 1w)
   */
  const cadenceOptions = [
    { sec: 600, str: "Once every ten minutes" },
    { sec: 3600, str: "Once an hour" },
    { sec: 86400, str: "Once a Day" },
    { sec: 259200, str: "Once every Three Day" },
    { sec: 604800, str: "Once a Week" },
  ];

  /**
   * Use to modify the value of `cadenceTs` in the <select> action
   */
  const onCadenceChangeAction = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setCadenceTs(parseInt(event.target.value));

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
    <div className="flex flex-row justify-between items-center">
      <div className="basis-1/4">
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
              <input
                onChange={(e) => setVaultAddress(e.target.value)}
                value={vaultAddress}
                style={{ marginRight: 10, width: 320 }}
              />
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
              <select
                onChange={onCadenceChangeAction}
                style={{ marginRight: 10 }}
              >
                {cadenceOptions.map((option, index) => {
                  return (
                    <option key={index} value={option.sec}>
                      {option.str}
                    </option>
                  );
                })}
              </select>
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
      <div className="pt-2.5">
        <h1>
          Start your journey in smart garden land by enabling our curated
          manager🪴⛲️
        </h1>
        <ManagerEnabler addr={address} />
      </div>
      <div>
        <h1>Configure your plugin preferences 🙏</h1>
        <input
          onChange={(e) => setVaultAddress(e.target.value)}
          value={vaultAddress}
          style={{ marginRight: 10, width: 320 }}
        />
        <select onChange={onCadenceChangeAction} style={{ marginRight: 10 }}>
          {cadenceOptions.map((option, index) => {
            return (
              <option key={index} value={option.sec}>
                {option.str}
              </option>
            );
          })}
        </select>
        <EnablePlugin
          vaultAddress={vaultAddress as `0x${string}`}
          cadenceTs={cadenceTs}
        />
      </div>
    </div>
  );
}
