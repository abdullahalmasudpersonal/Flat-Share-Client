import { tagTypes } from "../tag-types";
import { baseApi } from "../baseApi/baseApi";

export const bookingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createBooking: build.mutation({
      query: (bookingData) => ({
        url: `/booking/create-booking`,
        method: "POST",
        data: bookingData,
      }),
      invalidatesTags: [tagTypes.booking],
    }),
    getAllBooking: build.query({
      query: () => ({
        url: "/booking/all-booking",
        method: "GET",
      }),
      providesTags: [tagTypes.booking],
    }),
    updateConfirmBooking: build.mutation({
      query: (data) => {
        console.log(data,'data')
        return {
          url: `/booking/booking-request/${data?.id}`,
          method: "PATCH",
        };
      },
      invalidatesTags: [tagTypes.booking],
    }),
  }),
});

export const {
  useCreateBookingMutation,
  useGetAllBookingQuery,
  useUpdateConfirmBookingMutation,
} = bookingApi;
