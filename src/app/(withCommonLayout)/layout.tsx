"use client";
import {
  Box,
  createTheme,
  CssBaseline,
  PaletteMode,
  ThemeProvider,
} from "@mui/material";
import React from "react";
import Navber from "../../components/Shared/Navber/Navber";
import Footer from "../../components/Shared/Footer/Footer";
import getLPTheme from "@/components/Shared/ThemeColor/getLPTheme";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
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
      <Navber/>
      {/* <Navber mode={mode} toggleColorMode={toggleColorMode} /> */}
      <Box>{children}</Box>
      <Footer />
      {/*    </ThemeProvider> */}
    </>
  );
};

export default CommonLayout;
