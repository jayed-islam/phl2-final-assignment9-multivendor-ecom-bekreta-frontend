/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  Box,
  Paper,
  Typography,
  Grid,
  Slider,
} from "@mui/material";
import { FilterList } from "@mui/icons-material";
import { useGetAllProductListQuery } from "@/redux/reducers/product/productApi";
import { useGetCategoriesQuery } from "@/redux/reducers/category/categoryApi";
import ProductCard from "@/layouts/common/product-card";
import ProductCardShimmer from "@/layouts/common/product-shimmer-card";
import { useAppSelector } from "@/redux/hooks";

const HomeProductViewSection = () => {
  const { user } = useAppSelector((state) => state.auth);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [isLowestFirst, setIsLowestFirst] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const { data: categoryData, isLoading: isCategoryLoading } =
    useGetCategoriesQuery();

  const { data: productsData, isFetching: isProductsLoading } =
    useGetAllProductListQuery({
      category,
      limit,
      page,
      searchTerm,
      maxPrice,
      minPrice,
      ...(user?._id && { userId: user._id }),
    });

  const handlePriceChange = (_event: Event, newValue: number | number[]) => {
    const [newMin, newMax] = newValue as number[];
    setMinPrice(newMin);
    setMaxPrice(newMax);
  };

  return (
    <div>
      {/* Header Section */}
      <Typography variant="h4" fontWeight="bold" mb={3}>
        Explore Products
      </Typography>

      {/* Filters Section */}
      <Paper sx={{ padding: 2, marginBottom: 4 }}>
        <Box display="flex" flexWrap="wrap" gap={2} alignItems="center">
          {/* Search Bar */}
          <TextField
            label="Search Products"
            variant="outlined"
            size="small"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ flex: 1, minWidth: "200px" }}
          />

          {/* Category Filter */}
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            displayEmpty
            size="small"
            sx={{ flex: 1, minWidth: "200px" }}
          >
            <MenuItem value="">All Categories</MenuItem>
            {categoryData?.data?.map((item) => (
              <MenuItem value={item._id} key={item._id}>
                {item.name}
              </MenuItem>
            ))}
          </Select>

          {/* Price Range Slider */}
          <Box flex={2} minWidth="300px" px={2}>
            <Typography gutterBottom>Price Range</Typography>
            <Slider
              value={[minPrice, maxPrice]}
              onChange={handlePriceChange}
              valueLabelDisplay="auto"
              min={0}
              max={2000}
            />
          </Box>
        </Box>
      </Paper>

      {/* Products Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {isProductsLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <ProductCardShimmer key={index} />
            ))
          : productsData?.data?.products?.map((product, idx) => (
              <ProductCard product={product} key={idx} />
            ))}
      </div>
    </div>
  );
};

export default HomeProductViewSection;
