import { Box, Grid } from "@mui/material";
import React from "react";
import BuyerBookingChart from "./components/buyerChart/BookingChart";
import NewFlat from "../sharedComponents/dashboardTable/NewFlat";
import ResentBooking from "../sharedComponents/dashboardTable/ResentBooking";
import EarningChart from "./components/buyerChart/EarningChart";

const BuyerPage = () => {
  return (
    <Box>
      <Grid container spacing={3} sx={{ marginTop: '0px' }} >
        <Grid item xs={12} md={6}>
          <BuyerBookingChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <EarningChart />
        </Grid>
      </Grid>
      <Grid container spacing={3} sx={{ marginTop: '0px' }} >
        <Grid item xs={12} md={6}>
          {/* <BuyerResentBookingTable /> */}
          <ResentBooking/>
        </Grid>
        <Grid item xs={12} md={6}>
          <NewFlat />
        </Grid>
      </Grid>
    </Box>
  );
};

export default BuyerPage;
