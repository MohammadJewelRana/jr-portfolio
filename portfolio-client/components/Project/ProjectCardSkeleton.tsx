"use client";

const ProjectCardSkeleton = () => {
  return (
    <div className="w-full h-full rounded-xl border border-gray-200 bg-white overflow-hidden animate-pulse">
      
      {/* Image Skeleton */}
      <div className="relative w-full h-full bg-gray-200">
        
        {/* Stack Badge */}
        <div className="absolute top-3 right-3">
          <div className="h-5 w-16 rounded-full bg-gray-300" />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Bottom Content */}
        <div className="absolute bottom-0 left-0 w-full p-4">
          <div className="bg-black/20 backdrop-blur-md rounded-lg px-3 py-2 flex items-center justify-between">
            
            {/* Left Text */}
            <div className="space-y-2">
              <div className="h-2 w-16 bg-gray-300 rounded" />
              <div className="h-3 w-28 bg-gray-300 rounded" />
            </div>

            {/* Right Action */}
            <div className="flex items-center gap-2">
              <div className="hidden md:block h-3 w-12 bg-gray-300 rounded" />

              <div className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center">
                <div className="w-3 h-3 bg-gray-300 rounded-full" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardSkeleton;