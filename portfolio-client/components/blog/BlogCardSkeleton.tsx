const BlogCardSkeleton = () => {
  return (
    <div className="animate-pulse bg-white rounded-xl overflow-hidden border border-gray-200">
      
      {/* Image Skeleton */}
      <div className="h-52 bg-gray-200" />

      {/* Content */}
      <div className="p-5 space-y-4">
        
        {/* Category + Date */}
        <div className="flex items-center gap-3">
          <div className="h-3 w-16 bg-gray-200 rounded" />
          <div className="h-3 w-10 bg-gray-200 rounded" />
        </div>

        {/* Title */}
        <div className="space-y-2">
          <div className="h-4 w-full bg-gray-200 rounded" />
          <div className="h-4 w-4/5 bg-gray-200 rounded" />
        </div>

        {/* Bottom */}
        <div className="flex items-center gap-3 pt-2">
          <div className="w-9 h-9 rounded-full bg-gray-200" />
          <div className="h-3 w-20 bg-gray-200 rounded" />
        </div>

      </div>
    </div>
  );
};

export default BlogCardSkeleton;