import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import Searching from "@/components/UI/HomePage/Searching/Searching";
import Testimonials from "@/components/UI/Testimonials/Testimonials";
import CssBaseline from "@mui/material/CssBaseline";

const HomePage = () => {
  return (
    <>
      <CssBaseline />
      <HeroSection />
      <Searching />
      {/* <Testimonials /> */}
    </>
  );
};

export default HomePage;
