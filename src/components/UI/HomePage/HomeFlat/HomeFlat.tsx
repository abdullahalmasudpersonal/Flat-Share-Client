"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Container, Grid, Skeleton } from "@mui/material";
import { useGetAllFlatQuery } from "../../../../redux/api/flatApi";
import SingleFlat from "../../flat/SingleFlat";

const HomeFlat = () => {
  const { data: flatData, isLoading, error } = useGetAllFlatQuery({});
  if (error) return <Typography color="error">Failed to load flats</Typography>;
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
              <Grid item key={index} xs={12} md={4}>
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
              {flatData?.filter((item: any) => item.availability === true && item.flatPhoto)?.slice(0, 3)?.map((item: any) => <Grid item key={item.id} xs={12} md={4} data-aos="fade-down">
                <SingleFlat item={item} />
              </Grid>)}
            </>
          }
        </Grid>
      </Box>
    </Container>
  );
};

export default HomeFlat;
