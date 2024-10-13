"use client";
import {
  Box,
  Button,
  CardMedia,
  Container,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import FlatAccordian from "../components/FlatAccordion";
import Link from "next/link";
import { useGetSingleFlatQuery } from "../../../../redux/api/flatApi";
import { useGetBookingFlatQuery } from "../../../../redux/api/bookingApi";
import { formatLocalTime } from "../../../../components/Shared/Date&Time/Date";
import { getUserInfo } from "@/services/auth.services";
import { useEffect, useState } from "react";

type TParams = {
  params: {
    id: string;
  };
};

const FlatDetailPage = ({ params }: TParams) => {
  const userInfo = getUserInfo();
  const { data: bookingData } = useGetBookingFlatQuery({});
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const targetId = params?.id;

  useEffect(() => {
    if (targetId && bookingData && Array.isArray(bookingData)) {
      const data = bookingData.filter(
        (item: { flatId: string }) => item.flatId === targetId
      );
      setFilteredData(data);
    }
  }, [targetId, bookingData]);

  const disabledRequest = (userInfo?.role === 'seller' || userInfo?.role === "admin") || filteredData?.length > 0
  const id = params?.id;
  const { data: flatData, isLoading } = useGetSingleFlatQuery(id);

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
                    <Tooltip title={'Only Buyer Request'} arrow>
                      <span>
                        <Button variant="contained" disabled={disabledRequest} >
                          <Link href={`/flats/booking/${id}`}>Booking Request</Link>
                        </Button>
                      </span>
                    </Tooltip>
                    {
                      filteredData?.length>0 ? <Typography sx={{ fontSize: '13px', color: 'red' }}>
                        <small>ALRADY REQUEST</small>
                      </Typography> : ''
                    }
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
