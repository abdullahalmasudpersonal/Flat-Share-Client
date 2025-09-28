"use client";
import {
  Box,
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
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import Image from "next/image";
import { formatLocalDateWithShortMonth } from "@/components/Shared/Date&Time/Date";
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from "@mui/icons-material/Edit";
import { useRouter } from "next/navigation";
import { useDeleteSingleFlatMutation, useGetSellerFlatsQuery } from "@/redux/api/flatApi";

const MyFlat = () => {
  const router = useRouter();
  const { data: flatlist, isLoading } = useGetSellerFlatsQuery({});
  const [deleteFlat] = useDeleteSingleFlatMutation();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, tableLayout: "auto" }} aria-label="flat table">
        <TableHead>
          <TableRow>
            <TableCell colSpan={9} sx={{ fontWeight: "bold", fontSize: "18px", }} >My Flat ({flatlist?.length})</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Flat Name</TableCell>
            <TableCell align="center">Booking</TableCell>
            <TableCell align="center">Public</TableCell>
            <TableCell align="center">Availability</TableCell>
            <TableCell align="center">Request</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading ?
            ([...Array(5)].map((_, index) => (
              <TableRow key={index}>
                <TableCell><Skeleton variant="text" width={100} /></TableCell>
                <TableCell><Skeleton variant="text" width={150} /></TableCell>
                <TableCell><Skeleton variant="text" width={100} /></TableCell>
                <TableCell><Skeleton variant="text" width={80} /></TableCell>
                <TableCell><Skeleton variant="text" width={80} /></TableCell>
                <TableCell><Skeleton variant="text" width={80} /></TableCell>
                <TableCell><Skeleton variant="text" width={120} /></TableCell>
              </TableRow>
            )))
            :
            (flatlist && flatlist.length > 0 ? [...flatlist].reverse().map((data: any) => (
              <TableRow
                key={data?.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }} >
                <TableCell sx={{ whiteSpace: "nowrap", width: "max-content" }}>{formatLocalDateWithShortMonth(data.createdAt)}</TableCell>
                <TableCell align="center"><Box display="flex" alignItems="center" gap={1}><Image width={60} height={60} src={data.flatPhoto || ''} alt="Img" />{data.flatName.length > 50 ? data.flatName.slice(0, 50) + ' ...' : data.flatName}</Box></TableCell>
                <TableCell align="center">{data?.booking?.length}</TableCell>
                <TableCell align="center">
                  {data?.flatPhoto ? (<CheckCircleIcon fontSize="small" sx={{ color: "green" }} />) : (<DoNotDisturbIcon fontSize="small" sx={{ color: "red" }} />)}
                </TableCell>
                <TableCell align="center">
                  {data?.availability ? "Yes" : "No"}
                </TableCell>
                <TableCell align="center">
                  <Button variant="outlined" size="small" disabled={data?.booking?.length < 1} onClick={()=>router.push(`/dashboard/seller/my-requests/${data?.id}`)}>View</Button>
                </TableCell>
                <TableCell>
                  <Stack direction="row" spacing={1} justifyContent="center">
                    <IconButton onClick={() => router.push(`/dashboard/seller/my-flat/${data?.id}`)} aria-label="view flat" color="info">
                      <VisibilityIcon />
                    </IconButton>
                    <IconButton onClick={() => router.push(`/dashboard/seller/my-flat/update-flat/${data?.id}`)} aria-label="edit flat" color="success">
                      <EditIcon />
                    </IconButton>
                    <IconButton /* onClick={()=> deleteFlat(data?.id)} */ aria-label="delete flat" color="error">
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
  );
};

export default MyFlat;
