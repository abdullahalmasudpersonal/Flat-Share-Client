"use client";
import { Box, Grid } from "@mui/material";
import EarningChart from "./components/adminChart/earningChart/EarningChart";
import ResentBooking from "./components/sellerTable/ResentBooking";
import NewFlat from "./components/sellerTable/NewFlat";
import BookingChart from "./components/adminChart/bookingChart/BookingChart";

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


      {/* <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 345, padding: 2, backgroundColor: '#FFFFFF' }}>
              <Box sx={{ backgroundColor: '#f1ecfe', display: "inline-block", padding: '10px', borderRadius: "50%", marginTop: '15px' }}><VisibilityIcon sx={{ fontSize: 30, color: 'gray', }} /></Box>
              <Box sx={{ marginTop: '15px' }}>
                <Typography sx={{ fontSize: '30px' }}>5.415K</Typography>
                <Typography><small>Total Views</small></Typography>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 345, padding: 2, backgroundColor: '#FFFFFF' }}>
              <Box sx={{ backgroundColor: '#f1ecfe', display: "inline-block", padding: '10px', borderRadius: "50%", marginTop: '15px' }}><VisibilityIcon sx={{ fontSize: 30, color: 'gray', }} /></Box>
              <Box sx={{ marginTop: '15px' }}>
                <Typography sx={{ fontSize: '30px' }}>0054</Typography>
                <Typography><small>Your Total Posts</small></Typography>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 345, padding: 2, backgroundColor: '#FFFFFF' }}>
              <Box sx={{ backgroundColor: '#f1ecfe', display: "inline-block", padding: '10px', borderRadius: "50%", marginTop: '15px' }}><VisibilityIcon sx={{ fontSize: 30, color: 'gray', }} /></Box>
              <Box sx={{ marginTop: '15px' }}>
                <Typography sx={{ fontSize: '30px' }}>0054</Typography>
                <Typography><small>Total Posts</small></Typography>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 345, padding: 2, backgroundColor: '#FFFFFF' }}>
              <Box sx={{ backgroundColor: '#f1ecfe', display: "inline-block", padding: '10px', borderRadius: "50%", marginTop: '15px' }}><VisibilityIcon sx={{ fontSize: 30, color: 'gray', }} /></Box>
              <Box sx={{ marginTop: '15px' }}>
                <Typography sx={{ fontSize: '30px' }}>0054</Typography>
                <Typography><small>Total Posts</small></Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box> */}
    </Box>
  );
};

export default SellerPage;
