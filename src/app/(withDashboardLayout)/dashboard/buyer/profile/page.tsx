"use client";
import { useGetMYProfileQuery } from "../../../../../redux/api/myProfile";
import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import profileAltLogo from "../../../../../assets/profile/person-icon.png";
import { TProfile } from "@/types/user.types";
import { formatLocalDate } from "@/components/Shared/Date&Time/Date";
import EditIcon from "@mui/icons-material/Edit";
import UpdateBuyerProfile from "./components/UpdateBuyerProfile";

const Profile = () => {
  const [edit, setEdit] = useState(false);
  const { data, isLoading } = useGetMYProfileQuery({});

  const { name, email, role, profilePhoto, contactNumber, status, createdAt, profession, bio, address, gender }: TProfile = data || {};

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  const rows = [
    { label: "Name", value: name || "-" },
    { label: "Email", value: email || "-" },
    { label: "Role", value: role || "-" },
    { label: "Status", value: status || "-" },
    { label: "Contact", value: contactNumber || "-" },
    { label: "Address", value: address || "-" },
    { label: "Profession", value: profession || "-" },
    { label: "Gender", value: gender || "-" },
    { label: "Bio", value: bio || "-" },
    { label: "Join", value: formatLocalDate(createdAt || '') || "-" },
  ];

  const chunkedRows = [];
  if (isSmall) {
    for (let i = 0; i < rows.length; i++) {
      chunkedRows.push([rows[i]]);
    }
  } else {
    for (let i = 0; i < rows.length; i += 2) {
      chunkedRows.push(rows.slice(i, i + 2));
    }
  }

  return (
    <>
      <Box sx={{ background: 'rgb(36, 12, 73)', height: '70px', borderRadius: '4px 4px 0 0', padding: '10px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography sx={{ color: 'white', fontSize: '19px', fontWeight: '700' }}>My Profile</Typography>
        <Button onClick={() => setEdit(!edit)} variant="contained" sx={{ background: 'rgb(63, 19, 129)' }} size="small" startIcon={<EditIcon />}> {edit ? 'Cancel' : "Edit"} </Button>
      </Box>

            {
              edit ? <UpdateBuyerProfile onSuccess={() => setEdit(false)} />
                :
                <>
                  <Box sx={{ height: { xs: 300, md: 340 }, position: "relative", background: 'rgb(36, 12, 73)' }}>
                    <Box sx={{ position: "relative", width: "100%", minHeight: { xs: 200, md: 250 } }}>
                      <Image
                        src="https://mahsez.vercel.app/assets/coverPhoto-2-Crg-MWh0.avif"
                        alt="Cover Photo"
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                      />
                    </Box>
                    <Box sx={{
                      position: "absolute",
                      bottom: { xs: 50, md: 30 },
                      left: { xs: "50%", md: "24px" },
                      transform: { xs: "translateX(-50%)", md: "none" },
                      width: { xs: 150, md: 180 },
                      height: { xs: 150, md: 180 },
                      borderRadius: { xs: "50%", md: '4px' },
                      border: "2px solid white",
                      overflow: "hidden", background: 'gray'
                    }}>
                      <Image
                        src={profilePhoto || profileAltLogo}
                        alt="Profile Picture"
                        fill style={{ objectFit: "cover" }}
                        priority
                      />
                    </Box>
                    <Box sx={{
                      position: "absolute",
                      bottom: { xs: 10, md: 100 },
                      left: { xs: "50%", md: "215px" },
                      transform: { xs: "translateX(-50%)", md: "none" },
                    }}>
                      <Typography sx={{ color: 'white', fontSize: '25px', fontWeight: '900' }}>{name}</Typography>
                    </Box>
      
                  </Box>
                  <Box sx={{ mt: 3 }}>
                    <TableContainer
                      component={Paper}
                      sx={{
                        borderRadius: 2,
                        overflow: "hidden",
                        backgroundColor: "rgb(36, 12, 73)",
                      }}
                    >
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell colSpan={8} sx={{ fontWeight: "bold", fontSize: "18px", color: "white", border: 'none' }} >Personal Information</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {chunkedRows.map((pair, index) => (
                            <TableRow key={index}>
                              {pair.map((row, idx) => (
                                <React.Fragment key={idx}>
                                  <TableCell
                                    sx={{
                                      fontWeight: 700,
                                      width: 180,
                                      border: "1px solid rgb(50, 21, 97)",
                                      color: "white",
                                      backgroundColor: "rgb(36, 12, 73)",
                                    }}
                                  >
                                    {row.label}
                                  </TableCell>
                                  <TableCell
                                    sx={{
                                      border: "1px solid rgb(50, 21, 97)",
                                      color: "white",
                                    }}
                                  >
                                    <Typography>{row.value}</Typography>
                                  </TableCell>
                                </React.Fragment>
                              ))}
      
                              {!isSmall && pair.length === 1 && (
                                <>
                                  <TableCell sx={{ border: "1px solid rgb(50, 21, 97)", backgroundColor: "rgb(36, 12, 73)" }} />
                                  <TableCell sx={{ border: "1px solid rgb(50, 21, 97)" }} />
                                </>
                              )}
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Box>
                </>
            }

      {/* <ProfileUpdateModal
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
                  src={profileAltLogo}
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
      </Container> */}
    </>
  );
};

export default Profile;
