"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  Paper,
  Link,
  Rating,
} from "@mui/material";
import { useGetSingleProductQuery } from "@/redux/reducers/product/productApi";
import ProductCard from "@/layouts/common/product-card";
import { ShoppingBagOutlined } from "@mui/icons-material";
import Image from "next/image";
import { trackRecentlyViewedProduct } from "./recent-product-utils";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  addProduct,
  ICartItem,
  replaceCart,
  toggleCart,
} from "@/redux/reducers/cart/cartSlice";
import useBoolean from "@/hooks/use-boolean";
import VendorConflictModal from "@/sections/cart/view/vendor-confllict-on-cart-dialog";
interface Props {
  id: string;
}

const ProductDetailsView = ({ id }: Props) => {
  const { data, isLoading } = useGetSingleProductQuery(id);
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  const conflictDilaog = useBoolean();

  useEffect(() => {
    if (data?.data?.product?._id) {
      trackRecentlyViewedProduct(data.data.product);
    }
  }, [data?.data]);
  const vendorData =
    typeof data?.data?.product?.vendor === "string"
      ? null
      : data?.data?.product?.vendor;

  const handleImageClick = (image: string) => {
    setCurrentImage(image);
  };

  const handleAddToCart = (product: ICartItem) => {
    if (cart.vendorId && cart.vendorId !== product.vendorId) {
      conflictDilaog.setTrue();
    } else {
      dispatch(addProduct(product));
      dispatch(toggleCart());
    }
  };

  const handleReplaceCart = (product: ICartItem) => {
    dispatch(replaceCart(product));
    conflictDilaog.setFalse();
  };

  const cartItem: ICartItem = {
    image: data?.data?.product?.images[0] as string,
    name: data?.data?.product?.name as string,
    price: data?.data?.product?.price as number,
    productId: data?.data?.product?._id as string,
    quantity: 1,
    total: data?.data?.product?.price as number,
    vendorId: data?.data?.product?.vendor?._id as string,
  };

  return (
    <div className="max-w-5xl mx-auto px-5 2xl:px-0 py-8">
      <div>
        {isLoading ? (
          <div className="border p-20 flex items-center justify-center text-4xl font-semibold">
            Loading...
          </div>
        ) : (
          <div>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Paper
                  elevation={3}
                  sx={{ borderRadius: "12px", overflow: "hidden" }}
                >
                  {/* Main Image */}
                  <Box
                    component="img"
                    src={currentImage || data?.data?.product.images[0]}
                    alt={data?.data?.product.name}
                    sx={{
                      width: "100%",
                      height: { xs: "300px", md: "500px" },
                      objectFit: "cover",
                      borderRadius: "12px",
                    }}
                  />
                </Paper>

                {/* Thumbnail Gallery */}
                <Box
                  display="flex"
                  gap={2}
                  justifyContent="center"
                  mt={2}
                  flexWrap="wrap"
                >
                  {data?.data?.product.images.map(
                    (image: string, index: number) => (
                      <Box
                        key={index}
                        onClick={() => handleImageClick(image)}
                        sx={{
                          width: 80,
                          height: 80,
                          cursor: "pointer",
                          borderRadius: "0.5rem",
                          overflow: "hidden",
                          border:
                            image === currentImage
                              ? "2px solid #1976d2"
                              : "none",
                          transition: "all 0.3s ease",
                          "&:hover": { opacity: 0.8 },
                        }}
                      >
                        <Image
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            borderRadius: "8px",
                          }}
                          height={500}
                          width={500}
                        />
                      </Box>
                    )
                  )}
                </Box>
              </Grid>

              {/* Right: Product Details */}
              <Grid item xs={12} md={6}>
                <Box sx={{ padding: 2 }}>
                  <Typography variant="h3" fontWeight="bold" gutterBottom>
                    {data?.data?.product.name}
                  </Typography>
                  <Typography
                    variant="h5"
                    color="primary"
                    fontWeight="bold"
                    mb={2}
                  >
                    ${data?.data?.product.price}
                  </Typography>
                  <Typography variant="body1" color="textSecondary" paragraph>
                    {data?.data?.product.description}
                  </Typography>

                  {/* Category */}
                  <Typography variant="body2" fontWeight="bold" mb={1}>
                    Category:
                    <Link
                      href={`/products?category=${data?.data?.product.category._id}`}
                      color="primary"
                    >
                      {data?.data?.product.category.name}
                    </Link>
                  </Typography>

                  {/* Shop Link */}
                  <Typography
                    variant="body2"
                    fontWeight="bold"
                    sx={{
                      mt: 2,
                    }}
                  >
                    Sold by:
                  </Typography>

                  <Link href={`/shop/${vendorData?._id}`}>
                    <div className="border shadow rounded-3xl p-3 mt-2 w-min">
                      <div className="flex items-center gap-2">
                        <ShoppingBagOutlined
                          sx={{
                            fontSize: 35,
                            color: "#1976d2",
                          }}
                        />
                        <Typography
                          variant="h6"
                          fontWeight="bold"
                          sx={{
                            mt: 0.5,
                            whiteSpace: "nowrap",
                          }}
                        >
                          {vendorData?.shopName || "Shop"}
                        </Typography>
                      </div>

                      <div className="px-3 py-1 rounded-3xl  bg-green-700 w-min whitespace-nowrap text-white text-xs mt-2">
                        Visit Shop
                      </div>
                    </div>
                  </Link>

                  <Button
                    fullWidth
                    sx={{
                      mt: 3,
                    }}
                    onClick={() => handleAddToCart(cartItem)}
                  >
                    Add to Cart
                  </Button>
                </Box>
              </Grid>
            </Grid>

            <div className="mt-16">
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Qualities
              </Typography>
              <div>
                {data?.data?.product?.qualities &&
                data?.data?.product?.qualities.length > 0 ? (
                  <ul>
                    {data?.data?.product?.qualities.map((quality, index) => (
                      <li key={index}>
                        <Typography variant="body1" color="textSecondary">
                          {quality}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <Typography variant="body2" color="textSecondary">
                    No qualities available.
                  </Typography>
                )}
              </div>
            </div>

            <Box mt={6}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Customer Reviews
              </Typography>
              {data?.data && data?.data?.product.reviews?.length > 0 ? (
                data?.data?.product.reviews.map((review, index) => (
                  <Paper
                    key={index}
                    elevation={3}
                    sx={{
                      padding: 3,
                      marginBottom: 3,
                      borderRadius: "12px",
                      boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <Box display="flex" alignItems="center">
                      <Typography variant="body1" fontWeight="bold">
                        {review.customer.name}
                      </Typography>
                      <Rating value={review.rating} readOnly sx={{ ml: 1 }} />
                    </Box>
                    <Typography variant="body2" color="textSecondary" mt={1}>
                      {review.comment}
                    </Typography>
                  </Paper>
                ))
              ) : (
                <Typography variant="body2">No reviews yet.</Typography>
              )}
            </Box>

            <div className="mt-16">
              <h2 className="text-xl font-semibold mb-5">Related Products</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {data?.data?.relatedProducts?.length === 0 ? (
                  // No products message
                  <Typography variant="h6" color="textSecondary" align="center">
                    No related products found
                  </Typography>
                ) : (
                  // Product cards
                  data?.data?.relatedProducts?.map((product, idx) => (
                    <ProductCard product={product} key={idx} />
                  ))
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      <VendorConflictModal
        onReplaceCart={() => handleReplaceCart(cartItem)}
        onCancel={conflictDilaog.setFalse}
        open={conflictDilaog.value}
      />
    </div>
  );
};

export default ProductDetailsView;
