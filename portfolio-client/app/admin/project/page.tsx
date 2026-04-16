"use client";

import React, { useState } from "react";
import ProjectForm from "./_components/ProjectForm";
import { useGetAllProjects } from "@/store/hooks/project.hook";
import Link from "next/link";

const Page = () => {
  const [open, setOpen] = useState(false);

  // 🔥 API CALL
  const { projects, isLoading } = useGetAllProjects(undefined);

  return (
    <div className="min-h-screen bg-[#0f172a] text-white p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Projects</h1>

        <button
          onClick={() => {
   
            setOpen(!open);
          }}
          className="bg-green-600 px-4 py-2 rounded-lg"
        >
          {open ? "Close" : "+ Add Project"}
        </button>
      </div>

      {/* Form */}
      {open && (
        <div className="mb-8">
          <ProjectForm
            onClose={() => {
              setOpen(false);
  
            }}

          />
        </div>
      )}

      {/* TABLE */}
      <div className="bg-[#1e293b] rounded-xl border border-gray-700 overflow-hidden">
        {isLoading ? (
          <div className="p-6 text-center text-gray-400">
            Loading projects...
          </div>
        ) : (
          <table className="w-full text-sm">
            <thead className="bg-[#020617] text-gray-400">
              <tr>
                <th className="p-3 text-left">Title</th>
                <th className="p-3 text-left">Category</th>
                <th className="p-3 text-left">Stack</th>
                <th className="p-3 text-left">Tech</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Featured</th>
                <th className="p-3 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {projects?.map((project: any) => (
                <tr
                  key={project._id}
                  className="border-t border-gray-700 hover:bg-[#020617]"
                >
                  <td className="p-3">{project.title}</td>

                  <td className="p-3 capitalize">{project.category}</td>

                  <td className="p-3 capitalize">{project.stackType}</td>

                  <td className="p-3">
                    {project.technologies?.slice(0, 2).join(", ")}
                  </td>

                  {/* Status */}
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded text-xs
                        ${
                          project.status === "completed"
                            ? "bg-green-500/20 text-green-400"
                            : project.status === "ongoing"
                              ? "bg-yellow-500/20 text-yellow-400"
                              : "bg-blue-500/20 text-blue-400"
                        }`}
                    >
                      {project.status}
                    </span>
                  </td>

                  {/* Featured */}
                  <td className="p-3">{project.featured ? "⭐" : "-"}</td>

                  {/* Actions */}
                  <td className="p-3 text-center space-x-2">
                    {/* Edit */}

                    <Link
                      href={`/admin/project/update/${project?.slug}`}
                      className="bg-yellow-500 px-3 py-1 rounded text-xs inline-block"
                    >
                      Edit
                    </Link>

                    {/* Delete */}
                    <button
                      onClick={() => console.log("delete", project._id)}
                      className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-xs"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

              {/* 🔥 No Data */}
              {!projects?.length && (
                <tr>
                  <td colSpan={7} className="text-center p-6 text-gray-400">
                    No projects found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Page;
