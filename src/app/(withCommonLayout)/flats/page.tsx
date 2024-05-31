//"use client";
import {
  alpha,
  Box,
  Button,
  Card,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import FlatCard from "./components/FlatCard";
import { useGetAllFlatQuery } from "@/redux/api/flatApi";
import CssBaseline from "@mui/material/CssBaseline";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Link from "next/link";

const FlatsPage = async () => {
  const res = await fetch("http://localhost:5000/api/v1/flat?page=1&limit=10");
  const { data: flats } = await res.json();

  // const query: Record<string, any> = {};

  // const [page, setPage] = useState(1);
  // const [limit, setLimit] = useState(5);

  // query["page"] = page;
  // query["limit"] = limit;
  // const { data, isLoading } = useGetAllFlatQuery({ ...query });

  // const flats = data?.flat;
  // const meta = data?.meta;

  //console.log(doctors);

  //const docto = flats.map((doctor: any) => doctor.profilePhoto);
  // const res = await fetch('http://localhost:5000/api/v1/flat');
  // const flats: Flat[] = await res.json();

  return (
    <>
      <Box sx={{ textAlign: "center" }}>
        <Container sx={{ margin: "130px auto" }}>
          <Grid container spacing={2}>
            {flats?.map((item: any) => (
              <Card
                key={item.id}
                sx={{ maxWidth: 345, margin: "auto", marginBottom: "20px" }}
              >
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      R
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={item?.flatPhoto}
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {item?.description}
                  </Typography>
                </CardContent>
                <Box
                  //  display="flex"
                  // justifyContent="start"
                  margin="0"
                  padding="0 10px"
                >
                  {/*  <PriceCheckIcon /> */}

                  <Typography textAlign="start">
                    Price: {item?.rent} TK
                  </Typography>

                  <Box>
                    <Typography textAlign="start">
                      Bedrooms: {item?.totalRooms}
                    </Typography>
                  </Box>

                  {/*       <Box>Bedrooms {item?.bedRooms} TK</Box> */}
                </Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  padding="0 10px 10px 5px"
                >
                  <Box display="flex" alignItems="center">
                    <LocationOnIcon />
                    <Typography>{item?.location}</Typography>
                  </Box>

                  <Box>
                    <Link href={`/flats/${item.id}`}>
                      <Button variant="contained">Details</Button>
                    </Link>
                  </Box>
                </Box>
              </Card>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default FlatsPage;
