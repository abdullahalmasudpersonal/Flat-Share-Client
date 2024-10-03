'use client'
import { Box, Card, Grid, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useGetAllFlatQuery } from '@/redux/api/flatApi';

const TotalBooking = () => {
    const { data: flatData, isLoading } = useGetAllFlatQuery({});
    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 345, padding: 2, background: "linear-gradient(135deg, #d9b3ff, #bf80ff)", }}>
                <Box sx={{ backgroundColor: '#f1ecfe', display: "inline-block", padding: '10px', borderRadius: "50%", marginTop: '15px' }}><VisibilityIcon sx={{ fontSize: 30, color: 'gray', }} /></Box>
                <Box sx={{ marginTop: '15px' }}>
                    <Typography sx={{ fontSize: '30px' }}>00dfg54</Typography>
                    <Typography><small>Today Posts</small></Typography>
                </Box>
            </Card>
        </Grid>
    );
};

export default TotalBooking;