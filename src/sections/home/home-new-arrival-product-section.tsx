"use client";

import { IProduct } from "@/types/product";
import { IconButton } from "@mui/material";
import React, { useRef } from "react";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { responsiveCarouselMultiSettings } from "@/components/slick-carousel";
import ProductCard from "@/layouts/common/product-card";
import ProductCardShimmer from "@/layouts/common/product-shimmer-card";
import { Button } from "@mui/material";
import Link from "next/link";
import { paths } from "@/layouts/paths";

interface Props {
  isFetching: boolean;
  products: IProduct[];
}

const HomeNewArrivalProductSection = ({ isFetching, products }: Props) => {
  const sliderRef = useRef<Slider>(null);

  const next = () => {
    if (sliderRef.current) sliderRef.current.slickNext();
  };

  const previous = () => {
    if (sliderRef.current) sliderRef.current.slickPrev();
  };

  return (
    <section className="px-5 xl:px-0 mt-11 md:mt-16 lg:mt-20" id="new">
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">New Arrival</h2>

          <div className="flex items-center gap-3">
            <div
              className={`bg-white rounded-full text-gray-700 hover:bg-green-100 hover:text-white border border-primary`}
              onClick={previous}
            >
              <IconButton>
                <IoIosArrowBack />
              </IconButton>
            </div>

            <div
              className={`bg-white rounded-full text-gray-700 hover:bg-green-100 hover:text-white border border-primary`}
              onClick={next}
            >
              <IconButton>
                <IoIosArrowForward />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="w-full mt-3">
          <Slider {...responsiveCarouselMultiSettings} ref={sliderRef}>
            {isFetching
              ? Array.from({ length: 6 }).map((_, index) => (
                  <ProductCardShimmer key={index} />
                ))
              : products.length === 0
              ? [
                  <div key="no-products" className="text-center py-8">
                    <p className="text-gray-500">No products found</p>
                  </div>,
                ]
              : products.map((product, idx) => (
                  <ProductCard product={product} key={idx} />
                ))}
          </Slider>
        </div>
        <div className="flex items-center justify-center mt-5">
          <Link href={`${paths.product.root}?isNewArrival=true`}>
            <Button variant="contained" color="primary">
              All New Arrival Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeNewArrivalProductSection;
