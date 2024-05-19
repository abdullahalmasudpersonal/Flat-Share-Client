import Footer from "@/components/Shared/Footer/Footer";
import Navber from "@/components/Shared/Navber/Navber";
import { Box } from "@mui/material";
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navber />
      <Box>{children}</Box>
      <Footer />
    </>
  );
};

export default CommonLayout;
