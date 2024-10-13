"use client";
import { useGetBookingFlatQuery } from "../../../../../redux/api/bookingApi";
import DataTable from "./components/DataTable";
import FlatDataTable from "./components/FlatDataTable";

const MyRequest = () => {
  const { data, isLoading } = useGetBookingFlatQuery({});
  return (
    <>
    {/*   <DataTable data={data} /> */}
    <FlatDataTable/>
    </>
  );
};

export default MyRequest;
