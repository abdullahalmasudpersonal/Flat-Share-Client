"use client";
import BookingChart from "@/components/UI/Dashboard/SellerDashboard/Bookingrequest";
import { Box, Card, CardMedia, Grid, Typography } from "@mui/material";
import { LineChart, Line, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import VisibilityIcon from '@mui/icons-material/Visibility';

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const data = [
  { name: 'Jan', daily: 30, weekly: 210, monthly: 900, yearly: 10800, total: 10800 },
  { name: 'Feb', daily: 28, weekly: 196, monthly: 784, yearly: 9408, total: 20208 },
  // অন্যান্য মাসের ডেটা
];

const SellerPage = () => {
  return (
    <Box sx={{ backgroundColor: '#dec9e9' }}>
      <h1>Seller page</h1>
      <Box sx={{ flexGrow: 1, padding: 2 }}>
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
      </Box>
      <Box>
        {/*    <BookingChart /> */}
      </Box>
    </Box>
  );
};

export default SellerPage;
