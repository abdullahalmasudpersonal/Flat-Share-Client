import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const sellerApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllSeller: build.query({
      query: () => ({
        url: "/seller",
        method: "GET",
      }),
      providesTags: [tagTypes.seller],
    }),
    getSingleSeller: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `/seller/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.seller],
    }),
    updateSingleSeller: build.mutation({
      query: (data) => ({
        url: `/seller/${data?.id}`,
        method: "PATCH",
        data: data?.body,
      }),
      invalidatesTags: [tagTypes.seller],
    }),
  }),
});

export const {
  useGetAllSellerQuery,
  useGetSingleSellerQuery,
  useUpdateSingleSellerMutation,
} = sellerApi;
