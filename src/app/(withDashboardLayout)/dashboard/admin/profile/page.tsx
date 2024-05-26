"use client";
import { Box, Button, Container, Grid } from "@mui/material";
import React, { useState } from "react";
import UserProfileInfo from "./components/UserProfileInfo";
import {
  useGetMYProfileQuery,
  useUpdateMYProfileMutation,
} from "@/redux/api/myProfile";
import Image from "next/image";
import AutoFileUploader from "@/components/Forms/AutoFileUploader";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ProfileUpdateModal from "./components/ProfileUpdateModal";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import Link from "next/link";
import LockResetIcon from "@mui/icons-material/LockReset";
import profileIcon from "@/assets/profile/person-icon.png";

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, isLoading } = useGetMYProfileQuery(undefined);
  const [updateMYProfile, { isLoading: updating }] =
    useUpdateMYProfileMutation();

  const fileUploadHandler = (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("data", JSON.stringify({}));

    updateMYProfile(formData);
  };

  if (isLoading) {
    <p>Loading...</p>;
  }

  return (
    <>
      <ProfileUpdateModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        id={data?.id}
      />
      <Container sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          <Grid xs={12} md={4}>
            <Box
              sx={{
                height: 300,
                width: "100%",
                overflow: "hidden",
                borderRadius: 1,
              }}
            >
              {data?.profiePhoto ? (
                <Image
                  height={600}
                  width={600}
                  src={data?.profilePhoto}
                  alt="User Photo"
                />
              ) : (
                <Image
                  height={600}
                  width={600}
                  src={profileIcon}
                  alt="User Photo"
                />
              )}
            </Box>
            <Box my={3} display="flex" justifyContent="center">
              {updating ? (
                <p>Uploading...</p>
              ) : (
                <AutoFileUploader
                  name="file"
                  label="Choose Your Profile Photo"
                  icon={<CloudUploadIcon />}
                  onFileUpload={fileUploadHandler}
                  variant="outlined"
                />
              )}
            </Box>
            <Button
              variant="contained"
              fullWidth
              endIcon={<ModeEditIcon />}
              onClick={() => setIsModalOpen(true)}
            >
              Edit Profile
            </Button>

            <Box my={3}>
              <Link href="/dashboard/change-password">
                <Button
                  variant="contained"
                  fullWidth
                  endIcon={<LockResetIcon />}
                  onClick={() => setIsModalOpen(true)}
                >
                  Change password
                </Button>
              </Link>
            </Box>
          </Grid>

          <Grid xs={12} md={8}>
            <UserProfileInfo data={data} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Profile;
