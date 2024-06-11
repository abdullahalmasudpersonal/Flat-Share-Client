"use client";
import {
  Box,
  Button,
  DialogActions,
  Modal,
  Paper,
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
  const { data: flatData, isLoading } = useGetAllFlatQuery({});
  const [deleteSingleFlat] = useDeleteSingleFlatMutation();
  const [flatId, setFlatId] = useState("");
  const [open, setOpen] = React.useState(false);
  console.log(flatData);
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
              Cancle
            </Button>
            <Button
              autoFocus
              variant="outlined"
              onClick={() => handleDeleteFlat(flatId)}
              color="warning"
            >
              Save changes
            </Button>
          </Box>
        </Box>
      </Modal>
      {isLoading ? (
        "Loading..."
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>SL</TableCell>
                <TableCell>Flat Name</TableCell>
                <TableCell align="right">Availability</TableCell>
                <TableCell align="right">Owner</TableCell>
                <TableCell align="right">Booking Request</TableCell>
                <TableCell align="center">Details</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {flatData?.map((data: any, index: number) => (
                <TableRow
                  key={data?.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {data?.flatName}
                  </TableCell>
                  <TableCell align="right">
                    {data?.availability ? "Yes" : "No"}
                  </TableCell>
                  <TableCell align="right">{data?.user?.email}</TableCell>
                  <TableCell align="right">{data?.booking?.length}</TableCell>
                  <TableCell align="center">
                    <Link href={`/dashboard/admin/flat-management/${data?.id}`}>
                      <Button variant="contained">Details</Button>
                    </Link>
                  </TableCell>

                  <TableCell align="center">
                    <Button
                      onClick={() => handleOpen(data?.id)}
                      variant="contained"
                      sx={{
                        backgroundColor: "warning.main",
                        color: "white",
                        "&:hover": {
                          backgroundColor: "warning.dark",
                          color: "#e2e2e2",
                        },
                      }}
                    >
                      Delete
                    </Button>
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
