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
import Link from "next/link";
import { useGetAllBuyerQuery } from "../../../../../redux/api/buyerApi";

const AllBuyerPage = () => {
  const { data: buyerData, isLoading } = useGetAllBuyerQuery({});

  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Profession</TableCell>
                <TableCell align="right">Address</TableCell>
                <TableCell align="right">Bio</TableCell>
                <TableCell align="center">Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {buyerData?.map((data: any) => (
                <TableRow
                  key={data?.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {data?.name}
                  </TableCell>
                  <TableCell align="right">{data?.email}</TableCell>
                  <TableCell align="right">
                    {data?.profession}
                  </TableCell>
                  <TableCell align="right">
                    {data?.address}
                  </TableCell>
                  <TableCell align="right">
                    {data?.bio}
                  </TableCell>
                  <TableCell align="center">
                    <Link href={`/dashboard/admin/all-buyer/${data?.id}`}>
                      <Button variant="contained">Details</Button>
                    </Link>
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

export default AllBuyerPage;
