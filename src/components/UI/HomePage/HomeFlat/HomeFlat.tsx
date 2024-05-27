import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Container, Grid } from "@mui/material";

const HomeFlat = async () => {
  const res = await fetch("http://localhost:5000/api/v1/flat?page=1&limit=03");
  const { data: flats } = await res.json();
  // console.log(data?.meta?.total);
  //   const [...datas] = data?.data;
  //   const [...jas] = datas;
  //   console.log("masud", jas);
  // const docto = flats?.map((doctor: any) => doctor.flatName);
  // console.log(flats);

  return (
    <Box>
      <Box display='flex' sx={{ textAlign: "center" }}>
      <Container sx={{ margin: "30px auto" }}>
        <Grid container spacing={2}>
        {
          flats?.map((item: any) =>
          (
            <Card key={item.id} sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    R
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
              />
              <CardMedia
                component="img"
                height="194"
                image={item?.flatPhoto}
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal to
                  cook together with your guests. Add 1 cup of frozen peas along with
                  the mussels, if you like.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
          )
          )
        }
        </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HomeFlat;
