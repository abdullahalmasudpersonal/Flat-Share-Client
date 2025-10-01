"use client";
import { formatLocalTime } from "@/components/Shared/Date&Time/Date";
import { useGetAllBookingQuery } from "@/redux/api/bookingApi";
import { getUserInfo } from "@/services/auth.services";
import { TBooking } from "@/types/booking.types";
import { Box, Paper, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

const ResentBooking = () => {
    const { data: bookinglist, isLoading } = useGetAllBookingQuery({});
    const [role, setRole] = useState<string | null>(null);

    useEffect(() => {
        const { role } = getUserInfo();
        setRole(role);
    }, []);

    return (
        <TableContainer component={Paper} sx={{ height: '100%', width: '100%', overflowX: 'auto', }}>
            <Table sx={{ minWidth: 'max-content', tableLayout: 'auto' }}>
                <TableHead>
                    <TableRow>
                        <TableCell colSpan={6} sx={{ fontWeight: "bold", fontSize: "18px", }}>
                            Latest Bookings
                        </TableCell>
                    </TableRow>
                    {role && <TableRow>
                        {role !== 'admin' &&<TableCell>Date</TableCell>}
                        <TableCell>Flat </TableCell>
                        {role === "seller" && <TableCell align='center'>Buyer </TableCell>}
                        {role === "buyer" && <TableCell align='center'>Seller </TableCell>}
                        {role === "admin" && (
                            <>
                                <TableCell align="center">Buyer</TableCell>
                                <TableCell align="center">Seller</TableCell>
                            </>
                        )}
                        <TableCell align='center'>Booking</TableCell>
                        <TableCell align='center'>Payment</TableCell>
                    </TableRow>}
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
                            </TableRow>
                        ))
                    ) :
                        bookinglist && bookinglist.length > 0 ? (
                            bookinglist.slice(0, 5).map((item: TBooking) => (
                                <TableRow key={item.id}>
                                     {role !== 'admin' &&<TableCell>{formatLocalTime(item?.createdAt || '')}</TableCell>}
                                    <TableCell sx={{}}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                            {item?.flat?.flatPhoto && <Image src={item?.flat?.flatPhoto || ''} width={60} height={60} alt='Img' />}
                                            {item?.flat?.flatName && item?.flat?.flatName.length > 20 ? item?.flat?.flatName.slice(0, 20) + ' ...' : item?.flat?.flatName}
                                        </Box>
                                    </TableCell>
                                    {role === "seller" && <TableCell align="center">{item?.user?.buyer?.name}</TableCell>}
                                    {role === "buyer" && <TableCell align="center">{item?.flat?.user?.seller?.name}</TableCell>}
                                    {role === "admin" && (
                                        <>
                                            <TableCell align="center">{item?.user?.buyer?.name}</TableCell>
                                            <TableCell align="center">{item?.flat?.user?.seller?.name}</TableCell>
                                        </>
                                    )}
                                    <TableCell align='center'>{item.status}</TableCell>
                                    <TableCell align='center'>{item.paymentStatus}</TableCell>
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
    );
};

export default ResentBooking;