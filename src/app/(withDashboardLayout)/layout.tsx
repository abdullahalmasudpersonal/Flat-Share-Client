"use client";
import { useEffect } from "react";
import DashboardDrawer from "../../components/Dashboard/DashboardDrawer/DashboardDrawer";
import { isLogedIn } from "../../services/auth.services";
import { useRouter } from "next/navigation";
import { Box } from "@mui/material";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  useEffect(() => {
    if (!isLogedIn()) {
      router.push("/login");
    }
  }, [router]);

  return (
    <DashboardDrawer>
      <Box
        sx={{
          maxWidth: "1600px",
          width: "100%",
          margin: "0 auto",
        }}
      >
        {children}
      </Box>
    </DashboardDrawer>
  )
};

export default DashboardLayout;
