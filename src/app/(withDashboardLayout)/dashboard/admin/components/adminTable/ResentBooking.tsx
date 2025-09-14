import { formatLocalTime } from "@/components/Shared/Date&Time/Date";
import { useGetAllBookingQuery } from "@/redux/api/bookingApi";
import { TBooking } from "@/types/booking.types";
import { Paper, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, } from "@mui/material";
import Image from "next/image";

const ResentBooking = () => {
    const { data: bookinglist, isLoading } = useGetAllBookingQuery({});

    return (
        <>
            <TableContainer component={Paper} sx={{ height: '100%' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell colSpan={6} sx={{ fontWeight: "bold", fontSize: "18px", }}>
                                Latest Bookings
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Date </TableCell>
                            <TableCell>Flat </TableCell>
                            <TableCell>Buyer </TableCell>
                            <TableCell>Seller</TableCell>
                            <TableCell>Booking</TableCell>
                            <TableCell>Payment</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {isLoading ? (
                            [...Array(5)].map((_, index) => (
                                <TableRow key={index}>
                                    <TableCell><Skeleton variant="text" width={100} /></TableCell>
                                    <TableCell><Skeleton variant="text" width={130} /></TableCell>
                                    <TableCell><Skeleton variant="text" width={100} /></TableCell>
                                    <TableCell><Skeleton variant="text" width={80} /></TableCell>
                                    <TableCell><Skeleton variant="text" width={80} /></TableCell>
                                    <TableCell><Skeleton variant="text" width={60} /></TableCell>
                                </TableRow>
                            ))
                        ) :
                            bookinglist && bookinglist.length > 0 ? (
                                bookinglist.map((item: TBooking) => (
                                    <TableRow key={item.id}>
                                        <TableCell>{formatLocalTime(item.createdAt)}</TableCell>
                                        <TableCell sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>{<Image src={item.flat.flatPhoto || ''} width={60} height={60} alt='flat img' />}{item.flat.flatName.length > 40 ? item.flat.flatName.slice(0, 40) + ' ...' : item.flat.flatName}</TableCell>
                                        <TableCell>{item.user.buyer.name}</TableCell>
                                        <TableCell>{item.flat.user.seller.name}</TableCell>
                                        <TableCell>{item.status}</TableCell>
                                        <TableCell>{item.paymentStatus}</TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={6} align="center">
                                        No Booking Data
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

export default ResentBooking;