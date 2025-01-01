/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import {
  Typography,
  Grid,
  Card,
  Button,
  Divider,
  Box,
  TextField,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  applyCoupon,
  clearCart,
  removeCoupon,
} from "@/redux/reducers/cart/cartSlice";
import Link from "next/link";
import { paths } from "@/layouts/paths";
import CartItemView from "../cart-item-view";
import { useRouter } from "next/navigation";
import { useVerifyCouponMutation } from "@/redux/reducers/order/orderApi";
import toast from "react-hot-toast";
import { Close } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";

const CartView: React.FC = () => {
  const dispatch = useAppDispatch();
  const { totalCost, discount, items } = useAppSelector((state) => state.cart);

  const router = useRouter();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleCheckout = () => {
    router.push(paths.checkout.root);
  };
  const shippingCharge = 111;
  const [couponCode, setCouponCode] = useState("");
  const [couponError, setCouponError] = useState("");

  const [verifyCoupon, { isLoading: isVerifyingCoupon }] =
    useVerifyCouponMutation();

  const applyCouponHandler = async () => {
    if (!couponCode.trim()) {
      setCouponError("Coupon code cannot be empty.");
      return;
    }
    try {
      const response = await verifyCoupon({ code: couponCode }).unwrap();
      if (response.success) {
        dispatch(applyCoupon(response.data));
        toast.success("Coupon applied successfully!");
      } else {
        toast.error(response.message || "Something went wrong!");
      }
      return true;
    } catch (error: any) {
      toast.error(error.data.message);
      setCouponError(error.data.message);
      console.error("Coupon verification error:", error);
    }
  };

  const removeCouponHandler = () => {
    dispatch(removeCoupon());
    setCouponCode("");
    toast.success("Coupon removed successfully!");
  };

  if (items.length === 0) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "70vh",
          textAlign: "center",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Your Cart is Empty
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Add some products to see them here.
        </Typography>
        <Link href={paths.product.root}>
          <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
            Start Shopping
          </Button>
        </Link>
      </Box>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-5 xl:px-0 py-11">
      <Typography variant="h4" gutterBottom align="center">
        Shopping Cart
      </Typography>
      <Grid container spacing={3} mt={2}>
        {/* Cart Items */}
        <Grid item xs={12} md={8}>
          {items.map((item) => (
            <CartItemView item={item} key={item.productId} />
          ))}
        </Grid>

        {/* Order Summary */}
        <Grid item xs={12} md={4}>
          <Card sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom>
              Order Summary
            </Typography>
            <Divider />
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
            >
              <Typography>Subtotal</Typography>
              <Typography>${totalCost.toFixed(2)}</Typography>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}
            >
              <Typography>Shipping</Typography>
              <Typography>{shippingCharge}</Typography>
            </Box>
            {discount > 0 && (
              <Box display="flex" justifyContent="space-between" mt={1}>
                <Typography>Discount:</Typography>
                <Typography>{discount.toFixed(2)}</Typography>{" "}
              </Box>
            )}
            <Divider sx={{ marginY: 2 }} />
            <Box display="flex" justifyContent="space-between">
              <Typography>Total:</Typography>
              <Typography>
                ${(totalCost + shippingCharge - discount).toFixed(2)}
              </Typography>
            </Box>

            <Divider sx={{ my: 2 }} />

            {!discount ? (
              <div className="w-full">
                <div className="mt-5 flex items-center gap-3">
                  <TextField
                    label="Coupon Code"
                    variant="outlined"
                    color="success"
                    fullWidth
                    value={couponCode}
                    onChange={(e) => {
                      setCouponCode(e.target.value);
                      if (e.target.value.trim()) {
                        setCouponError("");
                      }
                    }}
                    error={!!couponError}
                    size="small"
                  />
                  <LoadingButton
                    variant="contained"
                    sx={{
                      px: 3,
                    }}
                    onClick={applyCouponHandler}
                    disabled={isVerifyingCoupon}
                    loading={isVerifyingCoupon}
                  >
                    Apply
                  </LoadingButton>
                </div>
                {couponError && (
                  <h1 className="text-xs text-red-500">{couponError}</h1>
                )}
              </div>
            ) : (
              <div>
                <div className="border-2 px-5 py-2 border-green-500 mt-5">
                  <div className="flex items-start flex-col gap-2 w-full">
                    <Typography variant="subtitle2" className="font-semibold">
                      🎉 Discount Applied:
                    </Typography>
                    <div className="flex items-center w-full justify-between">
                      <div
                        className="flex items-center cursor-pointer gap-2"
                        onClick={removeCouponHandler}
                      >
                        <h2 className="text-md text-green-500">
                          ({couponCode})
                        </h2>

                        <Close fontSize="small" color="error" />
                      </div>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          whiteSpace: "nowrap",
                        }}
                      >
                        - {discount.toFixed(2)}
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleCheckout}
              sx={{
                mt: 3,
              }}
            >
              Proceed to Checkout
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              fullWidth
              sx={{ marginTop: 2 }}
              onClick={handleClearCart}
            >
              Clear Cart
            </Button>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default CartView;
