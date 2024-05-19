"use client";
import { logoutUser } from "@/services/actions/logoutUser";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navber = () => {
  return (
    <div>
      <Container>
        <Stack
          py={2}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h4" component={Link} href="/" fontWeight={600}>
            P
            <Box component="span" color="primary.main">
              H
            </Box>{" "}
            Health Care
          </Typography>

          <Stack direction="row" justifyContent="space-between" gap={4}>
            <Typography component={Link} href="/consultation">
              Consultation
            </Typography>

            <Typography>Diagnostics</Typography>
            <Typography component={Link} href="/doctors">
              Doctors
            </Typography>

            {/*   {userInfo?.userId ? (
                  <Typography component={Link} href='/dashboard'>
                     Dashboard
                  </Typography>
               ) : null} */}
          </Stack>

          {/*   {userInfo?.userId ? (
               <Button color='error' onClick={handleLogOut}>
                  Logout
               </Button>
            ) : (
               <Button component={Link} href='/login'>
                  Login
               </Button>
            )} */}
          <Button component={Link} href="/login">
            Login
          </Button>
        </Stack>
      </Container>
    </div>
  );
};

export default Navber;
