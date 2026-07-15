"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";

import ProjectGallerySkeleton from "@/components/Project/ProjectDetails/ProjectGallerySkeleton";

const fallbackImg =
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d";

const ProjectGallery = ({ project, isLoading }: any) => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (isLoading || !project) {
    return <ProjectGallerySkeleton />;
  }

  const images =
    project?.images?.length > 0
      ? project.images
      : [fallbackImg, fallbackImg, fallbackImg];

  const slides = images.map((img: string) => ({
    src: img || fallbackImg,
  }));

  return (
    <>
      <section className="space-y-6">
        {/* Heading */}
        <div>
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-main font-semibold">
            Project Showcase
          </p>

          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Gallery
          </h2>

          <div className="mt-3 h-1 w-16 rounded-full bg-main" />
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {images.map((img: string, index: number) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onClick={() => {
                setCurrentIndex(index);
                setOpen(true);
              }}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-xl bg-gray-100 shadow-md"
            >
              <Image
                src={img || fallbackImg}
                alt={`Project ${index + 1}`}
                fill
                priority={index === 0}
                sizes="(max-width:640px) 100vw,
                       (max-width:1024px) 50vw,
                       50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/20">
                <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-gray-900 opacity-0 transition duration-300 group-hover:opacity-100">
                  View Image
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={currentIndex}
        slides={slides}
        plugins={[Zoom]}
      />
    </>
  );
};

export default ProjectGallery;