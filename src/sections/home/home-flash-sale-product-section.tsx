"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "@/layouts/common/product-card";
import ProductCardShimmer from "@/layouts/common/product-shimmer-card";
import { paths } from "@/layouts/paths";
import { IProduct } from "@/types/product";
import { Button, Typography } from "@mui/material";
import Link from "next/link";

interface Props {
  isFetching: boolean;
  products: IProduct[];
}

const HomeFlashSaleProductSection = ({ isFetching, products }: Props) => {
  // Timer state
  const [timeLeft, setTimeLeft] = useState<number>(3 * 24 * 60 * 60 * 1000); // 3 days in milliseconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => Math.max(prevTime - 1000, 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (ms: number) => {
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <div className="bg-gray-100 mt-11 md:mt-16 lg:mt-20 ">
      <section className="py-11 px-5 2xl:px-0 max-w-5xl mx-auto">
        <div className="flex flex-col items-center mb-6">
          <h2 className="text-2xl font-bold text-center">Flash Sale</h2>
          <div className="mt-3 flex space-x-2 text-center">
            <div className="bg-slate-800 text-white px-4 py-2 rounded">
              <p className="text-lg font-bold">{days}</p>
              <p className="text-sm">Days</p>
            </div>
            <div className="bg-slate-800 text-white px-4 py-2 rounded">
              <p className="text-lg font-bold">{hours}</p>
              <p className="text-sm">Hours</p>
            </div>
            <div className="bg-slate-800 text-white px-4 py-2 rounded">
              <p className="text-lg font-bold">{minutes}</p>
              <p className="text-sm">Minutes</p>
            </div>
            <div className="bg-slate-800 text-white px-4 py-2 rounded">
              <p className="text-lg font-bold">{seconds}</p>
              <p className="text-sm">Seconds</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {isFetching ? (
            // Loading shimmer effect
            Array.from({ length: 6 }).map((_, index) => (
              <ProductCardShimmer key={index} />
            ))
          ) : products.length === 0 ? (
            // No products message
            <Typography variant="h6" color="textSecondary" align="center">
              No products found
            </Typography>
          ) : (
            // Product cards
            products.map((product, idx) => (
              <ProductCard product={product} key={idx} />
            ))
          )}
        </div>

        <div className="flex items-center justify-center mt-7">
          <Link href={paths.product.flashSale}>
            <Button variant="contained" color="primary">
              All Flash Sale Products
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomeFlashSaleProductSection;
