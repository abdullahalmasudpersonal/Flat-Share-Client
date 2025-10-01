"use client";
import { Box, Grid, } from "@mui/material";
import TopCounter from "./components/topCounter/TopCounter";
import dynamic from "next/dynamic";
import ResentBooking from "../sharedComponents/dashboardTable/ResentBooking";
import NewFlat from "../sharedComponents/dashboardTable/NewFlat";

const BookingChart = dynamic(() => import("./components/adminChart/bookingChart/BookingChart"), { ssr: false });
const EarningChart = dynamic(() => import("./components/adminChart/earningChart/EarningChart"), { ssr: false });

const AdminPage = () => {

  return (
    <Box>
      <TopCounter />
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

export default AdminPage;
