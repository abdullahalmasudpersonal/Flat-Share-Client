"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { BookingStatus, UserStatus } from "@/types";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

interface bookingData {
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
}

const DataTable = (data: any) => {
  const bookingData = data?.data;
  // bookingData.map((data) => ({
  //   data,
  // }));
  console.log("bookingData", bookingData);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Flat Name</TableCell>
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
                {data?.user?.username}
              </TableCell>
              <TableCell align="right">{data?.user?.email}</TableCell>
              <TableCell align="right">{data?.flat?.flatName}</TableCell>
              <TableCell align="right">{data?.carbs}</TableCell>
              <TableCell align="right">{data?.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;

{
  /* <TableRow
  key={data?.id}
  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
>
  <TableCell component="th" scope="row">
    {data?.name}
  </TableCell>
  <TableCell align="right">{data?.calories}</TableCell>
  <TableCell align="right">{data?.fat}</TableCell>
  <TableCell align="right">{data?.carbs}</TableCell>
  <TableCell align="right">{data?.protein}</TableCell>
</TableRow>;
 */
}
