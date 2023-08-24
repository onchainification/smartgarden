// in future this `type` may contain more data pieces
interface IChainDetails {
  [key: number]: {
    subgraphGauges: string;
  };
}

export const chainDetails: IChainDetails = {
  10: {
    subgraphGauges:
      "https://api.studio.thegraph.com/proxy/50162/smartgarden-optimism-gauges/version/latest",
  },
};
