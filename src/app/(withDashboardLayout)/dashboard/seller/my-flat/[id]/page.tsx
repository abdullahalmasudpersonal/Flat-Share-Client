"use client";
import { useGetSingleFlatQuery } from "@/redux/api/flatApi";
import { Box, Typography } from "@mui/material";

type TParams = {
  params: {
    id: string;
  };
};
const BuyerFlatDetails = ({ params }: TParams) => {
  const id = params?.id;
  const { data: flatData, refetch } = useGetSingleFlatQuery(id);

  return (
    <Box sx={{ marginTop: '20px', background: 'rgb(36, 12, 73)', borderRadius: '2px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
      <Box sx={{ padding: '15px', borderBottom: '1px solid gray' }}>
        <Typography sx={{ color: 'white', fontWeight: '500', fontSize: '15px' }}>View Flat</Typography>
      </Box>
    </Box>
  );
};

export default BuyerFlatDetails;
