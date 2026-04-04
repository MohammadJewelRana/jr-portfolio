"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowUp, FaStar } from "react-icons/fa";
import ProjectCard from "@/components/Project/ProjectCard";

const projects = [
  {
    id: 1,
    title: "Food Delivery App Development",
    category: "App / Development",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
    span: "big-left",
  },
  {
    id: 2,
    title: "Mobile App Development Projects",
    category: "App / Development",
    img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a",
    span: "small-top-right",
  },
  {
    id: 3,
    title: "Business Landing Page",
    category: "App / Development",
    img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d",
    span: "small-bottom-left",
  },
  {
    id: 4,
    title: "Architecture & Interior Design",
    category: "App / Development",
    img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    span: "big-right",
  },
];

const Project = () => {
  return (
    <div className="  py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}

        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-main text-sm px-4 py-1.5 rounded-full border border-main bg-main/10">
            <FaStar />
            <span>Project</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
            My <span className="text-main">Work</span> Projects
          </h1>
        </div>
        {/* GRID */}
     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:h-[600px]">

  {/* LEFT COLUMN */}
  <div className="flex flex-col gap-6">

    {/* 1 */}
    <div className="h-[250px] md:h-[66.666%]">
      <ProjectCard project={projects[0]} />
    </div>

    {/* 3 */}
    <div className="h-[250px] md:h-[33.333%]">
      <ProjectCard project={projects[2]} />
    </div>

  </div>

  {/* RIGHT COLUMN */}
  <div className="flex flex-col gap-6">

    {/* 2 */}
    <div className="h-[250px] md:h-[33.333%]">
      <ProjectCard project={projects[1]} />
    </div>

    {/* 4 */}
    <div className="h-[250px] md:h-[66.666%]">
      <ProjectCard project={projects[3]} />
    </div>

  </div>

</div>

        {/* Bottom Button */}
        <div className="text-center mt-10">
          <motion.button
            // onClick={() => router.push("/blog")}
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 15px 40px rgba(40,233,140,0.35)",
            }}
            whileTap={{
              scale: 0.96,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className="px-6 py-3 rounded-full bg-main text-black font-medium text-sm sm:text-base cursor-pointer"
          >
            All Projects ↗
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Project;
