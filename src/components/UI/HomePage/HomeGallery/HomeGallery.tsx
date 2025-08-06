"use client";
import React from "react";
import { Container, Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import './HomeGallery.css'

// ডেমো গ্যালারি ডেটা
const galleryItems = [
    {
        id: 1,
        title: "Beautiful Landscape",
        img: "https://source.unsplash.com/random/800x600/?nature,water",
    },
    {
        id: 2,
        title: "City Vibes",
        img: "https://source.unsplash.com/random/800x600/?city,night",
    },
    {
        id: 3,
        title: "Mountain Range",
        img: "https://source.unsplash.com/random/800x600/?mountain",
    },
    {
        id: 4,
        title: "Beach Sunset",
        img: "https://source.unsplash.com/random/800x600/?beach,sunset",
    },
    {
        id: 5,
        title: "Forest Path",
        img: "https://images.unsplash.com/photo-1754231537013-edf1da9619b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 6,
        title: "Snowy Peaks",
        img: "https://images.unsplash.com/photo-1742201949674-a5084b01418c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
    },
];

const HomeGallery = () => {
    return (
        <Container sx={{ py: 8 }}>
            <div className="gallery">
                <Image width={300} src="https://picsum.photos/id/1028/300/300" alt="a forest after an apocalypse" />
                <Image width={300} src="https://picsum.photos/id/15/300/300" alt="a waterfall and many rocks" />
                <Image width={300} src="https://picsum.photos/id/1040/300/300" alt="a house on a mountain" />
                <Image width={300} src="https://picsum.photos/id/106/300/300" alt="sime pink flowers" />
                <Image width={300} src="https://picsum.photos/id/136/300/300" alt="big rocks with some trees" />
                <Image width={300} src="https://picsum.photos/id/1039/300/300" alt="a waterfall, a lot of tree and a great view from the sky" />
                <Image width={300} src="https://picsum.photos/id/110/300/300" alt="a cool landscape" />
                <Image width={300} src="https://picsum.photos/id/1047/300/300" alt="inside a town between two big buildings" />
                <Image width={300} src="https://picsum.photos/id/1057/300/300" alt="a great view of the sea above the mountain" />
            </div>
        </Container>
    );
};

export default HomeGallery;
