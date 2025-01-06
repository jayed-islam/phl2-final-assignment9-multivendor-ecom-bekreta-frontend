"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { Box, IconButton } from "@mui/material";

import banner1 from "../../../public/banner/banner-1.jpg";
import bannere from "../../../public/banner/banner-e.jpg";
import banner2 from "../../../public/banner/banner-2.jpg";
import banner3 from "../../../public/banner/banner-3.jpg";
import banner4 from "../../../public/banner/banner-4.jpg";
import banner5 from "../../../public/banner/banner.jpg";
import { homeHeroSetting } from "@/components/slick-carousel";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { paths } from "@/layouts/paths";

const HomeHeroSection = () => {
  const banners = [banner1, bannere, banner2, banner3, banner4, banner5];

  const sliderRef = useRef<Slider>(null);
  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div className="max-w-5xl mx-auto pt-5" id="hero">
      <Box
        sx={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          height: {
            xs: "auto",
            lg: "351px",
          },
          // height: 400,
        }}
      >
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
        <Slider {...homeHeroSetting} ref={sliderRef}>
          {banners.map((banner, idx) => (
            <Box
              key={idx}
              sx={{ width: "100%", height: "100%", bgcolor: "gray" }}
            >
              <Link href={paths.product.root} className="h-full">
                <Image
                  src={banner}
                  alt={`Banner ${idx + 1}`}
                  layout="responsive"
                  width={500}
                  height={500}
                  className="h-full"
                />
              </Link>
            </Box>
          ))}
        </Slider>
      </Box>
    </div>
  );
};

export default HomeHeroSection;
