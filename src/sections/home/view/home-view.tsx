"use client";

import React from "react";
import HomeCategorySection from "../home-category-section";
import HomeFlashSaleProductSection from "../home-flash-sale-product-section";
import HomeProductViewSection from "../home-product-list-section";
import HomeHeroSection from "../home-hero-section";
import HomeOfferSection from "../home-offer-section-view";
import { useGetHomeDataQuery } from "@/redux/reducers/product/productApi";
import { IProduct } from "@/types/product";
import ProductLoadingSection from "./section-loading";
import BestSellingProducts from "../home-best-selling-product";
import HomeNewArrivalProductSection from "../home-new-arrival-product-section";

const HomeView = () => {
  const { data, isFetching } = useGetHomeDataQuery();
  return (
    <div>
      <HomeHeroSection />
      <HomeCategorySection />
      {isFetching ? (
        <div>
          <ProductLoadingSection />
          <ProductLoadingSection />
          <ProductLoadingSection />
        </div>
      ) : (
        <div>
          <HomeFlashSaleProductSection
            isFetching={isFetching}
            products={data?.data?.flashSaleProducts as IProduct[]}
          />
          <BestSellingProducts
            isFetching={isFetching}
            products={data?.data?.bestSellingProduct as IProduct[]}
          />

          <HomeOfferSection
            isFetching={isFetching}
            products={data?.data?.offerProducts as IProduct[]}
          />

          <HomeNewArrivalProductSection
            isFetching={isFetching}
            products={data?.data?.newArrivalProducts as IProduct[]}
          />

          <HomeProductViewSection />
        </div>
      )}
    </div>
  );
};

export default HomeView;
