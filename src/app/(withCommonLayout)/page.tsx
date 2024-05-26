import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import HomeFlat from "@/components/UI/HomePage/HomeFlat/HomeFlat";
import Searching from "@/components/UI/HomePage/Searching/Searching";
import Testimonials from "@/components/UI/HomePage/Testimonials/Testimonials";
import CssBaseline from "@mui/material/CssBaseline";

const HomePage = () => {
  return (
    <>
      <CssBaseline />
      <HeroSection />
      <Searching />
      <HomeFlat />
      {/* <Testimonials /> */}
    </>
  );
};

export default HomePage;
