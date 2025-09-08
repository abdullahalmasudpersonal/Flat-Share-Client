"use client";
import { Box, Card, Container, createStyles, Grid, Typography } from "@mui/material";
import { purple } from "@mui/material/colors";
import React, { useEffect } from "react";
import EveryThreeMinsImg from "../../../../assets/WhyUseSpace/EveryThreeMins.svg";
import KeysImg from "../../../../assets/WhyUseSpace/Keys.svg";
import WelcomeImg from "../../../../assets/WhyUseSpace/Welcome.svg";
import Image from "next/image";

const WhyUseSpace = () => {
  const services = [
    {
      img: EveryThreeMinsImg,
      title: "We're the busiest",
      des: "Every 3 minutes someone finds a flatmate on SpareRoom. With the biggest selection of ads, you'zll find yours.",
    },
    {
      img: KeysImg,
      title: "Safety",
      des: "Your safety is our top priority. We have a team of moderators working 7 days a week to check ads and content.",
    },
    {
      img: WelcomeImg,
      title: "We’re all about people",
      des: "Everyone's idea of the perfect housemate is different, so search based on what's important to you.",
    },
  ]


  return (
    <Container>
      <Box sx={{ marginBottom: '100px',marginTop:'70px' }}>
        <Typography
          data-aos="fade-down" textAlign="center" variant="h3" fontFamily="serif" fontSize='clamp(2rem,8vw, 3rem)' pb={8}>
          Why use Spare{" "}
          <Box fontFamily="serif" component="span" sx={{ color: purple[600] }}>Flat? </Box>
        </Typography>
        <Grid container spacing={2}>
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                data-aos="fade-right"
                sx={{
                  maxWidth: 345,
                  margin: "auto", textAlign:'center',
                  padding: '20px',
                  boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                }}
              >
                <Box display="flex" justifyContent="center" height={110} >
                  <Image
                    src={service.img}
                    height="110"
                    width="110"
                    alt=""
                  />
                </Box>
                <Box>
                  <Typography
                    color="purple"
                    fontWeight={700}
                    variant="h6"
                    fontFamily="serif"
                    py={2}
                  >
                    {service.title}
                  </Typography>
                  <Typography fontFamily="serif">
                    {service.des}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default WhyUseSpace;
