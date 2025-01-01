/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from "react";
import {
  TextField,
  Box,
  Typography,
  Pagination,
  Button,
  Drawer,
  IconButton,
} from "@mui/material";
import { useGetAllProductListQuery } from "@/redux/reducers/product/productApi";
import ProductCard from "@/layouts/common/product-card";
import ProductCardShimmer from "@/layouts/common/product-shimmer-card";
import { useAppSelector } from "@/redux/hooks";
import { useSearchParams } from "next/navigation";
import RatingFilter from "../../filters/rating-filter";
import AvailabilityFilter from "../../filters/availabality-filter";
import PriceFilter from "../../filters/price-filter";
import CategoryFilter from "../../filters/category-filter";
import FilterListIcon from "@mui/icons-material/FilterList";
import CloseIcon from "@mui/icons-material/Close";
import useBoolean from "@/hooks/use-boolean";

const getPriceRange = (key: string) => {
  switch (key) {
    case "1-50":
      return { minPrice: 1, maxPrice: 50 };
    case "50-100":
      return { minPrice: 50, maxPrice: 100 };
    case "100-200":
      return { minPrice: 100, maxPrice: 200 };
    case "200-500":
      return { minPrice: 200, maxPrice: 500 };
    case "500-1000":
      return { minPrice: 500, maxPrice: 1000 };
    case "1000+":
      return { minPrice: 1000, maxPrice: Number.MAX_SAFE_INTEGER };
    case "all":
    default:
      return { minPrice: 0, maxPrice: Number.MAX_SAFE_INTEGER };
  }
};

const ProductListView = () => {
  const { user } = useAppSelector((state) => state.auth);
  const searchParams = useSearchParams();
  const queryCategory = searchParams.get("category") || "";
  const querySearchTerm = searchParams.get("search") || "";
  const [searchTerm, setSearchTerm] = useState(querySearchTerm);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [availability, setAvailability] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState<string>(queryCategory);
  const drawerFilter = useBoolean();

  const [selectedRatings, setSelectedRatings] = useState<string[]>([]);

  const handleAvailabilityChange = (status: string, checked: boolean) => {
    setAvailability((prev) =>
      checked ? [...prev, status] : prev.filter((item) => item !== status)
    );
  };

  const handleRatingChange = (rating: string) => {
    setSelectedRatings((prevRatings) =>
      prevRatings.includes(rating)
        ? prevRatings.filter((r) => r !== rating)
        : [...prevRatings, rating]
    );
  };

  const { data: productsData, isFetching: isProductsLoading } =
    useGetAllProductListQuery({
      category: selectedCategory,
      limit,
      page,
      searchTerm,
      status: availability,
      ratings: selectedRatings,
      minPrice: minPrice ? parseFloat(minPrice) : undefined,
      maxPrice: maxPrice ? parseFloat(maxPrice) : undefined,
      ...(user?._id && { userId: user._id }),
    });

  const totalPages = productsData?.data?.pagination.totalPages;

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const resetRatings = () => {
    setSelectedRatings([]);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const resetCategory = () => {
    setSelectedCategory("");
  };

  const handlePriceChange = (
    field: "minPrice" | "maxPrice",
    value: React.SetStateAction<string>
  ) => {
    if (field === "minPrice") setMinPrice(value);
    if (field === "maxPrice") setMaxPrice(value);
  };

  const resetFilters = () => {
    setSearchTerm("");
    setAvailability([]);
    setMinPrice("");
    setMaxPrice("");
    setSelectedCategory("");
    setSelectedRatings([]);
  };

  return (
    <div className="px-5 2xl:px-0 max-w-5xl mx-auto py-11">
      <div className="flex items-start gap-5">
        {/* Sidebar (Filters) */}

        <div className="w-72 hidden lg:block">
          <div className="space-y-3">
            <TextField
              label="Search Products"
              variant="outlined"
              size="small"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ width: "100%" }}
              slotProps={{
                input: {
                  style: {
                    borderRadius: "0.25rem",
                  },
                },
              }}
            />

            <AvailabilityFilter
              selected={availability}
              onChange={handleAvailabilityChange}
              onReset={() => setAvailability([])}
            />

            <PriceFilter
              minPrice={minPrice}
              maxPrice={maxPrice}
              onChange={handlePriceChange}
              onReset={() => {
                setMinPrice("");
                setMaxPrice("");
              }}
            />

            <CategoryFilter
              selected={selectedCategory}
              onChange={handleCategoryChange}
              onReset={resetCategory}
            />

            <RatingFilter
              selectedRatings={selectedRatings}
              onChange={handleRatingChange}
              onReset={resetRatings}
            />
          </div>
        </div>

        {/* Products Section */}
        <div className="flex-1">
          <IconButton
            onClick={drawerFilter.setTrue}
            sx={{
              display: {
                lg: "none",
              },
            }}
          >
            <FilterListIcon />
          </IconButton>
          <div className="mb-3 flex items-center justify-between flex-col lg:flex-row">
            <Typography variant="h6">Selected Filters:</Typography>
            <Box display="flex" gap={2} flexWrap="wrap">
              {searchTerm && <Typography>Search: {searchTerm}</Typography>}
              {selectedCategory && (
                <Typography>Category: {selectedCategory}</Typography>
              )}
              {availability.length > 0 && (
                <Typography>Availability: {availability.join(", ")}</Typography>
              )}
              {selectedRatings.length > 0 && (
                <Typography>Ratings: {selectedRatings.join(", ")}</Typography>
              )}
              {(minPrice || maxPrice) && (
                <Typography>
                  Price: {minPrice || 0} - {maxPrice || "∞"}
                </Typography>
              )}
            </Box>
            <Button variant="outlined" color="secondary" onClick={resetFilters}>
              Reset Filters
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
            {isProductsLoading ? (
              // Loading shimmer effect
              Array.from({ length: 6 }).map((_, index) => (
                <ProductCardShimmer key={index} />
              ))
            ) : productsData?.data?.products?.length === 0 ? (
              // No products message
              <Typography variant="h6" color="textSecondary" align="center">
                No products found
              </Typography>
            ) : (
              // Product cards
              productsData?.data?.products?.map((product, idx) => (
                <ProductCard product={product} key={idx} />
              ))
            )}
          </div>

          <Box display="flex" justifyContent="center" mt={4}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={handlePageChange}
              color="primary"
            />
          </Box>
        </div>
      </div>

      <Drawer
        anchor="left"
        open={drawerFilter.value}
        onClose={drawerFilter.setFalse}
      >
        <Box p={3} width="300px">
          <IconButton
            onClick={drawerFilter.toggle}
            aria-label="Close Filters"
            sx={{ mb: 2 }}
          >
            <CloseIcon />
          </IconButton>
          <div className="space-y-3">
            <TextField
              label="Search Products"
              variant="outlined"
              size="small"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ width: "100%" }}
            />
            <AvailabilityFilter
              selected={availability}
              onChange={handleAvailabilityChange}
              onReset={() => setAvailability([])}
            />

            <PriceFilter
              minPrice={minPrice}
              maxPrice={maxPrice}
              onChange={handlePriceChange}
              onReset={() => {
                setMinPrice("");
                setMaxPrice("");
              }}
            />

            <CategoryFilter
              selected={selectedCategory}
              onChange={handleCategoryChange}
              onReset={resetCategory}
            />

            <RatingFilter
              selectedRatings={selectedRatings}
              onChange={handleRatingChange}
              onReset={resetRatings}
            />
          </div>
        </Box>
      </Drawer>
    </div>
  );
};

export default ProductListView;
