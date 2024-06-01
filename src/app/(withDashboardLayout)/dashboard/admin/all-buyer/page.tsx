'use client'
import { useGetAllBuyerQuery } from "@/redux/api/userApi";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Table, TableBody,
  TableCell, TableContainer, TableHead, TableRow
} from "@mui/material";
import { useState } from "react";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Link from "next/link";




const AllBuyerPage = () => {
  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  const { data: buyerData, isLoading } = useGetAllBuyerQuery({});
  // console.log("data",data);
  return (
    <>
      {
        isLoading ? "Loading..." :
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right">Role</TableCell>
                  <TableCell align="right">Status</TableCell>
                  <TableCell align="right">Profession</TableCell>
                  <TableCell align="right">Address</TableCell>
                  <TableCell align="center">Details</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {buyerData?.map((data: any) => (
                  <TableRow
                    key={data?.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {data?.userProfile?.name}
                    </TableCell>
                    <TableCell align="right">{data?.email}</TableCell>
                    <TableCell align="right">{data?.role}</TableCell>
                    <TableCell align="right">{data?.status}</TableCell>
                    <TableCell align="right">{data?.userProfile?.profession}</TableCell>
                    <TableCell align="right">{data?.userProfile?.address}</TableCell>
                    <TableCell align="center"><Link href={`/dashboard/admin/all-buyer/${data?.id}`}><Button variant="contained">Details</Button></Link></TableCell>
                   {/*  <TableCell align="right" sx={{paddingRight:'10px'}}>
                      <FormControl sx={{ m: 1, minWidth: 120 }} size="small" >
                        <InputLabel id="demo-select-small-label">Age</InputLabel>
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          value={age}
                          label="Age"
                          onChange={handleChange}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                    </TableCell> */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
      }
    </>
  );
};

export default AllBuyerPage;
