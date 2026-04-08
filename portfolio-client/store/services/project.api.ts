import { baseApi } from "../baseApi";

export const projectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    // 🔹 Get All Projects (with filters)
    getAllProjects: builder.query({
      query: (filters: {
        search?: string;
        category?: string;
        stackType?: string;
        status?: string;
      }) => {
        const params = new URLSearchParams();

        if (filters?.search) params.append("search", filters.search);

        if (filters?.category && filters.category !== "all") {
          params.append("category", filters.category);
        }

        if (filters?.stackType && filters.stackType !== "all") {
          params.append("stackType", filters.stackType);
        }

        if (filters?.status && filters.status !== "all") {
          params.append("status", filters.status);
        }

        return {
          url: "/projects",
          params,
        };
      },

      providesTags: ["Projects"],
    }),

    // 🔹 Get Single Project (by ID OR SLUG)
    getSingleProject: builder.query({
      query: (idOrSlug: string) => `/projects/${idOrSlug}`,
      providesTags: ["Projects"],
    }),

    // 🔹 Create Project
    createProject: builder.mutation({
      query: (data) => ({
        url: "/projects/create-project",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Projects"],
    }),

    // 🔹 Update Project
    updateProject: builder.mutation({
      query: ({ id, data }) => ({
        url: `/projects/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Projects"],
    }),

    // 🔹 Delete Project (Soft Delete)
    deleteProject: builder.mutation({
      query: (id: string) => ({
        url: `/projects/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Projects"],
    }),

    // 🔹 Like Project
    likeProject: builder.mutation({
      query: (id: string) => ({
        url: `/projects/like/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["Projects"],
    }),

  }),

  overrideExisting: true,
});

export const {
  useGetAllProjectsQuery,
  useGetSingleProjectQuery,
  useCreateProjectMutation,
  useUpdateProjectMutation,
  useDeleteProjectMutation,
  useLikeProjectMutation,
} = projectApi;