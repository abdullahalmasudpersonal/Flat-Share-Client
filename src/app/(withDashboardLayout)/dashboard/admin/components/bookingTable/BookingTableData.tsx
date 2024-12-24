import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

const BookingTableData = () => {
  // ডামি বুকিং ডেটা (আপনার প্রকৃত ডেটার সাথে মেলাতে এখানে পরিবর্তন করতে পারেন)
  const bookings = [
    { id: 1, date: "2024-10-20", name: "John Doe", status: "Pending" },
    { id: 2, date: "2024-10-21", name: "Jane Smith", status: "Confirmed" },
    // আরও বুকিং ডেটা যোগ করুন
  ];

  return (
    <TableContainer component={Paper}>
      <Typography variant="h6" align="center" gutterBottom>
        Last 7 days booking request
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>তারিখ</TableCell>
            <TableCell>নাম</TableCell>
            <TableCell>স্ট্যাটাস</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookings.map((booking) => (
            <TableRow key={booking.id}>
              <TableCell>{booking.date}</TableCell>
              <TableCell>{booking.name}</TableCell>
              <TableCell>{booking.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BookingTableData;
