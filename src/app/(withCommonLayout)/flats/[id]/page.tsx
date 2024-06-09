"use client";
import { useGetSingleFlatQuery } from "@/redux/api/flatApi";
import {
  Box,
  Button,
  CardMedia,
  Container,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import FlatAccordian from "../components/FlatAccordion";
import Link from "next/link";
import { formatLocalTime } from "@/components/Shared/Date&Time/Date";
import { useGetBookingFlatQuery } from "@/redux/api/bookingApi";

type TParams = {
  params: {
    id: string;
  };
};

const FlatDetailPage = ({ params }: TParams) => {
  const id = params?.id;
  const { data: flatData, isLoading } = useGetSingleFlatQuery(id);
  const { data: myBookingData, isLoading: commingData } =
    useGetBookingFlatQuery({});

  return (
    <Box marginTop="120px" marginBottom="120px">
      <Container>
        <Box>
          {isLoading ? (
            "Loading..."
          ) : (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Flat Name</TableCell>
                    <TableCell align="right">Status</TableCell>
                    <TableCell align="right">SquareFeet</TableCell>
                    <TableCell align="right">Total Bedroom</TableCell>
                    <TableCell align="right">Total Room</TableCell>
                    <TableCell align="right">Rent</TableCell>
                    <TableCell align="right">Advance Amount</TableCell>
                    <TableCell align="right">Address</TableCell>
                    <TableCell align="right">Availability</TableCell>
                    <TableCell align="center">Details</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {myBookingData?.map((data: any) => (
                    <TableRow
                      key={data?.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {data?.flatId}
                      </TableCell>
                      <TableCell align="right">{data?.status}</TableCell>
                      <TableCell align="right">
                        {data?.flat?.squareFeet}
                      </TableCell>
                      <TableCell align="right">
                        {data?.flat?.totalBedrooms}
                      </TableCell>
                      <TableCell align="right">
                        {data?.flat?.totalRooms}
                      </TableCell>
                      <TableCell align="right">{data?.flat?.rent}</TableCell>
                      <TableCell align="right">
                        {data?.flat?.advanceAmount}
                      </TableCell>
                      <TableCell align="right">
                        {data?.flat?.location}
                      </TableCell>
                      <TableCell align="right">
                        {data?.flat?.availability ? "Yes" : "NO"}
                      </TableCell>
                      <TableCell align="center">
                        {/*   <Link href={`/dashboard/admin/all-buyer/${data?.id}`}> */}
                        <Button variant="contained">Details</Button>
                        {/* </Link> */}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Box>
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
                    image={flatData?.flatPhoto}
                    alt="Paella dish"
                  />
                </Grid>
                <Grid item xs={8}>
                  <Typography fontSize="21px" fontWeight="bold">
                    {flatData?.flatName}
                  </Typography>
                  <Box display="flex" mt="8px" mx="-2px">
                    <QueryBuilderIcon fontSize="small" sx={{ color: "gray" }} />
                    <Typography fontWeight="500">
                      &nbsp;{formatLocalTime(flatData?.createdAt)}
                    </Typography>
                  </Box>
                  <Box display="flex" mt="8px" mx="-5px">
                    <LocationOnIcon sx={{ color: "gray" }} />
                    <Typography fontWeight="500">
                      {flatData?.location}
                    </Typography>
                  </Box>
                  <Typography display="flex" mt="8px">
                    <Typography fontWeight="500">Available:</Typography>
                    &nbsp;
                    {flatData?.availability ? (
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
                    &nbsp;{flatData?.squareFeet}&nbsp;Square Feet
                  </Typography>
                  <Typography display="flex" mt="8px">
                    <Typography fontWeight="500">Bed Rooms:</Typography>
                    &nbsp;{flatData?.totalBedrooms}
                  </Typography>
                  <Typography display="flex" mt="8px">
                    <Typography fontWeight="500">Total Rooms:</Typography>
                    &nbsp;{flatData?.totalRooms}
                  </Typography>
                  <Typography display="flex" mt="8px">
                    <Typography fontWeight="500">Rent:</Typography>
                    &nbsp;{flatData?.rent}&nbsp;Tk
                  </Typography>
                  <Typography display="flex" mt="8px">
                    <Typography fontWeight="500">Advance Amount:</Typography>
                    &nbsp;{flatData?.advanceAmount}&nbsp;Tk
                  </Typography>

                  <Box mt="20px">
                    <Link href={`/flats/booking/${id}`}>
                      <Button variant="contained">Booking Request</Button>
                    </Link>
                  </Box>
                  <Box mt="20px">
                    <FlatAccordian data={flatData} />
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
