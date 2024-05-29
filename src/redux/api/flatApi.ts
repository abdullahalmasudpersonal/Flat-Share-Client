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
      invalidatesTags: [tagTypes.postFlat],
    }),
    getAllFlat: build.query({
      query: () => {
        return {
          url: "/flat",
          method: "GET",
        };
      },
      providesTags: [tagTypes.postFlat],
    }),

    getSingleFlat: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `/flat/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.postFlat],
    }),
  }),
});

export const {
  usePostFlatMutation,
  useGetAllFlatQuery,
  useGetSingleFlatQuery,
} = flatApi;
