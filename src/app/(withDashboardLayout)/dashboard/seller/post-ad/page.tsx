"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Form from "../../../../../components/Forms/Form";
import Input from "../../../../../components/Forms/Input";
import { getUserInfo } from "../../../../../services/auth.services";
import { usePostFlatMutation } from "../../../../../redux/api/flatApi";
import { modifyPayload } from "../../../../../utils/modifyPayload";

const PostAd = () => {
  const { userId } = getUserInfo();
  const router = useRouter();
  const [postFlat, { isLoading: updating }] = usePostFlatMutation();

  const handleSubmit = async (values: FieldValues) => {
    values.userId = userId;
    values.squareFeet = Number(values.squareFeet);
    values.totalBedrooms = Number(values.totalBedrooms);
    values.totalRooms = Number(values.totalRooms);
    values.rent = Number(values.rent);
    values.advanceAmount = Number(values.advanceAmount);
    const data = modifyPayload(values);

    try {
      const res = await postFlat(data).unwrap();
      if (res?.id) {
        toast.success("Flat created successfully!!!");
        router.push("/dashboard/seller/my-ad");
      } else
        (err: any) => {
          console.log("errs", err);
        };
    } catch (err: any) {
      console.log("catch", err);
    }
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          boxShadow:
            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
          width: "350px",
          padding: "30px",
        }}
      >
        <Typography
          sx={{ textAlign: "center", fontSize: "25px", marginBottom: "20px" }}
        >
          Post your Flat or Rooms
        </Typography>

        <Form onSubmit={handleSubmit} defaultValues={{}}>
          <Input
            required
            name="flatName"
            sx={{ width: "100%", marginBottom: "15px" }}
            label="Flat Name"
            size="small"
          />
          <Input
            required
            name="squareFeet"
            sx={{ width: "100%", marginBottom: "15px" }}
            label="Square Feet"
            type="number"
            size="small"
          />
          <Input
            required
            name="totalBedrooms"
            sx={{ width: "100%", marginBottom: "15px" }}
            label="Total Bedrooms"
            type="number"
            size="small"
          />
          <Input
            required
            name="totalRooms"
            sx={{ width: "100%", marginBottom: "15px" }}
            label="Total Rooms"
            type="number"
            size="small"
          />
          <Input
            required
            name="utilitiesDescription"
            sx={{ width: "100%", marginBottom: "15px" }}
            label="Utilities Description"
            size="small"
          />
          <Input
            required
            name="location"
            sx={{ width: "100%", marginBottom: "15px" }}
            label="Location"
            size="small"
          />
          <Input
            required
            name="description"
            sx={{ width: "100%", marginBottom: "15px" }}
            label="Description"
            size="small"
          />
          <Input
            required
            name="amenities"
            sx={{ width: "100%", marginBottom: "15px" }}
            label="Amenities"
            size="small"
          />
          <Input
            required
            name="rent"
            sx={{ width: "100%", marginBottom: "15px" }}
            label="Rent"
            type="number"
            size="small"
          />
          <Input
            required
            name="advanceAmount"
            sx={{ width: "100%", marginBottom: "15px" }}
            label="AdvanceAmount"
            type="number"
            size="small"
          />
          <Button type="submit" fullWidth variant="contained">
            Post Ad
          </Button>
        </Form>
      </Box>
    </Box>
  );
};

export default PostAd;
