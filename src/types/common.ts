import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { USER_ROLE } from "../contents/role";

export type IMeta = {
  page: number;
  limit: number;
  total: number;
};

export type UserRole = keyof typeof USER_ROLE;

export interface DrawerItem {
  title: string;
  path: string;
  parentPath?: string;
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
  child?: DrawerItem[];
}

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export enum BookingStatus {
  panding = "PENDING",
  booked = "BOOKED",
  rejected = "REJECTED",
}

export enum UserStatus {
  blocked = "BLOCKED",
  active = "ACTIVE",
  pending = "PENDING",
  deleted = "DELETED",
}
