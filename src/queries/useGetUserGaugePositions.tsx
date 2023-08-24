import { useQuery } from "@tanstack/react-query";
import { useAccount, useNetwork } from "wagmi";

import { request } from "graphql-request";

import { chainDetails } from "../helpers/chainDetails";
import { GET_GAUGE_POSITIONS } from "./graphql/gaugePositions";

export interface IGaugePositions {
  id: string;
  pool_name: string;
}

async function getUserGaugePositions(
  safeAddress: string | undefined,
  chainId: number | undefined,
) {
  try {
    if (!safeAddress) throw new Error("No Safe Account");
    if (!chainId) throw new Error("Missing Chain ID");
    if (!chainDetails[chainId].subgraphGauges)
      throw new Error("No Gauge subgraph url available");
    const queryVars = {
      safeAddr: `${safeAddress}`,
    };
    const positions = (
      await request(
        chainDetails[chainId].subgraphGauges,
        GET_GAUGE_POSITIONS,
        queryVars,
      )
    ).gaugePositions;
    const gaugeResults: IGaugePositions[] = [];
    positions.forEach((position: any) => {
      gaugeResults.push({
        id: position.gauge.id,
        pool_name: position.gauge.pool_name,
      });
    });
    return gaugeResults;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default function useGetUserGaugePositions() {
  const { address } = useAccount();
  const { chain } = useNetwork();
  return useQuery(["userGaugePositions", address?.toLowerCase()], () =>
    getUserGaugePositions(address?.toLowerCase(), chain?.id),
  );
}
