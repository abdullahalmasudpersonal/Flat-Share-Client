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
    const courters = [
        { id: 1, name: 'Communities', number: 130, icon: PeopleIcon, },
        { id: 2, name: 'Flats/Rooms', number: 1358, icon: MapsHomeWorkIcon, },
        { id: 3, name: 'Country', number: 30, icon: PublicIcon, },
        { id: 4, name: 'Monthly visitors', number: 500000, icon: VisibilityOutlinedIcon, },
    ]
    return (
        <Box sx={{
            marginBottom: '100px',
            py: 8,
            position: 'relative',
            backgroundImage: 'url(https://img.freepik.com/free-vector/purple-watercolour-background-corners_78370-1873.jpg?t=st=1754571466~exp=1754575066~hmac=cfe9bad58fcdbe81e92b195fb6d702cf457c0f33e3e710ac16cf3e6ad214c5dd&w=1480)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
        }}>
            <Box>
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    }}
                />
            </Box>

            <Container>
                <Typography data-aos="fade-down"
                    textAlign="center"
                    variant="h3"
                    fontFamily="serif"
                    fontSize='clamp(2rem,8vw, 3rem)' color='white'
                    mb={8}>Flat Share Of
                    <Box fontFamily="serif" component="span" sx={{ color: purple[600] }}> Numbers</Box>
                </Typography>
                <Grid container spacing={2}>
                    {
                        courters.map((item) => {
                            const Icon = item.icon;
                            return (
                                <Grid key={item.id} item xs={12} sm={6} md={3} data-aos="zoom-in">
                                    <Card sx={{ background: 'none', boxShadow: 'none',padding:'15px' }}>
                                        <Box sx={{height:'80px', width:'80px', background:'#ffddef', margin:'auto', borderRadius: '50%', border: '1px solid purple', display:'flex', justifyContent:'center', alignItems:'center'}}>
                                            <Icon sx={{color:'purple',fontSize:'35px' }}  />
                                        </Box>
                                        <Typography textAlign='center' mt='10px' fontWeight='bold' fontSize='30px' color='white'><CountUp end={item.number} /></Typography>
                                        <Typography textAlign='center' color='white'>{item.name}</Typography>
                                    </Card>
                                </Grid>
                            )
                        })
                    }

                    {/*   <Grid item xs={12} sm={6} md={4} lg={3}>
                        <CardContent>
                            <Box sx={{ display: 'grid', alignItems: 'center', justifyContent: 'center', }}>
                                <Box sx={{ display: 'inline-block', backgroundColor: '#ffddef', padding: '18px', borderRadius: '50%', border: '1px solid purple' }}>
                                    <PeopleIcon sx={{ fontSize: '40px', color: 'purple' }} />
                                </Box>
                            </Box>
                            <Typography textAlign='center' mt='10px' fontWeight='bold' fontSize='30px' color='white'><CountUp end={130} /></Typography>
                            <Typography textAlign='center' color='white'>Communities</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <CardContent>
                            <Box sx={{ display: 'grid', alignItems: 'center', justifyContent: 'center' }}>
                                <Box sx={{ display: 'inline-block', backgroundColor: '#ffddef', padding: '18px', borderRadius: '50%', border: '1px solid purple' }}>
                                    <MapsHomeWorkIcon sx={{ fontSize: '40px', color: 'purple' }} />
                                </Box>
                            </Box>
                            <Typography textAlign='center' mt='10px' fontWeight='bold' fontSize='30px' color='white'><CountUp end={1358} /></Typography>
                            <Typography textAlign='center' color='white'>Flats/Rooms</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <CardContent>
                            <Box sx={{ display: 'grid', alignItems: 'center', justifyContent: 'center' }}>
                                <Box sx={{ display: 'inline-block', backgroundColor: '#ffddef', padding: '18px', borderRadius: '50%', border: '1px solid purple' }}>
                                    <PublicIcon sx={{ fontSize: '40px', color: 'purple' }} />
                                </Box>
                            </Box>
                            <Typography textAlign='center' mt='10px' fontWeight='bold' fontSize='30px' color='white'><CountUp end={50} /></Typography>
                            <Typography textAlign='center' color='white'>Country</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <CardContent>
                            <Box sx={{ display: 'grid', alignItems: 'center', justifyContent: 'center' }}>
                                <Box sx={{ display: 'inline-block', backgroundColor: '#ffddef', padding: '18px', borderRadius: '50%', border: '1px solid purple' }}>
                                    <VisibilityOutlinedIcon sx={{ fontSize: '40px', color: 'purple' }} />
                                </Box>
                            </Box>
                            <Typography textAlign='center' mt='10px' fontWeight='bold' fontSize='30px' color='white'><CountUp end={500000} /></Typography>
                            <Typography textAlign='center' color='white'>Monthly visitors</Typography>
                        </CardContent>
                    </Grid> */}
                </Grid>
            </Container>
        </Box>
    );
};

export default Counter;