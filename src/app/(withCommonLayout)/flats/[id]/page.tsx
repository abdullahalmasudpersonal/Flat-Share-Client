"use client";
import { useGetSingleFlatQuery } from "@/redux/api/flatApi";
import {
  Box,
  Button,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import { formatLocalTime } from "@/components/Shared/Date&Time/Date";
import FlatAccordian from "../components/FlatAccordion";

type TParams = {
  params: {
    id: string;
  };
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const FlatDetailPage = ({ params }: TParams) => {
  const id = params?.id;
  const { data, isLoading } = useGetSingleFlatQuery(id);
  // console.log(useGetSingleFlatQuery(id));
  return (
    <Box marginTop="120px" marginBottom="120px">
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 1, sm: 2, md: 4 }}
            columns={16}
            direction={{ xs: "column", sm: "row" }}
          >
            {isLoading ? (
              "Loading..."
            ) : (
              <>
                <Grid item xs={8}>
                  <CardMedia
                    component="img"
                    height="194"
                    image={data?.flatPhoto}
                    alt="Paella dish"
                  />
                </Grid>
                <Grid item xs={8}>
                  <Typography fontSize="21px" fontWeight="bold">
                    {data?.flatName}
                  </Typography>
                  <Box display="flex" mt="8px" mx="-2px">
                    <QueryBuilderIcon fontSize="small" sx={{ color: "gray" }} />
                    <Typography fontWeight="500">
                      &nbsp;{formatLocalTime(data?.createdAt)}
                    </Typography>
                  </Box>
                  <Box display="flex" mt="8px" mx="-5px">
                    <LocationOnIcon sx={{ color: "gray" }} />
                    <Typography fontWeight="500">{data?.location}</Typography>
                  </Box>
                  <Typography display="flex" mt="8px">
                    <Typography fontWeight="500">Available:</Typography>
                    &nbsp;
                    {data?.availability ? (
                      <>
                        {"Yes"}&nbsp;
                        <CheckCircleIcon
                          fontSize="small"
                          sx={{ color: "green" }}
                        />
                      </>
                    ) : (
                      <>
                        {"No"}&nbsp;
                        <DoNotDisturbIcon
                          fontSize="small"
                          sx={{ color: "red" }}
                        />
                      </>
                    )}
                    &nbsp;
                  </Typography>
                  <Typography display="flex" mt="8px">
                    <Typography fontWeight="500">Flat Size:</Typography>
                    &nbsp;{data?.squareFeet}&nbsp;Square Feet
                  </Typography>
                  <Typography display="flex" mt="8px">
                    <Typography fontWeight="500">Bed Rooms:</Typography>
                    &nbsp;{data?.totalBedrooms}
                  </Typography>
                  <Typography display="flex" mt="8px">
                    <Typography fontWeight="500">Total Rooms:</Typography>
                    &nbsp;{data?.totalRooms}
                  </Typography>
                  <Typography display="flex" mt="8px">
                    <Typography fontWeight="500">Rent:</Typography>
                    &nbsp;{data?.rent}&nbsp;Tk
                  </Typography>
                  <Typography display="flex" mt="8px">
                    <Typography fontWeight="500">Advance Amount:</Typography>
                    &nbsp;{data?.advanceAmount}&nbsp;Tk
                  </Typography>

                  <Box mt="20px">
                    <Button variant="contained">Booking Request</Button>
                  </Box>
                  <Box mt="20px">
                    <FlatAccordian data={data} />
                  </Box>
                </Grid>
              </>
            )}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default FlatDetailPage;
