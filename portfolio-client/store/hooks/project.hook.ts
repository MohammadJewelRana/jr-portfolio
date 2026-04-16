import toast from "react-hot-toast";
import {
  useCreateProjectMutation,
  useDeleteProjectMutation,
  useGetAllProjectsQuery,
  useGetSingleProjectQuery,
  useUpdateProjectMutation,
  useLikeProjectMutation,
} from "../services/project.api";

// 🔹 Create Project
export const useCreateProject = () => {
  const [createProject, { isLoading, error }] =
    useCreateProjectMutation();

  const create = async (data: any) => {
    try {
      await createProject(data).unwrap();
      toast.success("Project created successfully 🚀");
    } catch (err: any) {
      toast.error("Failed to create project!");
      console.error(err);
    }
  };

  return { create, isLoading, error };
};

// 🔹 Get All Projects
export const useGetAllProjects = (filters: any) => {
  const { data, error, isLoading } = useGetAllProjectsQuery(filters);

  let projects: any[] = [];

  if (data?.success) {
    projects = data.data;
  }

  return {
    projects,
    isLoading,
    isError: !!error,
  };
};

// 🔹 Get Single Project (ID OR SLUG)
export const useGetSingleProject = (idOrSlug: string) => {
  const { data, error, isLoading } = useGetSingleProjectQuery(idOrSlug, {
    skip: !idOrSlug,
  });

  let project = null;

  if (data?.success) {
    project = data.data;
  }

  if (error) {
    toast.error("Failed to fetch project!");
  }

  return {
    project,
    isLoading,
    isError: !!error,
  };
};

// 🔹 Update Project
export const useUpdateProject = () => {
  const [updateProject, { isLoading, error }] =
    useUpdateProjectMutation();

  const update = async (id: string, data: any) => {
    try {
      await updateProject({ id, data }).unwrap();
      toast.success("Project updated successfully ✨");
    } catch (err) {
      console.log(err);
      toast.error("Failed to update project!");
      
    }
  };

  return { update, isLoading, error };
};

// 🔹 Delete Project
export const useDeleteProject = () => {
  const [deleteProject, { isLoading, error }] =
    useDeleteProjectMutation();

  const remove = async (id: string) => {
    try {
      await deleteProject(id).unwrap();
      toast.success("Project deleted successfully 🗑");
    } catch (err) {
      toast.error("Failed to delete project!");
    }
  };

  return { remove, isLoading, error };
};

// 🔹 Like Project
export const useLikeProject = () => {
  const [likeProject, { isLoading }] = useLikeProjectMutation();

  const like = async (id: string) => {
    try {
      await likeProject(id).unwrap();
    } catch (err) {
      toast.error("Failed to like project!");
    }
  };

  return { like, isLoading };
};