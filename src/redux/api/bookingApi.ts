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
    }),
  }),
});

export const { useCreateBookingFlatMutation } = bookingApi;
