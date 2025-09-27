"use client";
import {
  Box,
  Card,
  Container,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import React from "react";
import CardContent from "@mui/material/CardContent";
import { useGetAllFlatQuery } from "../../../redux/api/flatApi";
import SingleFlat from "@/components/UI/flat/SingleFlat";
import { TFlat } from "@/types/flat.types";

const FlatsPage = () => {
  const { data: flatData, isLoading, error } = useGetAllFlatQuery({});
  if (error) return <Typography color="error">Failed to load flats</Typography>;
  return (
    <>
      <Box sx={{ paddingTop: '130px', paddingBottom: "50px" }}>
        <Container >
          <Grid container spacing={2}>
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
                 {flatData?.filter((item: any) => item.availability === true && item.flatPhoto)?.map((item: any) => <Grid item key={item.id} xs={12} md={4} data-aos="fade-down">
                  <SingleFlat item={item} />
                </Grid>)} 
                
              </>
            }
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default FlatsPage;
