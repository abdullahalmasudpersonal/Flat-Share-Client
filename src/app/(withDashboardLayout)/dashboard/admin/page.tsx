"use client";
import { Box, Grid, } from "@mui/material";
import TopCounter from "./components/topCounter/TopCounter";
import BookingChart from "./components/adminChart/bookingChart/BookingChart";
import EarningChart from "./components/adminChart/earningChart/EarningChart";
import ResentBooking from "./components/adminTable/ResentBooking";
import NewFlat from "./components/adminTable/NewFlat";

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


      {/* <Box>
        <Box sx={{ marginTop: "20px" }}>
          <PieChartBookingDetails />
        </Box>
      </Box> */}

      {/* <Box sx={{ marginTop: "20px" }}>
        <FlatPostChart />
      </Box> */}
    </Box>
  );
};

export default AdminPage;
