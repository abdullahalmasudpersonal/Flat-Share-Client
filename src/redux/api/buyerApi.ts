import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const buyerApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllBuyer: build.query({
      query: () => ({
        url: "/buyer",
        method: "GET",
      }),
      providesTags: [tagTypes.buyer],
    }),
    getSingleBuyer: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `/buyer/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.buyer],
    }),
    updateSingleBuyer: build.mutation({
      query: (data) => ({
        url: `/buyer/${data?.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.buyer],
    }),
  }),
});

export const {
  useGetAllBuyerQuery,
  useGetSingleBuyerQuery,
  useUpdateSingleBuyerMutation,
} = buyerApi;
