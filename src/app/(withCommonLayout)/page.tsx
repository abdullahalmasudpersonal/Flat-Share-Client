import Counter from "@/components/UI/HomePage/Counter/Counter";
import HeroSection from "../../components/UI/HomePage/HeroSection/HeroSection";
import HomeFlat from "../../components/UI/HomePage/HomeFlat/HomeFlat";
import Searching from "../../components/UI/HomePage/Searching/Searching";
import SuccessStories from "../../components/UI/HomePage/SuccessStories/SuccessStories";
import WhyUseSpace from "../../components/UI/HomePage/WhyUseSpace/WhyUseSpace";
import WhyChooseMe from "@/components/UI/HomePage/WhyChooseMe/WhyChooseMe";
import { Box } from "@mui/material";
import backgroundImag from '../../assets/landing_page/atm-card.png';

const HomePage = async () => {
  return (
    <Box sx={{ backgroundColor: '#fbeaff' }}>
      <Box /* sx={{
        width: '100%',
        backgroundImage: `url(https://plus.unsplash.com/premium_photo-1670445490954-5fe846fbce07?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        backgroundSize: 'cover', // ইমেজ পুরো ব্যাকগ্রাউন্ড কভার করবে
        backgroundPosition: 'center', // ইমেজ সেন্টারে থাকবে
        backgroundRepeat: 'no-repeat', // ইমেজ রিপিট হবে না
        backgroundColor: '#800080', // ব্যাকআপ পারপেল কালার
        animation: 'slideBackground 10s infinite linear',
        '@keyframes slideBackground': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      }} */

        sx={{
          width: '100%',
          backgroundImage: `url(https://plus.unsplash.com/premium_photo-1670445490954-5fe846fbce07?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#800080',
          animation: 'slideBackground 10s infinite linear',
          '@keyframes slideBackground': {
            '0%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
            '100%': { backgroundPosition: '0% 50%' },
          },
        }}

      >
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
    </Box>
  );
};

export default HomePage;
