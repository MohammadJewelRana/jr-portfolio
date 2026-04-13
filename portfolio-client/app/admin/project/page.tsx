"use client";

import React, { useState } from "react";
import ProjectForm from "./_components/ProjectForm";

const Page = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0f172a] text-white p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Projects</h1>

        <button
          onClick={() => setOpen(!open)}
          className="bg-green-600 px-4 py-2 rounded-lg"
        >
          {open ? "Close" : "+ Add Project"}
        </button>
      </div>

      {/* Form */}
      {open && (
        <div className="mb-8">
          <ProjectForm onClose={() => setOpen(false)} />
        </div>
      )}

      {/* Table */}
      <div className="bg-[#1e293b] rounded-xl border border-gray-700 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-[#020617] text-gray-400">
            <tr>
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left">Category</th>
              <th className="p-3 text-left">Stack</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-t border-gray-700">
              <td className="p-3">Portfolio Website</td>
              <td className="p-3">Web</td>
              <td className="p-3">Fullstack</td>
              <td className="p-3 text-green-400">Completed</td>
            </tr>

            <tr className="border-t border-gray-700">
              <td className="p-3">E-commerce</td>
              <td className="p-3">Shop</td>
              <td className="p-3">Frontend</td>
              <td className="p-3 text-yellow-400">Ongoing</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
