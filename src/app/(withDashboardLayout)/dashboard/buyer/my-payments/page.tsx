"use client";
import {
  Box,
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
import {
  useGetPaymentsQuery,
  useInitPaymentMutation,
} from "@/redux/api/paymentApi";

const MyPayments = () => {
  const { data: paymentData, isLoading: paymentLoading } = useGetPaymentsQuery(
    {}
  );

  const [initPayment] = useInitPaymentMutation();

  const handleInitPayment = async (id: string) => {
    try {
      const res = await initPayment(id).unwrap();
      window.open(res?.paymentUrl, "_blank");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {paymentLoading ? (
        "Loading..."
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Flat Name</TableCell>
                <TableCell align="right">Flat Id</TableCell>
                <TableCell align="right">Owner Email</TableCell>
                <TableCell align="right">Amount</TableCell>
                <TableCell align="right">transactionId</TableCell>
                <TableCell align="right">Pay Status</TableCell>
                <TableCell align="center">Payment</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paymentData?.map((data: any) => (
                <TableRow
                  key={data?.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {data?.booking?.flat?.flatName}
                  </TableCell>
                  <TableCell align="right">
                    {data?.booking?.flat?.flatNo}
                  </TableCell>
                  <TableCell align="right">
                    {data?.booking?.flat?.email}
                  </TableCell>
                  <TableCell align="right">{data?.amount}</TableCell>
                  <TableCell align="right">{data?.transactionId}</TableCell>
                  <TableCell align="right">{data?.payStatus}</TableCell>
                  <TableCell align="center">
                    {data?.payStatus === "PAID" ? (
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
                    )}
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

export default MyPayments;
