"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { useGetSingleProject } from "@/store/hooks/project.hook";

const Page = () => {
  const params = useParams();
  const slug = params?.slug as string;

  const { project, isLoading } = useGetSingleProject(slug);
  console.log(project);

  // 🔥 Loading
  if (isLoading) {
    return (
      <div className="text-center py-20 text-gray-500">Loading project...</div>
    );
  }

  // 🔥 Not found
  if (!project) {
    return (
      <div className="text-center py-20 text-red-500">Project not found</div>
    );
  }

  return (
    <div className="bg-[#f8fffb] text-black">
      {/* 🔥 HERO */}
      <div className="relative h-[65vh] overflow-hidden">
        <Image
          src={project.images?.[0]}
          alt={project.title}
          fill
          className="object-cover scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />

        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-main/20 blur-3xl rounded-full" />

        <div className="absolute bottom-0 w-full px-6 md:px-20 pb-16 text-white">
          <div className="backdrop-blur-xl bg-white/5 p-6 md:p-10 rounded-3xl shadow-[0_20px_80px_rgba(0,0,0,0.5)]">
            <p className="text-main text-sm tracking-widest uppercase">
              {project.category}
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mt-2">
              {project.title}
            </h1>

            <p className="text-white/70 mt-4 max-w-xl">{project.description}</p>

            {/* CTA */}
            <div className="flex gap-4 mt-8 flex-wrap">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  className="px-8 py-3 bg-main text-black rounded-full font-semibold shadow-[0_15px_40px_rgba(40,233,140,0.5)] hover:scale-105 transition"
                >
                  🚀 Live Demo
                </a>
              )}

              {project.githubClient && (
                <a
                  href={project.githubClient}
                  target="_blank"
                  className="px-8 py-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition"
                >
                  💻 Client Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 🔥 MAIN */}
      <div className="max-w-7xl mx-auto px-4 py-32 grid grid-cols-1 md:grid-cols-3 gap-16">
        {/* LEFT */}
        <div className="md:col-span-2 space-y-20">
          {/* Overview */}
          <div>
            <h2 className="text-4xl font-bold">Overview</h2>
            <div className="w-16 h-[3px] bg-gradient-to-r from-main to-transparent my-4" />

            <p className="text-lg text-gray-600 leading-loose max-w-3xl">
              {project.description}
            </p>
          </div>

          {/* Features */}
          {project.features && (
            <div>
              <h2 className="text-4xl font-bold mb-8">Key Features</h2>

              <div className="grid sm:grid-cols-2 gap-6">
                {project.features.map((f: string, i: number) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="p-6 rounded-3xl bg-white/60 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(40,233,140,0.2)] transition"
                  >
                    <p className="text-gray-800 font-medium">✨ {f}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Gallery */}
          {project.images && (
            <div>
              <h2 className="text-4xl font-bold mb-8">Gallery</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {project.images.map((img: string, i: number) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, rotate: 1 }}
                    className="relative group rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
                  >
                    <Image
                      src={img}
                      alt="gallery"
                      width={500}
                      height={300}
                      className="object-cover"
                    />

                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-8 sticky top-24 h-fit">
          {/* Tech Stack */}
          <div className="p-6 rounded-3xl bg-white/70 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            <h3 className="font-semibold mb-4 text-lg">Tech Stack</h3>

            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech: string, i: number) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-main/20 to-main/5 text-main text-sm font-medium backdrop-blur-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Status */}
          <div className="p-6 rounded-3xl bg-white/70 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] text-sm">
            <p>
              <b>Status:</b>{" "}
              <span className="text-main capitalize">{project.status}</span>
            </p>

            {project.featured && (
              <p className="mt-2 text-main font-medium">⭐ Featured Project</p>
            )}
          </div>

          {/* Action */}
          <div className="p-6 rounded-3xl bg-main text-black shadow-[0_20px_80px_rgba(40,233,140,0.4)] space-y-4">
            <h3 className="font-bold text-lg">Explore Project</h3>

            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                className="block w-full text-center py-3 bg-black text-white rounded-full hover:scale-105 transition"
              >
                🔗 Live Demo
              </a>
            )}

            {project.githubClient && (
              <a
                href={project.githubClient}
                target="_blank"
                className="block w-full text-center py-3 bg-white/20 rounded-full hover:bg-white/30 transition"
              >
                💻 Client Code
              </a>
            )}

            {project.githubServer && (
              <a
                href={project.githubServer}
                target="_blank"
                className="block w-full text-center py-3 bg-white/10 rounded-full hover:bg-white/20 transition"
              >
                🖥 Server Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
