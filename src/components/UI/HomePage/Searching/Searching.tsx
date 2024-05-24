import { Box, TextField } from "@mui/material";

const Searching = () => {
  return (
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
        placeholder="Your email address"
        inputProps={{
          autoComplete: "off",
          "aria-label": "Enter your email address",
        }}
      />
    </Box>
  );
};

export default Searching;
