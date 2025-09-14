"use client";
import {
  Box,
  Button,
  DialogActions,
  IconButton,
  Modal,
  Paper,
  Skeleton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "sonner";
import {
  useDeleteSingleFlatMutation,
  useGetAllFlatQuery,
} from "../../../../../redux/api/flatApi";
import Image from "next/image";
import { TFlat } from "@/types/flat.types";
import { formatLocalDate } from "@/components/Shared/Date&Time/Date";
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from "@mui/icons-material/Edit";

const style = {
  position: "absolute" as "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const FlatManagementPage = () => {
  const { data: flatlist, isLoading } = useGetAllFlatQuery({});
  const [deleteSingleFlat] = useDeleteSingleFlatMutation();
  const [flatId, setFlatId] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = (id: string) => {
    setOpen(true);
    setFlatId(id);
  };
  const handleClose = () => setOpen(false);

  const handleDeleteFlat = async (id: string) => {
    try {
      const res = await deleteSingleFlat(id).unwrap();
      if (res?.id) {
        setOpen(false);
        toast.success("Flat deleted successfully!!!");
      }
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography
            textAlign="center"
            id="keep-mounted-modal-title"
            variant="h6"
            component="h2"
          >
            Are you sure ?
          </Typography>
          <Box textAlign="center" mt={1}>
            <Button
              autoFocus
              variant="outlined"
              onClick={handleClose}
              color="primary"
              sx={{ marginRight: "25px" }}
            >
              Cancel
            </Button>
            <Button
              autoFocus
              variant="outlined"
              onClick={() => handleDeleteFlat(flatId)}
              color="warning"
            >
              Confirm
            </Button>
          </Box>
        </Box>
      </Modal>

      <TableContainer component={Paper}>
        <Table aria-label="flat list table">
          <TableHead>
            <TableRow>
              <TableCell colSpan={8} sx={{ fontWeight: "bold", fontSize: "18px", }} >All Flat ({flatlist?.length})</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Flat Name</TableCell>
              <TableCell>Flat NO</TableCell>
              <TableCell>Owner</TableCell>
              <TableCell>Availability</TableCell>
              <TableCell align="center">Booking Request</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading ? (
              [...Array(5)].map((_, index) => (
                <TableRow key={index}>
                  <TableCell><Skeleton variant="text" width={100} /></TableCell>
                  <TableCell><Skeleton variant="text" width={120} /></TableCell>
                  <TableCell><Skeleton variant="text" width={100} /></TableCell>
                  <TableCell><Skeleton variant="text" width={80} /></TableCell>
                  <TableCell><Skeleton variant="text" width={80} /></TableCell>
                  <TableCell><Skeleton variant="text" width={60} /></TableCell>
                  <TableCell><Skeleton variant="text" width={60} /></TableCell>
                  <TableCell><Skeleton variant="text" width={60} /></TableCell>
                </TableRow>
              ))
            ) : (
              flatlist && flatlist.length > 0 ? flatlist?.map((data: TFlat) => (
                <TableRow
                  key={data?.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{formatLocalDate(data.createdAt)}</TableCell>
                  <TableCell sx={{ display: 'flex', alignItems: 'center', gap: '5px' }} ><Image width={60} height={60} src={data.flatPhoto || ''} alt="Buyer Image" />{data.flatName.length > 50 ? data.flatName.slice(0, 50) + ' ...' : data.flatName}</TableCell>
                  <TableCell>{data.flatNo}</TableCell>
                  <TableCell>{data?.user.seller.name}</TableCell>
                  <TableCell align="center">
                    {data?.availability ? "Yes" : "No"}
                  </TableCell>
                  <TableCell align="center">{data?._count?.booking}</TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1} justifyContent="center">
                       <Link href={`/dashboard/admin/flat-management/${data?.id}`}>
                        <IconButton aria-label="view flat" color="info">
                          <VisibilityIcon />
                        </IconButton>
                      </Link>
                      <IconButton aria-label="edit flat" color="success">
                        <EditIcon />
                      </IconButton>
                      <IconButton  onClick={() => handleOpen(data?.id)} aria-label="delete flat" color="error">
                        <DeleteIcon />
                      </IconButton>
                    </Stack>
                  </TableCell>
                </TableRow>
              )) : (
                <TableRow>
                  <TableCell colSpan={8} align="center">
                    No Flat Data
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default FlatManagementPage;
