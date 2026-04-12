import Image from "next/image";

const BlogMain = ({ blog }: any) => {
  return (
    <div className="space-y-8">

      {/* 🔥 Cover */}
      <div className="relative h-[220px] md:h-[380px] rounded-2xl overflow-hidden">
        <Image
          src={blog.coverImage || blog.thumbnail}
          alt={blog.title}
          fill
          className="object-cover"
        />
      </div>

      {/* 🔥 Category + Meta */}
      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
        <span className="text-main font-medium">{blog.category}</span>
        <span>•</span>
        <span>{new Date(blog.createdAt || Date.now()).toDateString()}</span>
        <span>•</span>
        <span>{Math.ceil(blog.content?.length / 1000) || 3} min read</span>
      </div>

      {/* 🔥 Title */}
      <h1 className="text-2xl md:text-4xl font-bold text-black leading-tight">
        {blog.title}
      </h1>

      {/* 🔥 Excerpt */}
      <p className="text-gray-600 text-base leading-relaxed">
        {blog.excerpt}
      </p>

      {/* 🔥 Highlight Card */}
      <div className="border border-main/30 bg-main/5 rounded-xl p-6 text-center">
        <p className="text-sm text-gray-700 leading-relaxed">
          {blog.excerpt}
        </p>

        <div className="mt-5 flex items-center justify-center gap-2">
          <img
            src={blog.authorImage || "https://i.pravatar.cc/40"}
            className="w-9 h-9 rounded-full"
          />
          <span className="text-sm font-medium text-black">
            {blog.authorName || "Admin"}
          </span>
        </div>
      </div>

      {/* 🔥 Content */}
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <h2 className="text-xl font-bold text-black">
          Overview
        </h2>

        <p>{blog.content}</p>

        {/* 🔥 Extra Images */}
        {blog.images?.length > 0 && (
          <div className="grid grid-cols-2 gap-4">
            {blog.images.map((img: string, i: number) => (
              <div key={i} className="relative h-40 rounded-xl overflow-hidden">
                <Image src={img} alt="" fill className="object-cover" />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 🔥 Tags */}
      {blog.tags?.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-6 border-t">
          {blog.tags.map((tag: string) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs bg-gray-100 rounded-full text-gray-600"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* 🔥 Engagement */}
      <div className="flex items-center gap-6 text-sm text-gray-500 pt-4">
        <span>👁 {blog.views || 0} views</span>
        <span>❤️ {blog.likes || 0} likes</span>
      </div>

    </div>
  );
};

export default BlogMain;