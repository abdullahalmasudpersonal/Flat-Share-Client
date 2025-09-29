"use client";
import { Box, Grid, TextField, Typography } from "@mui/material";
import Image from "next/image";
import { useGetSingleBookingQuery } from "@/redux/api/bookingApi";

type TParams = {
  params: {
    id: string;
  };
};

const BuyerBookingRequest = ({ params }: TParams) => {
  const id = params?.id;
  const { data: bookingDetails, isLoading } = useGetSingleBookingQuery(id);
  const { email, flat, status } = bookingDetails || '';

  return (
    <Box>
      <Grid container spacing={3} >
        <Grid item xs={12} md={6}>
          {flat?.flatPhoto && (
            <Box sx={{ position: "relative", width: "100%", height: 300, borderRadius: 1, overflow: "hidden" }}>
              <Image src={flat?.flatPhoto || ""} alt={flat?.flatName || "Flat photo"} fill style={{ objectFit: "cover" }} />
            </Box>
          )}

        </Grid>
        <Grid item xs={12} md={6}>
         <TextField id="filled-basic" value={email} label="Filled" variant="filled" disabled />
        </Grid>
      </Grid>
    </Box>
  );
};

export default BuyerBookingRequest;
