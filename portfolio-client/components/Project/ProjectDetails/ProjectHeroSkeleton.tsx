const ProjectHeroSkeleton = () => {
  return (
    <>
      {/* MOBILE */}
      <section className="block md:hidden relative h-[55vh] overflow-hidden bg-gray-200">
        
        {/* shimmer */}
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />

        {/* content */}
        <div className="absolute bottom-0 w-full px-4 pb-6 space-y-3">
          <div className="h-3 w-20 bg-gray-300 rounded" />
          <div className="h-6 w-3/4 bg-gray-300 rounded" />
          <div className="h-4 w-full bg-gray-300 rounded" />

          <div className="flex gap-2 pt-2">
            <div className="h-8 w-16 bg-gray-300 rounded-full" />
            <div className="h-8 w-20 bg-gray-300 rounded-full" />
            <div className="h-8 w-20 bg-gray-300 rounded-full" />
          </div>
        </div>
      </section>

      {/* DESKTOP */}
      <section className="hidden md:block relative lg:h-[70vh] md:h-[50vh] overflow-hidden bg-gray-200">
        
        {/* shimmer bg */}
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />

        {/* overlay content */}
        <div className="absolute bottom-0 w-full px-6 md:px-20 pb-16">
          <div className="backdrop-blur-xl bg-white/10 p-6 md:p-4 lg:p-8 rounded-3xl space-y-5">
            
            <div className="h-3 w-24 bg-gray-300 rounded" />

            <div className="h-10 w-2/3 bg-gray-300 rounded" />

            <div className="h-4 w-full bg-gray-300 rounded" />
            <div className="h-4 w-5/6 bg-gray-300 rounded" />

            <div className="flex gap-4 pt-2">
              <div className="h-10 w-32 bg-gray-300 rounded-full" />
              <div className="h-10 w-36 bg-gray-300 rounded-full" />
              <div className="h-10 w-36 bg-gray-300 rounded-full" />
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectHeroSkeleton;