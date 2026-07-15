"use client";

const ProjectSidebarSkeleton = () => {
  return (
    <div className="space-y-6 sticky top-24 h-fit animate-pulse">

      {/* 🔹 Tech Stack */}
      <div className="p-5 rounded-2xl border border-gray-200 bg-white shadow-sm space-y-4">
        
        {/* Title */}
        <div className="h-4 w-28 bg-gray-300 rounded" />

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {["w-12","w-16","w-20","w-14","w-10"].map((w, i) => (
            <div
              key={i}
              className={`h-6 ${w} bg-gray-200 rounded-full`}
            />
          ))}
        </div>
      </div>

      {/* 🔹 Status */}
      <div className="p-5 rounded-2xl border border-gray-200 bg-white shadow-sm space-y-4">
        
        <div className="flex justify-between items-center">
          <div className="h-3 w-14 bg-gray-300 rounded" />
          <div className="h-3 w-20 bg-gray-300 rounded" />
        </div>

        <div className="h-5 w-28 bg-gray-200 rounded-full" />
      </div>

      {/* 🔹 Actions */}
      <div className="p-5 rounded-2xl bg-black/10 backdrop-blur-md shadow-lg space-y-4">
        
        {/* Title */}
        <div className="h-4 w-24 bg-gray-300 rounded" />

        {/* Buttons */}
        <div className="space-y-3">
          <div className="h-10 w-full bg-gray-300 rounded-full" />
          <div className="h-10 w-full bg-gray-300 rounded-full" />
          <div className="h-10 w-full bg-gray-300 rounded-full" />
        </div>
      </div>

    </div>
  );
};

export default ProjectSidebarSkeleton;