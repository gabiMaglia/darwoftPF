import { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import TableBtns from "./TableBtns";
import { EllipsisHorizontalCircleIcon } from "@heroicons/react/24/outline";
import styles from "./table.module.css";

const Table = ({ data, columns, tableName, handleActionClick }) => {
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");
  const isData = !!data;

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
    <div className={styles.tableCont}>
      <i>Buscar :</i>{" "}
      <input
        type="text"
        value={filtering}
        onChange={(e) => {
          setFiltering(e.target.value);
        }}
      />
      {isData && (
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {{
                      asc: "⬆️",
                      desc: "⬇️",
                    }[header.column.getIsSorted() ?? null]}
                  </th>
                ))}
                <th>Acciones</th>
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
                <td>
                  <div className={styles.dropdown}>
                    <EllipsisHorizontalCircleIcon
                      className={styles.dropdownIcon}
                    />
                    <div className={styles.dropdownContent}>
                      <button
                        onClick={() =>
                          handleActionClick(
                            "update",
                            tableName,
                            row.original._id,
                            row.original
                          )
                        }
                      >
                        Actualizar
                      </button>
                      <button
                        onClick={() =>
                          handleActionClick(
                            "delete",
                            tableName,
                            row.original._id
                          )
                        }
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className={styles.buttons}>
        <TableBtns
          table={table}
          tableName={tableName}
          handleAddElement={handleActionClick}
        />
      </div>
    </div>
  );
};

export default Table;
