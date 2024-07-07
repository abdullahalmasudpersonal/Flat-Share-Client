"use client";
import {
  useGetSingleFlatQuery,
  useUpdateFlatMutation,
} from "@/redux/api/flatApi";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import FlatAccordian from "../components/FlatAccordion";
import UpdateFlatModal from "../components/UpdateFlatModal";
import AutoFileUploader from "@/components/Forms/AutoFileUploader";

type TParams = {
  params: {
    id: string;
  };
};

const StyledInformationBox = styled(Box)(({ theme }) => ({
  background: "#f4f7fe",
  borderRadius: theme.spacing(1),
  width: "45%",
  padding: "8px 16px",
  "& p": {
    fontWeight: 600,
  },
}));

const MyFlatDetailPage = ({ params }: TParams) => {
  const id = params?.id;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: flatDetail, isLoading } = useGetSingleFlatQuery(id);
  const [updateFlat, { isLoading: updating }] = useUpdateFlatMutation();

  // const fileUploadHandler = (file: File) => {
  //   const formData = new FormData();
  //   formData.append("file", file);
  //   formData.append("data", JSON.stringify({}));
  //   updateFlat({ formData, id });
  // };

  if (isLoading) {
    <p>Loading...</p>;
  }

  return (
    <>
      <UpdateFlatModal open={isModalOpen} setOpen={setIsModalOpen} id={id} />
      <Box display="flex" alignItems="center">
        <Box width="90%">
          <Typography
            textAlign="center"
            variant="h5"
            color="purple"
            fontWeight="600"
            fontFamily="shorif"
          >
            Flat Details
          </Typography>
        </Box>
        <Button variant="contained" onClick={() => setIsModalOpen(true)}>
          Update
        </Button>
      </Box>

      <Container sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          <Grid xs={12} md={4} padding="16px">
            <Box
              sx={{
                height: 300,
                width: "100%",
                overflow: "hidden",
                borderRadius: 1,
                boxShadow:
                  "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
              }}
            >
              {flatDetail?.flatPhoto ? (
                <Image
                  height={300}
                  width={400}
                  src={flatDetail?.flatPhoto}
                  alt="User Photo"
                />
              ) : (
                ""
              )}
            </Box>
            {/*    <Box my={3} display="flex" justifyContent="center">
              {updating ? (
                <p>Uploading...</p>
              ) : (
                <AutoFileUploader
                  name="file"
                  label="Choose Your Flat Photo"
                  icon={<CloudUploadIcon />}
                  onFileUpload={fileUploadHandler}
                  variant="outlined"
                />
              )}
            </Box> */}
          </Grid>
          <Grid xs={12} md={8} padding="16px">
            <Stack
              direction={{ xs: "column", md: "row" }}
              gap={2}
              flexWrap={"wrap"}
            >
              <StyledInformationBox>
                <Typography color="secondary" variant="caption">
                  Flat Name
                </Typography>
                <Typography>{flatDetail?.flatName}</Typography>
              </StyledInformationBox>
              <StyledInformationBox>
                <Typography color="secondary" variant="caption">
                  Availablety
                </Typography>
                <Typography>
                  {flatDetail?.availability ? (
                    <>
                      {"Yes"}&nbsp;
                      <CheckCircleIcon
                        fontSize="small"
                        sx={{ color: "green" }}
                      />
                    </>
                  ) : (
                    <>
                      {"No"}&nbsp;
                      <DoNotDisturbIcon
                        fontSize="small"
                        sx={{ color: "red" }}
                      />
                    </>
                  )}
                </Typography>
              </StyledInformationBox>
              <StyledInformationBox>
                <Typography color="secondary" variant="caption">
                  Address
                </Typography>
                <Typography>{flatDetail?.location}</Typography>
              </StyledInformationBox>
              <StyledInformationBox>
                <Typography color="secondary" variant="caption">
                  Squire Feet
                </Typography>
                <Typography>{flatDetail?.squareFeet}</Typography>
              </StyledInformationBox>
              <StyledInformationBox>
                <Typography color="secondary" variant="caption">
                  Total Bad Room
                </Typography>
                <Typography>{flatDetail?.totalBedrooms}</Typography>
              </StyledInformationBox>
              <StyledInformationBox>
                <Typography color="secondary" variant="caption">
                  Total Room
                </Typography>
                <Typography>{flatDetail?.totalRooms}</Typography>
              </StyledInformationBox>

              <StyledInformationBox>
                <Typography color="secondary" variant="caption">
                  Rent
                </Typography>
                <Typography>{flatDetail?.rent}</Typography>
              </StyledInformationBox>
              <StyledInformationBox>
                <Typography color="secondary" variant="caption">
                  Advance Amount
                </Typography>
                <Typography>{flatDetail?.advanceAmount}</Typography>
              </StyledInformationBox>
            </Stack>
            <Box mt="20px">
              {" "}
              <FlatAccordian data={flatDetail} />{" "}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default MyFlatDetailPage;
