import { tagTypes } from "../tag-types";
import { baseApi } from "../baseApi/baseApi";

export const flatApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createFlat: build.mutation({
      query: (data) => ({
        url: `/flat/create-flat`,
        method: "POST",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.flat],
    }),
    getAllFlat: build.query({
      query: () => {
        return {
          url: "/flat/all-flat",
          method: "GET",
        };
      },
      providesTags: [tagTypes.flat],
    }),

    getSellerFlats: build.query({
      query: () => ({
        url: `/flat/seller`,
        method: "GET",
      }),
      providesTags: [tagTypes.flat],
    }),

    getSingleFlat: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `/flat/single-flat/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.flat],
    }),
    updateFlat: build.mutation({
      ///// এখাকে অবশ্যই formData নামে প্যারামিটার রাখতে হবে এবং এপিআইতে formData নামে প্যারামিটার পাঠাতে হবে, অন্য নাম ব্যাবহার করলে কাজ করবে না।
      query: ({id, formData}) => {
        return {
          url: `/flat/update-flat/${id}`,
          method: "PATCH",
          data:formData,
          contentType: "multipart/form-data",
        };
      },
      invalidatesTags: [tagTypes.flat],
    }),
    softDeleteSingleFlat: build.mutation({
      query: (id) => ({
        url: `/flat/soft-delete-flat/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.flat],
    }),
    deleteSingleFlat: build.mutation({
      query: (id) => ({
        url: `/delete-flat/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.flat],
    }),
  }),
});

export const {
  useCreateFlatMutation,
  useGetAllFlatQuery,
  useGetSellerFlatsQuery,
  useGetSingleFlatQuery,
  useUpdateFlatMutation,
  useSoftDeleteSingleFlatMutation,
  useDeleteSingleFlatMutation,
} = flatApi;
