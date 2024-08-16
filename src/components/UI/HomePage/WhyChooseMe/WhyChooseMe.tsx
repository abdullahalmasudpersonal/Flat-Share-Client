'use client'
import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import { purple } from "@mui/material/colors";
import Aos from "aos";
import { useEffect } from "react";

const WhyChooseMe = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <Box>
            <Typography
                data-aos="fade-right"
                textAlign="center"
                variant="h3"
                fontFamily="serif"
                mt={10}
                mb={10}
            >
                Why Choose {" "}
                <Box fontFamily="serif" component="span" sx={{ color: purple[600] }}>
                    Us?
                </Box>
            </Typography>
            <Container sx={{ margin: "0px auto" }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} >
                        <Grid item xs={12} sm={6} md={4} lg={3} data-aos="fade-down-left" >
                            <Card >
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        No booking fees
                                    </Typography>
                                    <Typography variant="body2">
                                        Never pay a booking fee. More money for living instead.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3} data-aos="fade-down-left"  >
                            <Card>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        100% online process
                                    </Typography>
                                    <Typography variant="body2">
                                        Book rooms, chat with hosts, and pay rent online.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3} data-aos="fade-down-left" >
                            <Card>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        Easy cancellation
                                    </Typography>
                                    <Typography variant="body2">
                                        Cancel your stay at any time before moving in.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3} data-aos="fade-down-left"  >
                            <Card>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        Payment protection
                                    </Typography>
                                    <Typography variant="body2">
                                        We securely collect your rent, and pay the host 24 hours after you move in.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default WhyChooseMe;