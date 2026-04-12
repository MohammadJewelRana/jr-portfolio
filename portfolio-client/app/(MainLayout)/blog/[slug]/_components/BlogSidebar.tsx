import Link from "next/link";

const BlogSidebar = ({ blogs }: any) => {
  // 🔥 dynamic categories count
  const categoryMap: any = {};
  blogs.forEach((b: any) => {
    categoryMap[b.category] = (categoryMap[b.category] || 0) + 1;
  });

  const categories = Object.entries(categoryMap);

  return (
    <div className="space-y-8">

      {/* 🔥 Categories */}
      <div className="bg-gray-50 p-6 rounded-2xl">
        <h3 className="font-semibold text-black mb-4">Categories</h3>

        <div className="space-y-2">
          {categories.map(([cat, count]: any) => (
            <div
              key={cat}
              className="flex justify-between text-sm bg-white px-3 py-2 rounded-md"
            >
              <span className="text-gray-700">{cat}</span>
              <span className="text-gray-400">({count})</span>
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 Recent Posts */}
      <div className="bg-gray-50 p-6 rounded-2xl">
        <h3 className="font-semibold text-black mb-4">Recent Posts</h3>

        <div className="space-y-4">
          {blogs.slice(0, 4).map((b: any) => (
            <Link
              href={`/blog/${b.slug}`}
              key={b.slug}
              className="flex gap-3 group"
            >
              <img
                src={b.thumbnail}
                className="w-14 h-14 rounded-md object-cover"
              />

              <div>
                <p className="text-sm font-medium text-black group-hover:text-main">
                  {b.title}
                </p>
                <span className="text-xs text-gray-400">
                  {new Date().toDateString()}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 🔥 Tags */}
      <div className="bg-gray-50 p-6 rounded-2xl">
        <h3 className="font-semibold text-black mb-4">Tags</h3>

        <div className="flex flex-wrap gap-2">
          {[...new Set(blogs.flatMap((b: any) => b.tags || []))].map(
            (tag: string) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs bg-white rounded-full text-gray-600"
              >
                {tag}
              </span>
            )
          )}
        </div>
      </div>

    </div>
  );
};

export default BlogSidebar;