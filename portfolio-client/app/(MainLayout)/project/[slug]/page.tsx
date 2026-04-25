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

  return (
    <div>
      {/* HERO */}
      <ProjectHero project={project} isLoading={isLoading} />

      <section className="max-w-7xl mx-auto px-4 py-8 md:py-16 grid md:grid-cols-3 gap-16">
        
        {/* LEFT */}
        <div className="md:col-span-2 space-y-12">
          <ProjectOverview project={project} isLoading={isLoading} />
          <ProjectFeatures project={project} isLoading={isLoading} />
          <ProjectGallery project={project} isLoading={isLoading} />
        </div>

        {/* RIGHT */}
        <ProjectSidebar project={project} isLoading={isLoading} />
      </section>

      {/* ❗ Not found (only after loading) */}
      {!isLoading && !project && (
        <div className="text-center py-20 text-red-500">
          ❌ Project not found
        </div>
      )}
    </div>
  );
};

export default Page;