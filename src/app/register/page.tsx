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
import { FieldValues } from "react-hook-form";
import { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { modifyPayload } from "../../utils/modifyPayload";
import { registerBuyer, registerSeller } from "../../services/actions/registerUser";
import { userLogin } from "../../services/actions/userLogin";
import { storeUserInfo } from "../../services/auth.services";
import Input from "../../components/Forms/Input";
import Form from "../../components/Forms/Form";
import Image from "next/image";
import logo from '@/assets/logo/flatShareLogo.png'

const RegisterPage = () => {
  const [role, setRole] = useState("");
  const [gender, setGender] = useState("");
  const router = useRouter();

  const handleChangeRole = (event: SelectChangeEvent) => {
    setRole(event.target.value);
  };
  const handleChangeGender = (event: SelectChangeEvent) => {
    setGender(event.target.value);
  };

  const handleRegister = async (values: FieldValues) => {
    try {
      values.prifileData.gender = gender;
      const data = modifyPayload(values);

      if (role === 'seller') {
        const res = await registerSeller(data);
        if (res?.data.id) {
          toast.success(res?.message);

          const result = await userLogin({
            password: values.password,
            email: values.prifileData.email,
          });
          if (result?.data?.accessToken) {
            storeUserInfo({ accessToken: result?.data?.accessToken });
            router.push(`/dashboard/${role}`);
          }
        }
      }

      if (role === 'buyer') {
        const res = await registerBuyer(data);
        if (res?.data.id) {
          toast.success(res?.message);

          const result = await userLogin({
            password: values.password,
            email: values.prifileData.email,
          });
          if (result?.data?.accessToken) {
            storeUserInfo({ accessToken: result?.data?.accessToken });
            router.push(`/dashboard/${role}`);
          }
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
          marginBottom: 8,
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
          Sign up With Flat Share
        </Typography>

        <Box sx={{ mt: 2 }}>
          <Form onSubmit={handleRegister}>
            <Input
              sx={{ mb: "20px" }}
              name="prifileData.name"
              required
              fullWidth
              label="Name"
            />

            {/*             <Input
              sx={{ mb: "20px" }}
              required
              fullWidth
              label="Username"
              name="username"
            /> */}
            <Input
              sx={{ mb: "20px" }}
              required
              fullWidth
              label="Email"
              name="prifileData.email"
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
                onChange={handleChangeRole}
              >
                <MenuItem value="buyer">BUYER</MenuItem>
                <MenuItem value="seller">SELLER</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ mb: "20px" }} fullWidth size="small">
              <InputLabel id="demo-select-small-label2">Gender</InputLabel>
              <Select
                required
                fullWidth
                labelId="demo-select-small-label2"
                value={gender}
                label="Gender"
                onChange={handleChangeGender}
              >
                <MenuItem value="MALE">MALE</MenuItem>
                <MenuItem value="FEMALE">FEMALE</MenuItem>
              </Select>
            </FormControl>
            <Input
              sx={{ mb: "20px" }}
              required
              fullWidth
              name="prifileData.contactNumber"
              label="Contact Number"
              type="number"
            />
            <Input
              sx={{ mb: "20px" }}
              required
              fullWidth
              name="prifileData.profession"
              label="Profession"
              type="string"
            />
            <Input
              sx={{ mb: "20px" }}
              required
              fullWidth
              name="prifileData.address"
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
