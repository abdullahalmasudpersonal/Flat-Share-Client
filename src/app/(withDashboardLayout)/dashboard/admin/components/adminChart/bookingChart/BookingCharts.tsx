"use client";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { subDays, format } from "date-fns";
import { useGetAllBookingQuery } from "@/redux/api/bookingApi";

const BookingCharts = () => {
  const { data: bookingData } = useGetAllBookingQuery({});
  const [chartData, setChartData] = useState<any[]>([]);

  // useEffect(() => {
  //   if (bookingData) {
  //     console.log(bookingData);
  //     const lastSevenDaysData = getLastSevenDaysData(bookingData);
  //     setChartData(lastSevenDaysData);
  //   }
  // }, [bookingData]);

  // const getLastSevenDaysData = (data: any[]) => {
  //   const today = new Date();
  //   const pastSevenDays = [...Array(7)].map((_, i) => {
  //     const date = new Date(today);
  //     date.setDate(today.getDate() - i);
  //     return date.toISOString().split("T")[0]; // YYYY-MM-DD ফরম্যাটে দিন
  //   });

  //   const dataMap: { [key: string]: number } = {};
  //   pastSevenDays.forEach((date) => {
  //     dataMap[date] = 0; // প্রতিটি দিনের জন্য 0 সেট করা
  //   });

  //   data.forEach((entry) => {
  //     const bookingDate = new Date(entry.createdAt).toISOString().split("T")[0]; // 'createdAt' থেকে তারিখ বের করুন
  //     if (dataMap[bookingDate] !== undefined) {
  //       dataMap[bookingDate] += 1; // যদি একটি বুকিং হয় তবে সংখ্যা 1 বৃদ্ধি
  //     }
  //   });

  //   return pastSevenDays.map((date) => ({
  //     date,
  //     count: dataMap[date],
  //   }));
  // };

  // const last30Days = Array.from({ length: 30 }, (_, i) => {
  //   const date = subDays(new Date(), i);
  //   return format(date, "yyyy-MM-dd");
  // }).reverse();
  // const chartData = last30Days.map(date => {
  //   const bookingsForDate = bookingData?.filter((booking:any) =>
  //     format(new Date(booking.createdAt), "yyyy-MM-dd") === date
  //   );
  //   return {
  //     date,
  //     count: bookingsForDate?.length || 0
  //   };
  // });

  useEffect(() => {
    if (bookingData) {
      const today = new Date();
      const pastThirtyDays = [...Array(30)].map((_, i) => {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        return date.toISOString().split("T")[0]; 
      });

      const dataMap: { [key: string]: number } = {};
      pastThirtyDays.forEach((date) => {
        dataMap[date] = 0; 
      });

      bookingData.forEach((entry: { createdAt: string | number | Date }) => {
        const bookingDate = new Date(entry.createdAt)
          .toISOString()
          .split("T")[0];
        if (dataMap[bookingDate] !== undefined) {
          dataMap[bookingDate] += 1; 
        }
      });

      const formattedData = pastThirtyDays.map((date) => ({
        date,
        count: dataMap[date],
      }));

      setChartData(formattedData);
    }
  }, [bookingData]);

  return (
    <Box>
      <Box
        sx={{
          background:
            "linear-gradient(90deg, rgba(251,246,255,1) 0%, rgba(246,246,255,1) 47%, rgba(252,245,255,1) 100%)",
          padding: "20px 20px 10px 0",
          display: "inline-block",
          borderRadius: "4px",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          width: "100%",
        }}
      >
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default BookingCharts;
