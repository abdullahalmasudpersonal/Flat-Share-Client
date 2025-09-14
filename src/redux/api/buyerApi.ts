import { tagTypes } from "../tag-types";
import { baseApi } from "../baseApi/baseApi";

export const buyerApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllBuyer: build.query({
      query: () => ({
        url: "/buyer/all-buyer",
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
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useGetAllBuyerQuery,
  useGetSingleBuyerQuery,
  useUpdateSingleBuyerMutation,
} = buyerApi;
