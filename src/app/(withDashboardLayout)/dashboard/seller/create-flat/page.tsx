"use client";
import { useCreateFlatMutation } from "@/redux/api/flatApi";
import { Avatar, Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const MAX_FILE_SIZE = 2 * 1024 * 1024;

const CreateFlat = () => {
    const [postFlat, { isLoading: updating }] = useCreateFlatMutation();
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const router = useRouter();
    const [formData, setFormData] = useState<any>({
        flatName: "",
        location: "",
        squareFeet: "",
        totalRooms: "",
        totalBedrooms: "",
        rent: "",
        advanceAmount: "",
        description: "",
        amenities: "",
        utilitiesDescription: "",
    });

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type } = e.target;
        setFormData((prev: any) => ({
            ...prev,
            [name]: type === "number" ? Number(value) : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const data = new FormData();
            const jsonData = formData;
            data.append("data", JSON.stringify(jsonData));
            if (file) {
                data.append("file", file);
            }

            const res = await postFlat(data).unwrap();
            console.log(res,'res')
            if (res?.id) {
                toast.success("Flat created successfully ✅");
                router.push('/dashboard/seller/my-flat')
            }
        } catch (err: any) {
            toast.error(err?.data?.message || "Something went wrong");
        }
    };

    return (
        <>
            <Box sx={{ background: 'rgb(36, 12, 73)', borderRadius: '2px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
                <Box sx={{ padding: '15px', borderBottom: '1px solid gray' }}>
                    <Typography sx={{ color: 'white', fontWeight: '500', fontSize: '15px' }}>Create Flat</Typography>
                </Box>
                <Box sx={{ padding: '20px' }} component="form" onSubmit={handleSubmit} >
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField required variant="filled"
                                fullWidth
                                label="Flat Name"
                                name="flatName" onChange={handleChange}
                                InputLabelProps={{ style: { color: "white" } }}
                                InputProps={{ style: { color: "white" } }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField required variant="filled"
                                fullWidth
                                label="Location"
                                name="location" onChange={handleChange}
                                InputLabelProps={{ style: { color: "white" } }}
                                InputProps={{ style: { color: "white" } }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField required variant="filled"
                                fullWidth type="number"
                                label="Square Feet"
                                name="squareFeet" onChange={handleChange}
                                InputLabelProps={{ style: { color: "white" } }}
                                InputProps={{ style: { color: "white" } }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField required variant="filled"
                                fullWidth type="number"
                                label="Total Room"
                                name="totalRooms" onChange={handleChange}
                                InputLabelProps={{ style: { color: "white" } }}
                                InputProps={{ style: { color: "white" } }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField required variant="filled"
                                fullWidth type="number"
                                label="Total Bedroom"
                                name="totalBedrooms" onChange={handleChange}
                                InputLabelProps={{ style: { color: "white" } }}
                                InputProps={{ style: { color: "white" } }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField required variant="filled"
                                fullWidth type="number"
                                label="Rent"
                                name="rent" onChange={handleChange}
                                InputLabelProps={{ style: { color: "white" } }}
                                InputProps={{ style: { color: "white" } }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField required variant="filled"
                                fullWidth type="number"
                                label="Advance Amount"
                                name="advanceAmount" onChange={handleChange}
                                InputLabelProps={{ style: { color: "white" } }}
                                InputProps={{ style: { color: "white" } }}
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField required variant="filled"
                                fullWidth multiline minRows={5} maxRows={10}
                                label="Description"
                                name="description" onChange={handleChange}
                                InputLabelProps={{ style: { color: "white" } }}
                                InputProps={{ style: { color: "white" } }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField required variant="filled"
                                fullWidth multiline minRows={5} maxRows={10}
                                label="Amenities"
                                name="amenities" onChange={handleChange}
                                InputLabelProps={{ style: { color: "white" } }}
                                InputProps={{ style: { color: "white" } }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField required variant="filled"
                                fullWidth multiline minRows={5} maxRows={10}
                                label="Utilities Description"
                                name="utilitiesDescription" onChange={handleChange}
                                InputLabelProps={{ style: { color: "white" } }}
                                InputProps={{ style: { color: "white" } }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography sx={{ color: 'white' }}>Image size 800*535 Pixel</Typography>
                            <Button
                                variant="contained"
                                component="label"
                                sx={{ mt: 2, background: "#673ab7" }}
                            >
                                Upload Image
                                <input type="file" hidden accept="image/*" onChange={handleImageChange} />
                            </Button>
                            {preview && (
                                <Box mt={2}>
                                    <Avatar
                                        src={preview}
                                        alt="preview"
                                        sx={{ width: 200, height: 140, borderRadius: 2 }}
                                        variant="square"
                                    />
                                </Box>
                            )}
                        </Grid>
                    </Grid>
                    <Box sx={{ textAlign: "center", mt: 3 }}>
                        <Button type="submit" variant="contained" color="primary" disabled={updating}>
                            {updating ? "Creating flat..." : "Creating flat"}
                        </Button>
                    </Box>
                </Box>
            </Box >
        </>
    );
};

export default CreateFlat;

