import "../styles/globals.css";

import * as React from "react";
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
} from "@tanstack/react-query";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

import { SmartGardenManager } from "./components";

export function App() {
  const [queryClient] = React.useState(() => new QueryClient());

  /**
   * Wagmi hook for getting account information
   * @see https://wagmi.sh/docs/hooks/useAccount
   */
  const { isConnected } = useAccount();

  return (
    <>
      <h1>SmartGarden</h1>

      {/** @see https://www.rainbowkit.com/docs/connect-button */}
      <ConnectButton />

      {isConnected && (
        <>
          <QueryClientProvider client={queryClient}>
            <hr />
            <SmartGardenManager />
            <hr />
          </QueryClientProvider>
        </>
      )}
    </>
  );
}
