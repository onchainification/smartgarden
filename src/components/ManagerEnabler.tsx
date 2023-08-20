import "../../styles/button.css";

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
    <div style={{ width: "700px" }}>
      <h3>
        Start your journey in smart garden land by enabling our curated
        manager🪴⛲️
      </h3>
      <button className="button" onClick={handleClick}>
        Enable Smart Garden Manager in your safe!
      </button>
    </div>
  );
}
