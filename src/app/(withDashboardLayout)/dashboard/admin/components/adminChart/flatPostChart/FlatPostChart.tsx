"use client";
import { useGetBookingFlatQuery } from "@/redux/api/bookingApi";
import { useGetAllFlatQuery } from "@/redux/api/flatApi";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const FlatPostChart = () => {
  const { data: bookingData } = useGetBookingFlatQuery({});
  const { data: flatData } = useGetAllFlatQuery({});
  const [chartData, setChartData] = useState<any[]>([]);

  // console.log(flatData, "flatData");
  // console.log(bookingData, "bookingData");
  // console.log(chartData, "chartDta");

  useEffect(() => {
    if (bookingData && flatData) {
      const lastThirtyDaysData = getLastThirtyDaysData(bookingData, flatData);
      setChartData(lastThirtyDaysData);
    }
    console.log(getLastThirtyDaysData, "getlast");
  }, [bookingData, flatData]);

  const getLastThirtyDaysData = (bookingData: any[], flatData: any[]) => {
    const today = new Date();
    const pastThirtyDays = [...Array(30)]
      .map((_, i) => {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        return date.toISOString().split("T")[0];
      })
      .reverse();

    const dataMap: {
      [key: string]: { bookingCount: number; postCount: number };
    } = {};
    pastThirtyDays.forEach((date) => {
      dataMap[date] = { bookingCount: 0, postCount: 0 };
    });

    bookingData.forEach((entry) => {
      const bookingDate = new Date(entry.createdAt).toISOString().split("T")[0];
      if (dataMap[bookingDate]) {
        dataMap[bookingDate].bookingCount += 1;
      }
    });

    flatData.forEach((entry) => {
      const postDate = new Date(entry.createdAt).toISOString().split("T")[0];
      if (dataMap[postDate]) {
        dataMap[postDate].postCount += 1;
      }
    });

    return pastThirtyDays.map((date) => ({
      date,
      bookingCount: dataMap[date].bookingCount,
      postCount: dataMap[date].postCount,
    }));
  };

  return (
    <>
      {/* <Box
        sx={{
          padding: "20px",
          display: "inline-block",
          borderRadius: "4px",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
      >
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="bookingCount" fill="#8884d8" name="Flat Bookings" />
            <Bar dataKey="postCount" fill="#82ca9d" name="Flat Posts" />
          </BarChart>
        </ResponsiveContainer>
      </Box> */}

      <Box
        sx={{
          padding: "20px",
          borderRadius: "4px",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
      >
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="bookingCount" fill="#8884d8" name="Flat Bookings" />
            <Bar dataKey="postCount" fill="#82ca9d" name="Flat Posts" />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </>
  );
};

export default FlatPostChart;
