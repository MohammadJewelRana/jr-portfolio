"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/Project/ProjectCard";
import { useGetAllProjects } from "@/store/hooks/project.hook";

const categories = ["All", "frontend", "fullstack", "mobile"];

const Page = () => {
  const [active, setActive] = useState("All");
  const [visibleCount, setVisibleCount] = useState(4);

  const { projects, isLoading } = useGetAllProjects(undefined);

  // 🔥 Reset when category changes
  useEffect(() => {
    setVisibleCount(4);
  }, [active]);

  if (isLoading) {
    return (
      <div className="text-center py-20 text-gray-500">Loading projects...</div>
    );
  }

  // 🔥 Filter based on stackType
  const filtered =
    active === "All"
      ? projects
      : projects?.filter(
          (p: any) => p.stackType?.toLowerCase() === active.toLowerCase(),
        );

  // 🔥 Visible projects
  const visibleProjects = filtered?.slice(0, visibleCount);

  // 🔥 Load more handler
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <div className="pb-12 bg-gradient-to-b from-white to-[#f7fffb]">
      {/* 🔥 HERO */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#e6fff5] via-white to-[#e6fff5]" />

        <div className="absolute -top-20 -left-20 w-72 h-72 bg-main/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-green-200/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 py-14 md:py-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            {/* LEFT */}
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 text-main text-xs px-3 py-1 rounded-full bg-main/10 border border-main/20 mb-4">
                🚀 Portfolio Showcase
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
                Explore My <span className="text-main">Projects</span>
              </h1>

              <p className="text-gray-600 text-sm md:text-base">
                Real-world applications, scalable systems, and modern UI
                experiences.
              </p>
            </div>

            {/* RIGHT */}
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="text-2xl font-bold">20+</h3>
                <p className="text-xs text-gray-500">Projects</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold">5+</h3>
                <p className="text-xs text-gray-500">Technologies</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold">100%</h3>
                <p className="text-xs text-gray-500">Responsive</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🔥 MAIN */}
      <div className="max-w-7xl mx-auto px-4">
        {/* 🔥 FILTER */}
        <div className="py-10">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition
                ${
                  active === cat
                    ? "bg-main text-black shadow-[0_10px_25px_rgba(40,233,140,0.3)]"
                    : "bg-white border border-gray-200 text-gray-600 hover:border-main hover:text-main"
                }`}
              >
                {cat === "All"
                  ? "All"
                  : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* 🔥 GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visibleProjects?.map((project: any, i: number) => (
            <motion.div
              key={project._id || i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="h-[250px] md:h-[300px]"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* 🔥 LOAD MORE BUTTON */}
        {visibleCount < filtered?.length && (
          <div className="text-center mt-14">
            <motion.button
              onClick={handleLoadMore}
              whileHover={{
                scale: 1.08,
                boxShadow: "0px 15px 40px rgba(40,233,140,0.35)",
              }}
              whileTap={{ scale: 0.96 }}
              className="px-8 py-3 rounded-full bg-main text-black font-semibold"
            >
              Load More Projects ↗
            </motion.button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
