"use client";
import React, { Suspense, useState } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  Snackbar,
  Alert,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm, Controller, SubmitHandler, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Image from "next/image";
import logo from '@/assets/logo/flatShareLogo.png';
import { userLogin } from "@/services/actions/userLogin";
import { getUserInfo, storeUserInfo } from "@/services/auth.services";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";

// ==================== Validation Schema ====================
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

type LoginFormInputs = {
  email: string;
  password: string;
  // remember: boolean;
};

const defaultTheme = createTheme();

const LoginPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError,] = useState("");
  const methods = useForm<LoginFormInputs>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: "",
      password: "",
      // remember: false,
    },
  });

  const { handleSubmit, control, setValue } = methods;

  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string; severity: "success" | "error" }>({
    open: false,
    message: "",
    severity: "success",
  });

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  // ==================== Submit Handler ====================
  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    try {
      const res = await userLogin(data);
      if (res?.data?.accessToken) {
        storeUserInfo({ accessToken: res?.data?.accessToken });
        document.cookie = `isLoggedIn=true; path=/`;
        const { role } = getUserInfo();
        toast.success(res?.message);
        // router.push(`/dashboard/${role}`);
        const callbackUrl = searchParams.get("callbackUrl") || `/dashboard/${role}`;
        if (callbackUrl) {
          router.push(callbackUrl);
        }
      } else {
        setError(res.message);
      }
    } catch (error) {
      //    setError(err.message);
      // console.log(err.message);
      setSnackbar({ open: true, message: "Something went wrong!", severity: "error" });
    }
  };

  // ==================== Fill Demo Credentials ====================
  const fillCredentials = (role: string) => {
    if (role === "buyer") {
      setValue("email", "kamrul@gmail.com");
      setValue("password", "123456");
    } else if (role === "seller") {
      setValue("email", "saki@gmail.com");
      setValue("password", "123456");
    } else if (role === "admin") {
      setValue("email", "abdullah@gmail.com");
      setValue("password", "123456");
    }
  };


  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <FormProvider {...methods}>
          <Box
            sx={{
              marginTop: 16,
              marginBottom: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Link href="/">
              <Image
                src={logo}
                alt="flat image logo"
                width={170}
                style={{ cursor: 'pointer', marginBottom: '15px', }}
              />
            </Link>

            <Typography component="h1" variant="h5">
              Sign in With Flat Share
            </Typography>

            <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
              {/* Email */}
              <Controller
                name="email"
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    margin="normal"
                    fullWidth
                    label="Email Address"
                    autoComplete="email"
                    autoFocus
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                  />
                )}
              />

              {/* Password */}
              <Controller
                name="password"
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    margin="normal"
                    fullWidth
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                  />
                )}
              />

              {/* Remember Me */}
              {/* <Controller
                name="remember"
                control={control}
                render={({ field }) => (
                  <FormControlLabel control={<Checkbox {...field} checked={field.value} />} label="Remember me" />
                )}
              /> */}

              {/* Submit */}
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Sign In
              </Button>

              {/* Links */}
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>

              {/* Demo Credentials */}
              <Box sx={{ display: "flex", gap: 1, justifyContent: "center", mt: 3 }}>
                <Button size="small" variant="outlined" onClick={() => fillCredentials("buyer")}>
                  Buyer
                </Button>
                <Button size="small" variant="outlined" onClick={() => fillCredentials("seller")}>
                  Seller
                </Button>
                <Button size="small" variant="outlined" onClick={() => fillCredentials("admin")}>
                  Admin
                </Button>
              </Box>
            </Box>
          </Box>
        </FormProvider>

        {/* Snackbar */}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: "100%" }}>
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </Suspense>

  );
}

export default LoginPage;
