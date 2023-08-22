import { useQuery } from "@tanstack/react-query";
import { useAccount } from "wagmi";

import { request, gql } from "graphql-request";

const SUBGRAPH_URL =
  "https://api.studio.thegraph.com/proxy/50162/smartgarden-optimism-gauges/version/latest";

export interface IGaugePositions {
  id: string;
  pool_name: string;
}

async function getUserGaugePositions(safeAddress: string | undefined) {
  try {
    if (!safeAddress) throw new Error("No Safe Account");
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
    const positions = (await request(SUBGRAPH_URL, querySafeAddr))
      .gaugePositions;
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
  return useQuery(["userGaugePositions", address?.toLowerCase()], () =>
    getUserGaugePositions(address?.toLowerCase()),
  );
}
