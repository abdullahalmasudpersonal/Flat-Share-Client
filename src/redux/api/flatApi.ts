import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const flatApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    postFlat: build.mutation({
      query: (postData) => ({
        url: `/flat`,
        method: "POST",
        data: postData,
      }),
      invalidatesTags: [tagTypes.flat],
    }),
    getAllFlat: build.query({
      query: () => {
        return {
          url: "/flat",
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
        url: `/flat/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.flat],
    }),
    deleteSingleFlat: build.mutation({
      query: (id) => ({
        url: `/flat/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.flat],
    }),
  }),
});

export const {
  usePostFlatMutation,
  useGetAllFlatQuery,
  useGetSellerFlatsQuery,
  useGetSingleFlatQuery,
  useDeleteSingleFlatMutation,
} = flatApi;
