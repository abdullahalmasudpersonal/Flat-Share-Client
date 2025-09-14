import { tagTypes } from "../tag-types";
import { baseApi } from "../baseApi/baseApi";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    updateSingleAdmin: build.mutation({
      query: (data) => ({
        url: `/admin/${data?.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const { useUpdateSingleAdminMutation } = adminApi;
