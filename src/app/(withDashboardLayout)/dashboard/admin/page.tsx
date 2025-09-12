"use client";
import { Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from "@mui/material";
import TopCounter from "./components/topCounter/TopCounter";
import FlatPostChart from "./components/flatPostChart/FlatPostChart";
import PieChartBookingDetails from "./components/pieChartBookingDetails/PieChartBookingDetails";
import BookingTableData from "./components/bookingTable/BookingTableDatas";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import ReactApexChart from "react-apexcharts";
import BookingChart from "./components/bookingChart/BookingChart";
import EarningChart from "./components/earningChart/EarningChart";
import { useState } from "react";
import ResentBooking from "./components/adminTable/ResentBooking";

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
         <ResentBooking/>
        </Grid>
        <Grid item xs={12} md={6}>
          <EarningChart />
        </Grid>
      </Grid>


      {/* <Box>
        <Box sx={{ marginTop: "20px" }}>
          <BookingChart />
        </Box>
        <Box sx={{ marginTop: "20px" }}>
          <PieChartBookingDetails />
        </Box>
      </Box> */}

      {/* <Grid container spacing={2}>
        <Grid item sm={12} md={6}>
          <Box>
            <BookingChart />
          </Box>
        </Grid>
        <Grid item sm={12} md={6}>
          <Box>
            <PieChartBookingDetails />
          </Box>
        </Grid>
      </Grid> */}

      {/* <Box sx={{ marginTop: "20px" }}>
        <FlatPostChart />
      </Box> */}

      {/* <Box  sx={{ marginTop: "20px" }}>
        <BookingTableData/>
      </Box> */}
    </Box>
  );
};

export default AdminPage;
