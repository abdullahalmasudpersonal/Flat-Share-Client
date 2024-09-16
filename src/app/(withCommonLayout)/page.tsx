import Counter from "@/components/UI/HomePage/Counter/Counter";
import HeroSection from "../../components/UI/HomePage/HeroSection/HeroSection";
import HomeFlat from "../../components/UI/HomePage/HomeFlat/HomeFlat";
import Searching from "../../components/UI/HomePage/Searching/Searching";
import SuccessStories from "../../components/UI/HomePage/SuccessStories/SuccessStories";
import WhyUseSpace from "../../components/UI/HomePage/WhyUseSpace/WhyUseSpace";
import WhyChooseMe from "@/components/UI/HomePage/WhyChooseMe/WhyChooseMe";
import { Box } from "@mui/material";

const HomePage = async () => {
  return (
    <>
      <HeroSection />
      {/* No Problems */}
      <Searching />
      {/* No Problems */}
      <HomeFlat />
      {/* No Problems */}
      <WhyUseSpace />
      {/* No Problems */}
      <Counter />
      {/* No Problems */}
      <WhyChooseMe />
      {/* No Problems */}
      <SuccessStories />
    </>
  );
};

export default HomePage;
