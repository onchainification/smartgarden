import { useState } from "react";
import { useAccount, useWaitForTransaction, useContractRead } from "wagmi";

import {
  useModuleFactoryCreateModule,
  usePrepareModuleFactoryCreateModule,
  useModuleFactoryDeployedModules,
  dummyModuleABI,
} from "../generated";

import { UpdateModuleConfig } from "./Module";

import { ProcessingMessage } from "./HashProcessor";

const NULL_ADDR = "0x0000000000000000000000000000000000000000";

export function Factory() {
  const { address } = useAccount();
  /**
   * defaulting: https://optimistic.etherscan.io/address/0x61ac9315a1ae71633e95fb35601b59180ec8d61d
   */
  const [vaultAddress, setVaultAddress] = useState(
    "0x61ac9315a1ae71633e95fb35601b59180ec8d61d",
  );

  /**
   * defaulting: 86400 (1-day)
   */
  const [cadenceTs, setCadenceTs] = useState(86400);

  /**
   * options for feeding the <options> html -> (1d, 3d, 1w)
   */
  const cadenceOptions = [
    { sec: 86400, str: "Once a Day" },
    { sec: 259200, str: "Once every Three Day" },
    { sec: 604800, str: "Once a Week" },
  ];

  /**
   * Use to modify the value of `cadenceTs` in the <select> action
   */
  const onCadenceChangeAction = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setCadenceTs(parseInt(event.target.value));

  /* Here we start using the magic hooks from wagmi to write & read in the dummy SC */

  const { config } = usePrepareModuleFactoryCreateModule({
    args: [vaultAddress as `0x${string}`, BigInt(cadenceTs)],
  });

  const { data, write } = useModuleFactoryCreateModule({
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
      abi: dummyModuleABI,
      functionName: "cadence",
      watch: true,
    });

    return data?.toString();
  };

  const getModuleVaultAddress = (addr: `0x${string}`) => {
    const { data } = useContractRead({
      address: addr,
      abi: dummyModuleABI,
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
          Display existing deployed module for msg.sender 👀:
          {moduleAddress != NULL_ADDR ? (
            <span style={{ marginLeft: 10 }}>{moduleAddress}</span>
          ) : (
            <span style={{ marginLeft: 10 }}>"None had being deployed..."</span>
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
      <div>
        <h1>Configure your module preferences 🙏</h1>
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
          Deploy module, lets go!! 🚀
        </button>
      </div>
      {isLoading && <ProcessingMessage hash={data?.hash} />}
    </div>
  );
}
