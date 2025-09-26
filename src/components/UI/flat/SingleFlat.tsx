"use client";
import { formatLocalDate } from '@/components/Shared/Date&Time/Date';
import { Box, Button, Card,  Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Image from 'next/image';
import { TFlat } from '@/types/flat.types';

const SingleFlat = ({ item }: { item: TFlat }) => {
    return (
        <Card sx={{
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
            },
        }}>
            <Image
                src={item?.flatPhoto || ''}
                alt={item?.flatName || "Flat photo"}
                width={600}
                height={400}
                style={{ width: "100%", height: "220px", objectFit: "cover" }}
            />
            <Box sx={{ padding: '15px', fontFamily: 'serif' }} textAlign={'center'}>
                <Typography sx={{ fontWeight: '700' }}>{item?.flatName?.length > 30 ? item?.flatName.substring(0, 30) + "..." : item?.flatName}</Typography>
                <Typography sx={{ fontSize: '14px' }}>{formatLocalDate(item?.createdAt || '')}</Typography>

                <Typography textAlign="justify" variant="body2" color="text.secondary" sx={{ py: 1 }}>
                    {item?.description && item.description.length >  140 ? item?.description.substring(0, 140) + "..." : item?.description}
                </Typography>

                <Typography textAlign="start" sx={{ fontSize: '15px', }}> Price: {item?.rent} TK</Typography>
                <Typography textAlign="start" sx={{ fontSize: '15px', }}> Bedrooms: {item?.totalBedrooms} </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', }}><LocationOnIcon sx={{ fontSize: '17px', marginLeft: '-3px', marginTop: '2px', marginRight: '2px', color: 'gray' }} /><Typography sx={{ fontSize: '15px', }}>{item?.location}</Typography></Box>
                    <Link href={`/flats/${item?.id}`}>
                        <Button size="small" variant="contained">Details</Button>
                    </Link>
                </Box>
            </Box>
        </Card>
    );
};

export default SingleFlat;