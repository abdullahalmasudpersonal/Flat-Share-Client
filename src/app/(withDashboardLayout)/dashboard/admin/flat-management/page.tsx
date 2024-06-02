"use client"
import { useGetAllFlatQuery } from "@/redux/api/flatApi";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React from "react";

const FlatManagementPage = () => {
  const { data: flatData, isLoading } = useGetAllFlatQuery({})

  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>SL</TableCell>
                <TableCell>Flat Name</TableCell>
                <TableCell align="right">SquareFeet</TableCell>
                <TableCell align="right">Total Bedroom</TableCell>
                <TableCell align="right">Total Room</TableCell>
                <TableCell align="right">Address</TableCell>
                <TableCell align="right">Rent</TableCell>
                <TableCell align="right">Advance Amount</TableCell>
                <TableCell align="right">Availability</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="center">Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {flatData?.map((data: any, index:number) => (
                <TableRow
                  key={data?.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {index +1}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {data?.flatName}
                  </TableCell>
                  <TableCell align="right">{data?.squareFeet}</TableCell>
                  <TableCell align="right">{data?.totalBedrooms}</TableCell>
                  <TableCell align="right">{data?.totalRooms}</TableCell>
                  <TableCell align="right">
                    {data?.location}
                  </TableCell>
                  <TableCell align="right">
                    {data?.rent}
                  </TableCell>
                  <TableCell align="right">
                    {data?.advanceAmount}
                  </TableCell>
                  <TableCell align="right">
                    {data?.availability ? "Yes" : "No"}
                  </TableCell>
                  <TableCell align="right">
                    {data?.user?.email}
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

export default FlatManagementPage;
