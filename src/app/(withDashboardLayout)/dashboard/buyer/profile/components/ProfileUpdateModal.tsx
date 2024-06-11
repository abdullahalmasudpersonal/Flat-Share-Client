import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import {
  useGetMyUserProfileDataQuery,
  useUpdateUserProfileDataMutation,
} from "../../../../../../redux/api/userApi";
import FullScreenModal from "../../../../../../components/Shared/Modal/FullScreenModal";
import Form from "../../../../../../components/Forms/Form";
import Input from "../../../../../../components/Forms/Input";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
};

const ProfileUpdateModal = ({ open, setOpen, id }: TProps) => {
  const {
    data: userProfileData,
    refetch,
    isSuccess,
  } = useGetMyUserProfileDataQuery(id);

  const [updateUserProfileData, { isLoading: updating }] =
    useUpdateUserProfileDataMutation();

  const submitHandler = async (values: FieldValues) => {
    const excludedFields: Array<keyof typeof values> = [
      "id",
      "userId",
      "gender",
      "profilePhoto",
      "isDeleted",
      "createdAt",
      "updatedAt",
      "user",
    ];

    const updatedValues = Object.fromEntries(
      Object.entries(values).filter(([key]) => {
        return !excludedFields.includes(key);
      })
    );
    console.log("values", values);
    try {
      updateUserProfileData({ body: updatedValues, id });
      await refetch();
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FullScreenModal open={open} setOpen={setOpen} title="Update Profile">
      <Form onSubmit={submitHandler} defaultValues={userProfileData}>
        <Grid container spacing={2} sx={{ my: 5 }}>
          <Grid item xs={12} sm={12} md={4}>
            <Input name="name" label="Name" sx={{ mb: 2 }} fullWidth />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Input name="bio" label="Bio" sx={{ mb: 2 }} fullWidth />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Input
              name="profession"
              label="Profession"
              sx={{ mb: 2 }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Input
              name="contactNumber"
              label="Contract Number"
              sx={{ mb: 2 }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Input name="address" label="Address" sx={{ mb: 2 }} fullWidth />
          </Grid>
        </Grid>
        <Button variant="contained" type="submit" disabled={updating}>
          Save
        </Button>
      </Form>
    </FullScreenModal>
  );
};

export default ProfileUpdateModal;
