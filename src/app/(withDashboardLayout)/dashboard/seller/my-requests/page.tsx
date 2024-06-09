"use client";
import { useGetBookingFlatQuery } from "../../../../../redux/api/bookingApi";
import DataTable from "./components/DataTable";

const MyRequest = () => {
  const { data, isLoading } = useGetBookingFlatQuery({});
  return (
    <>
      <DataTable data={data} />
    </>
  );
};

export default MyRequest;
