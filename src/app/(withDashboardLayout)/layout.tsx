"use client";
import DashboardDrawer from "@/components/Dashboard/DashboardDrawer/DashboardDrawer";
import { isLogedIn } from "@/services/auth.services";
import { useRouter } from "next/navigation";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  if (!isLogedIn()) {
    return router.push("/login");
  }

  return <DashboardDrawer>{children}</DashboardDrawer>;
};

export default DashboardLayout;
