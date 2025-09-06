'use client';
import { Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import Masonry from '@mui/lab/Masonry';

const Gallery = () => {
    const gallarys = [
        { id: '1', img: 'https://mistymount.wpenginepowered.com/wp-content/uploads/2014/01/gallery1.jpg', title: 'Aliquam ut dictum sapien', tag: 'Suite' },
        { id: '2', img: 'https://mistymount.wpenginepowered.com/wp-content/uploads/2014/01/gallery2.jpg', title: 'Aliquam ut dictum sapien', tag: 'Suite' },
        { id: '3', img: 'https://mistymount.wpenginepowered.com/wp-content/uploads/2014/01/gallery4-1.jpg', title: 'Aliquam ut dictum sapien', tag: 'Suite' },
        { id: '4', img: 'https://mistymount.wpenginepowered.com/wp-content/uploads/2014/01/gallery3.jpg', title: 'Aliquam ut dictum sapien', tag: 'Suite' },
        { id: '5', img: 'https://mistymount.wpenginepowered.com/wp-content/uploads/2014/01/gallery5.jpg', title: 'Aliquam ut dictum sapien', tag: 'Suite' },
        { id: '6', img: 'https://mistymount.wpenginepowered.com/wp-content/uploads/2014/01/gallery6.jpg', title: 'Aliquam ut dictum sapien', tag: 'Suite' },
        { id: '7', img: 'https://mistymount.wpenginepowered.com/wp-content/uploads/2014/01/gallery7.jpg', title: 'Aliquam ut dictum sapien', tag: 'Suite' },
        { id: '8', img: 'https://mistymount.wpenginepowered.com/wp-content/uploads/2014/01/gallery8-1.jpg', title: 'Aliquam ut dictum sapien', tag: 'Suite' },
        { id: '9', img: 'https://mistymount.wpenginepowered.com/wp-content/uploads/2014/01/gallery9-2.jpg', title: 'Aliquam ut dictum sapien', tag: 'Suite' },
        { id: '10', img: 'https://mistymount.wpenginepowered.com/wp-content/uploads/2014/01/gallery10-1.jpg', title: 'Aliquam ut dictum sapien', tag: 'Suite' },
        { id: '11', img: 'https://mistymount.wpenginepowered.com/wp-content/uploads/2014/01/gallery11.jpg', title: 'Aliquam ut dictum sapien', tag: 'Suite' },
        { id: '12', img: 'https://mistymount.wpenginepowered.com/wp-content/uploads/2014/01/gallery12.jpg', title: 'Aliquam ut dictum sapien', tag: 'Suite' },
    ]
    return (
        <div>
            <Container sx={{ pb: 10, pt: 20 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Gallery
                </Typography>
                <Masonry
                    columns={{ xs: 1, sm: 2 }}
                    spacing={2}
                >
                    {gallarys.map((item) => (
                        <div key={item.id}>
                            <Image
                                src={item.img}
                                alt={item.title}
                                width={800}
                                height={500}
                                layout="responsive"
                                style={{
                                    borderRadius: '8px',
                                    width: '100%',
                                    height: 'auto',
                                }}
                            />
                        </div>
                    ))}
                </Masonry>
                {/* <Grid container spacing={2}>
                    {gallarys?.map((item) => (
                        <Grid key={item?.id} item xs={12} sm={6}>
                            <div style={{ position: 'relative', width: '100%', height: 'auto' }}>
                                <Image
                                    src={item?.img}
                                    alt={item?.title}
                                    layout="responsive"
                                    width={800}
                                    height={500}
                                    style={{
                                        objectFit: 'cover',
                                        borderRadius: '8px',
                                    }}
                                />
                            </div>
                        </Grid>
                    ))}
                </Grid> */}
            </Container>
        </div>
    );
};

export default Gallery;