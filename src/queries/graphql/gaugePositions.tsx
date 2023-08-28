import { gql } from "graphql-request";

export const GET_GAUGE_POSITIONS = gql`
  query UserGaugePositions($safeAddr: String!) {
    gaugePositions(where: { user: $safeAddr, balance_gt: "0" }) {
      gauge {
        id
        protocol
        pool
        pool_name
      }
    }
  }
`;
