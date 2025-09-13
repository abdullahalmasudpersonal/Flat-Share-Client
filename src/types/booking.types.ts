import { TFlat } from "./flat.types";
import { TUser } from "./user.types";

export type TBooking = {
  id: string;
  flatId: string;
  email: string;
  status: string;
  paymentStatus: string;
  isDeleted: string;
  createdAt: string;
  updatedAt: string;
  flat:TFlat;
  user:TUser;
}
