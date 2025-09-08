"use client";
import {
  Box,
  createTheme,
  CssBaseline,
  PaletteMode,
  ThemeProvider,
} from "@mui/material";
import React, { useEffect } from "react";
import Navber from "../../components/Shared/Navber/Navber";
import Footer from "../../components/Shared/Footer/Footer";
import getLPTheme from "@/components/Shared/ThemeColor/getLPTheme";
import "aos/dist/aos.css";
import AOS from "aos";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [mode, setMode] = React.useState<PaletteMode>("light");
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });
  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <>
      {/*  <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
        <CssBaseline /> */}
      <Navber />
      {/* <Navber mode={mode} toggleColorMode={toggleColorMode} /> */}
      <Box>{children}</Box>
      <Footer />
      {/*    </ThemeProvider> */}
    </>
  );
};

export default CommonLayout;
