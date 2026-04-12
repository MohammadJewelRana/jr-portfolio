"use client";

import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";

export default function ProjectTable({ projects, onDelete }: any) {

  const columns = [
    // 🔹 Image
    {
      id: "thumbnail",
      header: "Image",
      cell: ({ row }: any) => (
        <img
          src={row.original.thumbnail}
          className="h-12 w-16 object-cover rounded"
        />
      ),
    },

    // 🔹 Title + Slug
    {
      accessorKey: "title",
      header: "Project",
      cell: ({ row }: any) => (
        <div>
          <p className="font-medium">{row.original.title}</p>
          <p className="text-xs text-gray-400">{row.original.slug}</p>
        </div>
      ),
    },

    // 🔹 Category
    {
      accessorKey: "category",
      header: "Category",
    },

    // 🔹 Stack Type
    {
      accessorKey: "stackType",
      header: "Stack",
      cell: ({ row }: any) => (
        <span className="px-2 py-1 text-xs bg-indigo-600 rounded">
          {row.original.stackType || "N/A"}
        </span>
      ),
    },

    // 🔹 Technologies (Top 3 show)
    {
      accessorKey: "technologies",
      header: "Tech",
      cell: ({ row }: any) => (
        <div className="flex flex-wrap gap-1">
          {row.original.technologies?.slice(0, 3).map((tech: string, i: number) => (
            <span key={i} className="text-xs bg-gray-700 px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
      ),
    },

    // 🔹 Status
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }: any) => {
        const status = row.original.status;

        const color =
          status === "completed"
            ? "bg-green-600"
            : status === "ongoing"
            ? "bg-yellow-500"
            : "bg-gray-500";

        return (
          <span className={`px-2 py-1 text-xs rounded ${color}`}>
            {status}
          </span>
        );
      },
    },

    // 🔹 Featured
    {
      accessorKey: "featured",
      header: "Featured",
      cell: ({ row }: any) => (
        <span className={`text-xs px-2 py-1 rounded ${
          row.original.featured ? "bg-purple-600" : "bg-gray-600"
        }`}>
          {row.original.featured ? "Yes" : "No"}
        </span>
      ),
    },

    // 🔹 Links
    {
      id: "links",
      header: "Links",
      cell: ({ row }: any) => (
        <div className="flex gap-2 text-xs">
          {row.original.liveLink && (
            <a href={row.original.liveLink} target="_blank" className="text-blue-400">
              Live
            </a>
          )}
          {row.original.githubClient && (
            <a href={row.original.githubClient} target="_blank" className="text-gray-300">
              Client
            </a>
          )}
        </div>
      ),
    },

    // 🔹 Actions
    {
      id: "action",
      header: "Action",
      cell: ({ row }: any) => (
        <button
          onClick={() => onDelete(row.original._id)}
          className="text-red-500 hover:text-red-700 text-sm"
        >
          Delete
        </button>
      ),
    },
  ];

  const table = useReactTable({
    data: projects,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="overflow-x-auto border border-white/5 rounded-xl bg-[#111C2D]">
      <table className="w-full text-sm">
        <thead className="bg-[#0F172A]">
          {table.getHeaderGroups().map((h) => (
            <tr key={h.id}>
              {h.headers.map((head) => (
                <th key={head.id} className="p-4 text-left">
                  {flexRender(head.column.columnDef.header, head.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border-t border-white/5 hover:bg-white/5">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="p-4">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}