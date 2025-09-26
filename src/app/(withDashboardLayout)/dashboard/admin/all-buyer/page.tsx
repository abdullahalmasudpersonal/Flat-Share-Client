"use client";
import {
  Avatar,
  IconButton,
  Paper,
  Skeleton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Link from "next/link";
import { useGetAllBuyerQuery } from "../../../../../redux/api/buyerApi";
import { TBuyer } from "@/types/buyer.types";
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from "@mui/icons-material/Edit";
import { formatLocalDate } from "@/components/Shared/Date&Time/Date";

const AllBuyerPage = () => {
  const { data: buyerlist, isLoading } = useGetAllBuyerQuery({});

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell colSpan={8} sx={{ fontWeight: "bold", fontSize: "18px", }} >All Buyer ({buyerlist?.length})</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Profession</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>Bio</TableCell>
              <TableCell>Join Us</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading ? (
              [...Array(5)].map((_, index) => (
                <TableRow key={index}>
                  <TableCell><Skeleton variant="text" width={100} /></TableCell>
                  <TableCell><Skeleton variant="text" width={120} /></TableCell>
                  <TableCell><Skeleton variant="text" width={100} /></TableCell>
                  <TableCell><Skeleton variant="text" width={80} /></TableCell>
                  <TableCell><Skeleton variant="text" width={80} /></TableCell>
                  <TableCell><Skeleton variant="text" width={60} /></TableCell>
                  <TableCell><Skeleton variant="text" width={60} /></TableCell>
                  <TableCell><Skeleton variant="text" width={60} /></TableCell>
                </TableRow>
              ))
            ) :
              buyerlist && buyerlist.length > 0 ? buyerlist?.map((data: TBuyer) => (
                <TableRow key={data?.id} >
                  <TableCell sx={{ display: 'flex', alignItems: 'center', gap: '5px' }} ><Avatar style={{ width: '50px', height: '50px', borderRadius: '50%', border: '2px solid gray' }} src={data.profilePhoto || ''} alt="Buyer Image" />{data?.name}</TableCell>
                  <TableCell>{data?.email}</TableCell>
                  <TableCell>{data?.profession}</TableCell>
                  <TableCell>{data?.address}</TableCell>
                  <TableCell>{data?.contactNumber}</TableCell>
                  <TableCell>{data?.bio}</TableCell>
                  <TableCell>{formatLocalDate(data.createdAt)}</TableCell>
                  <TableCell align="center">
                    <Stack direction="row" spacing={1} justifyContent="center">
                      <Link href={`/dashboard/admin/all-buyer/${data?.id}`}>
                        <IconButton aria-label="view user" color="info">
                          <VisibilityIcon />
                        </IconButton>
                      </Link>
                      <IconButton aria-label="edit user" color="success">
                        <EditIcon />
                      </IconButton>
                      <IconButton aria-label="delete user" color="error">
                        <DeleteIcon />
                      </IconButton>
                    </Stack>
                  </TableCell>
                </TableRow>
              )) :
                <TableRow>
                  <TableCell colSpan={8} align="center">
                    No Buyer Data
                  </TableCell>
                </TableRow>
            }
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default AllBuyerPage;
