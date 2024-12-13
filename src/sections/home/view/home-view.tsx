import React from "react";
import HomeCategorySection from "../home-category-section";
import HomeFlashSaleProductSection from "../home-flash-sale-product-section";
import HomeProductViewSection from "../home-product-list-section";
import HomeHeroSection from "../home-hero-section";

const HomeView = () => {
  return (
    <div>
      <HomeHeroSection />
      <HomeCategorySection />
      <HomeFlashSaleProductSection />
      <HomeProductViewSection />
    </div>
  );
};

export default HomeView;
