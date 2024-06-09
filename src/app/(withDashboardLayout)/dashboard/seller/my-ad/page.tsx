"use client";
import {
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
import { useGetSellerFlatsQuery } from "../../../../../redux/api/flatApi";

const MyAd = () => {
  const { data: flatData, isLoading } = useGetSellerFlatsQuery({});
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
                <TableCell align="right">SquareFeet</TableCell>
                <TableCell align="right">Total Bedroom</TableCell>
                <TableCell align="right">Total Room</TableCell>
                <TableCell align="right">Address</TableCell>
                <TableCell align="right">Rent</TableCell>
                <TableCell align="right">Advance Amount</TableCell>
                <TableCell align="right">Availability</TableCell>
                <TableCell align="center">Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {flatData?.map((data: any) => (
                <TableRow
                  key={data?.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {data?.flatName}
                  </TableCell>
                  <TableCell align="right">{data?.squareFeet}</TableCell>
                  <TableCell align="right">{data?.totalBedrooms}</TableCell>
                  <TableCell align="right">{data?.totalRooms}</TableCell>
                  <TableCell align="right">{data?.location}</TableCell>
                  <TableCell align="right">{data?.rent}</TableCell>
                  <TableCell align="right">{data?.advanceAmount}</TableCell>
                  <TableCell align="right">
                    {data?.availability ? "Yes" : "No"}
                  </TableCell>
                  <TableCell align="center">
                    {/*  <Link href={`/dashboard/admin/all-buyer/${data?.id}`}> */}
                    <Button variant="contained">Details</Button>
                    {/*  </Link> */}
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

export default MyAd;
