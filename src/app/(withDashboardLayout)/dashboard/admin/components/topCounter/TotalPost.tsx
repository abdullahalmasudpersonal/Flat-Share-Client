"use client";
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useGetAllFlatQuery } from '@/redux/api/flatApi';

const TotalPost = () => {
    const { data: flatData, isLoading } = useGetAllFlatQuery({});

    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ width: 345, padding: 2, background: "linear-gradient(135deg, #d1b3ff, #b380ff)", }}>
                <Box sx={{ backgroundColor: '#f1ecfe', display: "inline-block", padding: '10px', borderRadius: "50%", marginTop: '15px' }}><VisibilityIcon sx={{ fontSize: 30, color: 'gray', }} /></Box>
                <Box sx={{ marginTop: '15px' }}>
                    <Typography sx={{ fontSize: '30px' }}>sdf</Typography>
                    <Typography><small>Total Post</small></Typography>
                </Box>
            </Card>
        </Grid>
    );
};

export default TotalPost;