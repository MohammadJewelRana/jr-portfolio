"use client";

import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
  SortingState,
} from "@tanstack/react-table";
import React from "react";
import { Job } from "../types";
import { getJobColumns } from "./JobColumn";
 

interface Props {
  jobs: Job[];
  search: string;
  setSearch: (val: string) => void;
  onEdit: (job: Job) => void;
  onDelete: (id: string) => void;
}

export default function JobTable({
  jobs,
  search,
  setSearch,
  onEdit,
  onDelete,
}: Props) {
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const table = useReactTable({
    data: jobs,
    columns: getJobColumns(onEdit, onDelete),
    state: { sorting, globalFilter: search },
    onSortingChange: setSorting,
    onGlobalFilterChange: setSearch,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <>
      <div className="overflow-x-auto border border-white/5 rounded-xl bg-[#111C2D]">
        <table className="w-full text-sm">
          <thead className="bg-[#0F172A]">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="p-4 text-left">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="border-t border-white/5 hover:bg-white/5 transition"
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="p-4">
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mt-5">
        <p className="text-slate-400 text-sm">
          Page {table.getState().pagination.pageIndex + 1}
        </p>

        <div className="flex gap-2">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="px-3 py-1 bg-gray-700 rounded disabled:opacity-40"
          >
            Prev
          </button>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="px-3 py-1 bg-gray-700 rounded disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}