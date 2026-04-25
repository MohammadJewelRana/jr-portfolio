import Image from "next/image";
import { motion } from "framer-motion";
import ProjectGallerySkeleton from "@/components/Project/ProjectDetails/ProjectGallerySkeleton";

const fallbackImg = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d";

const ProjectGallery = ({ project, isLoading }: any) => {
  if (isLoading || !project) return <ProjectGallerySkeleton />;
  const images = [fallbackImg, fallbackImg, fallbackImg];
  //   const images =
  //     project?.images?.length > 0
  //       ? project.images
  //       : [fallbackImg, fallbackImg, fallbackImg];

  return (
    <section className="space-y-6">
      {/* Heading */}
      <div className="space-y-2">
        <p className="text-sm uppercase tracking-widest text-main font-medium">
          Project Showcase
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Gallery
        </h2>

        <div className="w-14 h-[3px] bg-main rounded-full" />
      </div>

      {/* Gallery */}
      <div className="grid sm:grid-cols-2 gap-6">
        {images.map((img: string, i: number) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="overflow-hidden rounded-xl"
          >
            <Image
              src={img || fallbackImg}
              alt="project"
              width={600}
              height={400}
              className="w-full h-[240px] object-cover transition duration-300 hover:scale-105"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectGallery;
