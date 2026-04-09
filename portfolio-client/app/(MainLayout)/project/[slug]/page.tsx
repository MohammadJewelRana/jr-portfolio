"use client";

import { useParams } from "next/navigation";
import { useGetSingleProject } from "@/store/hooks/project.hook";

import ProjectHero from "./_components/ProjectDetailsHero";
import ProjectOverview from "./_components/ProjectOverview";
import ProjectFeatures from "./_components/ProjectsFeatures";
import ProjectGallery from "./_components/ProjectGallery ";
import ProjectSidebar from "./_components/ProjectSidebar";

const Page = () => {
  const params = useParams();
  const slug = params?.slug as string;

  const { project, isLoading } = useGetSingleProject(slug);

  if (isLoading) {
    return (
      <div className="text-center py-20 text-gray-500 animate-pulse">
        🚀 Loading project...
      </div>
    );
  }

  if (!project) {
    return (
      <div className="text-center py-20 text-red-500">
        ❌ Project not found
      </div>
    );
  }

  return (
    <div className=" ">

      <ProjectHero project={project} />

      <section className="max-w-7xl mx-auto px-4 py-8 md:py-16 grid md:grid-cols-3 gap-16">
        <div className="md:col-span-2 space-y-12 md:space-y-12">
          <ProjectOverview project={project} />
          <ProjectFeatures project={project} />
          <ProjectGallery project={project} />
        </div>

        <ProjectSidebar project={project} />
      </section>
    </div>
  );
};

export default Page;