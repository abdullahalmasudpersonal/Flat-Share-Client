import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Form from "@/components/Forms/Form";
import { Button, Typography } from "@mui/material";

const PostAd = () => {
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

        <Box sx={{ display: "", justifyContent: "center" }}>
          <TextField
            sx={{ width: "100%", marginBottom: "15px" }}
            id="outlined-helperText"
            label="Name"
            size="small"
          />
          <TextField
            sx={{ width: "100%", marginBottom: "15px" }}
            id="outlined-helperText"
            label="Name"
            size="small"
          />
          <TextField
            sx={{ width: "100%", marginBottom: "15px" }}
            id="outlined-helperText"
            label="Name"
            size="small"
          />
          <TextField
            sx={{ width: "100%", marginBottom: "15px" }}
            id="outlined-helperText"
            label="Name"
            size="small"
          />
          <TextField
            sx={{ width: "100%", marginBottom: "15px" }}
            id="outlined-helperText"
            label="Name"
            size="small"
          />
          <TextField
            sx={{ width: "100%", marginBottom: "15px" }}
            id="outlined-helperText"
            label="Name"
            size="small"
          />
          <TextField
            sx={{ width: "100%", marginBottom: "15px" }}
            id="outlined-helperText"
            label="Name"
            size="small"
          />
          <TextField
            sx={{ width: "100%", marginBottom: "15px" }}
            id="outlined-helperText"
            label="Name"
            size="small"
          />

          <Button>Post Ad</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PostAd;
