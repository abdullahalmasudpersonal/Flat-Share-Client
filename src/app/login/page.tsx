"use client";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "next/link";
import { toast } from "sonner";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { userLogin } from "../../services/actions/userLogin";
import { getUserInfo, storeUserInfo } from "../../services/auth.services";
import Form from "../../components/Forms/Form";
import Input from "../../components/Forms/Input";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import logo from '@/assets/logo/flatShareLogo.png'
import Credential from "./Credential";
// import Credential from "./Credential";

const LoginPage = () => {
  const router = useRouter();
  // const searchParams = useSearchParams();
  const [error, setError] = useState("");
  const handleLogin = async (values: FieldValues) => {
    try {
      const res = await userLogin(values);
      if (res?.data?.accessToken) {
        storeUserInfo({ accessToken: res?.data?.accessToken });
        document.cookie = `isLoggedIn=true; path=/`;
        const { role } = getUserInfo();
        toast.success(res?.message);
        router.push(`/dashboard/${role}`);
        // const callbackUrl =  searchParams.get("callbackUrl") || `/dashboard/${role}`;
        // if (callbackUrl) {
        //   router.push(callbackUrl);
        // }
        //  router.push(  `/dashboard/${role}`);
        // router.push( callbackUrl || `/dashboard/${role}`);
      } else {
        setError(res.message);
      }
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 15,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar> */}
        <Link href="/">
          <Image
            src={logo}
            alt="flat image logo"
            width={170}
            style={{ cursor: 'pointer' }}
          />
        </Link>
        <Typography sx={{ marginTop: 2 }} component="h1" variant="h5">
          Sign in With Flat Share
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Form onSubmit={handleLogin}>
            <Input
              required
              fullWidth
              label="Email Address"
              name="email"
              type="email"
            />
            <Input
              sx={{ mt: "15px", mb: "20px" }}
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
            />
            {error && (
              <Box>
                <Typography
                  sx={{
                    backgroundColor: "red",
                    padding: "1px",
                    borderRadius: "2px",
                    color: "white",
                    marginTop: "5px",
                  }}
                >
                  {error}
                </Typography>
              </Box>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <small>
                  {" "}
                  <Link href="#">Forgot password?</Link>
                </small>
              </Grid>
              <Grid item>
                <small> {"Don't have an account? "}</small>
                <small style={{ color: "purple" }}>
                  <Link href="/register">{"Sign Up"}</Link>
                </small>
              </Grid>
            </Grid>
          </Form>
        </Box>
      </Box>
      <Box sx={{ marginTop: 4, marginBottom: 4 }}>
        <Credential />
      </Box>
    </Container>
  );
};

export default LoginPage;
