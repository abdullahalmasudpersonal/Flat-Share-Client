"use client";
import React, { useEffect } from "react";
import { alpha } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import "./HeroSection.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { gray } from "@/components/Shared/ThemeColor/getLPTheme";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <Box
      //   id="hero"
      sx={(theme) => ({
        width: "100%",
        backgroundImage:
          theme.palette.mode === "light"
            ? "linear-gradient(180deg, #efcefd, #FFF)"
            : `linear-gradient(#02294F, ${alpha("#090E10", 0.0)})`,
        backgroundSize: "100% 40%",
        backgroundRepeat: "no-repeat",
      })}
    /*       sx={{ backgroundColor: "purple" }} */
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 5, sm: 6 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: "100%", sm: "90%" } }}>
          <Typography
            data-aos="fade-down-left"
            variant="h1"
            sx={{
              flexDirection: { xs: "column", md: "row" },
              alignSelf: "center",
              textAlign: "center",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontFamily: "cursive",
            }}
          >
            Find Your Flat-mate <Typography sx={{
              display: 'inline',
              fontFamily: "cursive",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              color: (theme) =>
                theme.palette.mode === "light"
                  ? "primary.main"
                  : "primary.light",
            }}>Today!</Typography>

          </Typography>

          <Typography
            data-aos="fade-right"
            textAlign="center"
            color='rgb(21, 13, 12)'
            // color="text.secondary"
            sx={{
              mt: -2,
              mb: 2,
              alignSelf: "center",
              width: { sm: "80%", md: "80%", fontFamily: "cursive" },
            }}
          >
            The BD&rsquo;s Number 1 Flatshare Site. Elevate your experience with
            top-tier features and services.
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignSelf="center"
            spacing={1}
            useFlexGap
          // sx={{ pt: 0, width: { xs: "100%", sm: "auto" } }}
          >
            <Link href={`/dashboard/seller/post-ad`}>
              <Button
                data-aos="fade-down-right"
                className="glow-on-hover"
                sx={{ padding: "13px 50px", fontSize: "15px" }}
              // variant="contained"
              //color="primary"
              >
                Share Your Flat
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;
