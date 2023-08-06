import { useState } from "react";
import { useAccount, useNetwork, useWaitForTransaction } from "wagmi";
import { parseAddress } from "@eth-optimism/atst";

import {
  useModuleFactoryCreateModule,
  usePrepareModuleFactoryCreateModule,
  useModuleFactoryDeployedModules,
} from "../generated";

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

  const { isLoading } = useWaitForTransaction({
    hash: data?.hash,
    onSuccess: () => refetch(),
  });

  return (
    <div className="flex flex-row justify-between items-center">
      <div className="basis-1/4">
        Display existing deployed module for msg.sender 👀:{" "}
        {moduleAddress
          ? parseAddress(moduleAddress)
          : "None had being deployed..."}
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

function ProcessingMessage({ hash }: { hash?: `0x${string}` }) {
  const { chain } = useNetwork();
  const etherscan = chain?.blockExplorers?.etherscan;
  return (
    <span>
      Processing transaction...{" "}
      {etherscan && (
        <a href={`${etherscan.url}/tx/${hash}`}>{etherscan.name}</a>
      )}
    </span>
  );
}
