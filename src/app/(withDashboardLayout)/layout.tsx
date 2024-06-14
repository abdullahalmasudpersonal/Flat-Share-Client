"use client";
import { useEffect } from "react";
import DashboardDrawer from "../../components/Dashboard/DashboardDrawer/DashboardDrawer";
import { isLogedIn } from "../../services/auth.services";
import { useRouter } from "next/navigation";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  useEffect(() => {
    if (!isLogedIn()) {
      router.push("/login");
    }
  }, [router]);

  return <DashboardDrawer>{children}</DashboardDrawer>;
};

export default DashboardLayout;
