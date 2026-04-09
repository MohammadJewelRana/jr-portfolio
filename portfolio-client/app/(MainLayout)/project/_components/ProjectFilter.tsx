const ProjectFilter = ({ active, setActive, categories }: any) => {
  return (
    <div className="py-10">
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((cat: string) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition
            ${
              active === cat
                ? "bg-main text-black shadow"
                : "bg-white border text-gray-600 hover:text-main"
            }`}
          >
            {cat === "All"
              ? "All"
              : cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};
export default ProjectFilter;