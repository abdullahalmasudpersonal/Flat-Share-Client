import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSingleUser: build.query({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
    getMyUserProfileData: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `/user/me/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
    updateMyProfile: build.mutation({
      query: (data) => ({
        url: "/user/update-my-profile",
        method: "PATCH",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.user],
    }),
    updateUserProfileData: build.mutation({
      query: (data) => ({
        url: `/user/${data?.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useGetSingleUserQuery,
  useGetMyUserProfileDataQuery,
  useUpdateMyProfileMutation,
  useUpdateUserProfileDataMutation,
} = userApi;
