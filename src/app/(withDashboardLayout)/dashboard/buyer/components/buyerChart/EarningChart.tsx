"use client";
import { Box, Typography } from "@mui/material";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const EarningChart = () => {
    const options = {
        chart: {
            type: "bar" as const,
            // stacked: false,
            toolbar: { show: false },
        },
        // plotOptions: {
        //   bar: {
        //     horizontal: false,
        //     columnWidth: "50%",
        //     endingShape: "rounded",
        //   },
        // },
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
        },
        dataLabels: {
            enabled: false,
        },
        colors: ["#3B82F6", "#A5B4FC"],
        legend: {
            show: true,
            fontSize: "14px",
        },
        grid: {
            borderColor: "#f1f1f1ff",
        },
        tooltip: {
            y: {
                formatter: (val: number) => `$${val.toLocaleString()}`,
            },
        },
    };

    const series = [
        {
            name: "Revenue",
            data: [37000, 20000, 30000, 25000, 50000, 40000, 15000, 25000],
        },
        {
            name: "Expenditure",
            data: [28000, 15000, 22000, 18000, 40000, 30000, 10000, 20000],
        },
    ];

    return (
        <Box sx={{ padding: '20px', background: 'white', borderRadius: "4px", }}>
            <Typography style={{ marginBottom: "0px", fontWeight: '600', fontSize: '18px' }}>Expenditure</Typography>
            <ReactApexChart
                options={options}
                series={series}
                type="bar"
            />
        </Box>
    );
};

export default EarningChart;