"use client";

import { useParams } from "next/navigation";
import { blogs } from "../../(home)/_components/Blog";
import BlogDetailsHero from "./_components/BlogDetailsHero";
import BlogMain from "./_components/BlogMain";
import BlogSidebar from "./_components/BlogSidebar";
 

const Page = () => {
  const { slug } = useParams();

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return <div className="text-center py-20">Blog not found</div>;
  }

  return (
    <div>
      {/* <BlogDetailsHero blog={blog} /> */}

    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10 pt-24">
      
      {/* LEFT */}
      <div className="lg:col-span-2">
        <BlogMain blog={blog} />
      </div>

      {/* RIGHT */}
      <div>
        <BlogSidebar blogs={blogs} />
      </div>

    </div>
 


    </div>
  );
};

export default Page;