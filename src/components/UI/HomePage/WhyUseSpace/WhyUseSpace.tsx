"use client";
import { Box, Card, Container, Grid, Typography } from "@mui/material";
import { purple } from "@mui/material/colors";
import React, { useEffect } from "react";
import EveryThreeMinsImg from "../../../../assets/WhyUseSpace/EveryThreeMins.svg";
import KeysImg from "../../../../assets/WhyUseSpace/Keys.svg";
import WelcomeImg from "../../../../assets/WhyUseSpace/Welcome.svg";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { gray } from "@/components/Shared/ThemeColor/getLPTheme";

const WhyUseSpace = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <Box sx={{
      pt: 4,
      pb: 6,
    }}>
      <Typography
        data-aos="fade-down"
        textAlign="center"
        variant="h3"
        fontFamily="serif"
        fontSize='clamp(2rem,8vw, 3rem)'
        mt={10}
        mb={10}
      >
        Why use Spare{" "}
        <Box fontFamily="serif" component="span" sx={{ color: purple[600] }}>
          Flat?
        </Box>
      </Typography>
      <Box sx={{ textAlign: "center" }}>
        <Container sx={{ margin: "30px auto" }}>
          <Grid container spacing={2}>
            <Card
              data-aos="fade-right"
              sx={{
                maxWidth: 345,
                margin: "auto",
                marginBottom: "20px",
                boxShadow: "none",
              }}
            >
              <Box display="flex" justifyContent="center">
                {" "}
                <Image
                  src={EveryThreeMinsImg}
                  height="110"
                  width="110"
                  alt=""
                />
              </Box>
              <Box mb={2}>
                <Typography
                  color="purple"
                  fontWeight={700}
                  variant="h6"
                  mt={3}
                  mb={2}
                  fontFamily="serif"
                >
                  We&apos;re the busiest
                </Typography>
                <Typography fontFamily="serif">
                  Every 3 minutes someone finds a flatmate on SpareRoom. With
                  the biggest selection of ads, you&#39;zll find yours.
                </Typography>
              </Box>
            </Card>
            <Card
              data-aos="fade-right"
              sx={{
                maxWidth: 345,
                margin: "auto",
                marginBottom: "20px",
                boxShadow: "none",
              }}
            >
              <Box display="flex" justifyContent="center">
                {" "}
                <Image src={KeysImg} height="130" width="160" alt="" />
              </Box>
              <Box mb={2}>
                <Typography
                  color="purple"
                  fontWeight={700}
                  variant="h6"
                  mt={3}
                  mb={2}
                  fontFamily="serif"
                >
                  Safety
                </Typography>
                <Typography fontFamily="serif">
                  Your safety is our top priority. We have a team of
                  moderators working 7 days a week to check ads and content.
                </Typography>
              </Box>
            </Card>
            <Card
              data-aos="fade-right"
              sx={{
                maxWidth: 345,
                margin: "auto",
                marginBottom: "20px",
                boxShadow: "none",
              }}
            >
              <Box display="flex" justifyContent="center">
                {" "}
                <Image src={WelcomeImg} height="130" width="180" alt="" />
              </Box>
              <Box mb={2}>
                <Typography
                  color="purple"
                  fontWeight={700}
                  variant="h6"
                  mt={3}
                  mb={2}
                  fontFamily="serif"
                >
                  We&rsquo;re all about people
                </Typography>
                <Typography fontFamily="serif">
                  Everyone&apos;s idea of the perfect housemate is different,
                  so search based on what&apos;s important to you.
                </Typography>
              </Box>
            </Card>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default WhyUseSpace;
