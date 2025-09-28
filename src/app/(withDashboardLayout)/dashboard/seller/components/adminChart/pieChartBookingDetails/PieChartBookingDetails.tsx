
import { useGetAllBookingQuery } from '@/redux/api/bookingApi';
import { useGetAllFlatQuery } from '@/redux/api/flatApi';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const PieChartBookingDetails = () => {
    const { data: bookingData } = useGetAllBookingQuery({});
    const { data: flatData } = useGetAllFlatQuery({});
    const [chartData, setChartData] = useState<any[]>([]);

    useEffect(() => {
        if (bookingData && flatData) {
          const lastThirtyDaysData = getLastThirtyDaysData(bookingData, flatData);
          setChartData(lastThirtyDaysData);
        }
      }, [bookingData, flatData]);
    
      const getLastThirtyDaysData = (bookingData: any[], postData: any[]) => {
        const today = new Date();
        const pastThirtyDays = [...Array(30)].map((_, i) => {
          const date = new Date(today);
          date.setDate(today.getDate() - i);
          return date.toISOString().split("T")[0];
        });
    
        const dataMap: { [key: string]: { bookingCount: number, confirmedCount: number, paymentCount: number } } = {};
        pastThirtyDays.forEach((date) => {
          dataMap[date] = { bookingCount: 0, confirmedCount: 0, paymentCount: 0 };
        });
    
        bookingData.forEach((entry) => {
          const bookingDate = new Date(entry.createdAt).toISOString().split("T")[0];
          if (dataMap[bookingDate]) {
            dataMap[bookingDate].bookingCount += 1;
            if (entry.status === "BOOKED") {
              dataMap[bookingDate].confirmedCount += 1;
            }
            if (entry.paymentStatus === "PAID") {
              dataMap[bookingDate].paymentCount += 1;
            }
          }
        });
    
        // পোস্ট করা ফ্ল্যাটের সংখ্যা
        const postCountMap: { [key: string]: number } = {};
        postData.forEach((entry) => {
          const postDate = new Date(entry.createdAt).toISOString().split("T")[0];
          if (postCountMap[postDate]) {
            postCountMap[postDate] += 1;
          } else {
            postCountMap[postDate] = 1;
          }
        });
    
        // মোট সংখ্যাগুলি গণনা করুন
        const totalCounts = {
          bookingCount: 0,
          confirmedCount: 0,
          paymentCount: 0,
          postCount: 0,
        };
    
        pastThirtyDays.forEach((date) => {
          totalCounts.bookingCount += dataMap[date].bookingCount;
          totalCounts.confirmedCount += dataMap[date].confirmedCount;
          totalCounts.paymentCount += dataMap[date].paymentCount;
          totalCounts.postCount += postCountMap[date] || 0; // পোস্টের সংখ্যা যোগ করা
        });
    
        return [
          { name: "Total Bookings", value: totalCounts.bookingCount },
          { name: "Confirmed Bookings", value: totalCounts.confirmedCount },
          { name: "Payment Bookings", value: totalCounts.paymentCount },
          { name: "Total Posts", value: totalCounts.postCount }, // পোস্ট সংখ্যা
        ];
      };
    

    return (
        <Box sx={{ padding: "20px", borderRadius: "4px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Tooltip />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </Box>
    );
};

export default PieChartBookingDetails;