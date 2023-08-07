import { defineConfig } from "@wagmi/cli";
import { foundry, react } from "@wagmi/cli/plugins";
import * as chains from "wagmi/chains";

// https://goerli-optimism.etherscan.io/address/0x1144460C8D6D36b7eB2A16a7FFf2E84a294C2d96#code
const MODULE_FACTORY_ADDRESS = "0x1144460C8D6D36b7eB2A16a7FFf2E84a294C2d96";

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
