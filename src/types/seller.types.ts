export type TSeller = {
  id: string;
  name: string;
  email: string;
  bio?: string;
  profession: string;
  contactNumber: string;
  address: string;
  gender: "MALE" | "FEMALE";
  profilePhoto?: string;
  averageRating: number;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
};