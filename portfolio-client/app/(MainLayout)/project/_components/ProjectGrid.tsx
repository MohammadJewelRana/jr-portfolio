import ProjectCard from "@/components/Project/ProjectCard";
import { motion } from "framer-motion";

const ProjectGrid = ({ projects }: any) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects?.map((project: any, i: number) => (
        <motion.div
          key={project._id || i}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="h-[250px] md:h-[300px]"
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectGrid;