"use client";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import Aos from "aos";
import { useEffect } from "react";

const Searching = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Box
        data-aos="fade-right"
        sx={{
          margin: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TextField
          sx={{width:{xs: '100%',sm: '60%', md: '50%',  lg: '40%', xl:'40%',}  }}
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
      <Box sx={{ display: 'flex', justifyContent: 'center', /* fontSize:{xs: '5px', sm: '10px', md: '10px',} */ }}>
        <FormControl sx={{ display: 'flex' , fontSize:'5px'}}>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            defaultValue="location"

          >
            <FormControlLabel
              data-aos="flip-up"
              value="location"
              control={<Radio />}
              label="Location"
            />
            <FormControlLabel
              data-aos="flip-right"
              value="rent"
              control={<Radio />}
              label="Price range"
            />
            <FormControlLabel
              data-aos="flip-down"
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
