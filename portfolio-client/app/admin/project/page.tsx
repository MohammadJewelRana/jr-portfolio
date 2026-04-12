"use client";

import { useState } from "react";
import ProjectTable from "./_components/ProjectTable";
import ProjectForm from "./_components/ProjectForm";

export default function Page() {
  const [showForm, setShowForm] = useState(false);
  const [projects, setProjects] = useState([]);

  const handleCreate = (data: any) => {
    setProjects((prev) => [...prev, { ...data, _id: Date.now().toString() }]);
    setShowForm(false);
  };

  const handleDelete = (id: string) => {
    setProjects((prev) => prev.filter((p) => p._id !== id));
  };

  return (
    <div className="space-y-6">
      <button
        onClick={() => setShowForm(!showForm)}
        className="bg-indigo-600 px-4 py-2 rounded"
      >
        {showForm ? "Close Form" : "+ Add Project"}
      </button>

      {showForm && <ProjectForm onSubmit={handleCreate} />}

      <ProjectTable projects={projects} onDelete={handleDelete} />
    </div>
  );
}
