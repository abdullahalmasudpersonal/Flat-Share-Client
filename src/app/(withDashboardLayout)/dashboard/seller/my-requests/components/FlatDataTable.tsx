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
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import Image from "next/image";
import Link from "next/link";
import { useGetSellerFlatsQuery } from "@/redux/api/flatApi";

const FlatDataTable = () => {
  const { data: flatData, isLoading } = useGetSellerFlatsQuery({});
console.log(flatData)
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
                {/* <TableCell align="right">Total Bedroom</TableCell>
                <TableCell align="right">Total Room</TableCell> */}
                <TableCell align="right">Address</TableCell>
                <TableCell align="right">Rent</TableCell>
                <TableCell align="right">Advance Amount</TableCell>
                <TableCell align="right">Image</TableCell>
                <TableCell align="right">Request</TableCell>
                <TableCell align="right">Availability</TableCell>
                <TableCell align="right">Payment</TableCell>
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
                  {/* <TableCell align="right">{data?.totalBedrooms}</TableCell>
                  <TableCell align="right">{data?.totalRooms}</TableCell> */}
                  <TableCell align="right">{data?.location}</TableCell>
                  <TableCell align="right">{data?.rent}</TableCell>
                  <TableCell align="right">{data?.advanceAmount}</TableCell>
                  <TableCell align="right">
                    {data?.flatPhoto ? (
                      <Image
                        width={100}
                        height={100}
                        src={data?.flatPhoto}
                        alt="flat image"
                      />
                    ) : (
                      "Please upload image & get public"
                    )}
                  </TableCell>
                  <TableCell align="right">{data?.booking?.length}</TableCell>
                  <TableCell align="right">
                    {data?.availability ? "Yes" : "No"}
                  </TableCell>

                  {/* <TableCell align="right">
                    {data?.booking ? "Yes" : "No"}
                  </TableCell> */}

                  <TableCell align="center" aria-disabled>
                 
                      <Button variant="contained" disabled={data?.booking?.length < 1} href={`/dashboard/seller/my-requests/${data?.id}`}>See Request</Button>
                   
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

export default FlatDataTable;
