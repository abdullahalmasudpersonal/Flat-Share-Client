"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Container, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Form from "@/components/Forms/Form";
import Input from "@/components/Forms/Input";
import AutoFileUploader from "@/components/Forms/AutoFileUploader";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { usePostFlatMutation } from "@/redux/api/flatApi";
import { modifyPayload } from "@/utils/modifyPayload";
import { getUserInfo } from "@/services/auth.services";
import { toast } from "sonner";

const PostAd = () => {
  const { userId } = getUserInfo();
  ///const { data, isLoading } = useGetMYProfileQuery(undefined);
  const [postFlat, { isLoading: updating }] = usePostFlatMutation();
  const [rest, setReset] = React.useState();

  const fileUploadHandler = (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("data", JSON.stringify({}));
    postFlat(formData);
  };

  const handleSubmit = async (values: FieldValues) => {
    values.userId = userId;
    values.squareFeet = Number(values.squareFeet);
    values.totalBedrooms = Number(values.totalBedrooms);
    values.totalRooms = Number(values.totalRooms);
    values.rent = Number(values.rent);
    values.advanceAmount = Number(values.advanceAmount);
    console.log(values);

    const data = modifyPayload(values);
    console.log("modify", data);

    try {
      const res = await postFlat(data).unwrap();
      if (res?.id) {
        toast.success("Flat created successfully!!!");
      }
    } catch (err: any) {
      console.error(err);
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
            label="squareFeet"
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
          <Box my={3}>
            {updating ? (
              <p>Uploading...</p>
            ) : (
              <AutoFileUploader
                sx={{ width: "100%" }}
                name="file"
                label="Choose Your Flat Photo"
                icon={<CloudUploadIcon />}
                onFileUpload={fileUploadHandler}
                variant="text"
              />
            )}
          </Box>
          <Button type="submit" fullWidth variant="contained">
            Post Ad
          </Button>
        </Form>
      </Box>
    </Box>
  );
};

export default PostAd;
