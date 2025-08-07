'use client';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Aos from 'aos';
import Image from 'next/image';
import React, { useEffect } from 'react';

const Welcome = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div className='welcomeBg' style={{
            // position: 'relative',
            // backgroundImage: 'url(https://images.unsplash.com/photo-1591181520189-abcb0735c65d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
            // backgroundSize: 'cover',
            // backgroundPosition: 'center',
            // backgroundAttachment: 'fixed',
            // backgroundRepeat: 'no-repeat',
            // overflow: 'hidden',
        }}>
            {/* <Box>
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    }}
                />
            </Box> */}
            <Container>
                <Grid container style={{ paddingTop: '100px', paddingBottom: '100px' }} >
                    <Grid item xs={12} md={6} style={{ padding: '20px 50px', display: "flex", justifyContent: "center", alignItems: 'center' }} data-aos="fade-down-left">
                        <Box >
                            <Typography style={{ color: 'gray', textAlign: 'center', paddingBottom: '10px', }}>WELCOME TO FLATSHARE</Typography>
                            <Typography style={{ textAlign: 'center', paddingBottom: '20px', fontSize: '49px', lineHeight: '65px', fontFamily: '"Marcellus",serif', color: 'purple' }}>Finest Luxury Hotels & Resort</Typography>
                            <Typography style={{ color: 'gray', textAlign: 'center', fontFamily: 'Times New Roman', fontSize: '17px' }}>
                                Rominal Hotelss and Resorts is a distinctive collection of hotels chosen for their rich heritage, enviable central locations and personalised guest experience. Each is unique in the story it tells, a story revealed thsrough its history, architecture and character. This is the Rominal legacy: inimitable hotels in coveted locations, run by talented people dedicated to the art of hospitality.</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <Grid container>
                            <Grid item xs={12} sm={6} data-aos="fade-down-right">
                                <Box position="relative" width="100%" sx={{ minHeight: { xs: '400px', sm: '100%', md: '100%' } }}>
                                    <Image
                                        src="https://cdn.shopify.com/s/files/1/1215/2782/files/leo_rominal_banner1-h1.jpg?v=1640144303"
                                        alt="image"
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6} data-aos="fade-down-left">
                                <Grid container direction='column'>
                                    <Grid item xs={6} >
                                        <Box position="relative" width="100%" height="250px">
                                            <Image
                                                src="https://cdn.shopify.com/s/files/1/1215/2782/files/leo_rominal_banner2-h1.jpg?v=1640144303"
                                                alt="image"
                                                fill
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Box position="relative" width="100%" height="250px">
                                            <Image
                                                src="https://cdn.shopify.com/s/files/1/1215/2782/files/leo_rominal_banner3-h1.jpg?v=1640144303"
                                                alt="image"
                                                fill
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Welcome;