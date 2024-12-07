"use client";

import React from "react";
import { useGetCategoriesQuery } from "@/redux/reducers/category/categoryApi";
import Image from "next/image";
import Link from "next/link";
import { paths } from "@/layouts/paths";

const ShimmerLoader = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="animate-pulse">
          <div className="relative w-full h-40 bg-gray-200 rounded-3xl"></div>
          <div className="h-4 bg-gray-200 rounded mt-2 w-3/4 mx-auto"></div>
        </div>
      ))}
    </div>
  );
};

const HomeCategorySection = () => {
  const { data: categoryData, isLoading: isCategoryLoading } =
    useGetCategoriesQuery();
  const fakeCategories = [
    {
      slug: "football",
      name: "Football",
      image: "https://via.placeholder.com/300x200?text=Football",
    },
    {
      slug: "basketball",
      name: "Basketball",
      image: "https://via.placeholder.com/300x200?text=Basketball",
    },
    {
      slug: "tennis",
      name: "Tennis",
      image: "https://via.placeholder.com/300x200?text=Tennis",
    },
    {
      slug: "cricket",
      name: "Cricket",
      image: "https://via.placeholder.com/300x200?text=Cricket",
    },
    {
      slug: "swimming",
      name: "Swimming",
      image: "https://via.placeholder.com/300x200?text=Swimming",
    },
    {
      slug: "running",
      name: "Running",
      image: "https://via.placeholder.com/300x200?text=Running",
    },
    {
      slug: "cycling",
      name: "Cycling",
      image: "https://via.placeholder.com/300x200?text=Cycling",
    },
    {
      slug: "gym",
      name: "Gym",
      image: "https://via.placeholder.com/300x200?text=Gym",
    },
  ];

  return (
    <section className="px-5 2xl:px-0 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">
        Explore Categories
      </h2>
      {isCategoryLoading ? (
        <ShimmerLoader />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5  gap-5">
          {fakeCategories.map((category) => (
            <Link
              href={`${paths.product.root}?slug=${category.slug}`}
              key={category.slug}
            >
              <div className="cursor-pointer group">
                <div className="relative w-full h-40 bg-gray-100 rounded-2xl overflow-hidden shadow">
                  <Image
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    height={500}
                    width={500}
                  />
                </div>
                <h3 className="text-lg font-medium text-center mt-2">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default HomeCategorySection;
