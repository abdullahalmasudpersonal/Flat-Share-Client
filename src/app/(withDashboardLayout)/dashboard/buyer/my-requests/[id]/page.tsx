"use client";
import { Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import { useGetSingleBookingQuery } from "@/redux/api/bookingApi";
import { formatLocalTime } from "@/components/Shared/Date&Time/Date";
import React from "react";
import { TBooking } from "@/types/booking.types";

type TParams = {
  params: {
    id: string;
  };
};

const BuyerBookingRequest = ({ params }: TParams) => {
  const id = params?.id;
  const { data: bookingDetails,  } = useGetSingleBookingQuery(id);
  const { flat, status, createdAt,paymentStatus } = bookingDetails as TBooking || '';

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  const rows = [
    { label: "Flat", value: flat?.flatName || "-" },
    { label: "Flat No", value: flat?.flatNo || "-" },
    { label: "Owner Name", value: flat?.user?.seller?.name || "-" },
    { label: "Owner Email", value: flat?.user?.seller?.email || "-" },
    { label: "Status", value: status || "-" },
    { label: "Availability", value: flat?.availability === true ? "Yes" : flat?.availability === false ? "No" : "-" },
    { label: "Location", value: flat?.location || "-" },
    { label: "SquareFeet", value: flat?.squareFeet || "-" },
    { label: "Total Room", value: flat?.totalRooms || "-" },
    { label: "Total Bedroom", value: flat?.totalBedrooms || "-" },
    { label: "Rent", value: flat?.rent || "-" },
    { label: "AdvanceAmount", value: flat?.advanceAmount || "-" },
    { label: "Request", value: formatLocalTime(createdAt || '') || "-" },
    { label: "Payment Status", value: paymentStatus || "-" },
    { label: "Description", value: flat?.description || "-" },
    { label: "Utilities Description", value: flat?.utilitiesDescription || "-" },
    { label: "Amenities", value: flat?.amenities || "-" },
    { label: "View Flat", value: flat?.viewFlat || "-" },
  ];

  const chunkedRows = [];
  if (isSmall) {
    for (let i = 0; i < rows.length; i++) {
      chunkedRows.push([rows[i]]);
    }
  } else {
    for (let i = 0; i < rows.length; i += 2) {
      chunkedRows.push(rows.slice(i, i + 2));
    }
  }

  return (
    <Box>
      <Grid container spacing={3} >
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          {flat?.flatPhoto && (
            <Image src={flat?.flatPhoto || ""} alt={flat?.flatName || "Flat photo"} width={700} height={490} style={{ objectFit: "contain",borderRadius:'4px', border:'2px solid gray' }} />
          )}
        </Grid>
      </Grid>
      <Box sx={{ mt: 3 }}>
        <TableContainer
          component={Paper}
          sx={{
            borderRadius: 2,
            overflow: "hidden",
            backgroundColor: "rgb(36, 12, 73)",
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell colSpan={8} sx={{ fontWeight: "bold", fontSize: "18px", color: "white", border: 'none' }} >Booking Information</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {chunkedRows.map((pair, index) => (
                <TableRow key={index}>
                  {pair.map((row, idx) => (
                    <React.Fragment key={idx}>
                      <TableCell
                        sx={{
                          fontWeight: 700,
                          width: 180,
                          border: "1px solid rgb(50, 21, 97)",
                          color: "white",
                          backgroundColor: "rgb(36, 12, 73)",
                        }}
                      >
                        {row.label}
                      </TableCell>
                      <TableCell
                        sx={{
                          border: "1px solid rgb(50, 21, 97)",
                          color: "white",
                        }}
                      >
                        <Typography>{row.value}</Typography>
                      </TableCell>
                    </React.Fragment>
                  ))}

                  {!isSmall && pair.length === 1 && (
                    <>
                      <TableCell sx={{ border: "1px solid rgb(50, 21, 97)", backgroundColor: "rgb(36, 12, 73)" }} />
                      <TableCell sx={{ border: "1px solid rgb(50, 21, 97)" }} />
                    </>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default BuyerBookingRequest;
