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
    updateConfirmBooking: build.mutation({
      query: (data) => ({
        url: `/booking/booking-request/${data?.id}`,
        method: "PATCH",
        data: data?.body,
      }),
      invalidatesTags:[tagTypes.bookingFlat]
    }),
  }),
});

export const { useCreateBookingFlatMutation, useGetBookingFlatQuery, useUpdateConfirmBookingMutation } =
  bookingApi;
