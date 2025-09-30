import { tagTypes } from "../tag-types";
import { baseApi } from "../baseApi/baseApi";

export const PaymentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    initPayment: build.mutation({
      query: (bookingId) => ({
        url: `/payment/init-payment/${bookingId}`,
        method: "POST",
      }),
      invalidatesTags: [tagTypes.paymentBookingFlat],
    }),
    getPayments: build.query({
      query: () => ({
        url: `/payment/all-payment`,
        method: "GET",
      }),
      providesTags: [tagTypes.paymentBookingFlat],
    }),
  }),
});

export const { useInitPaymentMutation, useGetPaymentsQuery } = PaymentApi;
