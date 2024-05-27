import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import HomeFlat from "@/components/UI/HomePage/HomeFlat/HomeFlat";
import Searching from "@/components/UI/HomePage/Searching/Searching";
import Testimonials from "@/components/UI/HomePage/Testimonials/Testimonials";
import CssBaseline from "@mui/material/CssBaseline";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/api/v1/flat");
  const { data: flats } = await res.json();
 // console.log(flats);
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
