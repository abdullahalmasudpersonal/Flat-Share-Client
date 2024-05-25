"use client";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Input from '@/components/Forms/Input';
import Form from '@/components/Forms/Form';
import { useRouter } from 'next/navigation';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { modifyPayload } from '@/utils/modifyPayload';
import { registerUser } from '@/services/actions/registerUser';

export const userValidationSchema = z.object({
    name: z.string().min(2, "Please enter your name!"),
    profession: z.string().min(2, "Please enter your profession!"),
    address: z.string().min(2, "Please enter your address!"),
})

export const registerValidationSchema = z.object({
    username: z.string().min(2, "Please enter your username!"),
    Email: z.string().email('Please enter a valid email!'),
    password: z.string().min(6, "Please enter password 6 carecter"),
    role: z.boolean(),
    user: userValidationSchema
})

export const defaultValues = {
    username: "",
    email: "",
    password: "",
    role: '',
    user: {
        name: '',
        profession: "",
        address: "",
    }
};

const RegisterPage = () => {
    //const router = useRouter();

    const handleRegister = async (values: FieldValues) => {
           const data = modifyPayload(values);
        try {
             const res = await registerUser(data);
            // if (res?.data.id) {
            //   toast.success(res?.message);

            //   const result = await userLogi({
            //     password: values.password,
            //     email: values.patient.email,
            //   });

            //   if (result?.data?.accessToken) {
            //     storeUserInfo({ accessToken: result?.data?.accessToken });
            //     toast.success(res?.message);
            //     router.push("/dashboard");
            //   }
            // }
        } catch (err: any) {
            console.log(err.message);
        }
    };


    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Box component="form" noValidate sx={{ mt: 3 }}>
                    <Form
                        onSubmit={handleRegister}
                        resolver={zodResolver(registerValidationSchema)}
                        defaultValues={defaultValues}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Input
                                    name="name"
                                    required
                                    fullWidth
                                    label="First Name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Input
                                    required
                                    fullWidth
                                    label="Last Name"
                                    name="lastName"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Input
                                    required
                                    fullWidth
                                    label="Email Address"
                                    name="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Input
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Form>
                </Box>
            </Box>
        </Container>
    );
}

export default RegisterPage;