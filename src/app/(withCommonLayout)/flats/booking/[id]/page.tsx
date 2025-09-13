"use client";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { useGetSingleFlatQuery } from "../../../../../redux/api/flatApi";
import { useGetMYProfileQuery } from "../../../../../redux/api/myProfile";
import { getUserInfo, isLogedIn } from "../../../../../services/auth.services";
import Form from "../../../../../components/Forms/Form";
import { useCreateBookingMutation } from "@/redux/api/bookingApi";

type TParams = {
  params: {
    id: string;
  };
};

const BookingPage = ({ params }: TParams) => {
  const [isChecked, setIsChecked] = useState(false);
  const { userId, role } = getUserInfo();
  const id = params?.id;
  const { data: flatData } = useGetSingleFlatQuery(id);
  const [bookingFlat] = useCreateBookingMutation();
  const { data: userData, isLoading } = useGetMYProfileQuery(undefined);

  const router = useRouter();
  if (!isLogedIn()) {
    return router.push("/login");
  }

  const handleCheckboxChange = (event: any) => {
    setIsChecked(event.target.checked);
  };

  const handleRequest = async (values: FieldValues) => {
    const bookingData = {
      userId: userId,
      flatId: id,
    };
    try {
      const res = await bookingFlat(bookingData).unwrap();
      if (res?.id) {
        router.push(`/dashboard/buyer/my-requests`);
        toast.success("Flat booking request Successfully!!!");
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <>
      <Container>
        <Box pt="120px" pb='60px' display="flex" justifyContent="center">
          {isLoading ? (
            "Loading..."
          ) : (
            <>
              <Box
                border="1px solid gray"
                padding="20px"
                width="350px"
                borderRadius='3px'
              >
                <Typography
                  textAlign="center"
                  fontWeight="bold"
                  fontSize="20px"
                  mb="15px"
                >
                  Booking Request
                </Typography>
                <Form onSubmit={handleRequest} defaultValues={userData}>
                  <Tooltip title={flatData?.flatName} arrow>
                    <TextField
                      required
                      fullWidth
                      label="Flat Name"
                      value={flatData?.flatName}
                      sx={{ marginBottom: "15px" }}
                      size="small"
                      // disabled
                    >
                      {flatData?.flatName}
                    </TextField>
                  </Tooltip>
                  <TextField
                    sx={{ marginBottom: "15px" }}
                    required
                    fullWidth
                    label="Name"
                    size="small"
                    value={userData?.name}
                  />
                  <TextField
                    sx={{ marginBottom: "15px" }}
                    required
                    fullWidth
                    label="Email"
                    size="small"
                    value={userData?.email}
                  />
                  <TextField
                    sx={{ marginBottom: "15px" }}
                    required
                    fullWidth
                    label="Contact Number"
                    size="small"
                    value={userData?.contactNumber}
                  />
                  <TextField
                    sx={{ marginBottom: "15px" }}
                    required
                    fullWidth
                    label="Address"
                    size="small"
                    value={userData?.address}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                    }
                    label="Terms and conditions"
                  />
                  <Box mt="15px">
                    <Button
                      disabled={!isChecked}
                      type="submit"
                      fullWidth
                      variant="contained"
                    >
                      Submit Request
                    </Button>
                  </Box>
                </Form>
              </Box>
            </>
          )}
        </Box>
      </Container>
    </>
  );
};

export default BookingPage;
