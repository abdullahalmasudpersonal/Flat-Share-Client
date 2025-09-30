import { TBooking } from "./booking.types";

export type TPayment = {
  id?: string;
  bookingId?: string;
  amount?: number;
  transactionId?: string;
  payStatus?: string;
  paymentGetwayData?: JSON;
  createdAt?: string;
  booking:TBooking
};
