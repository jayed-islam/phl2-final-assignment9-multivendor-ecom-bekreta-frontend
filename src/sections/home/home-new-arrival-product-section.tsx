"use client";

import ProductCard from "@/layouts/common/product-card";
import ProductCardShimmer from "@/layouts/common/product-shimmer-card";
import { paths } from "@/layouts/paths";
import { IProduct } from "@/types/product";
import { Button, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

interface Props {
  isFetching: boolean;
  products: IProduct[];
}

const HomeNewArrivalProductSection = ({ isFetching, products }: Props) => {
  return (
    <section className="px-5 2xl:px-0 max-w-7xl mx-auto pt-11 md:pt-16 lg:pt-20">
      <h2 className="text-2xl font-bold text-center mb-6">New Arrival Items</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Products */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-4">
          {isFetching
            ? Array.from({ length: 4 }).map((_, index) => (
                <ProductCardShimmer key={index} />
              ))
            : products
                .slice(0, 4)
                .map((product, idx) => (
                  <ProductCard product={product} key={idx} />
                ))}
        </div>

        {/* Center Product (Highlighted) */}
        <div className="col-span-1">
          {isFetching ? (
            <ProductCardShimmer />
          ) : products[4] ? (
            <div className="transform scale-105 shadow-lg">
              <ProductCard product={products[4]} />
            </div>
          ) : (
            <Typography variant="h6" color="textSecondary" align="center">
              No featured product
            </Typography>
          )}
        </div>

        {/* Right Products */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-4">
          {isFetching
            ? Array.from({ length: 4 }).map((_, index) => (
                <ProductCardShimmer key={index} />
              ))
            : products
                .slice(5, 9)
                .map((product, idx) => (
                  <ProductCard product={product} key={idx} />
                ))}
        </div>
      </div>

      <div className="flex items-center justify-center mt-7">
        <Link href={paths.product.flashSale}>
          <Button variant="contained" color="primary">
            All New Arrival Products
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default HomeNewArrivalProductSection;
