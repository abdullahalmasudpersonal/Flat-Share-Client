import { Box, Card, Container, Grid, Typography } from "@mui/material";
import { purple } from "@mui/material/colors";
import React from "react";

const WhyUseSpace = () => {
  return (
    <>
      <Typography textAlign="center" variant="h3" fontFamily="serif">
        Why use Spare{" "}
        <Box fontFamily="serif" component="span" sx={{ color: purple[600] }}>
          Flat?
        </Box>
      </Typography>
      <Box sx={{ textAlign: "center" }}>
        <Container sx={{ margin: "30px auto" }}>
          <Grid container spacing={2}>
            <Card sx={{ maxWidth: 345, margin: "auto", marginBottom: "20px" }}>
              {/* <CardHeader
                  avatar={
                    <Avatar
                      sx={{ bgcolor: purple[700] }}
                      aria-label="recipe"
                    ></Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={
                    item?.flatName?.length > 28
                      ? item?.flatName.substring(0, 28) + "..."
                      : item?.flatName
                  }
                  subheader={formatLocalDate(item?.createdAt)}
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={item?.flatPhoto}
                  alt="Paella dish"
                />
                <CardContent>
                  <Tooltip title={item?.description} arrow>
                    <Typography variant="body2" color="text.secondary">
                      {item?.description?.length > 170
                        ? item?.description.substring(0, 170) + "..."
                        : item?.description}
                    </Typography>
                  </Tooltip>
                </CardContent>
                <Box
                  margin="0"
                  padding="0 10px"
                >
                  <Typography textAlign="start">
                    Price: {item?.rent} TK
                  </Typography>

                  <Box>
                    <Typography textAlign="start">
                      Bedrooms: {item?.totalRooms}
                    </Typography>
                  </Box>
                </Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  padding="0 10px 10px 5px"
                >
                  <Box display="flex" alignItems="center">
                    <LocationOnIcon />
                    <Typography>{item?.location}</Typography>
                  </Box>

                  <Box>
                    <Link href={`/flats/${item.id}`}>
                      <Button variant="contained">Details</Button>
                    </Link>
                  </Box>
                </Box> */}
            </Card>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default WhyUseSpace;
