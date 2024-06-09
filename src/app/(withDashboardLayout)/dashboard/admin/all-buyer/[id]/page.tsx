"use client";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import UserProfileInfo from "../components/UserProfileInfo";
//import profileAltLogo from "@/assets/profile/person-icon.png";
import profileAltLogo from "../../../../../../assets/profile/person-icon.png";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  useGetSingleBuyerQuery,
  useUpdateSingleBuyerFormAdminMutation,
} from "../../../../../../redux/api/userApi";

type TParams = {
  params: {
    id: string;
  };
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

type Inputs = {
  status?: string;
  role?: string;
};

const BuyerDetailPage = ({ params }: TParams) => {
  const id = params?.id;
  const { data, isLoading } = useGetSingleBuyerQuery(id);

  const [updateSingleBuyerFormAdmin, { isLoading: updateSellerIsloading }] =
    useUpdateSingleBuyerFormAdminMutation(undefined);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (values: Inputs) => {
    try {
      const res = await updateSingleBuyerFormAdmin({
        id: data?.id,
        body: values,
      });
      if (res?.data) {
        toast.success("Update single buyer!");
        setOpen(false);
      }
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            mb="10px"
          >
            Update User Status & Role
          </Typography>
          <Box display="flex">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small-label">Role</InputLabel>
                  <Select
                    id="role"
                    {...register("role")}
                    labelId="demo-select-small-label"
                    defaultValue={data?.role}
                    label="Role"
                  >
                    <MenuItem value="BUYER">BUYER</MenuItem>
                    <MenuItem value="SELLER">SELLER</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small-label">Status</InputLabel>
                  <Select
                    id="status"
                    {...register("status")}
                    labelId="demo-select-small-label"
                    defaultValue={data?.status}
                    label="Status"
                  >
                    <MenuItem value="BLOCKED">BLOCKED</MenuItem>
                    <MenuItem value="ACTIVE">ACTIVE</MenuItem>
                    <MenuItem value="PENDING">PENDING</MenuItem>
                    <MenuItem value="DELETED">DELETED</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Button type="submit" variant="contained">
                Update
              </Button>
            </form>
          </Box>
        </Box>
      </Modal>

      <Container sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          <Grid xs={12} md={4} padding="16px">
            <Box
              my={3}
              sx={{
                height: 300,
                width: "100%",
                overflow: "hidden",
                borderRadius: 1,
                boxShadow:
                  "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
              }}
            >
              {data?.userProfile?.profilePhoto ? (
                <Image
                  height={300}
                  width={400}
                  src={data?.userProfile?.profilePhoto}
                  alt="User Photo"
                />
              ) : (
                <Image
                  height={300}
                  width={400}
                  src={profileAltLogo}
                  alt="User Photo"
                />
              )}
            </Box>
            <Button
              variant="contained"
              fullWidth
              endIcon={<ModeEditIcon />}
              onClick={handleOpen}
            >
              Updatge
            </Button>
          </Grid>
          <Grid xs={12} md={8} padding="16px">
            <UserProfileInfo data={data} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default BuyerDetailPage;
