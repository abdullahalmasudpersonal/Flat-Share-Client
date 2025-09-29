"use client";
import {
  Box,
  Button,
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { useGetAllBookingQuery } from "@/redux/api/bookingApi";
import { TBooking } from "@/types/booking.types";
import { formatLocalTime } from "@/components/Shared/Date&Time/Date";
import Image from "next/image";
import { useRouter } from "next/navigation";

const BuyerRequest = () => {
  const router = useRouter();
  const { data: bookinglist, isLoading } = useGetAllBookingQuery({});

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 'max-content', tableLayout: "auto" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell colSpan={9} sx={{ fontWeight: "bold", fontSize: "18px", }} >My Request ({bookinglist?.length})</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Flat</TableCell>
            <TableCell align="center">Owner</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Availability</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading ?
            ([...Array(5)].map((_, index) => (
              <TableRow key={index}>
                <TableCell><Skeleton variant="text" width={100} /></TableCell>
                <TableCell><Skeleton variant="text" width={150} /></TableCell>
                <TableCell align="center"><Skeleton variant="text" width={100} /></TableCell>
                <TableCell align="center"><Skeleton variant="text" width={80} /></TableCell>
                <TableCell align="center"><Skeleton variant="text" width={80} /></TableCell>
                <TableCell align="center"><Skeleton variant="text" width={80} /></TableCell>
              </TableRow>
            )))
            :
            (bookinglist && bookinglist?.length > 0 ? (bookinglist?.map((item: TBooking) => (
              <TableRow key={item.id}>
                <TableCell sx={{ whiteSpace: "nowrap", }}>{formatLocalTime(item?.createdAt || '')}</TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    {item?.flat?.flatPhoto && <Image src={item?.flat?.flatPhoto || ''} width={60} height={60} alt='flat img' />}
                    {item?.flat?.flatName && item?.flat?.flatName.length > 40 ? item?.flat?.flatName.slice(0, 40) + ' ...' : item?.flat?.flatName}
                  </Box>
                </TableCell>
                <TableCell align="center">{item?.flat?.user?.seller?.email}</TableCell>
                <TableCell align="center">{item?.status}</TableCell>
                <TableCell align="center">{item?.flat?.availability === true ? 'Yes':"No"}</TableCell>
                <TableCell align="center"><Button variant="outlined" size="small" onClick={()=> router.push(`/dashboard/buyer/my-requests/${item?.id}`)}>Details</Button></TableCell>
              </TableRow>
            )))
              :
              <TableRow>
                <TableCell colSpan={8} align="center">
                  No Booking Data
                </TableCell>
              </TableRow>
            )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BuyerRequest;
