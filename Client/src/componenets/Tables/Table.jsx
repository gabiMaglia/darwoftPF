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
import { EllipsisHorizontalCircleIcon } from "@heroicons/react/24/outline";
import styles from "./table.module.css";

const Table = ({ data, columns, tableName, handleActionClick, handleAddElement }) => {
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");
  // menu

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
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup, key) => (
            <tr key={key + Math.random()}>
              {headerGroup.headers.map((header, key) => (
                <>
                  <th
                    key={key + Math.random()}
                    onClick={header.column.getToggleSortingHandler()}
                  >
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
                </>
              ))}
              <th>Acciones</th> 
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row, key) => (
            <tr key={key + Math.random()}>
              {row.getVisibleCells().map((cell, key) => (
                <td key={key + Math.random()}>
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
                        handleActionClick("update", tableName , row.original._id )
                      }
                    >
                      Actualizar
                    </button>
                    <button
                      onClick={() =>
                        handleActionClick("delete", tableName, row.original._id)
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
      <div className={styles.buttons}>
        <TableBtns table={table} tableName={tableName}  handleAddElement={handleAddElement} />
      </div>
    </div>
  );
};

export default Table;
