"use client";

import { useState } from "react";

import React from "react";
import ProjectTable from "./_components/ProjectTable";
import ProjectFormModal from "./_components/ProjectFormModal";

const page = () => {
  const [open, setOpen] = useState(false);
  const [projects, setProjects] = useState([]);

  const handleCreate = async (data) => {
    // API call
    setProjects((prev) => [...prev, data]);
  };

  const handleDelete = (id) => {
    setProjects((prev) => prev.filter((p) => p._id !== id));
  };
  return (
    <div className="space-y-6">
      <button
        onClick={() => setOpen(true)}
        className="bg-indigo-600 px-4 py-2 rounded"
      >
        + Add Project
      </button>

      <ProjectTable projects={projects} onDelete={handleDelete} />

   
   
    </div>
  );
};

export default page;
