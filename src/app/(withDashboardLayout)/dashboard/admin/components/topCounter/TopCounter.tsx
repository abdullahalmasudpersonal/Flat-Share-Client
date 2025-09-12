"use client";
import { Box, Card, Grid, Typography } from "@mui/material";
import React from "react";
import TotalBooking from "./TotalBooking";
import TotalPost from "./TotalPost";
import { topCounterFunction } from "@/utils/topCounterFunction";
import { useGetAllBuyerQuery } from "@/redux/api/buyerApi";
import { useGetAllSellerQuery } from "@/redux/api/sellerApi";
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import PeopleIcon from '@mui/icons-material/People';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts";

const TopCounter = () => {
  const { data: sellerData, isLoading } = useGetAllBuyerQuery({});
  const { data: boyerDta } = useGetAllSellerQuery({});

  const datas = [
    { id: 1, name: 'Total Flats', icon: OtherHousesIcon, number: 10, status: 'df', color: 'rgb(95, 33, 177)', },
    { id: 2, name: 'Booking Requests', icon: PendingActionsIcon, number: 10, status: 'df', color: 'rgb(39, 104, 179)' },
    { id: 3, name: 'Total Seller', icon: PeopleIcon, number: 10, status: 'df', color: "rgb(24, 88, 45)", },
    { id: 4, name: 'Total Buyer', icon: PeopleAltIcon, number: 10, status: 'df', color: "rgb(33, 48, 177)" },
  ]

  const data = [
    {
      name: 'Page A',
      uv: 1000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 2000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 1500,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2280,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1590,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 2090,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Page G',
      uv: 3090,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <Box>
      <Grid container spacing={3}>
        {
          datas.map((item) => {
            const Icon = item.icon;
            return (
              <Grid item xs={12} sm={6} md={6} lg={3} key={item.id}>
                <Card sx={{ padding: '15px', height: '100%', background: 'linear-gradient(to right, rgb(202, 145, 240), rgb(160, 120, 255))' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: "10px" }}>
                    <Box sx={{ width: '50px', height: '50px', borderRadius: '50%', background: `${item.color}`, display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' }}>
                      <Icon sx={{ fontSize: 27, color: "white", }} />
                    </Box>
                    <Box>
                      <Typography sx={{ color: 'white', }}>{item.name}</Typography>
                      <Typography sx={{ color: 'rgb(224, 224, 224)', fontWeight: '900', fontSize: '25px' }}>{item.number}</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ width: "100%", height: { xs: 60, }, }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={data}
                      >
                        <Tooltip />
                        <Area type="monotone" dataKey="uv" stroke={item.color} fill={item.color} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </Box>
                </Card>
              </Grid>
            )
          })
        }
      </Grid>

      {/* <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <TotalPost />
          <TotalBooking />

          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                maxWidth: 345,
                padding: 2,
                background: "linear-gradient(109.6deg, rgb(177, 173, 219) 11.2%, rgb(245, 226, 226) 91.1%)",
              }}
            >
              <Box
                sx={{
                  boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
                  background: "linear-gradient(103deg, rgb(235, 225, 188) 7.2%, rgb(232, 188, 234) 57.5%, rgb(203, 209, 244) 90.7%)",
                  display: "inline-block",
                  padding: "10px",
                  borderRadius: "50%",
                  marginTop: "15px",
                }}
              >
                <PeopleIcon sx={{ fontSize: 30, color: "gray" }} />
              </Box>
              <Box sx={{ marginTop: "15px" }}>
                <Typography sx={{ fontSize: "30px" }}>
                  {topCounterFunction(sellerData?.length)}
                </Typography>
                <Typography>
                  <small>Total Seller</small>
                </Typography>
              </Box>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                maxWidth: 345,
                padding: 2,
                background: "linear-gradient(to top, #dad4ec 0%, #dad4ec 1%, #f3e7e9 100%)",
              }}
            >
              <Box
                sx={{
                  boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
                  background: "linear-gradient(106.7deg, rgb(151, 150, 240) 12.1%, rgb(255, 206, 236) 63.2%)",
                  display: "inline-block",
                  padding: "10px",
                  borderRadius: "50%",
                  marginTop: "15px",
                }}
              >
                <PeopleAltRoundedIcon sx={{ fontSize: 30, color: "gray" }} />
              </Box>
              <Box sx={{ marginTop: "15px" }}>
                <Typography sx={{ fontSize: "30px" }}>
                  {topCounterFunction(boyerDta?.length)}
                </Typography>
                <Typography>
                  <small>Total Buyer</small>
                </Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>  */}

    </Box>
  );
};

export default TopCounter;
