import ProjectFeaturesSkeleton from "@/components/Project/ProjectDetails/ProjectFeaturesSkeleton";
import { motion } from "framer-motion";

const ProjectFeatures = ({ project, isLoading }: any) => {
  if (isLoading || !project) return <ProjectFeaturesSkeleton />;
  const features =
    project?.features?.length > 0
      ? project.features
      : ["No features available", "Coming soon..."];

  return (
    <section className="space-y-4">

      {/* Heading */}
      <div className="space-y-2">
        <p className="text-sm uppercase tracking-widest text-main font-medium">
          Key Highlights
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Features
        </h2>

        <div className="w-14 h-[3px] bg-main rounded-full" />
      </div>

      {/* Features List */}
      <div className="grid sm:grid-cols-2 gap-x-10 gap-y-3">
        {features.map((f: string, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-start gap-3"
          >
            {/* Bullet */}
            <div className="mt-2 w-2 h-2 bg-main rounded-full flex-shrink-0" />

            {/* Text */}
            <p className="text-gray-700 leading-relaxed">
              {f}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectFeatures;