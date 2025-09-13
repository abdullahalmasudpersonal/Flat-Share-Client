import { TBuyer } from "./buyer.types";
import { TSeller } from "./seller.types";

export type TUser = {
  id: string;
  userId: string;
  email: string;
  password: string;
  role: "SUPER_ADMIN" | "ADMIN" | "SELLER" | "BUYER";
  status: "BLOCKED" | "ACTIVE" | "PENDING" | "DELETED";
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  seller: TSeller;
  buyer: TBuyer;
};
