import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    updateUserStatus: build.mutation({
      query: (data) => ({
        url: `/user/update-user-status/${data?.id}`,
        method: "PATCH",
        data: data?.body,
      }),
      invalidatesTags: [tagTypes.buyer, tagTypes.seller],
    }),
  }),
});

export const { useUpdateUserStatusMutation } = userApi;
