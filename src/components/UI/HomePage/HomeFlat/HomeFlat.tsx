"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { purple } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Button, Container, Grid, Skeleton, Tooltip } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Link from "next/link";
import { useGetAllFlatQuery } from "../../../../redux/api/flatApi";
import { formatLocalDate } from "../../../Shared/Date&Time/Date";
import Image from "next/image";

interface TFlat {
  id: string;
  advanceAmount: number;
  amenities: string;
  availability: boolean;
  rent: number;
}

const HomeFlat = () => {
  const { data: flatData, isLoading } = useGetAllFlatQuery({});

  return (
    <Container>
      <Box sx={{ marginBottom: "100px" }}>
        <Typography mb={8}
          data-aos="fade-right"
          fontFamily="serif"
          variant="h3"
          textAlign="center"
          fontSize="clamp(2rem,8vw, 3rem)"
        >
          Our Latest{" "}
          <Box component="span" color="purple" fontFamily="serif">
            Flats
          </Box>
        </Typography>
        <Grid container spacing={2} >
          {
            isLoading ? Array.from({ length: 3 }).map((_, index) => (
              <Grid item spacing={2} key={index} xs={12} md={4}>
                <Card>
                  <Skeleton sx={{ height: 200 }} animation="wave" variant="rectangular" />
                  <CardContent sx={{ height: '225px' }}>
                    <Skeleton animation="wave" style={{ marginBottom: 6 }} />
                    <Skeleton animation="wave" width="80%" />
                    <Skeleton animation="wave" style={{ marginBottom: 6 }} />
                    <Skeleton animation="wave" width="80%" />
                    <Skeleton animation="wave" style={{ marginBottom: 6 }} />
                    <Skeleton animation="wave" height={70} />
                  </CardContent>
                </Card>
              </Grid>
            )) : <>
              {flatData?.filter((item: any) => item.availability === true && item.flatPhoto)?.slice(0, 3)?.map((item: any) => <Grid item key={item.id} xs={12} md={4} data-aos="fade-down" >
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={item?.flatPhoto}
                    alt="Paella dish"
                  />
                  <Box sx={{ padding: '15px', fontFamily: 'serif' }} textAlign={'center'}>

                    <Typography  sx={{ fontWeight: '700' }}>{item?.flatName?.length > 30 ? item?.flatName.substring(0, 30) + "..." : item?.flatName}</Typography>
                    <Typography sx={{ fontSize: '14px' }}>{formatLocalDate(item?.createdAt)}</Typography>

                    <Typography textAlign="justify" variant="body2" color="text.secondary" sx={{ py: 1 }}>
                      {item?.description?.length > 140 ? item?.description.substring(0, 140) + "..." : item?.description}
                    </Typography>

                    <Typography textAlign="start" sx={{ fontSize: '15px', }}> Price: {item?.rent} TK</Typography>
                    <Typography textAlign="start" sx={{ fontSize: '15px', }}> Bedrooms: {item?.totalBedrooms} </Typography>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Box sx={{ display: 'flex', }}><LocationOnIcon sx={{ fontSize: '17px', marginLeft: '-3px', marginTop: '2px', marginRight: '2px', color: 'gray' }} /><Typography sx={{ fontSize: '15px', }}>{item?.location}</Typography></Box>
                      <Link href={`/flats/${item?.id}`}>
                        <Button size="small" variant="contained">Details</Button>
                      </Link>
                    </Box>

                  </Box>
                </Card>
              </Grid>)}
            </>
          }
        </Grid>
      </Box>
    </Container>
  );
};

export default HomeFlat;
