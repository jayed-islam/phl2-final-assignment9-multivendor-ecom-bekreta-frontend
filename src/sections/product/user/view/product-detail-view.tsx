"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  Rating,
  IconButton,
} from "@mui/material";
import { useGetSingleProductQuery } from "@/redux/reducers/product/productApi";
import ProductCard from "@/layouts/common/product-card";
import { ShoppingBagOutlined } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
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
import Link from "next/link";
import toast from "react-hot-toast";
interface Props {
  id: string;
}

const ProductDetailsView = ({ id }: Props) => {
  const { data, isLoading } = useGetSingleProductQuery(id);
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const conflictDilaog = useBoolean();

  // product quantity update section

  const [quantity, setQuantity] = useState<string>("1");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const inventoryCount = data?.data?.product?.inventoryCount || 0;
  const averageRating = data?.data?.product?.averageRating || 0;

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
    }
  }, [errorMessage, setErrorMessage]);

  const handleIncrease = () => {
    const newQuantity = parseInt(quantity, 10) + 1;
    if (newQuantity <= inventoryCount) {
      setQuantity(newQuantity.toString());
      setErrorMessage(null);
    } else {
      setErrorMessage("Quantity exceeds inventory count.");
      console.log("Error set: Quantity exceeds inventory count.");
    }
  };

  const handleDecrease = () => {
    const newQuantity = Math.max(parseInt(quantity, 10) - 1, 1);
    setQuantity(newQuantity.toString());
    setErrorMessage(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Allow only numbers or empty input
    if (/^\d*$/.test(value)) {
      const numValue = parseInt(value, 10);
      if (numValue > inventoryCount) {
        setErrorMessage("Quantity exceeds inventory count.");
      } else {
        setErrorMessage(null);
      }
      setQuantity(value);
    }
  };

  const handleBlur = () => {
    // Ensure the quantity is at least 1 after editing
    if (!quantity || parseInt(quantity, 10) < 1) {
      setQuantity("1");
    }
  };

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
    quantity: isNaN(parseInt(quantity, 10)) ? 1 : parseInt(quantity, 10),
    total: data?.data?.product?.price as number,
    vendorId:
      typeof data?.data?.product?.vendor === "object"
        ? (data?.data?.product?.vendor?._id as string)
        : (data?.data?.product?.vendor as string),
  };

  const maskName = (name: string) => {
    if (!name) return "";
    const length = name.length;
    if (length <= 2) return name;
    return `${name[0]}${"*".repeat(length - 2)}${name[length - 1]}`;
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
                {/* Main Image */}

                <div className="border shadow">
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
                </div>
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
                  <div className="flex items-center gap-3 mb-3 ">
                    <h3 className="text-xl font-semibold">Price:</h3>
                    <Typography variant="h5" color="primary" fontWeight="bold">
                      ${data?.data?.product.price}
                    </Typography>
                  </div>
                  <Typography variant="body1" color="textSecondary" paragraph>
                    {data?.data?.product.description}
                  </Typography>

                  {/* Category */}
                  <Typography variant="body2" fontWeight="bold">
                    Category:
                    <Link
                      href={`/products?category=${data?.data?.product.category._id}`}
                      className="text-blue-500 pl-2 underline"
                    >
                      {data?.data?.product.category.name}
                    </Link>
                  </Typography>

                  <div className="flex items-center gap-3 pt-5">
                    <Typography variant="body2" fontWeight="bold">
                      Rating:
                    </Typography>
                    {/* Displaying Star Rating */}
                    <Rating size="small" value={averageRating} readOnly />
                    {/* Displaying the Average Rating */}
                    <Typography variant="body2" color="textSecondary">
                      ({averageRating.toFixed(1)} out of 5)
                    </Typography>
                  </div>

                  <div className="space-y-4">
                    <label htmlFor="Quantity" className="sr-only">
                      Quantity
                    </label>
                    <div className="flex items-center gap-1">
                      <IconButton type="button" onClick={handleDecrease}>
                        <RemoveIcon />
                      </IconButton>
                      <input
                        id="Quantity"
                        value={quantity}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className="h-10 w-16 rounded border-gray-200 text-center no-spinner sm:text-sm border"
                      />
                      <IconButton
                        type="button"
                        onClick={handleIncrease}
                        // disabled={parseInt(quantity, 10) >= inventoryCount}
                      >
                        <AddIcon />
                      </IconButton>
                    </div>
                    {errorMessage && (
                      <div className="error-message text-red-500 mt-2 text-sm">
                        {errorMessage}
                      </div>
                    )}
                  </div>

                  <Button
                    fullWidth
                    sx={{
                      mt: 3,
                    }}
                    onClick={() => handleAddToCart(cartItem)}
                    disabled={
                      inventoryCount <= 0 ||
                      parseInt(quantity, 10) >= inventoryCount
                    }
                  >
                    Add to Cart
                  </Button>
                  {/* Shop Link */}
                  <div className="mt-5">
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
                  </div>
                </Box>
              </Grid>
            </Grid>

            <div className="mt-5">
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

            <div className="bg-gray-100 p-5 mt-7">
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Customer Reviews
              </Typography>
              <div className="flex flex-col gap-3">
                {data?.data && data?.data?.product.reviews?.length > 0 ? (
                  data?.data?.product.reviews.map((review, index) => (
                    <div key={index} className="bg-white shadow border p-3">
                      <div className="flex items-start justify-between w-full">
                        <div>
                          <Rating value={review.rating} readOnly size="small" />
                          <Typography variant="body2">
                            {maskName(review.customer.name)}
                          </Typography>
                        </div>
                        <Typography
                          variant="caption"
                          color="textSecondary"
                          sx={{ fontStyle: "italic" }}
                        >
                          {new Date(review.createdAt).toLocaleDateString()} at{" "}
                          {new Date(review.createdAt).toLocaleTimeString()}
                        </Typography>
                      </div>
                      {review.content && (
                        <Typography
                          variant="body1"
                          mt={2}
                          sx={{
                            color: "text.primary",
                            lineHeight: 1.6,
                          }}
                        >
                          &ldquo;{review.content}&rdquo;
                        </Typography>
                      )}

                      {review.image && (
                        <Image
                          src={review.image}
                          alt="image"
                          className="h-20 w-20 object-cover mt-3"
                          height={500}
                          width={500}
                        />
                      )}
                    </div>
                  ))
                ) : (
                  <Typography variant="body2" color="textSecondary">
                    No reviews yet. Be the first to review this product!
                  </Typography>
                )}
              </div>
            </div>

            <div className="mt-16">
              <h2 className="text-xl font-semibold mb-5">Suggested Product</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {data?.data?.relatedProducts?.length === 0 ? (
                  // No products message
                  <Typography variant="h6" color="textSecondary" align="center">
                    No Suggested Product found
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
