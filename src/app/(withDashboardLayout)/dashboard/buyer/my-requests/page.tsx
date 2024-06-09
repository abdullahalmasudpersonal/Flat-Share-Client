"use client";
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { useGetBookingFlatQuery } from "../../../../../redux/api/bookingApi";

const MyRequest = () => {
  const { data, isLoading } = useGetBookingFlatQuery({});

  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Flat Name</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">SquareFeet</TableCell>
                <TableCell align="right">Total Bedroom</TableCell>
                <TableCell align="right">Total Room</TableCell>
                <TableCell align="right">Rent</TableCell>
                <TableCell align="right">Advance Amount</TableCell>
                <TableCell align="right">Address</TableCell>
                <TableCell align="right">Availability</TableCell>
                <TableCell align="center">Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((data: any) => (
                <TableRow
                  key={data?.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {data?.flat?.flatName}
                  </TableCell>
                  <TableCell align="right">{data?.status}</TableCell>
                  <TableCell align="right">{data?.flat?.squareFeet}</TableCell>
                  <TableCell align="right">
                    {data?.flat?.totalBedrooms}
                  </TableCell>
                  <TableCell align="right">{data?.flat?.totalRooms}</TableCell>
                  <TableCell align="right">{data?.flat?.rent}</TableCell>
                  <TableCell align="right">
                    {data?.flat?.advanceAmount}
                  </TableCell>
                  <TableCell align="right">{data?.flat?.location}</TableCell>
                  <TableCell align="right">
                    {data?.flat?.availability ? "Yes" : "NO"}
                  </TableCell>
                  <TableCell align="center">
                    {/*   <Link href={`/dashboard/admin/all-buyer/${data?.id}`}> */}
                    <Button variant="contained">Details</Button>
                    {/* </Link> */}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default MyRequest;
