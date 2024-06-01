"use client"
import { useGetSingleBuyerQuery } from '@/redux/api/userApi';
import { Box, Button, Container, Grid } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
type TParams = {
    params: {
        id: string;
    };
};
const EditBuyerPage = ({ params }: TParams) => {
    const id = params?.id;
    const { data, isLoading } = useGetSingleBuyerQuery(id)
    return (
        <>
            <Container sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          <Grid xs={12} md={4}>
            <Box
              sx={{
                height: 300,
                width: "100%",
                overflow: "hidden",
                borderRadius: 1,
                boxShadow:
                  "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
              }}
            >
              {data?.profilePhoto ? (
                <Image
                  height={300}
                  width={400}
                  src={data?.profilePhoto}
                  alt="User Photo"
                />
              ) : (
                <Image
                  height={300}
                  width={400}
                  src={data?.profilePhoto}
                  alt="User Photo"
                />
              )}
            </Box>
            <Box my={3} display="flex" justifyContent="center">
            {/*   {updating ? (
                <p>Uploading...</p>
              ) : (
                <AutoFileUploader
                  name="file"
                  label="Choose Your Profile Photo"
                  icon={<CloudUploadIcon />}
                  onFileUpload={fileUploadHandler}
                  variant="outlined"
                />
              )} */}
            </Box>

            <Button
              variant="contained"
              fullWidth
             /*  endIcon={<ModeEditIcon />}
              onClick={() => setIsModalOpen(true)} */
            >
              Edit Profile
            </Button>
            <Box my={3} >
              <Link href="/dashboard/change-password">
                <Button
                  variant="contained"
                  fullWidth
                 /*  endIcon={<LockResetIcon />}
                  onClick={() => setIsModalOpen(true)} */
                >
                  Change password
                </Button>
              </Link>
            </Box>
          </Grid>
          <Grid xs={12} md={8} border='1px solid gray'>
            {/* <UserProfileInfo data={data} /> */}
          </Grid>
        </Grid>
      </Container>
        </>
    );
};

export default EditBuyerPage;