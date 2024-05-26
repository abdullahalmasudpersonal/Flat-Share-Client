"use client";
import { alpha, Box, Container, Stack } from "@mui/material";
import React, { useState } from "react";
import FlatCard from "./components/FlatCard";
import { useGetAllFlatQuery } from "@/redux/api/flatApi";

const FlatsPage = () => {
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
      <FlatCard />

      {/*   
      <Box
            id="hero"
            sx={(theme) => ({
                width: "100%",
                backgroundImage:
                    theme.palette.mode === "light"
                        ? "linear-gradient(180deg, #efcefd, #FFF)"
                        : `linear-gradient(#02294F, ${alpha("#090E10", 0.0)})`,
                backgroundSize: "100% 20%",
                backgroundRepeat: "no-repeat",
            })}
        >
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    pt: { xs: 10, sm: 15 },
                    pb: { xs: 8, sm: 12 },
                }}
            >
                <FlatCard />
                <Stack spacing={2} useFlexGap sx={{ width: { xs: "100%", sm: "70%" } }}>
                </Stack>
            </Container>
        </Box> */}
    </>
  );
};

export default FlatsPage;
