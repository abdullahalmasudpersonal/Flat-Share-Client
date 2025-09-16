"use client";
import { useGetMYProfileQuery, useUpdateMYProfileMutation } from "@/redux/api/myProfile";
import { TAdminProfile } from "@/types/user.types";
import { Avatar, Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const MAX_FILE_SIZE = 2 * 1024 * 1024;
type UpdateMyProfileProps = {
    onSuccess?: () => void;
};

const UpdateMyProfile = ({ onSuccess }: UpdateMyProfileProps) => {
    const { data, isLoading } = useGetMYProfileQuery({});
    const [updateMyProfileData, { isLoading: isUpdating }] = useUpdateMYProfileMutation();
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string>("");
    const [formData, setFormData] = useState<TAdminProfile>({
        name: "",
        contactNumber: "",
        profilePhoto: "",
    });

    useEffect(() => {
        if (data) {
            const { name, profilePhoto, contactNumber } = data as TAdminProfile;
            setFormData({
                name: name || "",
                contactNumber: contactNumber || "",
                profilePhoto: profilePhoto || "",
            });
            setPreview(profilePhoto || "");
        }
    }, [data]);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            if (selectedFile.size > MAX_FILE_SIZE) {
                toast.error("File size must be under 2MB");
                return;
            }
            setFile(selectedFile);
            setPreview(URL.createObjectURL(selectedFile));
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validateForm = (): boolean => {
        if (!formData.name.trim()) {
            toast.error("Name is required!");
            return false;
        }

        if (formData.contactNumber) {
            const phoneRegex = /^\d{11}$/;
            if (!phoneRegex.test(formData.contactNumber)) {
                toast.error("Invalid contact number!");
                return false;
            }
        }

        return true;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        try {
            const payload = new FormData();
            const jsonData = { ...formData };

            if (!file && preview) {
                jsonData.profilePhoto = preview;
            }

            payload.append("data", JSON.stringify(jsonData));
            if (file) {
                payload.append("file", file);
            }

            const res = await updateMyProfileData(payload);
            toast.success("Profile updated successfully!");
            if (onSuccess) {
                onSuccess();
            }
        } catch (err: any) {
            console.error("Update failed:", err);
            toast.error("Profile update failed!");
        }
    };

    return (
        <Box sx={{ marginTop: '20px', background: 'rgb(36, 12, 73)', borderRadius: '2px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
            <Box sx={{ padding: '15px', borderBottom: '1px solid gray' }}>
                <Typography sx={{ color: 'white', fontWeight: '500', fontSize: '15px' }}>Update Porfile</Typography>
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
                    <Avatar
                        src={preview}
                        sx={{
                            width: 140,
                            height: 140,
                            mb: 2,
                            border: "2px solid #f0f0f0",
                            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                        }}
                    />
                    <Button variant="contained" component="label">
                        Upload Photo
                        <input type="file" hidden accept="image/*" onChange={handleImageChange} />
                    </Button>
                </Box>

                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <TextField required variant="filled"
                            fullWidth
                            label="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            InputLabelProps={{ style: { color: "white" } }}
                            InputProps={{ style: { color: "white" } }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField variant="filled"
                            fullWidth
                            label="Contact Number"
                            name="contactNumber"
                            value={formData.contactNumber}
                            onChange={handleChange}
                            InputLabelProps={{ style: { color: "white" } }}
                            InputProps={{ style: { color: "white" } }}
                        />
                    </Grid>
                </Grid>

                <Box sx={{ textAlign: "center", mt: 3 }}>
                    <Button type="submit" variant="contained" color="primary" disabled={isUpdating}>
                        {isUpdating ? "Updating..." : "Update Profile"}
                    </Button>

                </Box>
            </Box>
        </Box>
    );
};

export default UpdateMyProfile;


{/*                     <Grid item xs={12} md={6}>
                        <TextField variant="filled"
                            select
                            fullWidth
                            label="Gender"
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            InputLabelProps={{ style: { color: "white" } }}
                            InputProps={{ style: { color: "white" } }}
                        >
                            <MenuItem value="male">Male</MenuItem>
                            <MenuItem value="female">Female</MenuItem>
                            <MenuItem value="other">Other</MenuItem>
                        </TextField>
                    </Grid> */}

{/* <Grid item xs={12} md={6}>
                        <TextField variant="filled"
                            fullWidth
                            label="Profession"
                            name="profession"
                            value={formData.profession}
                            onChange={handleChange}
                            InputLabelProps={{ style: { color: "white" } }}
                            InputProps={{ style: { color: "white" } }}
                        />
                    </Grid> */}

{/* <Grid item xs={12} md={6}>
                        <TextField variant="filled"
                            fullWidth
                            label="Address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            InputLabelProps={{ style: { color: "white" } }}
                            InputProps={{ style: { color: "white" } }}
                        />
                    </Grid> */}

{/* <Grid item xs={12} md={6}>
                        <TextField variant="filled"
                            fullWidth
                            label="Bio"
                            name="bio"
                            value={formData.bio}
                            onChange={handleChange}
                            InputLabelProps={{ style: { color: "white" } }}
                            InputProps={{ style: { color: "white" } }}
                        />
                    </Grid> */}


