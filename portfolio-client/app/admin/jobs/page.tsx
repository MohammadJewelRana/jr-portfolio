// "use client";

// import { useState } from "react";

// import { Job } from "./types";
// import { toast } from "react-hot-toast";
// import JobToolbar from "./_components/JobToolbar";
// import JobTable from "./_components/JobTable";
// import {
//   useCreateJobMutation,
//   useDeleteJobMutation,
//   useGetAllJobsQuery,
// } from "@/app/services/job/job.api";
// import Swal from "sweetalert2";
// import JobFormModal from "./_components/JobForm";

// export default function AdminJobsPage() {
//   const { data, isLoading } = useGetAllJobsQuery(undefined);
//   const [deleteJob] = useDeleteJobMutation();
//   const [createJob] = useCreateJobMutation();

//   const jobs = data?.data || [];

//   const [search, setSearch] = useState("");
//   const [open, setOpen] = useState(false);
//   const [editJob, setEditJob] = useState<Job | null>(null);

//   const handleSubmit = async (formData: Partial<Job>) => {
//     try {
//       await createJob(formData).unwrap();
//       toast.success("Job created");

//       setOpen(false);
//       setEditJob(null);
//     } catch {
//       toast.error("Save failed");
//     }
//   };

//   const handleDelete = async (id: string) => {
//     const result = await Swal.fire({
//       title: "Are you sure?",
//       text: "This job will be permanently deleted.",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#6366f1",
//       cancelButtonColor: "#64748b",
//       confirmButtonText: "Yes, delete it",
//       background: "#111C2D",
//       color: "#fff",
//     });

//     if (result.isConfirmed) {
//       try {
//         await deleteJob(id).unwrap();

//         Swal.fire({
//           title: "Deleted!",
//           text: "Job has been deleted.",
//           icon: "success",
//           confirmButtonColor: "#6366f1",
//           background: "#111C2D",
//           color: "#fff",
//         });
//       } catch {
//         Swal.fire({
//           title: "Error!",
//           text: "Failed to delete job.",
//           icon: "error",
//           confirmButtonColor: "#6366f1",
//           background: "#111C2D",
//           color: "#fff",
//         });
//       }
//     }
//   };

//   if (isLoading) return <p className="text-slate-400">Loading...</p>;

//   return (
//     <div className="space-y-8">
//       <h2 className="text-2xl font-bold">Manage Jobs</h2>

//       <JobToolbar
//         search={search}
//         setSearch={setSearch}
//         onAdd={() => {
//           setEditJob(null);
//           setOpen(true);
//         }}
//       />

//       <JobTable
//         jobs={jobs}
//         search={search}
//         setSearch={setSearch}
//         onEdit={(job) => {
//           setEditJob(job);
//           setOpen(true);
//         }}
//         onDelete={handleDelete}
//       />

//       <JobFormModal
//         open={open}
//         setOpen={setOpen}
//         editJob={editJob}
//         onSubmit={handleSubmit}
//       />
//     </div>
//   );
// }


import React from 'react';

const page = () => {
  return (
    <div>
      
      admin
    </div>
  );
};

export default page;