"use client";
import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import profileAltLogo from "../../../../../assets/profile/person-icon.png";
import { useGetMYProfileQuery } from "../../../../../redux/api/myProfile";
import EditIcon from "@mui/icons-material/Edit";
import { TProfile } from "@/types/user.types";
import { formatLocalDate } from "@/components/Shared/Date&Time/Date";
import UpdateSellerProfile from "./components/UpdateSellerProfile";
import coverPhoto from '../../../../../assets/profile/coverphoto.jpg';

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
        edit ? <UpdateSellerProfile onSuccess={() => setEdit(false)} />
          :
          <>
            <Box sx={{ height: { xs: 300, md: 340 }, position: "relative", background: 'rgb(36, 12, 73)' }}>
              <Box sx={{ position: "relative", width: "100%", minHeight: { xs: 200, md: 250 } }}>
                <Image
                  src={coverPhoto}
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
    </>
  );
};

export default Profile;
