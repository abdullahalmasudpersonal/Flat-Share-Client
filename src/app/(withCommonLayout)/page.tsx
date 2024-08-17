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
      <Searching />

        <HomeFlat />
      <Counter />
      <WhyChooseMe />
      <WhyUseSpace />
      <SuccessStories />
    </>
  );
};

export default HomePage;
