"use client";
import { Box, Card, Grid, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useGetAllFlatQuery } from "@/redux/api/flatApi";
import { topCounterFunction } from "@/utils/topCounterFunction";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import { useGetAllBookingQuery } from "@/redux/api/bookingApi";

const TotalBooking = () => {
  const { data: bookingData, isLoading } = useGetAllBookingQuery({});

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card
        sx={{
          maxWidth: 345,
          padding: 2,
          background: " linear-gradient(109.6deg, rgb(177, 173, 219) 11.2%, rgb(245, 226, 226) 91.1%)",
        }}
      >
        <Box
          sx={{
            background: "linear-gradient(to right, rgb(221, 214, 243), rgb(250, 172, 168))",
            display: "inline-block",
            padding: "10px",
            borderRadius: "50%",
            marginTop: "15px", boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
          }}
        >
          <BookmarkAddIcon sx={{ fontSize: 30, color: "gray" }} />
        </Box>
        <Box sx={{ marginTop: "15px", color: "#561368" }}>
          <Typography sx={{ fontSize: "30px" }}>
            {topCounterFunction(bookingData?.length)}
          </Typography>
          <Typography>
            <small>Booking Requests</small>
          </Typography>
        </Box>
      </Card>
    </Grid>
  );
};

export default TotalBooking;
