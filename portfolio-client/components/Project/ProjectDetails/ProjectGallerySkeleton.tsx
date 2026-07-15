"use client";

const ProjectGallerySkeleton = () => {
  return (
    <section className="space-y-6 animate-pulse">
      
      {/* 🔹 Heading */}
      <div className="space-y-2">
        <div className="h-3 w-32 bg-gray-300 rounded" />
        <div className="h-8 w-40 bg-gray-300 rounded" />
        <div className="w-14 h-[3px] bg-gray-300 rounded" />
      </div>

      {/* 🔹 Gallery Grid */}
      <div className="grid sm:grid-cols-2 gap-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="rounded-xl overflow-hidden bg-gray-200 h-[240px]"
          >
            {/* image skeleton */}
            <div className="w-full h-full bg-gray-300" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectGallerySkeleton;