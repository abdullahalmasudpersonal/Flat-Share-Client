"use client";
import { formatLocalTime } from "@/components/Shared/Date&Time/Date";
import { useGetAllBookingQuery } from "@/redux/api/bookingApi";
import { TBooking } from "@/types/booking.types";
import { Box, Button, Paper, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Image from "next/image";

const MyRequest = () => {
  const { data: bookinglist, isLoading } = useGetAllBookingQuery({});

  return (
    <>
      <TableContainer component={Paper} sx={{ height: '100%' }}>
        <Table sx={{ minWidth:"max-content" }} aria-label="my request table">
          <TableHead>
            <TableRow>
              <TableCell colSpan={7} sx={{ fontWeight: "bold", fontSize: "18px", }} >Booking Requests</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Date </TableCell>
              <TableCell >Flat </TableCell>
              <TableCell align="center">Buyer </TableCell>
              <TableCell align="center">Contact </TableCell>
              <TableCell align="center">Booking</TableCell>
              <TableCell align="center">Payment</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading ?
              (
                [...Array(7)].map((_, index) => (
                  <TableRow key={index}>
                    <TableCell><Skeleton variant="text" width={100} /></TableCell>
                    <TableCell><Skeleton variant="text" width={130} /></TableCell>
                    <TableCell><Skeleton variant="text" width={100} /></TableCell>
                    <TableCell><Skeleton variant="text" width={80} /></TableCell>
                    <TableCell><Skeleton variant="text" width={60} /></TableCell>
                    <TableCell><Skeleton variant="text" width={60} /></TableCell>
                    <TableCell><Skeleton variant="text" width={80} /></TableCell>
                  </TableRow>
                ))
              )
              : bookinglist && bookinglist.length > 0 ? (bookinglist.map((item: TBooking) => (
                <TableRow key={item.id}>
                  <TableCell sx={{ whiteSpace: "nowrap", width: "max-content" }}>{formatLocalTime(item?.createdAt || '')}</TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      {item?.flat?.flatPhoto && <Image src={item?.flat?.flatPhoto || ''} width={60} height={60} alt='flat img' />}
                      {item?.flat?.flatName && item?.flat?.flatName.length > 40 ? item?.flat?.flatName.slice(0, 40) + ' ...' : item?.flat?.flatName}
                    </Box>
                  </TableCell>
                  <TableCell align="center">{item?.user?.buyer?.email}</TableCell>
                  <TableCell align="center">{item?.user?.buyer?.contactNumber}</TableCell>
                  <TableCell align="center">{item?.status}</TableCell>
                  <TableCell align="center">{item?.paymentStatus}</TableCell>
                </TableRow>
              ))) : <TableRow>
                <TableCell colSpan={6} align="center">
                  No Booking Data
                </TableCell>
              </TableRow>
            }
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default MyRequest;
