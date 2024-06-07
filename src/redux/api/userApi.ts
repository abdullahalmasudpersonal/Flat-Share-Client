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
    getAllSeller: build.query({
      query: () => ({
        url: "/user/seller",
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
    getSingleSeller: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `/user/seller/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),

    updateSingleSellerFormAdmin: build.mutation({
      query: (data) => ({
        url: `/user/seller/${data?.id}`,
        method: "PATCH",
        data: data?.body,
      }),
      invalidatesTags: [tagTypes.user],
    }),

    getAllBuyer: build.query({
      query: () => ({
        url: "/user/buyer",
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),

    getSingleBuyer: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `/user/buyer/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),

    updateSingleBuyerFormAdmin: build.mutation({
      query: (data) => ({
        url: `/user/buyer/${data?.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.user],
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
  useGetAllSellerQuery,
  useGetSingleSellerQuery,
  useUpdateSingleSellerFormAdminMutation,
  useGetAllBuyerQuery,
  useGetSingleBuyerQuery,
  useUpdateSingleBuyerFormAdminMutation,
  useGetMyUserProfileDataQuery,
  useUpdateMyProfileMutation,
  useUpdateUserProfileDataMutation,
} = userApi;
