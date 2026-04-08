"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import Link from "next/link";

const ProjectCard = ({ project }: any) => {
  return (
    <Link href={`/project/${project.slug}`} className="block h-full">
      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        className="relative w-full h-full overflow-hidden rounded-xl border border-gray-200 bg-white group cursor-pointer"
      >
        {/* Image */}
        <motion.div
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1.08 },
          }}
          transition={{
            duration: 0.8,
            ease: [0.25, 1, 0.5, 1],
          }}
          className="w-full h-full"
        >
          <Image
            src={"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"}
            // src={project.img}
            alt={project.title}
            fill
            className="object-cover"
          />
          {/* 🔥 STACK TYPE BADGE */}
          <div className="absolute top-3 right-3 z-10">
            <div
              className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wide text-white 
  bg-gradient-to-r from-main via-green-400 to-emerald-500 
  shadow-[0_8px_25px_rgba(40,233,140,0.5)] backdrop-blur-md"
            >
              {project.stackType?.charAt(0).toUpperCase() +
                project.stackType?.slice(1)}
            </div>
          </div>
        </motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-500" />

        {/* Content */}

        <div className="absolute bottom-0 left-0 w-full p-4">
          <div className="backdrop-blur-md bg-black/30 rounded-lg px-3 py-2 flex items-center justify-between ">
            {/* 🔥 LEFT TEXT */}
            <div className="space-y-1 ">
              <p className="text-[10px] text-gray-300 font-medium tracking-wide">
                {project.category}
              </p>

              <h3 className="text-[13px] font-semibold text-white leading-snug drop-shadow-md">
                {project.title}
              </h3>
            </div>

            {/* 🔥 RIGHT ACTION */}
            <div className="flex items-center gap-2">
              {/* 🔥 Text (Desktop only) */}
              <motion.span
                variants={{
                  rest: { opacity: 0, x: -10 },
                  hover: { opacity: 1, x: 0 },
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.25, 1, 0.5, 1],
                }}
                className="
      hidden md:inline-block
      text-xs text-white font-medium tracking-wide whitespace-nowrap
      md:opacity-0 md:group-hover:opacity-100
      md:-translate-x-2 md:group-hover:translate-x-0
    "
              >
                View →
              </motion.span>

              {/* 🔥 Arrow */}
              <motion.div
                variants={{
                  rest: { rotate: 45, scale: 1 },
                  hover: { rotate: 90, scale: 1.15 },
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.25, 1, 0.5, 1],
                }}
                className="
      w-9 h-9 flex items-center justify-center rounded-full 
      border border-white/70 text-white shrink-0
      ml-auto md:ml-0
    "
              >
                <FaArrowUp className="text-xs" />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
