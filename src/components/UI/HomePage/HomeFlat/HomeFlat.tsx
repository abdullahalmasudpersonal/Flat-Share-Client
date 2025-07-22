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
import { it } from "node:test";
import AOS from "aos";
import "aos/dist/aos.css";
import { gray } from "@/components/Shared/ThemeColor/getLPTheme";

const HomeFlat = () => {
  const { data: flatData, isLoading } = useGetAllFlatQuery({});
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <Box
      sx={{
        py: 8,
        bgcolor: gray[100],
      }}
    >
      <Box>
        <Box mb={10}>
          <Typography className='pt-10'
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
        </Box>
        <Container>
          <Grid
            container
            gap={1}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            {
              isLoading ? Array.from({ length: 3 }).map((_, index) => (
                <Card sx={{ minWidth: 345, m: 2 }} key={index}>
                  <CardHeader
                    avatar={
                      <Skeleton animation="wave" variant="circular" width={40} height={40} />
                    }
                    action={null}
                    title={
                      <Skeleton
                        animation="wave"
                        height={10}
                        width="80%"
                        style={{ marginBottom: 6 }}
                      />
                    }
                    subheader={<Skeleton animation="wave" height={10} width="40%" />}
                  />
                  <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
                  <CardContent>
                    <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                    <Skeleton animation="wave" height={10} width="80%" />
                  </CardContent>
                </Card>
              ))
                :
                <>
                  {flatData?.filter((item: any) => item?.availability === true)?.slice(0, 3)?.map((item: any) =>
                    item?.flatPhoto ? (
                      <Card
                        data-aos="fade-down"
                        key={item?.id}
                        sx={{
                          maxWidth: 345,
                          margin: "auto",
                          marginBottom: "20px",
                          textAlign: "center",
                        }}
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
                            <Link href={`/flats/${item?.id}`}>
                              <Button variant="contained">Details</Button>
                            </Link>
                          </Box>
                        </Box>
                      </Card>
                    ) : (
                      ''
                    )
                  )}
                </>}
          </Grid>
        </Container>

      </Box>
    </Box>
  );
};

export default HomeFlat;
