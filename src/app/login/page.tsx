"use client";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "next/link";
import { z } from "zod";
import { userLogin } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/auth.services";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import Form from "@/components/Forms/Form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "@/components/Forms/Input";

export const validationSchema = z.object({
  email: z.string().email("Please enter a valid email!"),
  password: z.string().min(6, "Must be at least 6 characters"),
});

const LoginPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const handleLogin = async (values: FieldValues) => {
    try {
      const res = await userLogin(values);
      console.log(res, values);

      if (res?.data?.accessToken) {
        storeUserInfo({ accessToken: res?.data?.accessToken });
        toast.success(res?.message);
        router.push("/");
      } else {
        setError(res.message);
        // console.log(res);
      }
    } catch (err: any) {
      console.log(err.message);
    }
    // event.preventDefault();
    // const res = await userLogin(event);
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });
  };

  return (
    <Container component="main" maxWidth="xs">
     {/*  <CssBaseline /> */}
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in With  Flat Share
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Form
            onSubmit={handleLogin}
            resolver={zodResolver(validationSchema)}
            defaultValues={{
              email: "",
              password: "",
            }}
          >
              <Input
              required
              fullWidth
              label="Email Address"
              name="email"
              type="email"
            />
            <Input sx={{mt:'15px', mb:'20px'}}
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
            /> 
          {/*   <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
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
              <small>  <Link href="#">Forgot password?</Link></small>
              </Grid>
              <Grid item>
               <small> {"Don't have an account? "}</small>
                <small  style={{color:'purple'}}><Link href="/register">{"Sign Up"}</Link></small>
              </Grid>
            </Grid>
          </Form>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
