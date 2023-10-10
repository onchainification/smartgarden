# 🪴 SmartGarden

![204610239-organic-hydroponic-farm-with-rows-of-healthy-plants-and-sustainable-practices-ai-generated](https://github.com/onchainification/smartgarden/assets/2835259/479b4572-0df7-4123-9891-8fb11d5b7fe3)

## SmartCon 2023: Presentation Video

10 minute presentation of SmartGarden at Chainlink's SmartCon 2023.

_SmartGarden: Bringing Autonomy to Ethereum's Infinite Garden_: [https://smartcon.chain.link/video-on-demand/smartgarden-bringing-autonomy-to-ethereums-infinite-garden](https://smartcon.chain.link/video-on-demand/smartgarden-bringing-autonomy-to-ethereums-infinite-garden)

## Demo Video

See our showcase page from the ETHGlobal SuperHack hackathon: https://ethglobal.com/showcase/smartgarden-2v74d

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
- [`Safe`](https://optimistic.etherscan.io/address/0xF55aB9D6eaaB0614073cC1da5C29b093F6e3Aebc)

### Chainlink

- [`SmartGardenHarvesterPlugin`](https://automation.chain.link/optimism/15275435444678090841310445038221187480372252783087795255404194648563901208280)
