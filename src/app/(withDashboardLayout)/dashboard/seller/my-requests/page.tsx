"use client";
import { useGetBookingFlatQuery } from "../../../../../redux/api/bookingApi";
import FlatDataTable from "./components/FlatDataTable";

const MyRequest = () => {
  const { data, isLoading } = useGetBookingFlatQuery({});
  return (
    <>
    <FlatDataTable/>
    </>
  );
};

export default MyRequest;
