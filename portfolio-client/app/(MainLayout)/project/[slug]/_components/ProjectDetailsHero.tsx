import Image from "next/image";

const fallbackImg = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d";

const ProjectHero = ({ project }: any) => {
  const heroImg = project?.images?.[0] || fallbackImg;

  return (
    <>
      {/* ================= MOBILE VERSION ================= */}
      <section className="block md:hidden relative h-[55vh] overflow-hidden">
        {/* Background Image */}
        <Image
          src={fallbackImg}
          alt="bg"
          fill
          priority
          className="object-cover"
        />

        {/* Gradient Overlay (IMPORTANT) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-0 w-full px-4 pb-6 text-white space-y-3">
          {project.category && (
            <p className="text-main text-xs uppercase tracking-widest">
              {project.category}
            </p>
          )}

          <h1 className="text-2xl font-bold leading-snug drop-shadow-md">
            {project.title}
          </h1>

          {project.description && (
            <p className="text-white/80 text-sm leading-relaxed line-clamp-3">
              {project.description}
            </p>
          )}

          {/* ONE LINE BUTTONS */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar pt-2">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                className="flex-shrink-0 px-4 py-2 bg-main text-black rounded-full text-xs font-medium whitespace-nowrap"
              >
                🚀 Live
              </a>
            )}

            {project.githubClient && (
              <a
                href={project.githubClient}
                target="_blank"
                className="flex-shrink-0 px-4 py-2 bg-white/20 text-white rounded-full text-xs whitespace-nowrap"
              >
                💻 Client
              </a>
            )}

            {project.githubServer && (
              <a
                href={project.githubServer}
                target="_blank"
                className="flex-shrink-0 px-4 py-2 bg-white/10 text-white rounded-full text-xs whitespace-nowrap"
              >
                🖥 Server
              </a>
            )}
          </div>
        </div>
      </section>

      {/* ================= DESKTOP VERSION ================= */}
      <section className="hidden md:block relative lg:h-[70vh] md:h-[50vh] overflow-hidden">
        <Image src={heroImg} alt="hero" fill className="object-cover" />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute bottom-0 w-full px-6 md:px-20 pb-16 text-white">
          <div className="backdrop-blur-xl bg-white/10 p-6 md:p-4 lg:p-8 rounded-3xl space-y-5 ">
            {project.category && (
              <p className="text-main text-xs uppercase tracking-widest">
                {project.category}
              </p>
            )}

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              {project.title}
            </h1>

            {project.description && (
              <p className="text-white/70 max-w-xl">{project.description}</p>
            )}

            <div className="flex flex-wrap gap-4 pt-2">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  className="px-6 py-3 bg-main text-black rounded-full font-semibold"
                >
                  🚀 Live Demo
                </a>
              )}

              {project.githubClient && (
                <a
                  href={project.githubClient}
                  target="_blank"
                  className="px-6 py-3 bg-white/20 rounded-full"
                >
                  💻 Client Code
                </a>
              )}

              {project.githubServer && (
                <a
                  href={project.githubServer}
                  target="_blank"
                  className="px-6 py-3 bg-white/10 rounded-full"
                >
                  🖥 Server Code
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectHero;
