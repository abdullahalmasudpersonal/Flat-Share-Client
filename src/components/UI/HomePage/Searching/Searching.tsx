import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";

const Searching = () => {
  return (
    <>
      <Box
        sx={{
          margin: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TextField
          sx={{ width: "40%" }}
          id="outlined-basic"
          hiddenLabel
          size="medium"
          variant="outlined"
          aria-label="Enter your email address"
          placeholder="Find Your Flat..."
          inputProps={{
            autoComplete: "off",
            "aria-label": "Enter your email address",
          }}
        />
        <Box ml={2} display="flex" alignItems="center">
          <Button variant="contained" sx={{ height: "54px", width: "100px" }}>
            Search
          </Button>
        </Box>
      </Box>
      <Box display="flex" justifyContent="center">
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            defaultValue="location"
          >
            <FormControlLabel
              value="location"
              control={<Radio />}
              label="Location"
            />
            <FormControlLabel
              value="rent"
              control={<Radio />}
              label="Price range"
            />
            <FormControlLabel
              value="totalBedrooms"
              control={<Radio />}
              label="Number of bedrooms"
            />
          </RadioGroup>
        </FormControl>
      </Box>
    </>
  );
};

export default Searching;
