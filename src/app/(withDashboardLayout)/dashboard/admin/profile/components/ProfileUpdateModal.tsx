import { Box, Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import FullScreenModal from "../../../../../../components/Shared/Modal/FullScreenModal";
import Input from "../../../../../../components/Forms/Input";
import Form from "../../../../../../components/Forms/Form";
import { useGetMYProfileQuery, useUpdateMYProfileMutation } from "../../../../../../redux/api/myProfile";
import { useUpdateSingleAdminMutation } from "../../../../../../redux/api/adminApi";


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

  const [updateSingleAdmin, { isLoading: updating }] =
    useUpdateSingleAdminMutation();

  const submitHandler = async (values: FieldValues) => {
    const excludedFields: Array<keyof typeof values> = [
      "id",
      "email",
      "profilePhoto",
      "role",
      "status",
      "isDeleted",
      "createdAt",
      "updatedAt",
    ];

    const updatedValues = Object.fromEntries(
      Object.entries(values).filter(([key]) => {
        return !excludedFields.includes(key);
      })
    );

    try {
      updateSingleAdmin({ body: updatedValues, id });
      await refetch();
      setOpen(false);
    } catch (error) {
      console.log(error);
    }


  };

  return (
    <FullScreenModal open={open} setOpen={setOpen} title="Update Profile">
      <Form onSubmit={submitHandler} defaultValues={userProfileData} >
        <Grid container spacing={2} sx={{ my: 0 }}>
          <Grid item xs={12} sm={12} md={4}>
            <Input name="name" label="Name" sx={{ mb: 2 }} fullWidth />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Input
              name="contactNumber"
              label="Contract Number"
              sx={{ mb: 2 }}
              fullWidth
            />
          </Grid>
        </Grid>
        <Box textAlign='center' >
          <Button variant="contained" type="submit" sx={{ padding: 'auto 25px' }} disabled={updating} >
            Save
          </Button>
        </Box>
      </Form>
    </FullScreenModal>
  );
};

export default ProfileUpdateModal;
