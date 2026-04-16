"use client";

import React, { useState } from "react";
import { useDeleteProject } from "@/store/hooks/project.hook";

const ProjectTable = ({ projects }: any) => {
  const [editData, setEditData] = useState<any>(null);

  const { remove, isLoading } = useDeleteProject();

  // 🔥 Delete Handler (FIXED)
  const handleDelete = async (id: string) => {
    console.log("Attempting to delete project with ID:", id);

    // 🔥 dynamic import (best for Next.js)
    const Swal = (await import("sweetalert2")).default;

    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This project will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#64748b",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      await remove(id);

      // optional success alert
      Swal.fire({
        title: "Deleted!",
        text: "Project has been deleted.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-300 border border-gray-700 rounded-xl overflow-hidden">
          <thead className="bg-[#1e293b] text-gray-400">
            <tr>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Tech</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Featured</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {projects?.map((project: any) => (
              <tr
                key={project._id}
                className="border-t border-gray-700 hover:bg-[#0f172a]"
              >
                <td className="px-4 py-3">{project.title}</td>

                <td className="px-4 py-3 capitalize">
                  {project.category}
                </td>

                <td className="px-4 py-3">
                  {project.technologies?.slice(0, 2).join(", ")}
                </td>

                <td className="px-4 py-3">
                  <span className="px-2 py-1 rounded text-xs bg-blue-500/20 text-blue-400">
                    {project.status}
                  </span>
                </td>

                <td className="px-4 py-3">
                  {project.featured ? "⭐" : "-"}
                </td>

                <td className="px-4 py-3 text-center">
                  <button
                    onClick={() => handleDelete(project._id)}
                    disabled={isLoading}
                    className="bg-red-500 px-3 py-1 rounded text-xs"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectTable;