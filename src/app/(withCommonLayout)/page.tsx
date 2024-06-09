import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import HomeFlat from "@/components/UI/HomePage/HomeFlat/HomeFlat";
import Searching from "@/components/UI/HomePage/Searching/Searching";
import SuccessStories from "@/components/UI/HomePage/SuccessStories/SuccessStories";
import WhyUseSpace from "@/components/UI/HomePage/WhyUseSpace/WhyUseSpace";

const HomePage = async () => {
  return (
    <>
      <HeroSection />
      <Searching />
      <HomeFlat />
      <WhyUseSpace />
      <SuccessStories />
    </>
  );
};

export default HomePage;
