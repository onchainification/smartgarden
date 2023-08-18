import { encodeFunctionData } from "viem";

import useGnosisBatch from "../queries/useGnosisBatch";

import { safeABI, smartGardenManagerAddress } from "../generated";

export function ManagerEnabler({ addr }: { addr?: `0x${string}` }) {
  const { mutate: gnosisBatch } = useGnosisBatch();

  const handleClick = () => {
    const call: { [key: string]: string[] } = {};
    call[addr] = [
      encodeFunctionData({
        abi: safeABI,
        functionName: "enableModule",
        args: [smartGardenManagerAddress[10]],
      }),
    ];

    gnosisBatch({ calls: call });
  };

  return (
    <div>
      <button style={{ marginLeft: 20 }} onClick={handleClick}>
        Enable Smart Garden Manager in your safe!
      </button>
    </div>
  );
}
