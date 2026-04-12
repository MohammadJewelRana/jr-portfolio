import { baseApi } from "../baseApi";

export const contactApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    // 🔹 Create Contact (Send Message)
    createContact: builder.mutation({
      query: (data) => ({
        url: "/contacts",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Contacts"],
    }),

    // 🔹 Get All Contacts (Admin)
    getAllContacts: builder.query({
      query: () => ({
        url: "/contacts",
      }),
      providesTags: ["Contacts"],
    }),

    // 🔹 Mark as Read
    markAsRead: builder.mutation({
      query: (id: string) => ({
        url: `/contacts/${id}/read`,
        method: "PATCH",
      }),
      invalidatesTags: ["Contacts"],
    }),

  }),

  overrideExisting: true,
});

export const {
  useCreateContactMutation,
  useGetAllContactsQuery,
  useMarkAsReadMutation,
} = contactApi;