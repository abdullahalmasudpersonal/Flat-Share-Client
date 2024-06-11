"use client";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

/* interface bookingData {
  id: string;
  flatId: string;
  userId: string;
  flatOwnerId: string;
  status: BookingStatus;
  isDeleted: boolean;
  user: {
    username: string;
    email: string;
    role: string;
    status: UserStatus;
  };
  flat: {
    flatName: string;
    userId: string;
    squareFeet: number;
    totalBedrooms: number;
    totalRooms: number;
    utilitiesDescription: string;
    location: string;
    description: string;
    amenities: string;
    rent: number;
    advanceAmount: number;
    availability: boolean;
    flatPhoto: string;
  };
} */

const DataTable = (data: any) => {
  const bookingData = data?.data;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Flat Name</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Contact Number</TableCell>
            <TableCell align="right">Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookingData?.map((data: any) => (
            <TableRow
              key={data?.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {data?.flat?.flatName}
              </TableCell>
              <TableCell align="right">{data?.status}</TableCell>
              <TableCell align="right">{data?.user?.username}</TableCell>
              <TableCell align="right">{data?.user?.email}</TableCell>
              <TableCell align="right">{data?.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
