"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaServer,
  FaArrowRight,
} from "react-icons/fa";
import ProjectHeroSkeleton from "@/components/Project/ProjectDetails/ProjectHeroSkeleton";

const fallbackImg = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d";

const ProjectHero = ({ project, isLoading }: any) => {
  if (isLoading || !project) {
    return <ProjectHeroSkeleton />;
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-green-100 py-16 lg:py-24">
      {/* Decorative Blur */}
      <div className="absolute -top-32 -left-24 h-80 w-80 rounded-full bg-main/10 blur-3xl" />
      <div className="absolute top-1/2 -right-20 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-purple-300/10 blur-3xl" />

      <div className="container relative z-10 mx-auto px-5 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Category */}
            <span className="inline-flex items-center rounded-full bg-main/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-main">
              {project?.category}
            </span>

            {/* Title */}
            <h1 className="mt-6 text-xl font-extrabold leading-tight text-gray-900 sm:text-4xl lg:text-3xl">
              {project?.title}
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-[12px] leading-8 text-gray-600 lg:text-lg">
              {project?.description}
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              {project?.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-md rounded-xl bg-main px-2 py-2 lg:px-6 lg:py-3 lg:font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
              )}

              {project?.githubClient && (
                <a
                  href={project.githubClient}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-main hover:text-main hover:shadow-lg"
                >
                  <FaGithub />
                  Client Code
                </a>
              )}

              {project?.githubServer && (
                <a
                  href={project.githubServer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-main hover:text-main hover:shadow-lg"
                >
                  <FaServer />
                  Server Code
                </a>
              )}
            </div>
          </motion.div>
          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Background Decoration */}
            <div className="absolute -top-6 -left-6 h-32 w-32 rounded-3xl bg-main/10 blur-2xl" />
            <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-sky-300/20 blur-3xl" />

            {/* Main Image Card */}
            <div className="group relative overflow-hidden rounded-[28px] border border-white/40 bg-white p-3 shadow-[0_20px_60px_rgba(0,0,0,0.12)] backdrop-blur">
              <Image
                src={project?.thumbnail || fallbackImg}
                alt={project?.title}
                width={900}
                height={650}
                priority
                className="aspect-[16/10] w-full rounded-3xl object-cover transition duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-3 rounded-3xl bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
            </div>

            {/* Featured Badge */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-5 left-6 hidden rounded-2xl bg-white px-5 py-4 shadow-xl lg:block"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-main text-white">
                  <FaArrowRight />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-400">
                    Featured
                  </p>
                  <h4 className="font-semibold text-gray-800">
                    Premium Project
                  </h4>
                </div>
              </div>
            </motion.div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute -right-5 top-8 hidden rounded-2xl bg-white/90 px-5 py-4 shadow-xl backdrop-blur lg:block"
            >
              <p className="text-xs uppercase tracking-widest text-gray-400">
                Status
              </p>

              <h3 className="mt-1 font-bold text-green-600">Completed</h3>
            </motion.div>

            {/* Bottom Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -left-4 bottom-24 hidden rounded-2xl bg-white px-5 py-4 shadow-xl lg:block"
            >
              <p className="text-xs uppercase tracking-widest text-gray-400">
                Category
              </p>

              <h3 className="mt-1 font-bold text-gray-800">
                {project?.category}
              </h3>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;
