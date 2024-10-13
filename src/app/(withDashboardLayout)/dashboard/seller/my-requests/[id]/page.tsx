"use client";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import {
  useGetBookingFlatQuery,
  useUpdateConfirmBookingMutation,
} from "@/redux/api/bookingApi";
import React, { useState } from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import  { BootstrapDialog } from "@/components/Shared/Modal/Modal";
import { toast } from "sonner";
import { SubmitHandler, useForm } from "react-hook-form";
type TParams = {
  params: {
    id: string;
  };
};

type Inputs = {
  status?: string;
};

const MyFlatDetailPage = ({ params }: TParams) => {
  const { data: flatBookingData, isLoading } = useGetBookingFlatQuery({});
  const [open, setOpen] = useState(false);
  const [updateConfirmBooking] = useUpdateConfirmBookingMutation(undefined);
  const [confirmBookingId, setConfirmBookingId]= useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const handleClickOpen = (id:string) => {
    setOpen(true);
    setConfirmBookingId(id)
  };
  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit: SubmitHandler<Inputs> = async (values: Inputs) => {
    console.log(values);
    try {
      const res = await updateConfirmBooking({
        id: confirmBookingId,
        body: values,
      });
      if (res?.data) {
        toast.success("Update Booking Flat!");
        setOpen(false);
      }
    } catch (err: any) {
      console.log(err);
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
                  <MenuItem value="REJECTED">REJECTED</MenuItem>
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
              <Button variant="contained" type="submit">
                Confirm
              </Button>
            </Box>
          </Box>
        </form>
      </BootstrapDialog>

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
              <TableCell align="right">Confirm Booking</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {flatBookingData
              ?.filter((data: any) => data?.flatId === params?.id)
              ?.map((data: any) => (
                <TableRow
                  key={data?.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {data?.flat?.flatName}
                  </TableCell>
                  <TableCell align="right">{data?.status}</TableCell>
                  <TableCell align="right">{data?.user?.buyer?.name}</TableCell>
                  <TableCell align="right">{data?.user?.email}</TableCell>
                  <TableCell align="right">
                    {data?.user?.buyer?.contactNumber}
                  </TableCell>
                  <TableCell align="right">
                    {data?.user?.buyer?.address}
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      fullWidth
                      endIcon={<ModeEditIcon />}
                      onClick={() =>handleClickOpen(data?.id)}
                  
                    >
                      Update
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default MyFlatDetailPage;
