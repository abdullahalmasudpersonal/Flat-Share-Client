import Counter from "@/components/UI/HomePage/Counter/Counter";
import HeroSection from "../../components/UI/HomePage/HeroSection/HeroSection";
import HomeFlat from "../../components/UI/HomePage/HomeFlat/HomeFlat";
import Searching from "../../components/UI/HomePage/Searching/Searching";
import SuccessStories from "../../components/UI/HomePage/SuccessStories/SuccessStories";
import WhyUseSpace from "../../components/UI/HomePage/WhyUseSpace/WhyUseSpace";
import WhyChooseMe from "@/components/UI/HomePage/WhyChooseMe/WhyChooseMe";
import { Box } from "@mui/material";
import backgroundImag from '../../assets/landing_page/atm-card.png';
import HomeGallery from "@/components/UI/HomePage/HomeGallery/HomeGallery";
import Welcome from "@/components/UI/HomePage/Welcome/Welcome";

const HomePage = async () => {
  const images = [
    'https://i.ibb.co/4JwdPbh/joel-filipe-j-U9-VAZDGMzs-unsplash.jpg',
    'https://i.ibb.co/2d4rGz8/nature-image-2.jpg',
    'https://i.ibb.co/fMh7Ps3/nature-image-3.jpg',
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };


  return (
    <Box>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '600px',
          backgroundImage: `url(https://i.ibb.co.com/4JwdPbh/joel-filipe-j-U9-VAZDGMzs-unsplash.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'gray'
        }}
      >
        <Box>
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.3)',

            }}
          />
        </Box>
        <HeroSection />
        <Searching />
      </Box >
      <WhyUseSpace />
      <HomeFlat />
      <Counter />
      <WhyChooseMe />
      <SuccessStories />
       <Welcome />
    </Box>
  );
};

export default HomePage;
