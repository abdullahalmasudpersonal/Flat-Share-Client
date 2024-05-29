"use client";
import { useGetSingleFlatQuery } from "@/redux/api/flatApi";
import { Box, CardMedia, Container, Grid } from "@mui/material";
import Image from "next/image";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

type TParams = {
  params: {
    id: string;
  };
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const FlatDetailPage = ({ params }: TParams) => {
  const id = params?.id;
  const { data, isLoading } = useGetSingleFlatQuery(id);
  // console.log(useGetSingleFlatQuery(id));
  return (

    <Box marginTop='120px' marginBottom='120px'>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container  spacing={{ xs: 1, sm: 2, md: 4 }} columns={16} direction={{ xs: 'column', sm: 'row' }} >
            <Grid item xs={8}>
            <CardMedia
                component="img"
                height="194"
                image={data?.flatPhoto}
                alt="Paella dish"
              />
            </Grid>
            <Grid item xs={8}>
              <Item>xs=8</Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
      {/*   <Container >
        <Box>
          <Grid>
            <Grid >
              <CardMedia
                component="img"
                height="194"
                image={data?.flatPhoto}
                alt="Paella dish"
              />
            </Grid>
            <Grid></Grid>
          </Grid>
        </Box>
      </Container> */}
    </Box>
  );
};

export default FlatDetailPage;
