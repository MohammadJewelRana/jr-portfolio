"use client";

import ProjectCard from "@/components/Project/ProjectCard";
import ProjectCardSkeleton from "@/components/Project/ProjectCardSkeleton";
import { motion } from "framer-motion";

const ProjectGrid = ({ projects, loading }: any) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      
      {loading
        ? Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-[250px] md:h-[300px]">
              <ProjectCardSkeleton />
            </div>
          ))
        : projects?.map((project: any, i: number) => (
            <motion.div
              key={project._id || i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: i * 0.1, // 🔥 stagger effect
              }}
              className="h-[250px] md:h-[300px]"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
      
    </div>
  );
};

export default ProjectGrid;