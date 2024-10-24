import { baseApi } from "./baseApi";

export const PaymentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    initPayment: build.mutation({
      query: (bookingId) => ({
        url: `/payment/init-payment/${bookingId}`,
        method: "POST",
      }),
    }),
    getPayments: build.query({
      query: () => ({
        url: `/payment`,
        method: "GET",
      }),
    }),
  }),
});

export const { useInitPaymentMutation, useGetPaymentsQuery } = PaymentApi;
