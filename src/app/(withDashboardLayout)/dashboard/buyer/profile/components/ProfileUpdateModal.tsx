import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import FullScreenModal from "../../../../../../components/Shared/Modal/FullScreenModal";
import Form from "../../../../../../components/Forms/Form";
import Input from "../../../../../../components/Forms/Input";
import { useGetMYProfileQuery } from "../../../../../../redux/api/myProfile";
import { useUpdateSingleBuyerMutation } from "../../../../../../redux/api/buyerApi";

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
  } = useGetMYProfileQuery({});

  const [updateSingleBuyer, { isLoading: updating }] =
    useUpdateSingleBuyerMutation();

  const submitHandler = async (values: FieldValues) => {
    const excludedFields: Array<keyof typeof values> = [
      "id",
      "email",
      "role",
      "status",
      "gender",
      "profilePhoto",
      "averageRating",
      "isDeleted",
      "createdAt",
      "updatedAt",
    ];

    const updatedValues = Object.fromEntries(
      Object.entries(values).filter(([key]) => {
        return !excludedFields.includes(key);
      })
    );
    console.log("values", values);
    try {
      updateSingleBuyer({ body: updatedValues, id });
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
