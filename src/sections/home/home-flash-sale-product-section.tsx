"use client";

import ProductCard from "@/layouts/common/product-card";
import { useGetFlashSaleProductsQuery } from "@/redux/reducers/product/productApi";
import React from "react";

const HomeFlashSaleProductSection = () => {
  const { data: flashSaleProducts, isLoading } = useGetFlashSaleProductsQuery();

  // Use `flashSaleProducts` instead of `fakeProducts` when rendering the ProductCards.

  const fakeProducts = [
    {
      id: 1,
      title: "Football Shoes",
      price: 49.99,
      image: "https://via.placeholder.com/300x200?text=Football+Shoes",
      slug: "football-shoes",
    },
    {
      id: 2,
      title: "Basketball",
      price: 29.99,
      image: "https://via.placeholder.com/300x200?text=Basketball",
      slug: "basketball",
    },
    {
      id: 3,
      title: "Tennis Racket",
      price: 59.99,
      image: "https://via.placeholder.com/300x200?text=Tennis+Racket",
      slug: "tennis-racket",
    },
    {
      id: 4,
      title: "Cricket Bat",
      price: 89.99,
      image: "https://via.placeholder.com/300x200?text=Cricket+Bat",
      slug: "cricket-bat",
    },
    {
      id: 5,
      title: "Running Shoes",
      price: 39.99,
      image: "https://via.placeholder.com/300x200?text=Running+Shoes",
      slug: "running-shoes",
    },
  ];
  return (
    <section className="px-5 2xl:px-0 max-w-5xl mx-auto pt-11  md:pt-16 lg:pt-20">
      <h2 className="text-2xl font-bold text-center mb-6">Flash Sale</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {fakeProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default HomeFlashSaleProductSection;
