'use client';
import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import { purple } from "@mui/material/colors";

const WhyChooseUs = () => {

    const whychooseUs = [
        { id: 1, name: 'No booking fees', des: 'Never pay a booking fee. More money for living instead.', },
        { id: 2, name: '100% online process', des: 'Book rooms, chat with hosts, and pay rent online.', },
        { id: 3, name: 'Easy cancellation', des: 'Cancel your stay at any time before moving in.', },
        { id: 4, name: 'Payment protection', des: 'We securely collect your rent, and pay the host 24 hours after you move in.', },
    ]

    return (
        <Container>
            <Box sx={{ marginBottom: '100px' }}>
                <Typography
                    data-aos="fade-right"
                    textAlign="center"
                    variant="h3"
                    fontFamily="serif"
                    fontSize='clamp(2rem,8vw, 3rem)'
                    mb={8}
                >
                    Why Choose {" "}
                    <Box fontFamily="serif" component="span" sx={{ color: purple[600] }}>
                        Us?
                    </Box>
                </Typography>

                <Grid container spacing={2}>
                    {
                        whychooseUs.map((item) => <Grid key={item.id} item xs={12} sm={6} lg={3} data-aos="fade-down" >
                            <Card sx={{ height: '100%', padding: '15px 10px' }} >
                                <Typography variant="h5" sx={{ textAlign: 'center', marginBottom: '10px', fontFamily: 'serif' }}>
                                    {item.name}
                                </Typography>
                                <Typography variant="body2" sx={{ textAlign: 'center', fontFamily: 'sans-serif', color: 'gray', }}>
                                    {item.des}
                                </Typography>
                            </Card>
                        </Grid>)
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default WhyChooseUs;