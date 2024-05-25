import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const postFlatApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    postFlat: build.mutation({
      query: (postData) => ({
        url: `/flat`,
        method: "POST",
        data: postData,
      }),
      invalidatesTags: [tagTypes.postFlat],
    }),
  }),
});

export const { usePostFlatMutation } = postFlatApi;
