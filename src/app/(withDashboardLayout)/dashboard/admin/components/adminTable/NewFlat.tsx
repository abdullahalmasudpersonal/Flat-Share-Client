"use client";
import { Paper, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useGetAllFlatQuery } from "@/redux/api/flatApi";
import { TFlat } from "@/types/flat.types";
import { formatLocalDate } from "@/components/Shared/Date&Time/Date";
import Image from "next/image";

const NewFlat = () => {
    const { data: flatlist, isLoading } = useGetAllFlatQuery({});

    return (
        <>
            <TableContainer component={Paper} sx={{ height: '100%' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell colSpan={6} sx={{ fontWeight: "bold", fontSize: "18px", }} >New Flats</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Owner</TableCell>
                            <TableCell>Rent</TableCell>
                            <TableCell>Availability</TableCell>
                            <TableCell>Views</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {isLoading ?
                            (
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
                            )
                            :
                            flatlist && flatlist.length > 0 ? flatlist?.map((item: TFlat) => (
                                <TableRow key={item.id}>
                                    <TableCell>{formatLocalDate(item?.createdAt || '')}</TableCell>
                                    <TableCell sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>{<Image src={item.flatPhoto || ''} width={60} height={60} alt='flat img' />}{item.flatName.length > 50 ? item.flatName.slice(0, 50) + ' ...' : item.flatName}</TableCell>
                                    <TableCell>{item?.user?.seller.name}</TableCell>
                                    <TableCell>{item.rent}</TableCell>
                                    <TableCell>  {item.availability ? "Available" : "Not Available"}</TableCell>
                                    <TableCell>{item.viewFlat}</TableCell>
                                </TableRow>
                            )) : (
                                <TableRow>
                                    <TableCell colSpan={6} align="center">
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

export default NewFlat;