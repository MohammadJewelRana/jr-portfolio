"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import Link from "next/link";

const ProjectCard = ({ project }: any) => {
  return (
    <Link href={`/project/${'food-delivery-app'}`} className="block h-full">

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
            src={project.img}
            alt={project.title}
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-500" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 w-full p-4">

          <div className="backdrop-blur-md bg-black/30 rounded-lg px-3 py-2 flex items-center justify-between">

            {/* LEFT TEXT */}
            <div className="space-y-1">
              <p className="text-[10px] text-gray-300 font-medium tracking-wide">
                {project.category}
              </p>

              <h3 className="text-[13px] font-semibold text-white leading-snug drop-shadow-md">
                {project.title}
              </h3>
            </div>

            {/* RIGHT ACTION */}
            <div className="flex items-center gap-2">

              {/* Arrow */}
              <motion.div
                variants={{
                  rest: { rotate: 45, scale: 1 },
                  hover: { rotate: 90, scale: 1.15 },
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.25, 1, 0.5, 1],
                }}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-white/70 text-white"
              >
                <FaArrowUp className="text-xs" />
              </motion.div>

              {/* Text */}
              <motion.span
                variants={{
                  rest: { opacity: 0, x: -10 },
                  hover: { opacity: 1, x: 0 },
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.25, 1, 0.5, 1],
                }}
                className="text-xs text-white font-medium tracking-wide whitespace-nowrap"
              >
                View Project →
              </motion.span>

            </div>

          </div>

        </div>

      </motion.div>
    </Link>
  );
};

export default ProjectCard;