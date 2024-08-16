import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', daily: 30, weekly: 210, monthly: 900, yearly: 10800, total: 10800 },
    { name: 'Feb', daily: 28, weekly: 196, monthly: 784, yearly: 9408, total: 20208 },
    // অন্যান্য মাসের ডেটা
];

const BookingChart = () => (
    <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="daily" stroke="#8884d8" />
            <Line type="monotone" dataKey="weekly" stroke="#82ca9d" />
            <Line type="monotone" dataKey="monthly" stroke="#ffc658" />
            <Line type="monotone" dataKey="yearly" stroke="#ff7300" />
            <Line type="monotone" dataKey="total" stroke="#000000" />
        </LineChart>
    </ResponsiveContainer>
);

export default BookingChart;
