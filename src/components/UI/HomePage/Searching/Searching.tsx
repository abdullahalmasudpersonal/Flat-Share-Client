"use client";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import Aos from "aos";
import { useEffect } from "react";
import SearchIcon from '@mui/icons-material/Search';

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
          sx={{
            width: { xs: '100%', sm: '60%', md: '50%', lg: '30%', xl: '30%', }, color: 'white', border: '1px solid white', borderRadius: '5px',
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                border: 'none',
              },
            },
            '& .MuiInputBase-input::placeholder': {
              color: 'white', // এখানে placeholder এর রঙ সেট করো
              opacity: 1, // এটি placeholder এর default opacity পরিবর্তন করে
            },
            '& .MuiInputBase-input': {
              color: 'white',  // এখানে টেক্সটের রঙ নির্ধারণ করো
            },
          }}
          //  id="outlined-basic"
          // hiddenLabel
          //   size="medium"
          // variant="outlined"
          //  aria-label="Enter your email address"
          placeholder="Find Your Flat..."
          // inputProps={{
          //   autoComplete: "off",
          //   "aria-label": "Enter your email address",
          // }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: 'white' }} />
              </InputAdornment>
            ),
          }}
        />
        <Box ml={2} display="flex" alignItems="center">
          <Button variant="contained" sx={{ height: "54px", width: "100px" }}>
            Search
          </Button>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', paddingBottom: '30px' }}>
        <FormControl sx={{ display: 'flex', fontSize: '5px' }}>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            defaultValue="location"
            sx={{
              color: 'white',
              '& .MuiSvgIcon-root': {
                fontSize: 24,
              },
              '@media (max-width: 500px)': {
                '& .MuiSvgIcon-root': {
                  fontSize: 15,
                },
              },
            }}
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
              label="Bedrooms"
              sx={{ margin: '0px' }}
            />
          </RadioGroup>
        </FormControl>
      </Box>
    </>
  );
};

export default Searching;
