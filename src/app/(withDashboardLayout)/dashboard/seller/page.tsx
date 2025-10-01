"use client";
import { Box, Grid } from "@mui/material";
import EarningChart from "./components/adminChart/earningChart/EarningChart";
import BookingChart from "./components/adminChart/bookingChart/BookingChart";
import NewFlat from "../sharedComponents/dashboardTable/NewFlat";
import ResentBooking from "../sharedComponents/dashboardTable/ResentBooking";

const SellerPage = () => {
  return (
    <Box>
      <Grid container spacing={3} sx={{ marginTop: '0px' }} >
        <Grid item xs={12} md={6}>
          <BookingChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <EarningChart />
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ marginTop: '0px' }} >
        <Grid item xs={12} md={6}>
          <ResentBooking />
        </Grid>
        <Grid item xs={12} md={6}>
          <NewFlat />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SellerPage;
