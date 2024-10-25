"use client";
import { useGetBookingFlatQuery } from "@/redux/api/bookingApi";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

const BookingChart = () => {
  const { data: bookingData } = useGetBookingFlatQuery({});

  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    if (bookingData) {
      console.log(bookingData);
      const lastSevenDaysData = getLastSevenDaysData(bookingData);
      setChartData(lastSevenDaysData);
    }
  }, [bookingData]);

  const getLastSevenDaysData = (data: any[]) => {
    const today = new Date();
    const pastSevenDays = [...Array(7)].map((_, i) => {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      return date.toISOString().split("T")[0]; // YYYY-MM-DD ফরম্যাটে দিন
    });

    const dataMap: { [key: string]: number } = {};
    pastSevenDays.forEach((date) => {
      dataMap[date] = 0; // প্রতিটি দিনের জন্য 0 সেট করা
    });

    data.forEach((entry) => {
      const bookingDate = new Date(entry.createdAt).toISOString().split("T")[0]; // 'createdAt' থেকে তারিখ বের করুন
      if (dataMap[bookingDate] !== undefined) {
        dataMap[bookingDate] += 1; // যদি একটি বুকিং হয় তবে সংখ্যা 1 বৃদ্ধি
      }
    });

    return pastSevenDays.map((date) => ({
      date,
      count: dataMap[date],
    }));
  };

  return (
    <>
      <Typography variant="h6">Last 7 Days Booking Data</Typography>
      <BarChart width={500} height={300} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    </>
  );
};

export default BookingChart;
