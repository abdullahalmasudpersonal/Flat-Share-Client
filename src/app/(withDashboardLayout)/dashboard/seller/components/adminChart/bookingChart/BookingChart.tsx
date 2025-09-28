"use client";
import { Box, Typography } from "@mui/material";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const BookingChart = () => {
    const days = Array.from({ length: 14 }, (_, i) => `Day ${i + 1}`);
    const bookings = Array.from({ length: 14 }, () =>
        Math.floor(Math.random() * 50) + 10
    );

    const options: ApexCharts.ApexOptions = {
        chart: {
            type: "area",
            // height: 350,
            toolbar: { show: false },
            zoom: { enabled: false },
        },
        stroke: {
            curve: "smooth",
            width: 2,
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            categories: days,
            labels: {
                rotate: -45,
                style: { fontSize: "12px" },
            },
            title: { text: "Last 14 Days" },
        },
        yaxis: {
            title: { text: "Bookings" },
            labels: {
                formatter: (val) => `${val}`,
            },
        },
        tooltip: {
            theme: "dark",
            x: { show: true },
            y: {
                formatter: (val: number) => `${val} Bookings`,
            },
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.4,
                opacityTo: 0,
                stops: [0, 90, 100],
                colorStops: [
                    {
                        offset: 0,
                        color: "#1677ff", // Ant Design primary blue
                        opacity: 0.4,
                    },
                    {
                        offset: 100,
                        color: "#1677ff",
                        opacity: 0,
                    },
                ],
            },
        },
        colors: ["#1677ff"], // Line color
        grid: {
            borderColor: "#f0f0f0",
            strokeDashArray: 4,
        },
    };

    const series = [
        {
            name: "Booking",
            data: bookings,
        },
    ];

    return (
        <Box sx={{ padding: '20px', background: 'white', borderRadius: "4px", }}>
            <Typography style={{ marginBottom: "0px", fontWeight: '600', fontSize: '18px' }}>Recent Booking</Typography>
            <ReactApexChart
                options={options}
                series={series}
                type="area"
            />
        </Box>
    );
};

export default BookingChart;