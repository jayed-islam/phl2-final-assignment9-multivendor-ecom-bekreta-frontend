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

const BestSellingProducts = ({ isFetching, products }: Props) => {
  return (
    <section className="px-5 2xl:px-0 max-w-5xl mx-auto pt-11  md:pt-16 lg:pt-20">
      <h2 className="text-2xl font-bold text-center mb-6">
        Best selling products
      </h2>
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
          <Button>All Best Selling Products</Button>
        </Link>
      </div>
    </section>
  );
};

export default BestSellingProducts;
