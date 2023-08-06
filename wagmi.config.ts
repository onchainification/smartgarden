import { defineConfig } from "@wagmi/cli";
import { foundry, react } from "@wagmi/cli/plugins";
import * as chains from "wagmi/chains";

// https://goerli-optimism.etherscan.io/address/0x8ff2d0baa60219ab2320029053eb77f8791b8fcc#code
const MODULE_FACTORY_ADDRESS = "0x8fF2d0BAa60219aB2320029053Eb77f8791B8Fcc";

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
        ModuleFactory: {
          [chains.optimism.id]: MODULE_FACTORY_ADDRESS,
          [chains.optimismGoerli.id]: MODULE_FACTORY_ADDRESS,
          [chains.foundry.id]: MODULE_FACTORY_ADDRESS,
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
