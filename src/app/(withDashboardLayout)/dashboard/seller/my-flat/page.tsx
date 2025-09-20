"use client";
import {
  Button,
  IconButton,
  Paper,
  Skeleton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { useGetSellerFlatsQuery } from "../../../../../redux/api/flatApi";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import Image from "next/image";
import Link from "next/link";
import { formatLocalDate } from "@/components/Shared/Date&Time/Date";
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from "@mui/icons-material/Edit";
import { useRouter } from "next/navigation";

const MyFlat = () => {
  const router = useRouter();
  const { data: flatlist, isLoading } = useGetSellerFlatsQuery({});
  console.log(flatlist, 'flatlist')

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="flat table">
          <TableHead>
            <TableRow>
              <TableCell colSpan={9} sx={{ fontWeight: "bold", fontSize: "18px", }} >All Flat ({flatlist?.length})</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Flat Name</TableCell>
              <TableCell align="right">SquareFeet</TableCell>
              <TableCell align="right">Address</TableCell>
              <TableCell align="right">Rent</TableCell>
              <TableCell align="right">Advanced</TableCell>
              <TableCell align="right">Public</TableCell>
              <TableCell align="right">Availability</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading ?
              ([...Array(5)].map((_, index) => (
                <TableRow key={index}>
                  <TableCell><Skeleton variant="text" width={100} /></TableCell>
                  <TableCell><Skeleton variant="text" width={120} /></TableCell>
                  <TableCell><Skeleton variant="text" width={100} /></TableCell>
                  <TableCell><Skeleton variant="text" width={80} /></TableCell>
                  <TableCell><Skeleton variant="text" width={80} /></TableCell>
                  <TableCell><Skeleton variant="text" width={60} /></TableCell>
                  <TableCell><Skeleton variant="text" width={60} /></TableCell>
                  <TableCell><Skeleton variant="text" width={60} /></TableCell>
                  <TableCell><Skeleton variant="text" width={60} /></TableCell>
                </TableRow>
              )))
              :
              (flatlist && flatlist.length > 0 ? flatlist?.map((data: any) => (
                <TableRow
                  key={data?.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }} >
                  <TableCell>{formatLocalDate(data.createdAt)}</TableCell>
                  <TableCell sx={{ display: 'flex', alignItems: 'center', gap: '5px' }} ><Image width={60} height={60} src={data.flatPhoto || ''} alt="Img" />{data.flatName.length > 50 ? data.flatName.slice(0, 50) + ' ...' : data.flatName}</TableCell>
                  <TableCell align="right">{data?.squareFeet}</TableCell>
                  <TableCell align="right">{data?.location}</TableCell>
                  <TableCell align="right">{data?.rent}</TableCell>
                  <TableCell align="right">{data?.advanceAmount}</TableCell>
                  <TableCell align="right">
                    {data?.flatPhoto ? (
                      <>
                        {"Yes"}&nbsp;
                        <CheckCircleIcon
                          fontSize="small"
                          sx={{ color: "green" }}
                        />
                      </>
                    ) : (
                      <>
                        {"No"}&nbsp;
                        <DoNotDisturbIcon
                          fontSize="small"
                          sx={{ color: "red" }}
                        />
                      </>
                    )}
                  </TableCell>
                  <TableCell align="right">
                    {data?.availability ? "Yes" : "No"}
                  </TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1} justifyContent="center">
                      <IconButton onClick={() => router.push(`/dashboard/seller/my-flat/${data?.id}`)} aria-label="view flat" color="info">
                        <VisibilityIcon />
                      </IconButton>
                      <IconButton onClick={() => router.push(`/dashboard/seller/my-flat/update-flat/${data?.id}`)} aria-label="edit flat" color="success">
                        <EditIcon />
                      </IconButton>
                      <IconButton aria-label="delete flat" color="error">
                        <DeleteIcon />
                      </IconButton>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))
                :
                <TableRow>
                  <TableCell colSpan={8} align="center">
                    No Flat Data
                  </TableCell>
                </TableRow>
              )
            }
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default MyFlat;
