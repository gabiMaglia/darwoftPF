import { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  // flexRender le da idea de cuanto debe ocupar cada col
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import TableBtns from "./TableBtns";

import styles from "./table.module.css";

const Table = ({ data, columns }) => {
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");

  const table = useReactTable({
    data: data,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  });
  return (
    <div>
      <input
        type="text"
        value={filtering}
        onChange={(e) =>{ setFiltering(e.target.value)}}
      />
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup, key) => (
            <tr key={key}>
              {headerGroup.headers.map((header, key) => (
                <th key={key} onClick={header.column.getToggleSortingHandler()}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                  {
                    { asc: "⬆️", desc: "⬇️" }[
                      header.column.getIsSorted() ?? null
                    ]
                  }
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row, key) => (
            <tr key={key}>
              {row.getVisibleCells().map((cell, key) => (
                <td key={key}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.buttons}>
            <TableBtns table={table} />
      </div>
    </div>
  );
};

export default Table;
