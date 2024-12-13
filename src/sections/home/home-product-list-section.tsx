/* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable @typescript-eslint/no-unused-vars */
// "use client";

// import React, { useEffect, useState } from "react";
// import {
//   TextField,
//   Button,
//   Select,
//   MenuItem,
//   Box,
//   Paper,
//   Typography,
//   Grid,
//   Slider,
//   Pagination,
// } from "@mui/material";
// import { useGetAllProductListQuery } from "@/redux/reducers/product/productApi";
// import { useGetCategoriesQuery } from "@/redux/reducers/category/categoryApi";
// import ProductCard from "@/layouts/common/product-card";
// import ProductCardShimmer from "@/layouts/common/product-shimmer-card";
// import { useAppSelector } from "@/redux/hooks";
// import { IProduct } from "@/types/product";
// import InfiniteScroll from "react-infinite-scroll-component";

// const getPriceRange = (key: string) => {
//   switch (key) {
//     case "1-50":
//       return { minPrice: 1, maxPrice: 50 };
//     case "50-100":
//       return { minPrice: 50, maxPrice: 100 };
//     case "100-200":
//       return { minPrice: 100, maxPrice: 200 };
//     case "200-500":
//       return { minPrice: 200, maxPrice: 500 };
//     case "500-1000":
//       return { minPrice: 500, maxPrice: 1000 };
//     case "1000+":
//       return { minPrice: 1000, maxPrice: Number.MAX_SAFE_INTEGER };
//     case "all":
//     default:
//       return { minPrice: 0, maxPrice: Number.MAX_SAFE_INTEGER };
//   }
// };

// const HomeProductViewSection = () => {
//   const { user } = useAppSelector((state) => state.auth);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [category, setCategory] = useState("");
//   const [priceRangeKey, setPriceRangeKey] = useState<string>("all");
//   const [page, setPage] = useState(1);
//   const [limit, setLimit] = useState(10);
//   const [products, setProducts] = useState<IProduct[]>([]);
//   const [hasMore, setHasMore] = useState(true);

//   const { data: categoryData, isLoading: isCategoryLoading } =
//     useGetCategoriesQuery();

//   const { data: productsData, isFetching: isProductsLoading } =
//     useGetAllProductListQuery({
//       category,
//       limit,
//       page,
//       searchTerm,
//       ...getPriceRange(priceRangeKey),
//       ...(user?._id && { userId: user._id }),
//     });

//   const priceRangeOptions = [
//     { label: "All Prices", value: "all" },
//     { label: "1 to 50", value: "1-50" },
//     { label: "50 to 100", value: "50-100" },
//     { label: "100 to 200", value: "100-200" },
//     { label: "200 to 500", value: "200-500" },
//     { label: "500 to 1000", value: "500-1000" },
//     { label: "1000 and above", value: "1000+" },
//   ];

//   const totalPages = productsData?.data?.pagination.totalPages;

//   const handlePageChange = (
//     event: React.ChangeEvent<unknown>,
//     value: number
//   ) => {
//     setPage(value);
//   };

//   useEffect(() => {
//     if (productsData?.data) {
//       const newProducts = productsData.data.products;

//       if (page === 1) {
//         setProducts(newProducts);
//       } else {
//         setProducts((prev) => [...prev, ...newProducts]);
//       }

//       if (
//         products.length + newProducts.length >=
//         productsData.data.pagination.totalItems
//       ) {
//         setHasMore(false);
//       }
//     }
//   }, [page, products.length, productsData]);

//   const fetchMoreProducts = () => {
//     setPage((prevPage) => prevPage + 1);
//   };

//   return (
//     <div className="px-5 2xl:px-0 max-w-5xl mx-auto pt-11  md:pt-16 lg:pt-20 pb-20">
//       {/* Header Section */}
//       <Typography variant="h4" fontWeight="bold" mb={3} align="center">
//         Explore Products
//       </Typography>

//       {/* Filters Section */}
//       <Paper sx={{ padding: 2, marginBottom: 4, borderRadius: "0.75rem" }}>
//         <Box display="flex" flexWrap="wrap" gap={2} alignItems="center">
//           {/* Search Bar */}
//           <TextField
//             label="Search Products"
//             variant="outlined"
//             size="small"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             sx={{ flex: 1, minWidth: "200px" }}
//           />

//           {/* Category Filter */}
//           <Select
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             displayEmpty
//             size="small"
//             sx={{ flex: 1, minWidth: "200px", borderRadius: "0.75rem" }}
//           >
//             <MenuItem value="">All Categories</MenuItem>
//             {categoryData?.data?.map((item) => (
//               <MenuItem value={item._id} key={item._id}>
//                 {item.name}
//               </MenuItem>
//             ))}
//           </Select>

//           {/* Price Range Filter */}
//           <Select
//             value={priceRangeKey}
//             onChange={(e) => setPriceRangeKey(e.target.value)}
//             displayEmpty
//             size="small"
//             sx={{ flex: 1, minWidth: "200px", borderRadius: "0.75rem" }}
//           >
//             {priceRangeOptions.map((option) => (
//               <MenuItem value={option.value} key={option.value}>
//                 {option.label}
//               </MenuItem>
//             ))}
//           </Select>
//         </Box>
//       </Paper>

//       {/* Products Section */}
//       {/* <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
//         {isProductsLoading ? (
//           // Loading shimmer effect
//           Array.from({ length: 6 }).map((_, index) => (
//             <ProductCardShimmer key={index} />
//           ))
//         ) : productsData?.data?.products?.length === 0 ? (
//           // No products message
//           <Typography variant="h6" color="textSecondary" align="center">
//             No products found
//           </Typography>
//         ) : (
//           // Product cards
//           productsData?.data?.products?.map((product, idx) => (
//             <ProductCard product={product} key={idx} />
//           ))
//         )}
//       </div> */}
//       <InfiniteScroll
//         dataLength={products.length}
//         next={fetchMoreProducts}
//         hasMore={hasMore}
//         loader={
//           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
//             {Array.from({ length: 5 }).map((_, index) => (
//               <ProductCardShimmer key={index} />
//             ))}
//           </div>
//         }
//         endMessage={
//           <Typography
//             variant="h6"
//             color="textSecondary"
//             align="center"
//             sx={{
//               mt: 3,
//             }}
//           >
//             No more products available
//           </Typography>
//         }
//       >
//         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
//           {products.map((product, idx) => (
//             <ProductCard product={product} key={idx} />
//           ))}
//         </div>
//       </InfiniteScroll>
//     </div>
//   );
// };

// export default HomeProductViewSection;
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useEffect, useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  Box,
  Paper,
  Typography,
} from "@mui/material";
import { useGetAllProductListQuery } from "@/redux/reducers/product/productApi";
import { useGetCategoriesQuery } from "@/redux/reducers/category/categoryApi";
import ProductCard from "@/layouts/common/product-card";
import ProductCardShimmer from "@/layouts/common/product-shimmer-card";
import { useAppSelector } from "@/redux/hooks";
import { IProduct } from "@/types/product";
import InfiniteScroll from "react-infinite-scroll-component";

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

const HomeProductViewSection = () => {
  const { user } = useAppSelector((state) => state.auth);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [priceRangeKey, setPriceRangeKey] = useState<string>("all");
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [hasMore, setHasMore] = useState(true);

  const { data: categoryData } = useGetCategoriesQuery();
  const { data: productsData } = useGetAllProductListQuery({
    category,
    limit,
    page,
    searchTerm,
    ...getPriceRange(priceRangeKey),
    ...(user?._id && { userId: user._id }),
  });

  const priceRangeOptions = [
    { label: "All Prices", value: "all" },
    { label: "1 to 50", value: "1-50" },
    { label: "50 to 100", value: "50-100" },
    { label: "100 to 200", value: "100-200" },
    { label: "200 to 500", value: "200-500" },
    { label: "500 to 1000", value: "500-1000" },
    { label: "1000 and above", value: "1000+" },
  ];

  useEffect(() => {
    if (productsData?.data) {
      const newProducts = productsData.data.products;

      // Filter out duplicates
      const uniqueProducts = newProducts.filter(
        (newProduct) =>
          !products.some(
            (existingProduct) => existingProduct._id === newProduct._id
          )
      );

      // Update products
      setProducts((prev) =>
        page === 1 ? uniqueProducts : [...prev, ...uniqueProducts]
      );

      // Check if there are more products to load
      setHasMore(
        page < productsData.data.pagination.totalPages &&
          uniqueProducts.length > 0
      );
    }
  }, [productsData, page]);

  const fetchMoreProducts = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="px-5 2xl:px-0 max-w-5xl mx-auto pt-11 md:pt-16 lg:pt-20 pb-20">
      {/* Header Section */}
      <Typography variant="h4" fontWeight="bold" mb={3} align="center">
        Explore Products
      </Typography>

      {/* Filters Section */}
      <Paper sx={{ padding: 2, marginBottom: 4, borderRadius: "0.75rem" }}>
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
            sx={{ flex: 1, minWidth: "200px", borderRadius: "0.75rem" }}
          >
            <MenuItem value="">All Categories</MenuItem>
            {categoryData?.data?.map((item) => (
              <MenuItem value={item._id} key={item._id}>
                {item.name}
              </MenuItem>
            ))}
          </Select>

          {/* Price Range Filter */}
          <Select
            value={priceRangeKey}
            onChange={(e) => setPriceRangeKey(e.target.value)}
            displayEmpty
            size="small"
            sx={{ flex: 1, minWidth: "200px", borderRadius: "0.75rem" }}
          >
            {priceRangeOptions.map((option) => (
              <MenuItem value={option.value} key={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </Box>
      </Paper>

      {/* Products Section */}
      <InfiniteScroll
        dataLength={products.length}
        next={fetchMoreProducts}
        hasMore={hasMore}
        loader={
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <ProductCardShimmer key={index} />
            ))}
          </div>
        }
        endMessage={
          <Typography
            variant="h6"
            color="textSecondary"
            align="center"
            sx={{ mt: 3 }}
          >
            No more products available
          </Typography>
        }
      >
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {products.map((product, idx) => (
            <ProductCard product={product} key={idx} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default HomeProductViewSection;
