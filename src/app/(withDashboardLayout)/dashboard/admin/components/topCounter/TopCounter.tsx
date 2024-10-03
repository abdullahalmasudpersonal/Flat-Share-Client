import { Box, Card, Grid, Typography } from '@mui/material';
import React from 'react';
import TotalBooking from './TotalBooking';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TotalPost from './TotalPost';

const TopCounter = () => {
    return (
        <Box sx={{ flexGrow: 1, padding: 2 }}>
            <Grid container spacing={2}>
                <TotalPost />
                <TotalBooking />

                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card sx={{ maxWidth: 345, padding: 2, background: "linear-gradient(135deg, #ddccff, #b399ff)", }}>
                        <Box sx={{ backgroundColor: '#f1ecfe', display: "inline-block", padding: '10px', borderRadius: "50%", marginTop: '15px' }}><VisibilityIcon sx={{ fontSize: 30, color: 'gray', }} /></Box>
                        <Box sx={{ marginTop: '15px' }}>
                            <Typography sx={{ fontSize: '30px' }}>0054</Typography>
                            <Typography><small>New Seller</small></Typography>
                        </Box>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card sx={{ maxWidth: 345, padding: 2, background: "linear-gradient(135deg, #e6b3ff, #cc80ff)", }}>
                        <Box sx={{ backgroundColor: '#f1ecfe', display: "inline-block", padding: '10px', borderRadius: "50%", marginTop: '15px' }}><VisibilityIcon sx={{ fontSize: 30, color: 'gray', }} /></Box>
                        <Box sx={{ marginTop: '15px' }}>
                            <Typography sx={{ fontSize: '30px' }}>0054</Typography>
                            <Typography><small>New Buyer</small></Typography>
                        </Box>
                    </Card>
                </Grid>

            </Grid>
        </Box>
    );
};

export default TopCounter;