import { defineConfig } from "@wagmi/cli";
import { foundry, react } from "@wagmi/cli/plugins";
import * as chains from "wagmi/chains";

// https://optimistic.etherscan.io/address/0xfd20c63554a9916816dc5e5df596a0333185f263#code
const SMART_GARDEN_MANAGER_ADDRESS =
  "0xfD20C63554A9916816dC5e5Df596A0333185F263";

/**
 * Wagmi cli will automatically generate react hooks from your forge contracts
 * @see https://wagmi.sh/cli/getting-started
 * You can also generate hooks from etherscan
 * @see https://wagmi.sh/cli/plugins/etherscan
 * Or for erc20 erc721 tokens
 * @see https://wagmi.sh/cli/plugins/erc
 * Or from hardhat
 * @see https://wagmi.sh/cli/plugins/hardhat
 * Or from an arbitrary fetch request
 * @see https://wagmi.sh/cli/plugins/fetch
 *
 * You can also generate vanilla actions for @wagmi/core
 * @see https://wagmi.sh/cli/plugins/actions
 */
export default defineConfig({
  out: "src/generated.ts",
  plugins: [
    /**
     * Generates react hooks from your forge contracts
     * @see https://wagmi.sh/cli/plugins/foundry
     */
    foundry({
      deployments: {
        SmartGardenManager: {
          [chains.optimism.id]: SMART_GARDEN_MANAGER_ADDRESS,
          [chains.optimismGoerli.id]: SMART_GARDEN_MANAGER_ADDRESS,
          [chains.foundry.id]: SMART_GARDEN_MANAGER_ADDRESS,
        },
      },
    }),
    /**
     * Generates react hooks from your abis
     * @see https://wagmi.sh/cli/plugins/react
     */
    react(),
  ],
});
