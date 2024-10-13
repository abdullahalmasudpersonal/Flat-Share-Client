"use client";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import IconButton from "@mui/material/IconButton";
import { purple } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Link from "next/link";
import { useGetAllFlatQuery } from "../../../redux/api/flatApi";
import { formatLocalDate } from "../../../components/Shared/Date&Time/Date";

const FlatsPage = () => {
  const { data: flatData, isLoading } = useGetAllFlatQuery({});

  return (
    <>
      <Box sx={{ margin: "130px auto" }}>
        <Container >
          <Grid container gap={1} sx={{ display: 'flex', justifyContent: 'space-between' }} >
            {flatData?.filter((item:any) => item?.availability === true)?.map((item: any) =>
              item?.flatPhoto ? (
                <Card
                  key={item.id}
                  sx={{ maxWidth: 345, margin: "auto", marginBottom: "20px", textAlign: "center" }}
                >
                  <CardHeader
                    avatar={
                      <Avatar
                        sx={{ bgcolor: purple[700] }}
                        aria-label="recipe"
                      ></Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={
                      item?.flatName?.length > 28
                        ? item?.flatName.substring(0, 28) + "..."
                        : item?.flatName
                    }
                    subheader={formatLocalDate(item?.createdAt)}
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    image={item?.flatPhoto}
                    alt="Paella dish"
                  />
                  <CardContent>
                    <Tooltip title={item?.description} arrow>
                      <Typography variant="body2" color="text.secondary">
                        {item?.description?.length > 170
                          ? item?.description.substring(0, 170) + "..."
                          : item?.description}
                      </Typography>
                    </Tooltip>
                  </CardContent>
                  <Box margin="0" padding="0 10px">
                    <Typography textAlign="start">
                      Price: {item?.rent} TK
                    </Typography>

                    <Box>
                      <Typography textAlign="start">
                        Bedrooms: {item?.totalBedrooms}
                      </Typography>
                    </Box>
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
              ) : (
                ""
              )
            )}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default FlatsPage;
