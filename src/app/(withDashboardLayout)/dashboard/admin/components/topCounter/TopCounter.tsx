"use client";
import { Box, Card, Grid, Typography } from "@mui/material";
import React from "react";
import TotalBooking from "./TotalBooking";
import VisibilityIcon from "@mui/icons-material/Visibility";
import TotalPost from "./TotalPost";
import { topCounterFunction } from "@/utils/topCounterFunction";
import { useGetAllBuyerQuery } from "@/redux/api/buyerApi";
import { useGetAllSellerQuery } from "@/redux/api/sellerApi";
import PeopleIcon from '@mui/icons-material/People';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';

const TopCounter = () => {
  const { data: sellerData, isLoading } = useGetAllBuyerQuery({});
  const { data: boyerDta } = useGetAllSellerQuery({});
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <TotalPost />
        <TotalBooking />

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card
            sx={{
              maxWidth: 345,
              padding: 2,
              background: "linear-gradient(109.6deg, rgb(177, 173, 219) 11.2%, rgb(245, 226, 226) 91.1%)",
            }}
          >
            <Box
              sx={{ boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
                background: "linear-gradient(103deg, rgb(235, 225, 188) 7.2%, rgb(232, 188, 234) 57.5%, rgb(203, 209, 244) 90.7%)",
                display: "inline-block",
                padding: "10px",
                borderRadius: "50%",
                marginTop: "15px",
              }}
            >
              <PeopleIcon sx={{ fontSize: 30, color: "gray" }} />
            </Box>
            <Box sx={{ marginTop: "15px" }}>
              <Typography sx={{ fontSize: "30px" }}>
                {topCounterFunction(sellerData?.length)}
              </Typography>
              <Typography>
                <small>Total Seller</small>
              </Typography>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card
            sx={{
              maxWidth: 345,
              padding: 2,
              background: "linear-gradient(to top, #dad4ec 0%, #dad4ec 1%, #f3e7e9 100%)",
            }}
          >
            <Box
              sx={{ boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
                background: "linear-gradient(106.7deg, rgb(151, 150, 240) 12.1%, rgb(255, 206, 236) 63.2%)",
                display: "inline-block",
                padding: "10px",
                borderRadius: "50%",
                marginTop: "15px",
              }}
            >
              <PeopleAltRoundedIcon sx={{ fontSize: 30, color: "gray" }} />
            </Box>
            <Box sx={{ marginTop: "15px" }}>
              <Typography sx={{ fontSize: "30px" }}>
                {topCounterFunction(boyerDta?.length)}
              </Typography>
              <Typography>
                <small>Total Buyer</small>
              </Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TopCounter;
