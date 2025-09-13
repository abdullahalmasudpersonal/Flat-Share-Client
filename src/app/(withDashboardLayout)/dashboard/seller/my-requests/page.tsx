"use client";
import { useGetAllBookingQuery } from "@/redux/api/bookingApi";
import FlatDataTable from "./components/FlatDataTable";

const MyRequest = () => {
  const { data, isLoading } = useGetAllBookingQuery({});
  return (
    <>
    <FlatDataTable/>
    </>
  );
};

export default MyRequest;
