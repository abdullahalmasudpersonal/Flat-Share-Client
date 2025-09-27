"use client";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import {
  useGetAllBookingQuery,
  useUpdateConfirmBookingMutation,
} from "@/redux/api/bookingApi";
import React, { useState } from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { BootstrapDialog } from "@/components/Shared/Modal/Modal";
import { toast } from "sonner";
import { SubmitHandler, useForm } from "react-hook-form";
import { formatLocalTime } from "@/components/Shared/Date&Time/Date";
import { TBooking } from "@/types/booking.types";
import Image from "next/image";
type TParams = {
  params: {
    id: string;
  };
};

type Inputs = {
  status?: string;
};

const MyFlatDetailPage = ({ params }: TParams) => {
  const flatId = params?.id;
  const { data: bookinglist, isLoading } = useGetAllBookingQuery({});
  const [updateConfirmBooking] = useUpdateConfirmBookingMutation(undefined);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [confirmBookingId, setConfirmBookingId] = useState('');
  const { register, handleSubmit } = useForm<Inputs>();

  const handleClickOpen = (id?: string) => {
    if (!id) return;
    setOpen(true);
    setConfirmBookingId(id);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit: SubmitHandler<Inputs> = async (values: Inputs) => {
    setLoading(true);
    try {
      const res = await updateConfirmBooking({ id: confirmBookingId });

      if (res?.data) {
        toast.success("Confirm Booking Successfully!");
        setOpen(false);
      } else {
        toast.error("Confirm Booking Faliled!");
        // setOpen(false);
      }
    } catch (err: any) {
      console.log(err);
      toast.error(err || 'Confirm Booking Faliled!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box className="p-6">
            <Typography className="text-center font " variant="h5">
              Confirm Booking
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "15px",
              }}
            >
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small-label">Status</InputLabel>
                <Select
                  id="status"
                  {...register("status")}
                  labelId="demo-select-small-label"
                  label="Status"
                >
                  <MenuItem value="PENDING">PENDING</MenuItem>
                  <MenuItem value="BOOKED">BOOKED</MenuItem>
                  {/* <MenuItem value="REJECTED">REJECTED</MenuItem> */}
                </Select>
              </FormControl>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "15px",
                marginTop: "15px",
              }}
            >
              <Button variant="outlined" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="contained" type="submit" disabled={loading}>
                {loading ? 'Confirming...' : 'Confirm'}
              </Button>
            </Box>
          </Box>
        </form>
      </BootstrapDialog>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="booking table">
          <TableHead>
            <TableRow>
              <TableCell colSpan={7} sx={{ fontWeight: "bold", fontSize: "18px", }} >Booking Requests</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Date </TableCell>
              <TableCell>Flat </TableCell>
              <TableCell align="center">Buyer </TableCell>
              <TableCell align="center">Contact </TableCell>
              <TableCell align="center">Booking</TableCell>
              <TableCell align="center">Payment</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading ?
              (
                [...Array(7)].map((_, index) => (
                  <TableRow key={index}>
                    <TableCell><Skeleton variant="text" width={100} /></TableCell>
                    <TableCell><Skeleton variant="text" width={130} /></TableCell>
                    <TableCell><Skeleton variant="text" width={100} /></TableCell>
                    <TableCell><Skeleton variant="text" width={80} /></TableCell>
                    <TableCell><Skeleton variant="text" width={60} /></TableCell>
                    <TableCell><Skeleton variant="text" width={60} /></TableCell>
                    <TableCell><Skeleton variant="text" width={80} /></TableCell>
                  </TableRow>
                ))
              )
              : bookinglist && bookinglist.length > 0 ? (bookinglist?.filter((data: TBooking) => data?.flatId === flatId).map((item: TBooking) => (
                <TableRow key={item.id}>
                  <TableCell sx={{ whiteSpace: "nowrap", width: "max-content" }}>{formatLocalTime(item?.createdAt || '')}</TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      {item?.flat?.flatPhoto && <Image src={item?.flat?.flatPhoto || ''} width={60} height={60} alt='flat img' />}
                      {item?.flat?.flatName && item?.flat?.flatName.length > 40 ? item?.flat?.flatName.slice(0, 40) + ' ...' : item?.flat?.flatName}
                    </Box>
                  </TableCell>
                  <TableCell align="center">{item?.user?.buyer?.email}</TableCell>
                  <TableCell align="center">{item?.user?.buyer?.contactNumber}</TableCell>
                  <TableCell align="center">{item?.status}</TableCell>
                  <TableCell align="center">{item?.paymentStatus}</TableCell>
                  <TableCell align="center"> <Button onClick={() => handleClickOpen(item?.id!)} variant="outlined" size="small" startIcon={<ModeEditIcon />}>Confirm</Button></TableCell>
                </TableRow>
              ))) : <TableRow>
                <TableCell colSpan={6} align="center">
                  No Booking Data
                </TableCell>
              </TableRow>
            }
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default MyFlatDetailPage;
