const ProjectOverviewSkeleton = () => {
  return (
    <section className="space-y-4">
      
      {/* Heading */}
      <div className="space-y-3">
        <div className="h-3 w-28 bg-gray-300 rounded shimmer" />

        <div className="h-8 md:h-10 w-48 bg-gray-300 rounded shimmer" />

        <div className="w-14 h-[3px] bg-gray-300 rounded shimmer" />
      </div>

      {/* Description */}
      <div className="space-y-2 pt-2 max-w-3xl">
        <div className="h-4 w-full bg-gray-200 rounded shimmer" />
        <div className="h-4 w-[95%] bg-gray-200 rounded shimmer" />
        <div className="h-4 w-[90%] bg-gray-200 rounded shimmer" />
        <div className="h-4 w-[85%] bg-gray-200 rounded shimmer" />
      </div>
    </section>
  );
};

export default ProjectOverviewSkeleton;