"use client";
import { useGetSingleFlatQuery, useUpdateFlatMutation } from '@/redux/api/flatApi';
import { TFlat } from '@/types/flat.types';
import { Avatar, Box, Button, Grid, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';

type TParams = {
    params: {
        id: string;
    };
};
const MAX_FILE_SIZE = 2 * 1024 * 1024;

const UpdateFlat = ({ params }: TParams) => {
    const id = params?.id;
    const router = useRouter();
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string>("");
    const { data: flatData, refetch } = useGetSingleFlatQuery(id);
    const [updateFlat, { isLoading: isUpdating }] = useUpdateFlatMutation();
    const [formData, setFormData] = useState<TFlat>({
        flatName: "",
        flatNo: "",
        location: "",
        squareFeet: 0,
        totalRooms: 0,
        totalBedrooms: 0,
        rent: 0,
        advanceAmount: 0,
        description: '',
        utilitiesDescription: '',
        amenities: ''
    });

    useEffect(() => {
        if (flatData) {
            const { flatName, flatPhoto, flatNo, location, squareFeet, totalRooms, totalBedrooms, rent, advanceAmount, description, utilitiesDescription, amenities, } = flatData as TFlat;
            setFormData({
                flatName: flatName || "",
                flatNo: flatNo || "",
                location: location || "",
                squareFeet: squareFeet || 0,
                totalRooms: totalRooms || 0,
                totalBedrooms: totalBedrooms || 0,
                rent: rent || 0,
                advanceAmount: advanceAmount || 0,
                description: description || '',
                utilitiesDescription: utilitiesDescription || '',
                amenities: amenities || '',
            });
            setPreview(flatPhoto || "");
        }
    }, [flatData]);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            if (selectedFile.size > MAX_FILE_SIZE) {
                toast.error("File size must be under 2MB");
                return;
            }

            const img = new Image();
            img.src = URL.createObjectURL(selectedFile);

            img.onload = () => {
                if (img.width === 800 && img.height === 535) {
                    setFile(selectedFile);
                    setPreview(URL.createObjectURL(selectedFile));
                } else {
                    toast.error("Image must be 800×535 pixels!");
                }
            };
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const payload = new FormData();
            const flatData = { ...formData };
            if (!file && preview) {
                flatData.flatPhoto = preview;
            }

            payload.append("data", JSON.stringify(flatData));
            if (file) {
                payload.append("file", file);
            }

            ///// এখাকে অবশ্যই formData নামে প্যারামিটার রাখতে হবে এবং এপিআইতে formData নামে প্যারামিটার পাঠাতে হবে, অন্য নাম ব্যাবহার করলে কাজ করবে না।
            const res = await updateFlat({ id, formData: payload });
            toast.success("Profile updated successfully!");
            router.push('/dashboard/seller/my-flat')

        } catch (err: any) {
            console.error("Update failed:", err);
            toast.error("Profile update failed!");
        }
    };

    return (
        <Box sx={{ marginTop: '20px', background: 'rgb(36, 12, 73)', borderRadius: '2px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
            <Box sx={{ padding: '15px', borderBottom: '1px solid gray' }}>
                <Typography sx={{ color: 'white', fontWeight: '500', fontSize: '15px' }}>Update Flat</Typography>
            </Box>
            <Box sx={{ padding: '20px' }} component="form" onSubmit={handleSubmit} >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        mb: 4,
                    }}
                >
                    <Avatar variant="rounded"
                        src={preview} alt='Flat Img'
                        sx={{
                            width: 160,
                            height: 140,
                            mb: 2,
                            border: "2px solid #f0f0f0",
                            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                        }}
                    >Flat Image</Avatar>
                    <Button variant="contained" component="label">
                        Upload Flat Photo
                        <input type="file" hidden accept="image/*" onChange={handleImageChange} />
                    </Button>
                </Box>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField required variant="filled"
                            fullWidth
                            label="Flat Name"
                            name="flatName"
                            value={formData?.flatName}
                            onChange={handleChange}
                            InputLabelProps={{ style: { color: "white" } }}
                            InputProps={{ style: { color: "white" } }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField variant="filled" required
                            fullWidth
                            label="Location"
                            name="location"
                            value={formData?.location}
                            onChange={handleChange}
                            InputLabelProps={{ style: { color: "white" } }}
                            InputProps={{ style: { color: "white" } }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField variant="filled" required
                            fullWidth
                            label="SquareFeet"
                            name="squareFeet"
                            value={formData?.squareFeet}
                            onChange={handleChange}
                            InputLabelProps={{ style: { color: "white" } }}
                            InputProps={{ style: { color: "white" } }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField variant="filled" required
                            fullWidth
                            label="Total Room"
                            name="totalRooms"
                            value={formData?.totalRooms}
                            onChange={handleChange}
                            InputLabelProps={{ style: { color: "white" } }}
                            InputProps={{ style: { color: "white" } }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField variant="filled" required
                            fullWidth
                            label="Total Bed Room"
                            name="totalBedrooms"
                            value={formData?.totalBedrooms}
                            onChange={handleChange}
                            InputLabelProps={{ style: { color: "white" } }}
                            InputProps={{ style: { color: "white" } }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField variant="filled" required
                            fullWidth
                            label="Rent"
                            name="rent"
                            value={formData?.rent}
                            onChange={handleChange}
                            InputLabelProps={{ style: { color: "white" } }}
                            InputProps={{ style: { color: "white" } }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField variant="filled" required
                            fullWidth
                            label="Advanced"
                            name="advanceAmount"
                            value={formData?.advanceAmount}
                            onChange={handleChange}
                            InputLabelProps={{ style: { color: "white" } }}
                            InputProps={{ style: { color: "white" } }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField variant="filled" required
                            fullWidth multiline maxRows={5} minRows={3}
                            label="Description"
                            name="description"
                            value={formData?.description}
                            onChange={handleChange}
                            InputLabelProps={{ style: { color: "white" } }}
                            InputProps={{ style: { color: "white" } }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField variant="filled" required
                            fullWidth multiline maxRows={5} minRows={3}
                            label="Utilities Description"
                            name="utilitiesDescription"
                            value={formData?.utilitiesDescription}
                            onChange={handleChange}
                            InputLabelProps={{ style: { color: "white" } }}
                            InputProps={{ style: { color: "white" } }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField variant="filled" required
                            fullWidth multiline maxRows={5} minRows={3}
                            label="Amenities"
                            name="amenities"
                            value={formData?.amenities}
                            onChange={handleChange}
                            InputLabelProps={{ style: { color: "white" } }}
                            InputProps={{ style: { color: "white" } }}
                        />
                    </Grid>
                </Grid>

                <Box sx={{ textAlign: "center", mt: 3 }}>
                    <Button type="submit" variant="contained" color="primary" disabled={isUpdating}>
                        {isUpdating ? "Updating..." : "Update Flat"}
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default UpdateFlat;