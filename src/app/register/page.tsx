"use client";
import {
  Avatar,
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Form from "@/components/Forms/Form";
import Input from "@/components/Forms/Input";
import { FieldValues } from "react-hook-form";
import { useState } from "react";
import Link from "next/link";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerUser } from "@/services/actions/registerUser";
import { modifyPayload } from "@/utils/modifyPayload";
import { toast } from "sonner";
import { storeUserInfo } from "@/services/auth.services";
import { useRouter } from "next/navigation";
import { userLogin } from "@/services/actions/userLogin";

export const userValidationSchema = z.object({
  name: z.string().min(2, "Please enter your name!"),
  profession: z.string().min(2, "Please enter your profession!"),
  address: z.string().min(2, "Please enter your address!"),
});

export const registerValidationSchema = z.object({
  username: z.string().min(2, "Please enter your username!"),
  Email: z.string().email("Please enter a valid email!"),
  password: z.string().min(6, "Please enter password 6 carecter"),
  role: z.boolean(),
  user: userValidationSchema,
});

export const defaultValues = {
  username: "",
  email: "",
  password: "",
  role: "",
  user: {
    name: "",
    profession: "",
    address: "",
  },
};

const RegisterPage = () => {
  const [role, setRole] = useState("");
  const router = useRouter();

  const handleChange = (event: SelectChangeEvent) => {
    setRole(event.target.value);
  };

  const handleRegister = async (values: FieldValues) => {
    values.role = role;
    const data = modifyPayload(values);
    try {
      const res = await registerUser(data);
      if (res?.data.id) {
        toast.success(res?.message);

        const result = await userLogin({
          password: values.password,
          email: values.email,
        });
        console.log(result);
        if (result?.data?.accessToken) {
          storeUserInfo({ accessToken: result?.data?.accessToken });
          // toast.success(result?.message);
          router.push("/dashboard");
        }
      }
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
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
          Sign up With Flat Share
        </Typography>

        <Box sx={{ mt: 2 }}>
          <Form
            onSubmit={handleRegister}
            // resolver={zodResolver(registerValidationSchema)}
            defaultValues={{}}
          >
            <Input
              sx={{ mb: "20px" }}
              name="user.name"
              required
              fullWidth
              label="Name"
            />

            <Input
              sx={{ mb: "20px" }}
              required
              fullWidth
              label="Username"
              name="username"
            />
            <Input
              sx={{ mb: "20px" }}
              required
              fullWidth
              label="Email"
              name="email"
              type="email"
            />
            <Input
              sx={{ mb: "20px" }}
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
            />
            <FormControl sx={{ mb: "20px" }} fullWidth size="small">
              <InputLabel id="demo-select-small-label1">
                Purpose of opening account ?
              </InputLabel>
              <Select
                required
                fullWidth
                labelId="demo-select-small-label1"
                value={role}
                label="Purpose of opening account ?"
                onChange={handleChange}
              >
                <MenuItem value="BUYER">BUYER</MenuItem>
                <MenuItem value="SELLER">SELLER</MenuItem>
              </Select>
            </FormControl>
            <Input
              sx={{ mb: "20px" }}
              required
              fullWidth
              name="user.profession"
              label="Profession"
              type="string"
            />
            <Input
              sx={{ mb: "20px" }}
              required
              fullWidth
              name="user.address"
              label="Address"
              type="string"
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mb: 2 }}>
              Sign Up
            </Button>
          </Form>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <small>Already have an account? </small>
              <small style={{ color: "purple" }}>
                <Link href="/login">{"Sign in"}</Link>
              </small>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default RegisterPage;