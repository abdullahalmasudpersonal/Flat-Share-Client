import { Box } from "@mui/material";
import React from "react";
import Navber from "../../components/Shared/Navber/Navber";
import Footer from "../../components/Shared/Footer/Footer";

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
