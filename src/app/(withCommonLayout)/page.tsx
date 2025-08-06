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
          backgroundImage: `url(https://i.ibb.co.com/4JwdPbh/joel-filipe-j-U9-VAZDGMzs-unsplash.jpg)`,
          backgroundSize: 'cover', // ইমেজ পুরো ব্যাকগ্রাউন্ড কভার করবে
          backgroundPosition: 'center', // ইমেজ সেন্টারে থাকবে
          backgroundRepeat: 'no-repeat', // ইমেজ রিপিট হবে না
          // backgroundColor: 'pink', // ব্যাকআপ পারপেল কালার
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
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
            }}
          />
        </Box>

        <HeroSection />
        {/* No Problems */}
        <Searching />
      </Box >

      {/* No Problems */}
      < HomeFlat />
      {/* No Problems */}
      < WhyUseSpace />
      {/* No Problems */}
      < Counter />
      {/* No Problems */}
      < WhyChooseMe />
      {/* No Problems */}
      < SuccessStories />
      {/* No Problems */}
      < HomeGallery />
    </Box>
  );
};

export default HomePage;
