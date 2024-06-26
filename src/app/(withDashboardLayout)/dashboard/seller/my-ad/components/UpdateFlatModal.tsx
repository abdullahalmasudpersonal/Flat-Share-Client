import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import FullScreenModal from "../../../../../../components/Shared/Modal/FullScreenModal";
import Form from "../../../../../../components/Forms/Form";
import Input from "../../../../../../components/Forms/Input";
import {
  useGetSingleFlatQuery,
  useUpdateFlatMutation,
} from "../../../../../../redux/api/flatApi";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
};

const UpdateFlatModal = ({ open, setOpen, id }: TProps) => {
  const { data: flatData, refetch, isLoading } = useGetSingleFlatQuery(id);
  const [availability, setAvailability] = useState(flatData?.availability);
  const [updateFlat, { isLoading: updating }] = useUpdateFlatMutation();

  const availabilityTrue: boolean = availability === "true";

  const handleChangeAvailability = (event: SelectChangeEvent) => {
    setAvailability(event.target.value);
  };
  const submitHandler = async (values: FieldValues) => {
    values.squareFeet = Number(values.squareFeet);
    values.totalBedrooms = Number(values.totalBedrooms);
    values.totalRooms = Number(values.totalRooms);
    values.rent = Number(values.rent);
    values.advanceAmount = Number(values.advanceAmount);
    values.availability = availabilityTrue;

    const excludedFields: Array<keyof typeof values> = [
      "id",
      "userId",
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

    try {
      updateFlat({ body: updatedValues, id });
      await refetch();
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FullScreenModal open={open} setOpen={setOpen} title="Update Flat Details">
      <Form onSubmit={submitHandler} defaultValues={flatData}>
        <Grid container spacing={2} sx={{ mt: 5, mb: 1 }}>
          <Grid item xs={12} sm={12} md={4}>
            <Input name="flatName" label="Flat Name" sx={{ mb: 2 }} fullWidth />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <FormControl sx={{ mb: "20px" }} fullWidth size="small">
              <InputLabel id="demo-select-small-label2">
                Availability
              </InputLabel>
              <Select
                required
                fullWidth
                labelId="demo-select-small-label2"
                label="Availability"
                type="boolean"
                value={availability}
                defaultValue={flatData?.availability}
                onChange={handleChangeAvailability}
              >
                <MenuItem value="true">True</MenuItem>
                <MenuItem value="false">False</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Input
              name="squareFeet"
              label="Square Feet"
              type="number"
              sx={{ mb: 2 }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Input
              name="totalBedrooms"
              label="Total Bed Room"
              type="number"
              sx={{ mb: 2 }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Input
              name="totalRooms"
              label="Total Room"
              type="number"
              sx={{ mb: 2 }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Input
              name="utilitiesDescription"
              label="Utilities Description"
              sx={{ mb: 2 }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Input name="location" label="Address" sx={{ mb: 2 }} fullWidth />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Input
              name="description"
              label="Description"
              sx={{ mb: 2 }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Input
              name="amenities"
              label="Amenities"
              sx={{ mb: 2 }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Input
              name="rent"
              label="Rent"
              type="number"
              sx={{ mb: 2 }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Input
              name="advanceAmount"
              label="Advance Amount"
              type="number"
              sx={{ mb: 2 }}
              fullWidth
            />
          </Grid>
        </Grid>
        <Button variant="contained" type="submit" disabled={updating}>
          Save
        </Button>
      </Form>
    </FullScreenModal>
  );
};

export default UpdateFlatModal;
