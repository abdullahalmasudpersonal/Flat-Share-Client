import { TUser } from "./user.types";

export type TFlat = {
  id?: string;
  flatNo?: string;
  flatName: string;
  email?: string;
  squareFeet?: number;
  totalBedrooms?: number;
  totalRooms?: number;
  utilitiesDescription?: string;
  location?: string;
  description?: string;
  amenities?: string;
  rent?: number;
  advanceAmount?: number;
  availability?: boolean;
  viewFlat?: number;
  flatPhoto?: string;
  isDeleted?: boolean;
  createdAt?: string;
  updatedAt?: string;
  user?: TUser;
  _count?: {
    booking: number;
  };
};
