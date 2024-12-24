"use client";
import { Box, Grid } from "@mui/material";
import TopCounter from "./components/topCounter/TopCounter";
import BookingChart from "./components/bookingChart/BookingChart";
import FlatPostChart from "./components/flatPostChart/FlatPostChart";
import PieChartBookingDetails from "./components/pieChartBookingDetails/PieChartBookingDetails";
import BookingTableData from "./components/bookingTable/BookingTableData";

const AdminPage = () => {
  return (
    <Box>
      <TopCounter />

      {/* <Box>
        <Box sx={{ marginTop: "20px" }}>
          <BookingChart />
        </Box>
        <Box sx={{ marginTop: "20px" }}>
          <PieChartBookingDetails />
        </Box>
      </Box> */}

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box sx={{ marginTop: "20px" }}>
            <BookingChart />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ marginTop: "20px" }}>
            <PieChartBookingDetails />
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ marginTop: "20px" }}>
        <FlatPostChart />
      </Box>

      <Box  sx={{ marginTop: "20px" }}>
        <BookingTableData/>
      </Box>
    </Box>
  );
};

export default AdminPage;
