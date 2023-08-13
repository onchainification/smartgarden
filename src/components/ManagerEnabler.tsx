import { useAccount, useContractWrite } from "wagmi";

import { safeABI, smartGardenManagerAddress } from "../generated";

import { ProcessingMessage } from "./HashProcessor";

export function ManagerEnabler({ addr }: { addr?: `0x${string}` }) {
  const { data, isLoading, write } = useContractWrite({
    address: addr,
    abi: safeABI,
    functionName: "enableModule",
  });

  return (
    <div>
      <button
        style={{ marginLeft: 20 }}
        onClick={() => write({ args: [smartGardenManagerAddress[10]] })}
      >
        Enable Smart Garden Manager in your safe!
      </button>
      {isLoading && <ProcessingMessage hash={data?.hash} />}
    </div>
  );
}
