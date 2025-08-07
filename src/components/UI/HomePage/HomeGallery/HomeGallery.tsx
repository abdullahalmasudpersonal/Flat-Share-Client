"use client";
import React from "react";
import { Container, Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import './HomeGallery.css'



const HomeGallery = () => {
    return (
        <Container sx={{ py: 8 }} style={{display:'flex'}}>
            {/* <Image width={500} height={500} src="https://picsum.photos/id/1028/300/300" alt="a forest after an apocalypse"></Image>
            <Image width={500} height={500} src="https://picsum.photos/id/1028/300/300" alt="a forest after an apocalypse"></Image>
            <Image width={500} height={500} src="https://picsum.photos/id/1028/300/300" alt="a forest after an apocalypse"></Image> */}
           <div>
             <div style={{minHeight:'200px',width:'500px', backgroundColor:'gray'}}></div>
             {/* <div style={{minHeight:'200px',width:'500px', backgroundColor:'gray'}}></div>
             <div style={{minHeight:'200px',width:'500px', backgroundColor:'gray'}}></div> */}
           </div>
        </Container>
    );
};

export default HomeGallery;
