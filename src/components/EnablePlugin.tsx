import { encodeFunctionData } from "viem";

import useGnosisBatch from "../queries/useGnosisBatch";

import {
  smartGardenManagerABI,
  smartGardenManagerAddress,
  harvesterPluginAddress,
} from "../generated";

export function EnablePlugin({
  vaultAddress,
  cadenceTs,
}: {
  vaultAddress?: `0x${string}`;
  cadenceTs?: any;
}) {
  const { mutate: gnosisBatch } = useGnosisBatch();

  const handleClick = () => {
    const call: { [key: string]: string[] } = {};
    call[smartGardenManagerAddress[10]] = [
      encodeFunctionData({
        abi: smartGardenManagerABI,
        functionName: "enablePluginWithConfig",
        args: [
          harvesterPluginAddress[10] as `0x${string}`,
          false,
          {
            vault: vaultAddress as `0x${string}`,
            cadenceSec: BigInt(cadenceTs),
            lastCall: BigInt(0),
          },
        ],
      }),
    ];

    gnosisBatch({ calls: call });
  };

  return (
    <div>
      <button style={{ marginLeft: 20 }} onClick={handleClick}>
        Enable plugin, lets go!! 🚀
      </button>
    </div>
  );
}
