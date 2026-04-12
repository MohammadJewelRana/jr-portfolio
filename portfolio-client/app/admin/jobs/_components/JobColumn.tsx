"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Job } from "../types";

export const getJobColumns = (
  onEdit: (job: Job) => void,
  onDelete: (id: string) => void
): ColumnDef<Job>[] => [
  {
    accessorKey: "title",
    header: ({ column }) => (
      <button
        onClick={() =>
          column.toggleSorting(column.getIsSorted() === "asc")
        }
        className="flex items-center gap-2"
      >
        Title <ArrowUpDown size={14} />
      </button>
    ),
  },
  {
    accessorKey: "company",
    header: "Company",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => (
      <div className="flex gap-3">
        {/* <button
          onClick={() => onEdit(row.original)}
          className="text-indigo-400 hover:text-indigo-600 text-sm"
        >
          Edit
        </button> */}
        <button
          onClick={() => onDelete(row.original._id)}
          className="text-red-400 hover:text-red-600 text-sm"
        >
          Delete
        </button>
      </div>
    ),
  },
];