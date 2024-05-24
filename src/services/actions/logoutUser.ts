import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { deleteCookies } from "./deleteCookise";
import { authKey } from "@/contents/authkey";

export const logoutUser = (router: AppRouterInstance) => {
  localStorage.removeItem(authKey);
  deleteCookies([authKey, "accessToken"]);
  router.push("/");
  router.refresh();
};
