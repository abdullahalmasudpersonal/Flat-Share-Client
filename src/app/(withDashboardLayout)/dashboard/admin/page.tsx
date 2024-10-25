"use client";
import { Box } from "@mui/material";
import TopCounter from "./components/topCounter/TopCounter";
import BookingChart from "./components/bookingChart/BookingChart";

const AdminPage = () => {
  return (
    <Box>
      <TopCounter /> 
      <Box> <BookingChart/> </Box>
    </Box>
  );
};

export default AdminPage;
