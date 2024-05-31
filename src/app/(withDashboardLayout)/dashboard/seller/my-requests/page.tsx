"use client";
import DataTable from "./components/DataTable";
import { useGetBookingFlatQuery } from "@/redux/api/bookingApi";

const MyRequest = () => {
  const { data, isLoading } = useGetBookingFlatQuery({});
  console.log("data", data);
  const res = data?.map((de: any) => ({
    id: de?.user?.email,
  }));
  console.log("res", res);
  return (
    <>
      <DataTable data={data} />
    </>
  );
};

export default MyRequest;
