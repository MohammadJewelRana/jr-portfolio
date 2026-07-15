const ProjectFeaturesSkeleton = () => {
  return (
    <div className="grid sm:grid-cols-2 gap-4 animate-pulse">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="h-4 bg-gray-200 rounded w-full" />
      ))}
    </div>
  );
};

export default   ProjectFeaturesSkeleton