"use client";
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { useGetAllFlatQuery } from '@/redux/api/flatApi';
import { topCounterFunction } from '@/utils/topCounterFunction';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';

const TotalPost = () => {
    const { data: flatData, isLoading } = useGetAllFlatQuery({});

    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
               <Card sx={{ maxWidth: 345, padding: 2, background: " linear-gradient(to top, #dad4ec 0%, #dad4ec 1%, #f3e7e9 100%)"
}}>
                <Box sx={{ background: "linear-gradient(to right, rgb(151, 150, 240), rgb(251, 199, 212))", boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset", display: "inline-block", padding: '10px', borderRadius: "50%", marginTop: '15px' }}><OtherHousesIcon sx={{ fontSize: 30, color: 'gray', }} /></Box>
                <Box sx={{ marginTop: '15px' }}>
                    <Typography sx={{ fontSize: '30px' }}>{topCounterFunction(flatData?.length)}</Typography>
                    <Typography><small>Total Flats</small></Typography>
                </Box>
            </Card>
        </Grid>
    );
};

export default TotalPost;