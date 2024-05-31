import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const bookingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createBookingFlat: build.mutation({
      query: (bookingData) => ({
        url: `/booking`,
        method: "POST",
        data: bookingData,
      }),
      invalidatesTags: [tagTypes.bookingFlat],
    }),
    getBookingFlat: build.query({
      query: () => ({
        url: "/booking",
        method: "GET",
      }),
      providesTags: [tagTypes.bookingFlat],
    }),
  }),
});

export const { useCreateBookingFlatMutation, useGetBookingFlatQuery } =
  bookingApi;
