import { useContractWrite } from "wagmi";

import { dummyModuleABI } from "../generated";

import { ProcessingMessage } from "./HashProcessor";

export function UpdateModuleConfig({
  addr,
  method,
  btnTxt,
  newVal,
}: {
  addr?: `0x${string}`;
  method: any;
  btnTxt: string;
  loadingTxt: string;
  newVal: bigint | `0x${string}`;
}) {
  const { data, isLoading, write } = useContractWrite({
    address: addr,
    abi: dummyModuleABI,
    functionName: method,
  });

  return (
    <div>
      <button
        style={{ marginLeft: 20 }}
        onClick={() => write({ args: [newVal] })}
      >
        {btnTxt}
      </button>
      {isLoading && <ProcessingMessage hash={data?.hash} />}
    </div>
  );
}