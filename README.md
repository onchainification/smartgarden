# SmartGarden

![204610239-organic-hydroponic-farm-with-rows-of-healthy-plants-and-sustainable-practices-ai-generated](https://github.com/onchainification/smartgarden/assets/2835259/479b4572-0df7-4123-9891-8fb11d5b7fe3)

## Tech Stack

We used the [Optimism Starter repository](https://github.com/ethereum-optimism/optimism-starter) as a boilerplate:

- [Optimism](https://github.com/ethereum-optimism)
- [wagmi](https://wagmi.sh)
- [Foundry](https://book.getfoundry.sh/)
- [Rainbowkit](https://www.rainbowkit.com/)
- [Vite](https://vitejs.dev/)

We then added:

- [Fleek](https://fleek.co/) for deployments
- [Solidity](https://soliditylang.org/) for the factory and module contracts
- [The Graph](https://thegraph.com/) for a decentralized backend

## Installation

### Subgraph

Change directory to `subgraph/`, install packages if needed and run `lfg` script:

```
cd subgraph
npm i && npm run lfg
```

Note that this needs to have set `graph auth --studio` if you really want to deploy the subgraph. Otherwise, you can test compilability via `graph codegen && graph build`.

## Deployments

### Optimism

- [`SafeProtocolRegistry`](https://optimistic.etherscan.io/address/0xe0142a586ac163ddf8e4ab2af4607cd0f8943710)
- [`SmartGardenManager`](https://optimistic.etherscan.io/address/0xfd20c63554a9916816dc5e5df596a0333185f263)
- [`HarvesterPlugin`](https://optimistic.etherscan.io/address/0xf249209905ed226966e956c104baf8c766d47706)
