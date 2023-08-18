import { encodeFunctionData } from "viem";

import useGnosisBatch from "../queries/useGnosisBatch";

import {
  smartGardenManagerABI,
  smartGardenManagerAddress,
  harvesterPluginAddress,
} from "../generated";

const SENTINEL_MODULES = "0x0000000000000000000000000000000000000001";

export function DisablePlugin() {
  const { mutate: gnosisBatch } = useGnosisBatch();

  const handleClick = () => {
    const call: { [key: string]: string[] } = {};
    call[smartGardenManagerAddress[10]] = [
      encodeFunctionData({
        abi: smartGardenManagerABI,
        functionName: "disablePlugin",
        args: [
          SENTINEL_MODULES as `0x${string}`,
          harvesterPluginAddress[10] as `0x${string}`,
        ],
      }),
    ];

    gnosisBatch({ calls: call });
  };

  return (
    <div>
      <button style={{ marginLeft: 20 }} onClick={handleClick}>
        Disable plugin!! 👋
      </button>
    </div>
  );
}
