import {
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import flatShare from "@/assets/landing_page/ShareFlat.jpg";
import FacebookIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/X";

const AboutUsPage = () => {
  return (
    <Box marginTop="130px" minHeight="80vh">
      <Container>
        <Typography
          fontSize="24px"
          fontWeight="bold"
          color="gray"
          marginBottom="10px"
        >
          Mission Statement:
        </Typography>
        <Grid container>
          <Grid xs={12} md={4}>
            <Box
              sx={{
                /*  height: 500, */
                width: "100%",
                overflow: "hidden",
                borderRadius: 1,
              }}
            >
              <Image
                height={500}
                width={500}
                src={flatShare}
                alt="User Photo"
              />
            </Box>
          </Grid>
          <Grid xs={12} md={8}>
            <Box marginLeft="20px">
              <Typography
                fontSize="21px"
                fontWeight="bold"
                color="primary"
                marginBottom="10px"
              >
                Life&apos;s better when you share it
              </Typography>
              <Typography marginBottom="10px">
                Living with the right people beats living on your own any day.
                When you live with the right people, you don&apos;t just share
                your space - you share your life. They become more than your
                flatmates, more than the people ahead of you in the queue for
                the bathroom. They&apos;re your friends. SpareRoom is all about
                helping you find those people. The people who make sharing
                amazing.
              </Typography>
              <Typography marginBottom="10px">
                They become more than your flatmates, more than the people ahead
                of you in the queue for the bathroom. They&apos;re your friends.
              </Typography>
              <Typography>
                SpareRoom is all about helping you find those people. The people
                who make sharing amazing.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Typography
          fontSize="24px"
          fontWeight="bold"
          color="gray"
          marginBottom="10px"
          marginTop="30px"
        >
          Team Information:
        </Typography>

        <Typography
          fontSize="24px"
          fontWeight="bold"
          color="gray"
          marginBottom="10px"
          marginTop="30px"
        >
          Contact Information:
        </Typography>
        <Typography>Email: alfinkhan@gmail.com</Typography>
        <Typography>Phone: 015968536322</Typography>
        <Typography>Connect our social media:</Typography>
        <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          sx={{
            color: "text.secondary",
          }}
        >
          <IconButton
            color="inherit"
            href="https://github.com"
            aria-label="GitHub"
            sx={{ alignSelf: "center" }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://twitter.com"
            aria-label="X"
            sx={{ alignSelf: "center" }}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.linkedin.com"
            aria-label="LinkedIn"
            sx={{ alignSelf: "center" }}
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Container>
    </Box>
  );
};

export default AboutUsPage;
