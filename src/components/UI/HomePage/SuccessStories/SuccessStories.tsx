"use client";
import { Box, Card, Container, Grid, Typography } from "@mui/material";
import { purple } from "@mui/material/colors";
import Image from "next/image";
import React, { useEffect } from "react";
import user from "../../../../assets/SuccesStories/user.png";
import user2 from "../../../../assets/SuccesStories/user2.png";
import user3 from "../../../../assets/SuccesStories/user3.png";
import Aos from "aos";
import "aos/dist/aos.css";

const SuccessStories = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const suc_stories = [
    { id: 1, img: user, name: 'Alexander', des: "Programming hero helps me a lot with my career like the team of this institute is very cooperative dedicated about their responsibility.", },
    { id: 2, img: user2, name: 'Matthew', des: "Admitting programming hero was one of the best decisions in my life. Their teaching technique is completely unique.", },
    { id: 3, img: user3, name: 'Santiago', des: "You can't finish talking about your course, brother. This is a wonderful course. It is a complete guideline for the career.", },
  ]

  return (
    <Container>
      <Box sx={{marginBottom:'100px'}}>
        <Typography
          data-aos="fade-up"
          textAlign="center"
          variant="h3"
          fontFamily="serif" mb={8}
          fontSize='clamp(2rem,8vw, 3rem)'
        >
          Success_{" "}
          <Box fontFamily="serif" component="span" sx={{ color: purple[600] }}>
            Stories
          </Box>
        </Typography>
        <Grid container spacing={2}>
          {
            suc_stories.map((item) => (
              <Grid item xs={12} md={4} key={item.id} data-aos="fade-down" >
                <Card sx={{ margin: "auto", height: '100%',boxShadow:'none' }}>
                  <Image
                    style={{
                      margin: '20px auto',
                      borderRadius: "50%",
                      boxShadow:
                        "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
                    }}
                    src={item.img}
                    height="140"
                    alt=""
                  />
                  <Typography textAlign={'center'}
                    color="purple"
                    fontWeight={700}
                    variant="h6"
                    fontFamily="serif"
                  >
                    {item.name}
                  </Typography>
                  <Typography fontFamily="serif" sx={{ padding: '20px', textAlign: 'center' }}>
                    {item.des}
                  </Typography>
                </Card>
              </Grid>
            ))
          }
        </Grid>
      </Box>
    </Container>
  );
};

export default SuccessStories;
