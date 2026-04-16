import Image from "next/image";

const BlogDetailsHero = ({ blog }: any) => {
  return (
    <div className="relative h-[300px] md:h-[450px] overflow-hidden">
      <Image
        src={blog.coverImage || blog.thumbnail}
        alt={blog.title}
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/50 flex items-end">
        <div className="max-w-5xl mx-auto px-4 pb-10 text-white">
          <p className="text-sm mb-2">{blog.category}</p>
          <h1 className="text-2xl md:text-5xl font-bold">
            {blog.title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsHero;