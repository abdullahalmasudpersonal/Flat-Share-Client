import { Box, Card, Grid, Typography } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';

const AdminPage = () => {
  return (
    <Box /* sx={{ backgroundColor: '#dec9e9' }} */>
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
                <Typography><small>Today Posts</small></Typography>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 345, padding: 2, backgroundColor: '#FFFFFF' }}>
              <Box sx={{ backgroundColor: '#f1ecfe', display: "inline-block", padding: '10px', borderRadius: "50%", marginTop: '15px' }}><VisibilityIcon sx={{ fontSize: 30, color: 'gray', }} /></Box>
              <Box sx={{ marginTop: '15px' }}>
                <Typography sx={{ fontSize: '30px' }}>0054</Typography>
                <Typography><small>New Seller</small></Typography>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 345, padding: 2, backgroundColor: '#FFFFFF' }}>
              <Box sx={{ backgroundColor: '#f1ecfe', display: "inline-block", padding: '10px', borderRadius: "50%", marginTop: '15px' }}><VisibilityIcon sx={{ fontSize: 30, color: 'gray', }} /></Box>
              <Box sx={{ marginTop: '15px' }}>
                <Typography sx={{ fontSize: '30px' }}>0054</Typography>
                <Typography><small>New Buyer</small></Typography>
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

export default AdminPage;
