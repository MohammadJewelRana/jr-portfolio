"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import ProjectCard from "@/components/Project/ProjectCard";

const categories = ["All", "Frontend", "Fullstack", "Professional"];

const projects = [
  {
    id: 1,
    title: "Food Delivery App Development",
    category: "Frontend",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
  },
  {
    id: 2,
    title: "Mobile App Development Projects",
    category: "Fullstack",
    img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a",
  },
  {
    id: 3,
    title: "Business Landing Page",
    category: "Frontend",
    img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d",
  },
  {
    id: 4,
    title: "Architecture & Interior Design",
    category: "Professional",
    img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
  },
];

const page = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className=" pb-12 bg-gradient-to-b from-white to-[#f7fffb]">
      {/* 🔥 TOP HERO STRIP */}
      <div className="relative overflow-hidden  ">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#e6fff5] via-white to-[#e6fff5]" />

        {/* Glow Circle */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-main/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-green-200/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 py-14 md:py-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            {/* LEFT CONTENT */}
            <div className="max-w-xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 text-main text-xs px-3 py-1 rounded-full bg-main/10 border border-main/20 mb-4">
                🚀 Portfolio Showcase
              </div>

              {/* Heading */}
              <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight mb-4">
                Explore My <span className="text-main">Projects</span>
              </h1>

              {/* Subtext */}
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                A curated collection of real-world applications, scalable
                systems, and modern UI experiences built with cutting-edge
                technologies.
              </p>
            </div>

            {/* RIGHT CONTENT (STATS / QUICK INFO) */}
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="text-2xl font-bold text-black">20+</h3>
                <p className="text-xs text-gray-500">Projects</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black">5+</h3>
                <p className="text-xs text-gray-500">Technologies</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black">100%</h3>
                <p className="text-xs text-gray-500">Responsive</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* 🔥 PREMIUM HERO HEADER */}
        <div className="relative ">
          <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
            {/* 🔹 Main Flex Layout */}
            <div className=" ">
              {/* RIGHT SIDE (FILTER TABS) */}
              <div className="flex flex-wrap gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActive(cat)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${
                active === cat
                  ? "bg-main text-black shadow-[0_10px_25px_rgba(40,233,140,0.3)]"
                  : "bg-white border border-gray-200 text-gray-600 hover:border-main hover:text-main"
              }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 🔥 GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:h-[600px]">
          {/* LEFT */}
          <div className="flex flex-col gap-6">
            <div className="h-[250px] md:h-[66.666%]">
              {filtered[0] && <ProjectCard project={filtered[0]} />}
            </div>

            <div className="h-[250px] md:h-[33.333%]">
              {filtered[2] && <ProjectCard project={filtered[2]} />}
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-6">
            <div className="h-[250px] md:h-[33.333%]">
              {filtered[1] && <ProjectCard project={filtered[1]} />}
            </div>

            <div className="h-[250px] md:h-[66.666%]">
              {filtered[3] && <ProjectCard project={filtered[3]} />}
            </div>
          </div>
        </div>

        {/* 🔥 CTA BUTTON */}
        <div className="text-center mt-14">
          <motion.button
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 15px 40px rgba(40,233,140,0.35)",
            }}
            whileTap={{ scale: 0.96 }}
            className="px-8 py-3 rounded-full bg-main text-black font-medium text-sm sm:text-base"
          >
            View All Projects ↗
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default page;
