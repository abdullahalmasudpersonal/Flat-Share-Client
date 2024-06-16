import { Box, Stack, styled, Typography } from "@mui/material";
import React from "react";

const StyledInformationBox = styled(Box)(({ theme }) => ({
  background: "#f4f7fe",
  borderRadius: theme.spacing(1),
  width: "45%",
  padding: "8px 16px",
  "& p": {
    fontWeight: 600,
  },
}));

const UserProfileInfo = ({ data }: any) => {
  console.log(data);
  console.log(data);
  return (
    <>
      <Typography variant="h5" color="primary.main" mb={2}>
        Personal Information
      </Typography>
       <Stack direction={{ xs: "column", md: "row" }} gap={2} flexWrap={"wrap"}>
        <StyledInformationBox>
          <Typography color="secondary" variant="caption">
            Role
          </Typography>
          <Typography>{data?.userData?.role}</Typography>
        </StyledInformationBox>
        <StyledInformationBox>
          <Typography color="secondary" variant="caption">
            Name
          </Typography>
          <Typography>{data?.name}</Typography>
        </StyledInformationBox>
        <StyledInformationBox>
          <Typography color="secondary" variant="caption">
            Email
          </Typography>
          <Typography>{data?.email}</Typography>
        </StyledInformationBox>
        <StyledInformationBox>
          <Typography color="secondary" variant="caption">
            Conact Number
          </Typography>
          <Typography>{data?.contactNumber}</Typography>
        </StyledInformationBox>
      </Stack> 
    </>
  );
};

export default UserProfileInfo;
