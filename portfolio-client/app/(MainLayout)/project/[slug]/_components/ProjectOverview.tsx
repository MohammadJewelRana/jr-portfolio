import ProjectOverviewSkeleton from "@/components/Project/ProjectDetails/ProjectOverviewSkeleton";

const ProjectOverview = ({ project, isLoading }: any) => {
    if (isLoading || !project) return <ProjectOverviewSkeleton />;
  const description =
    project?.description || "No description available for this project.";

  return (
    <section className="space-y-2">

      {/* Heading + accent */}
      <div className="space-y-2">
        <p className="text-sm uppercase tracking-widest text-main font-medium">
          Project Details
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          Overview
        </h2>

        <div className="w-14 h-[3px] bg-main rounded-full" />
      </div>

      {/* Description */}
      <p className="text-gray-600 text-[15px] md:text-base leading-loose max-w-3xl">
        {description}
      </p>
    </section>
  );
};

export default ProjectOverview;