"use client";
import DataTable from "./components/DataTable";
import { useGetBookingFlatQuery } from "@/redux/api/bookingApi";

const MyRequest = () => {
  const { data, isLoading } = useGetBookingFlatQuery({});
  return (
    <>
      <DataTable data={data} />
    </>
  );
};

export default MyRequest;
