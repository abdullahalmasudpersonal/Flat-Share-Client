"use client";
import Form from "@/components/Forms/Form";
import Input from "@/components/Forms/Input";
import { useCreateBookingFlatMutation } from "@/redux/api/bookingApi";

import { useGetMYProfileQuery } from "@/redux/api/myProfile";
import { getUserInfo, isLogedIn } from "@/services/auth.services";
import { Box, Button, Checkbox, Container, FormControlLabel, Typography } from "@mui/material";
import { pink } from "@mui/material/colors";
import { useRouter } from "next/navigation";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TParams = {
  params: {
    id: string;
  };
};

interface UserData {
  name?: string;
  email?: string;
  flatId?: string;
}

const BookingPage = ({ params }: TParams) => {
  const { userId, role } = getUserInfo();
  const id = params?.id;
  const [bookingFlat] = useCreateBookingFlatMutation();
  const { data: userData, isLoading } = useGetMYProfileQuery(undefined);

  const { name, email, flatId } = userData as UserData ?? '';
  //console.log(name, email);


  const router = useRouter();
  if (!isLogedIn()) {
    return router.push("/login");
  }

  const handleRequest = async (values: FieldValues) => {
    const bookingData = {
      userId: userId,
      flatId: id
    }
    try {
      const res = await bookingFlat(bookingData).unwrap();
      if (res?.id) {
        toast.success("Flat booking request Successfully!!!");
        router.push(`/dashboard/${role}/my-requests`);
      }
    } catch (err: any) {
      console.error(err);
    }
  }

  return (
    <>
      <Container>
        <Box my='120px' display='flex' justifyContent='center'>
          {
            isLoading ?
              "Loading..."
              :
              <>
                <Box border='1px solid gray' padding='20px' width='350px' height=''>
                  <Typography textAlign='center' fontWeight='bold' fontSize='20px' mb='15px'>Booking Request</Typography>
                  <Form onSubmit={handleRequest} defaultValues={{
                    name: 'Abdullah',
                    email: 'abdullah@gmail.com'
                  }} >
                    <Input
                      sx={{ marginBottom: '15px' }}
                      required
                      fullWidth
                      label="Name"
                      name="name" />
                    <Input
                      sx={{ marginBottom: '15px' }}
                      required
                      fullWidth
                      label="Email"
                      name="email" />
                    <FormControlLabel control={<Checkbox />} label="Terms and conditions" />
                    <Box mt='15px'>
                      <Button type="submit" fullWidth variant="contained" >Submit Request</Button>
                    </Box>
                  </Form>
                </Box>
              </>
          }
        </Box>
      </Container>
    </>
  );
};

export default BookingPage;
