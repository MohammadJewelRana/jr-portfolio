"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import ProjectCard from "@/components/Project/ProjectCard";
import { useGetAllProjects } from "@/store/hooks/project.hook";
import Link from "next/link";

const Project = () => {
  const { projects: allProject, isLoading } = useGetAllProjects(undefined);

  if (isLoading) {
    return (
      <div className="text-center py-20 text-gray-500">Loading projects...</div>
    );
  }

  // 👉 Ensure max 4 project for layout (optional)
  const displayProjects = allProject?.slice(0, 4) || [];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* 🔥 Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-main text-sm px-4 py-1.5 rounded-full bg-main/10 backdrop-blur-md">
            <FaStar />
            <span>Project</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
            My <span className="text-main">Work</span> Projects
          </h1>
        </div>

        {/* 🔥 GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:h-[600px]">
          {/* LEFT */}
          <div className="flex flex-col gap-6">
            {displayProjects[0] && (
              <div className="h-[250px] md:h-[66.666%]">
                <ProjectCard project={displayProjects[0]} />
              </div>
            )}

            {displayProjects[2] && (
              <div className="h-[250px] md:h-[33.333%]">
                <ProjectCard project={displayProjects[2]} />
              </div>
            )}
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-6">
            {displayProjects[1] && (
              <div className="h-[250px] md:h-[33.333%]">
                <ProjectCard project={displayProjects[1]} />
              </div>
            )}

            {displayProjects[3] && (
              <div className="h-[250px] md:h-[66.666%]">
                <ProjectCard project={displayProjects[3]} />
              </div>
            )}
          </div>
        </div>

        {/* 🔥 Button */}
        <div className="text-center mt-12">
          <Link href="/project">
            <motion.button
              whileHover={{
                scale: 1.08,
                boxShadow: "0px 15px 40px rgba(40,233,140,0.35)",
              }}
              whileTap={{ scale: 0.96 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="px-8 py-3 rounded-full bg-main text-black font-semibold text-sm sm:text-base cursor-pointer"
            >
              All Projects ↗
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
