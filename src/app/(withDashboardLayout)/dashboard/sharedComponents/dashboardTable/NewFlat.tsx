"use client";
import { Paper, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useGetAllFlatQuery } from "@/redux/api/flatApi";
import { TFlat } from "@/types/flat.types";
import { formatLocalDateWithShortMonth } from "@/components/Shared/Date&Time/Date";
import Image from "next/image";

const NewFlat = () => {
    const { data: flatlist, isLoading } = useGetAllFlatQuery({});

    return (
        <TableContainer component={Paper} sx={{ height: '100%', width: '100%', overflowX: 'auto',  }}>
            <Table sx={{ minWidth: 'max-content', tableLayout: 'auto' }}>
                <TableHead>
                    <TableRow>
                        <TableCell colSpan={6} sx={{ fontWeight: "bold", fontSize: "18px", }} >New Flats</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell align="center">Owner</TableCell>
                        <TableCell align="center">Rent</TableCell>
                        <TableCell align="center">Availability</TableCell>
                        <TableCell align="center">Views</TableCell>
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
                        flatlist && flatlist.length > 0 ? flatlist.slice(0, 5)?.map((item: TFlat) => (
                            <TableRow key={item.id}>
                                <TableCell>{formatLocalDateWithShortMonth(item?.createdAt || '')}</TableCell>
                                <TableCell sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>{<Image src={item.flatPhoto || ''} width={60} height={40.31} alt='' />}{item.flatName.length > 20 ? item.flatName.slice(0, 20) + ' ...' : item.flatName}</TableCell>
                                <TableCell align="center">{item?.user?.seller.name}</TableCell>
                                <TableCell align="center">{item.rent}</TableCell>
                                <TableCell align="center">  {item.availability ? "Available" : "Not Available"}</TableCell>
                                <TableCell align="center">{item.viewFlat}</TableCell>
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
    );
};

export default NewFlat;