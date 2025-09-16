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

export type TAdminProfile = {
  id?: string;
  name: string;
  role?: string;
  email?: string;
  status?:string;
  contactNumber?: string;
  profilePhoto?: string;
  createdAt?: string;
};

export type TProfile = {
  id?: string;
  name: string;
  role?: string;
  email?: string;
  bio?: string;
  profession?: string;
  contactNumber?: string;
  address?: string;
  gender?: string;
  profilePhoto?: string;
  averageRating?: string;
  status?: string;
  createdAt?: string;
};
