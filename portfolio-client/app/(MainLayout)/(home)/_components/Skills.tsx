"use client";

import React from "react";
import { FaStar, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiFirebase,
  SiRedux,
  SiExpress,
  SiNestjs,
  SiPrisma,
  SiSupabase,
  SiExpo,
  SiVercel,
  SiNetlify,
  SiFigma,
} from "react-icons/si";
import { motion } from "framer-motion";
import { smoothScrollTo } from "@/utils/smoothScroll.ts";

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },

  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "NestJS", icon: <SiNestjs /> },

  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Prisma", icon: <SiPrisma /> },
  { name: "Supabase", icon: <SiSupabase /> },

  { name: "Redux", icon: <SiRedux /> },

  { name: "React Native", icon: <FaReact /> },
  { name: "Expo", icon: <SiExpo /> },

  { name: "Git", icon: <FaGitAlt /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Vercel", icon: <SiVercel /> },
  { name: "Netlify", icon: <SiNetlify /> },
  { name: "Figma", icon: <SiFigma /> },

  // fallback items
  { name: "Axios" },
  { name: "Android Studio" },
  { name: "RBAC" },
  { name: "JWT" },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

const Skills = () => {
  return (
    <div className="bg-[#1C1D20] text-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <div className="text-center space-y-3 sm:space-y-4 mb-10 sm:mb-14">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 
          text-main text-xs sm:text-sm 
          px-3 sm:px-4 py-1 sm:py-1.5 
          rounded-full border border-main bg-main/10"
          >
            <FaStar />
            <span>Experience</span>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold">
            Skills & Tools
          </h1>
        </div>

        {/* Skills */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4"
        >
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ scale: 1.08 }}
              className="
              flex items-center gap-1.5 sm:gap-2
              px-3 py-1.5 sm:px-5 sm:py-2
              border border-white/10
              rounded-full
              text-xs sm:text-sm
              bg-white/5
              backdrop-blur-md
              transition-all duration-300
              hover:border-main hover:text-main hover:shadow-[0_0_20px_rgba(40,233,140,0.3)]
              "
            >
              {/* Icon or fallback */}
              {skill.icon ? (
                <span className="text-sm sm:text-lg text-main">
                  {skill.icon}
                </span>
              ) : (
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-main"></span>
              )}

              <span>{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom */}
        <div className="text-center mt-8 sm:mt-12 text-xs sm:text-sm text-gray-400">
          You’ve Got A Challenge?{" "}
        <span
  onClick={() => smoothScrollTo("contact")}
  className="text-main font-medium cursor-pointer hover:underline"
>
  Let’s Talk!
</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
