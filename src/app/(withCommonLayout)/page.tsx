import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import HomeFlat from "@/components/UI/HomePage/HomeFlat/HomeFlat";
import Searching from "@/components/UI/HomePage/Searching/Searching";
import Testimonials from "@/components/UI/HomePage/Testimonials/Testimonials";
import WhyUseSpace from "@/components/UI/HomePage/WhyUseSpace/WhyUseSpace";
import CssBaseline from "@mui/material/CssBaseline";

const HomePage = async () => {
  return (
    <>
      {/*  <CssBaseline /> */}
      <HeroSection />
      <Searching />
      <HomeFlat />
      <WhyUseSpace />
      {/* <Testimonials /> */}
    </>
  );
};

export default HomePage;
