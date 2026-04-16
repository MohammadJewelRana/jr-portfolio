"use client";

import React, { useState, useEffect } from "react";
import BlogHero from "./_components/BlogHero";
import BlogCard from "@/components/blog/BlogCard";
import BlogCardSkeleton from "@/components/blog/BlogCardSkeleton";
import { blogs } from "../(home)/_components/Blog";

const Page = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const isLoading = false; // Simulate loading state (replace with real loading logic if needed)

  return (
    <div>
      {/* 🔥 Hero */}
      <div className="pt-12">

      <BlogHero total={blogs.length} />
      </div>

      {/* 🔥 Section Intro (Premium feel) */}
      <div className="max-w-4xl mx-auto text-center mt-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-black">
          Latest Articles & Insights
        </h2>
        <p className="text-gray-500 mt-3 text-sm md:text-base">
          Explore practical development guides, real-world solutions, and modern
          engineering insights crafted for developers.
        </p>
      </div>

      {/* 🔥 Blog Cards */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {isLoading
            ? Array.from({ length: 6 }).map((_, i) => (
                <BlogCardSkeleton key={i} />
              ))
            : blogs
                .slice(0, visibleCount)
                .map((blog, index) => (
                  <BlogCard key={blog.slug || index} blog={blog} />
                ))}
        </div>

        {/* 🔥 Load More Button */}
        {!isLoading && visibleCount < blogs.length && (
          <div className="text-center mt-14">
            <button
              onClick={() => setVisibleCount((prev) => prev + 3)}
              className="group inline-flex items-center gap-2 px-7 py-3 rounded-full 
              bg-main text-black font-medium text-sm sm:text-base 
              transition-all duration-300 ease-out
              shadow-[0_10px_30px_rgba(40,233,140,0.25)]
              hover:shadow-[0_20px_50px_rgba(40,233,140,0.4)]
              hover:scale-105 active:scale-95"
            >
              Load More Articles
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        )}

        {/* 🔥 End Message (जब সব শেষ) */}
        {!isLoading && visibleCount >= blogs.length && (
          <div className="text-center mt-14">
            <p className="text-gray-400 text-sm">
              🎉 You’ve reached the end of the blog list
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
