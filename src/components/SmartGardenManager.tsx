import { useState } from "react";
import { useAccount, useWaitForTransaction, useContractRead } from "wagmi";

import {
  useSmartGardenManagerEnablePluginWithConfig,
  usePrepareSmartGardenManagerEnablePluginWithConfig,
  useModuleFactoryDeployedModules,
  harvesterPluginABI,
} from "../generated";

import { ManagerEnabler } from "./ManagerEnabler";

import { UpdateModuleConfig } from "./Module";

import { ProcessingMessage } from "./HashProcessor";

const NULL_ADDR = "0x0000000000000000000000000000000000000000";

// https://optimistic.etherscan.io/address/0xa1034Ed2C9eb616d6F7f318614316e64682e7923
const GAUGE_USDC_DOLA_ADDRESS = "0xa1034Ed2C9eb616d6F7f318614316e64682e7923";

// https://optimistic.etherscan.io/address/0xf249209905ed226966e956c104baf8c766d47706
const HARVEST_PLUGIN_ADDRESS = "0xf249209905Ed226966E956C104baf8C766d47706";

export function SmartGardenManager() {
  const { address } = useAccount();

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

  /* Here we start using the magic hooks from wagmi to write & read in the smart garden mngr */

  const { config } = usePrepareSmartGardenManagerEnablePluginWithConfig({
    args: [
      HARVEST_PLUGIN_ADDRESS as `0x${string}`,
      false,
      {
        vault: vaultAddress as `0x${string}`,
        cadenceSec: BigInt(cadenceTs),
        lastCall: BigInt(0),
      },
    ],
  });

  const { data, write } = useSmartGardenManagerEnablePluginWithConfig({
    ...config,
    onSuccess: () => {
      setVaultAddress("");
      setCadenceTs(86400);
    },
  });

  const { refetch, data: moduleAddress } = useModuleFactoryDeployedModules({
    args: [address!],
  });

  // Module section: read config and allow update them

  const getModuleCadence = (addr: `0x${string}`) => {
    const { data } = useContractRead({
      address: addr,
      abi: harvesterPluginABI,
      functionName: "cadence",
      watch: true,
    });

    return data?.toString();
  };

  const getModuleVaultAddress = (addr: `0x${string}`) => {
    const { data } = useContractRead({
      address: addr,
      abi: harvesterPluginABI,
      functionName: "vault",
      watch: true,
    });

    return data?.toString();
  };

  const { isLoading } = useWaitForTransaction({
    hash: data?.hash,
    onSuccess: () => refetch(),
  });

  return (
    <div className="flex flex-row justify-between items-center">
      <div className="basis-1/4">
        <h2>
          Display existing enabled plugins for gnosis safe 👀:
          {moduleAddress != NULL_ADDR ? (
            <span style={{ marginLeft: 10 }}>{moduleAddress}</span>
          ) : (
            <span style={{ marginLeft: 10 }}>"None had being enabled..."</span>
          )}
        </h2>
        {moduleAddress != NULL_ADDR && (
          <>
            <h3>Current module config:</h3>
            <div>
              <h5>Vault ERC-4626: {getModuleVaultAddress(moduleAddress)}</h5>
              <input
                onChange={(e) => setVaultAddress(e.target.value)}
                value={vaultAddress}
                style={{ marginRight: 10, width: 320 }}
              />
              <UpdateModuleConfig
                addr={moduleAddress}
                method={"setVault"}
                btnTxt={"Update Vault address"}
                newVal={vaultAddress as `0x${string}`}
              />
            </div>
            <div>
              <h5>
                Cadence:
                {getModuleCadence(moduleAddress)}
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
              <UpdateModuleConfig
                addr={moduleAddress}
                method={"setCadence"}
                btnTxt={"Update Cadence"}
                newVal={BigInt(cadenceTs)}
              />
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
        <button
          className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs"
          onClick={() => write?.()}
        >
          Enable plugin, lets go!! 🚀
        </button>
      </div>
      {isLoading && <ProcessingMessage hash={data?.hash} />}
    </div>
  );
}
