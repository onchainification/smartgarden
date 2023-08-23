import { useQuery } from "@tanstack/react-query";
import { useAccount, useNetwork } from "wagmi";

import { request, gql } from "graphql-request";

import { chainDetails } from "../helpers/chainDetails";

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
    const querySafeAddr = gql`
      query UserGaugePositions {
        gaugePositions(
          where: {
            user: "${safeAddress}"
            balance_gt: "0"
          }
        ) {
          gauge {
            id
            protocol
            pool
            pool_name
          }
        }
      }
    `;
    const positions = (
      await request(chainDetails[chainId].subgraphGauges, querySafeAddr)
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
