'use client'
import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import CountUp from 'react-countup';
import { purple } from '@mui/material/colors';
import PeopleIcon from '@mui/icons-material/People';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { gray } from '@/components/Shared/ThemeColor/getLPTheme';

const Counter = () => {
    return (
        <Box sx={{
            py: 6,
            bgcolor: gray[50],
        }}>
            <Typography data-aos="fade-down"
                textAlign="center"
                variant="h3"
                fontFamily="serif"
                fontSize='clamp(2rem,8vw, 3rem)'
                mb={10}>Flat Share Of
                <Box fontFamily="serif" component="span" sx={{ color: purple[600] }}> Numbers</Box>
            </Typography>
            <Container sx={{ margin: "0px auto" }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} data-aos="zoom-in">
                        <Grid item xs={12} sm={6} md={4} lg={3} /* data-aos="zoom-in" */>
                            <CardContent>
                                <Box sx={{ display: 'grid', alignItems: 'center', justifyContent: 'center', }}>
                                    <Box sx={{ display: 'inline-block', backgroundColor: '#ffddef', padding: '18px', borderRadius: '50%', border: '1px solid purple' }}>
                                        <PeopleIcon sx={{ fontSize: '40px', color: 'purple' }} />
                                    </Box>
                                </Box>
                                <Typography textAlign='center' mt='10px' fontWeight='bold' fontSize='30px'><CountUp end={130} /></Typography>
                                <Typography textAlign='center' color='gray'>Communities</Typography>
                            </CardContent>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3} /* data-aos="zoom-in" */>
                            <CardContent>
                                <Box sx={{ display: 'grid', alignItems: 'center', justifyContent: 'center' }}>
                                    <Box sx={{ display: 'inline-block', backgroundColor: '#ffddef', padding: '18px', borderRadius: '50%', border: '1px solid purple' }}>
                                        <MapsHomeWorkIcon sx={{ fontSize: '40px', color: 'purple' }} />
                                    </Box>
                                </Box>
                                <Typography textAlign='center' mt='10px' fontWeight='bold' fontSize='30px'><CountUp end={1358} /></Typography>
                                <Typography textAlign='center' color='gray'>Flats/Rooms</Typography>
                            </CardContent>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3} /* data-aos="zoom-in" */>
                            <CardContent>
                                <Box sx={{ display: 'grid', alignItems: 'center', justifyContent: 'center' }}>
                                    <Box sx={{ display: 'inline-block', backgroundColor: '#ffddef', padding: '18px', borderRadius: '50%', border: '1px solid purple' }}>
                                        <PublicIcon sx={{ fontSize: '40px', color: 'purple' }} />
                                    </Box>
                                </Box>
                                <Typography textAlign='center' mt='10px' fontWeight='bold' fontSize='30px'><CountUp end={50} /></Typography>
                                <Typography textAlign='center' color='gray'>Country</Typography>
                            </CardContent>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}/*  data-aos="zoom-in" */>
                            <CardContent>
                                <Box sx={{ display: 'grid', alignItems: 'center', justifyContent: 'center' }}>
                                    <Box sx={{ display: 'inline-block', backgroundColor: '#ffddef', padding: '18px', borderRadius: '50%', border: '1px solid purple' }}>
                                        <VisibilityOutlinedIcon sx={{ fontSize: '40px', color: 'purple' }} />
                                    </Box>
                                </Box>
                                <Typography textAlign='center' mt='10px' fontWeight='bold' fontSize='30px'><CountUp end={500000} /></Typography>
                                <Typography textAlign='center' color='gray'>Monthly visitors</Typography>
                            </CardContent>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default Counter;