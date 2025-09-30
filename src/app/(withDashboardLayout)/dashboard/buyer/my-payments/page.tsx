"use client";
import {
  Box,
  Button,
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import {
  useGetPaymentsQuery,
  useInitPaymentMutation,
} from "@/redux/api/paymentApi";
import { TPayment } from "@/types/pyament.types";
import Image from "next/image";
import { useState } from "react";

const MyPayments = () => {
  const { data: paymentList, isLoading: paymentLoading } = useGetPaymentsQuery({});
  const [initPayment] = useInitPaymentMutation();
  const [loading, setLoading] = useState(false);

  const handleInitPayment = async (id: string) => {
    setLoading(true);
    try {
      const res = await initPayment(id).unwrap();
      window.open(res?.paymentUrl);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 'max-content', tableLayout: "auto" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Flat Name</TableCell>
            <TableCell align="center">Flat No</TableCell>
            <TableCell align="center">Owner Email</TableCell>
            <TableCell align="center">Amount</TableCell>
            <TableCell align="center">transactionId</TableCell>
            <TableCell align="center">Pay Status</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paymentLoading ?
            ([...Array(4)].map((_, index) => (
              <TableRow key={index}>
                <TableCell><Skeleton variant="text" width={100} /></TableCell>
                <TableCell><Skeleton variant="text" width={150} /></TableCell>
                <TableCell align="center"><Skeleton variant="text" width={100} /></TableCell>
                <TableCell align="center"><Skeleton variant="text" width={80} /></TableCell>
                <TableCell align="center"><Skeleton variant="text" width={80} /></TableCell>
                <TableCell align="center"><Skeleton variant="text" width={80} /></TableCell>
                <TableCell align="center"><Skeleton variant="text" width={80} /></TableCell>
              </TableRow>
            )))
            :
            (paymentList && paymentList?.length > 0 ?
              (paymentList?.map((item: TPayment) =>
                <TableRow key={item?.id}>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                      {item?.booking?.flat?.flatPhoto && <Image width={50} height={50} src={item?.booking?.flat?.flatPhoto || ''} alt="flat photo" />}
                      {item?.booking?.flat?.flatName && item?.booking?.flat?.flatName.length > 40 ? item?.booking?.flat?.flatName.slice(0, 40) + '...' : item?.booking?.flat?.flatName}
                    </Box>
                  </TableCell>
                  <TableCell align="center">{item?.booking?.flat?.flatNo} </TableCell>
                  <TableCell align="center">{item?.booking?.flat?.email} </TableCell>
                  <TableCell align="center">{item?.amount} </TableCell>
                  <TableCell align="center">{item?.transactionId} </TableCell>
                  <TableCell align="center">{item?.payStatus} </TableCell>
                  <TableCell align="center">
                    <Button disabled={loading}
                      variant="contained"
                      onClick={() => handleInitPayment(item?.bookingId!)}
                    >
                      {loading ? 'Checkout...' : "Checkout"}
                    </Button>
                  </TableCell>
                </TableRow>
              ))
              : <TableRow>
                <TableCell colSpan={8} align="center">
                  No Pyament Data
                </TableCell>
              </TableRow>)
          }

          {paymentList?.map((data: any) => (
            <TableRow
              key={data?.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">
                {/* {data?.payStatus === "PAID" ? (
                  <Button
                    disabled
                    sx={{ color: "white", backgroundColor: "gray" }}
                  >
                    PAID
                  </Button>
                ) : (
                  // <Link
                  //   href={`/dashboard/buyer/my-requests/${data?.flat?.id}`}
                  // >
                  <Button
                    variant="contained"
                    onClick={() => handleInitPayment(data?.bookingId)}
                  >
                    Checkout
                  </Button>
                  // </Link>
                )} */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MyPayments;
