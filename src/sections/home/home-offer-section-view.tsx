"use client";

import { IProduct } from "@/types/product";
import { Box, IconButton } from "@mui/material";
import React, { useRef } from "react";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { responsiveCarouselSettings } from "@/components/slick-carousel";
import Image from "next/image";

interface Props {
  isFetching: boolean;
  products: IProduct[];
}

const HomeOfferSection: React.FC<Props> = ({ products }) => {
  const sliderRef = useRef<Slider>(null);

  const next = () => {
    if (sliderRef.current) sliderRef.current.slickNext();
  };

  const previous = () => {
    if (sliderRef.current) sliderRef.current.slickPrev();
  };

  return (
    <section
      className="px-5 2xl:px-0 mt-11 md:mt-16 lg:mt-20 bg-gray-100 py-11"
      id="offer"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">
          Exclusive Offers
        </h2>
        <Box sx={{ position: "relative" }}>
          <div
            className={`absolute left-3 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow text-gray-700 hover:bg-gray-100 border`}
            onClick={previous}
          >
            <IconButton>
              <IoIosArrowBack />
            </IconButton>
          </div>

          {/* Next Button */}
          <div
            className={`absolute right-3 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow text-gray-700 hover:bg-gray-100`}
            onClick={next}
          >
            <IconButton>
              <IoIosArrowForward />
            </IconButton>
          </div>

          {/* Carousel */}
          <Slider {...responsiveCarouselSettings} ref={sliderRef}>
            {products.map((offer, index) => (
              <div className="group relative block" key={index}>
                <div className="relative h-[350px] sm:h-[450px] bg-white">
                  <Image
                    src={offer.images[0]}
                    alt=""
                    className="absolute inset-0 h-full w-full object-contain opacity-100 group-hover:opacity-0"
                    height={500}
                    width={500}
                  />

                  <Image
                    src={offer.images[1] || "https://via.placeholder.com/150"}
                    height={500}
                    width={500}
                    alt=""
                    className="absolute inset-0 h-full w-full object-contain opacity-0 group-hover:opacity-100"
                  />
                </div>

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6 bg-black bg-opacity-35">
                  <h3 className="text-xl font-medium text-white">
                    Skinny Jeans Blue
                  </h3>

                  <p className="mt-1.5 text-pretty text-xs text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dignissimos sequi dicta impedit aperiam ipsum!
                  </p>

                  <span className="mt-3 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                    Shop Now
                  </span>
                </div>
              </div>
            ))}
          </Slider>
        </Box>
      </div>
    </section>
  );
};

export default HomeOfferSection;
