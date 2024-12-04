import React from "react";
import HomeHeroSection from "../home-hero-section";
import HomeCategorySection from "../home-category-section";
import HomeNewQuestoinSection from "../home-new-questions-section";

const HomeView = () => {
  return (
    <div>
      <HomeHeroSection />
      <HomeCategorySection />
      <HomeNewQuestoinSection />
    </div>
  );
};

export default HomeView;
