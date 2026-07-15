import ProjectSidebarSkeleton from "@/components/Project/ProjectDetails/ProjectSidebarSkeleton";

const ProjectSidebar = ({ project, isLoading }: any) => {
  if (isLoading || !project) return <ProjectSidebarSkeleton />;
  return (
    <div className="space-y-6 sticky top-24 h-fit">

      {/* Tech */}
      {project?.technologies?.length > 0 && (
        <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
          <h3 className="font-semibold mb-3 text-gray-800">
            Tech Stack
          </h3>

          <div className="flex flex-wrap gap-2">
            {project?.technologies.map((tech: string, i: number) => (
              <span
                key={i}
                className="px-3 py-1 text-sm rounded-full 
                bg-main/10 text-main border border-main/20
                hover:bg-main/20 transition"
              >
                {tech}
              </span>

            ))}
          </div>
        </div>
      )}

      {/* Status */}
      {(project?.status || project?.featured) && (
        <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm text-sm">

          {project?.status && (
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Status</span>
              <span className="text-main font-medium capitalize">
                {project.status}
              </span>
            </div>
          )}

          {project?.featured && (
            <div className="mt-3 px-3 py-1 bg-main/10 text-main rounded-full inline-block text-xs font-medium">
              ⭐ Featured Project
            </div>
          )}
        </div>
      )}

      {/* Actions */}
      {(project?.liveLink ||
        project?.githubClient ||
        project?.githubServer) && (
        <div className="p-5 rounded-2xl bg-gradient-to-br from-main to-green-400 text-black shadow-lg space-y-3">

          <h3 className="font-bold text-lg">Explore</h3>

          {project?.liveLink && (
            <a
              href={project?.liveLink}
              target="_blank"
              className="block text-center py-2.5 bg-black text-white rounded-full 
              hover:scale-105 transition font-medium"
            >
              🚀 Live Demo
            </a>
          )}

          {project?.githubClient && (
            <a
              href={project?.githubClient}
              target="_blank"
              className="block text-center py-2.5 bg-white/80 text-black rounded-full 
              hover:bg-white transition font-medium"
            >
              💻 Client Code
            </a>
          )}

          {project?.githubServer && (
            <a
              href={project?.githubServer}
              target="_blank"
              className="block text-center py-2.5 bg-black/10 text-black rounded-full 
              hover:bg-black/20 transition font-medium"
            >
              🖥 Server Code
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectSidebar;