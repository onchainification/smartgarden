import { useState } from "react";
import "../../styles/tableActivePlugin.css";

import {
  usePopoverStore,
  PopoverDisclosure,
  Popover,
  PopoverHeading,
} from "@ariakit/react";

import { useAccount, useNetwork, useContractRead } from "wagmi";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  useHarvesterPluginSafeConfigs,
  harvesterPluginABI,
} from "../generated";

import { DisablePlugin } from "./DisablePlugin";

export function PluginsActiveTable({ pluginArray }: { pluginArray?: [] }) {
  return (
    <section>
      <div>
        <span>
          <h4>Active Plugins</h4>
        </span>
      </div>
      <PluginTable fData={pluginArray} />
    </section>
  );
}

type PluginInfo = {
  name: string;
  version: string;
  etherscan: string;
  details: string;
  action: string;
};

const PluginTable = ({ fData }: { fData?: string[] }) => {
  // Filter data which are not addrs (i.e: 0x...)
  const pluginAddrArray = fData?.filter((el) => typeof el === "string");

  const defaultData: PluginInfo[] = pluginAddrArray?.map((el) => ({
    name: useContractRead({
      address: el,
      abi: harvesterPluginABI,
      functionName: "name",
    }).data,
    version: useContractRead({
      address: el,
      abi: harvesterPluginABI,
      functionName: "version",
    }).data,
    etherscan: el,
    details: "Inspect Details 👓",
    action: "Disable Plugin! 👋",
  }));

  const { address } = useAccount();
  const { chain } = useNetwork();
  const etherscan = chain?.blockExplorers?.etherscan;

  const popover = usePopoverStore();

  const [data, setData] = useState(() => [...defaultData]);

  // Plugin section: read config and allow update them
  const getSafeConfig = () => {
    const { data: config } = useHarvesterPluginSafeConfigs({
      args: [address!],
    });

    return [config?.[0], config?.[1]];
  };

  const columnHelper = createColumnHelper<PluginInfo>();

  const columns = [
    columnHelper.accessor("name", {
      cell: (info) => info.getValue(),
      header: () => <span>Name</span>,
    }),
    columnHelper.accessor((row) => row.version, {
      id: "version",
      cell: (info) => info.getValue(),
      header: () => <span>Version</span>,
    }),
    columnHelper.accessor("etherscan", {
      header: () => "Etherscan",
      cell: (info) => (
        <a
          href={`${etherscan.url}/address/${info.cell.getValue()}`}
          target="_blank"
        >
          {info.cell.getValue()}
        </a>
      ),
    }),
    columnHelper.accessor("details", {
      header: () => <span>Details</span>,
      cell: (info) => (
        <>
          <PopoverDisclosure store={popover} className="button">
            Inspect configuration
          </PopoverDisclosure>
          <Popover store={popover} className="popover">
            <PopoverHeading className="heading">
              Current plugin config:
            </PopoverHeading>
            <div>
              <p>Gauge address: {getSafeConfig()[0]}</p>
              <p>Cadence: {getSafeConfig()[1]?.toLocaleString()}</p>
            </div>
          </Popover>
        </>
      ),
    }),
    columnHelper.accessor("action", {
      header: () => "Action",
      cell: (info) => <DisablePlugin />,
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-2">
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
