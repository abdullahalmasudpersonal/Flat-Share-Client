import { Box, Card, Container, Grid, Typography } from '@mui/material';
import { purple } from '@mui/material/colors';
import Image from 'next/image';
import React from 'react';
import user from '@/assets/SuccesStories/user.png';
import user2 from '@/assets/SuccesStories/user2.png';
import user3 from '@/assets/SuccesStories/user3.png';

const SuccessStories = () => {
    return (
        <>
            <Typography textAlign="center" variant="h3" fontFamily="serif" mb={10} mt={10}>
                Success_{" "}
                <Box fontFamily="serif" component="span" sx={{ color: purple[600] }}>
                    Stories
                </Box>
            </Typography>
            <Box sx={{ textAlign: "center" }}>
                <Container sx={{ margin: "30px auto" }}>
                    <Grid container spacing={2}>
                        <Card
                            sx={{ maxWidth: 345, margin: "auto", marginBottom: "20px", boxShadow: 'none' }}
                        >
                            <Box display='flex' justifyContent='center' pt={2}> <Image style={{ borderRadius: '50%', boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px" }} src={user} height="140" alt="" /></Box>
                            <Box mb={2}>
                                <Typography color='purple' fontWeight={700} variant="h6" mt={3} mb={2} fontFamily='serif'>Alexander</Typography>
                                <Typography fontFamily='serif'>Programming hero helps me a lot with my career like the team of this institute is very cooperative dedicated about their responsibility.</Typography>
                            </Box>
                        </Card>
                        <Card
                            sx={{ maxWidth: 345, margin: "auto", marginBottom: "20px", boxShadow: 'none' }}
                        >
                            <Box display='flex' justifyContent='center' pt={2}> <Image style={{ borderRadius: '50%', boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px" }} src={user2} height="140" alt="" /></Box>
                            <Box mb={2}>
                                <Typography color='purple' fontWeight={700} variant="h6" mt={3} mb={2} fontFamily='serif'>Matthew</Typography>
                                <Typography fontFamily='serif'>Admitting programming hero was one of the best decisions in my life. Their teaching technique is completely unique.</Typography>
                            </Box>
                        </Card>
                        <Card
                            sx={{ maxWidth: 345, margin: "auto", marginBottom: "20px", boxShadow: 'none' }}
                        >
                            <Box display='flex' justifyContent='center' pt={2}> <Image style={{ borderRadius: '50%', boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px" }} src={user3} height="140" alt="" /></Box>
                            <Box mb={2}>
                                <Typography color='purple' fontWeight={700} variant="h6" mt={3} mb={2} fontFamily='serif'>Santiago</Typography>
                                <Typography fontFamily='serif' >You can&apos;t finish talking about your course, brother. This is a wonderful course. It is a complete guideline for the career.</Typography>
                            </Box>
                        </Card>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default SuccessStories;