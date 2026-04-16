"use client";

import { useParams } from "next/navigation";
import UpdateProjectForm from "./_components/UpdateForm";
import { useGetSingleProject } from "@/store/hooks/project.hook";

const Page = () => {
  const { slug } = useParams();

  const { project, isLoading } = useGetSingleProject(slug as string);

  if (isLoading) {
    return <div className="text-white p-6">Loading...</div>;
  }

  return (
    <div className="p-6 bg-[#0f172a] min-h-screen">
      <UpdateProjectForm project={project} />
    </div>
  );
};

export default Page;
