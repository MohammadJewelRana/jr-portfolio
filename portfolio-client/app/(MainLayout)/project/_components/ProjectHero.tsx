const ProjectHero = ({ total }: { total: number }) => {
  return (
    <div className="relative overflow-hidden">
      {/* 🔥 Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ecfff7] via-white to-[#f0fff9af]" />

      {/* Glow Effects */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-main/20 rounded-full blur-3xl" />

      <div className="absolute -top-24 -right-24 w-80 h-80 bg-main/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* 🔥 LEFT */}
          <div className="max-w-xl text-center md:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 text-main text-xs px-4 py-1.5 rounded-full bg-main/10 border border-main/20 mb-5 backdrop-blur-md">
              🚀 Portfolio Showcase
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-extrabold text-black leading-tight mb-4">
              Explore My{" "}
              <span className="bg-gradient-to-r from-main to-green-400 bg-clip-text text-main">
                Projects
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Real-world applications, scalable systems, and modern UI
              experiences crafted with performance and precision.
            </p>
          </div>

          {/* 🔥 RIGHT (STATS CARD) */}
          <div className="grid   grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full md:w-auto">
            {/* Card */}
            <div className="bg-white/70 backdrop-blur-xl rounded-2xl px-6 py-5 shadow-[0_10px_40px_rgba(0,0,0,0.08)] text-center min-w-[100px]">
              <h3 className="text-2xl font-bold text-main">{total}+</h3>
              <p className="text-xs text-gray-500 mt-1">Projects</p>
            </div>

            {/* Card */}
            <div className="bg-white/70 backdrop-blur-xl rounded-2xl px-6 py-5 shadow-[0_10px_40px_rgba(0,0,0,0.08)] text-center min-w-[100px]">
              <h3 className="text-2xl font-bold text-black">5+</h3>
              <p className="text-xs text-gray-500 mt-1">Technologies</p>
            </div>

            {/* Card */}
            <div className="bg-white/70 backdrop-blur-xl rounded-2xl px-6 py-5 shadow-[0_10px_40px_rgba(0,0,0,0.08)] text-center min-w-[100px]">
              <h3 className="text-2xl font-bold text-black">100%</h3>
              <p className="text-xs text-gray-500 mt-1">Responsive</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHero;
