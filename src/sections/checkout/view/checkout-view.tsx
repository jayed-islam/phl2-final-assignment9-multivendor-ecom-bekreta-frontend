/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Divider,
  CircularProgress,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import FormProvider from "@/components/hook-form/form-provider";
import { useForm, Controller } from "react-hook-form";
import RHFTextField from "@/components/hook-form/rhf-text-field";
import { zodResolver } from "@hookform/resolvers/zod";
import { orderCreateValidationSchema } from "@/validations/checkout";
import toast from "react-hot-toast";
import { LoadingButton } from "@mui/lab";
import {
  applyCoupon,
  clearCart,
  removeCoupon,
} from "@/redux/reducers/cart/cartSlice";
import {
  useCreateOrderMutation,
  useVerifyCouponMutation,
} from "@/redux/reducers/order/orderApi";
import { Close } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { paths } from "@/layouts/paths";
import CartItemView from "@/sections/cart/cart-item-view";

const CheckoutPage: React.FC = () => {
  const { totalCost, discount, items, appliedCoupon } = useAppSelector(
    (state) => state.cart
  );

  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const methods = useForm({
    defaultValues: {
      name: "",
      phone: "",
      address: "",
      paymentMethod: "aamarpay",
    },
    resolver: zodResolver(orderCreateValidationSchema),
  });

  const {
    handleSubmit,
    control,
    formState: { isSubmitting, errors },
  } = methods;

  console.log("err", errors);

  const [createOrder] = useCreateOrderMutation();
  const onSubmit = handleSubmit(async (data) => {
    if (items.length === 0) {
      toast.error("Please add minimum 1 product for order");
      return;
    }

    const products = items.map((item) => {
      return {
        product: item.productId,
        quantity: item.quantity,
        price: item.price,
      };
    });

    const payload = {
      user: user && user._id,
      vendor: items[0].vendorId,
      phone: data.phone,
      name: data.name,
      address: data.address,
      items: products,
      deliveryCharge: 111,
      paymentMethod: data.paymentMethod as "cashOnDelivery" | "aamarpay",
      subTotal: totalCost,
      totalPrice: totalCost - discount,
      ...(discount > 0 && {
        coupon: appliedCoupon?._id,
        isCouponApplied: true,
        discount,
      }),
    };

    const response = await createOrder(payload).unwrap();

    if (response.success) {
      toast.success(response.message);
      dispatch(clearCart());
      if (response.data) {
        if ("payment_url" in response.data) {
          // Redirect to the payment URL
          router.push(response.data.payment_url);
        } else {
          // Navigate to the user's order page
          router.push(paths.account.orders);
        }
      }
    } else {
      toast.error(response.message);
    }
    try {
    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast.error(error.data.message);
    }
  });

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

  return (
    <div className="max-w-5xl mx-auto px-5 xl:px-0 py-11">
      <Typography variant="h4" align="center" gutterBottom>
        Checkout
      </Typography>
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <Grid container spacing={3} mt={3}>
          {/* Left Section */}
          <Grid item xs={12} md={8}>
            <Paper elevation={3} sx={{ padding: 3 }}>
              <Typography variant="h6" gutterBottom>
                User Details
              </Typography>
              <div className="flex items-center gap-3 flex-col lg:flex-row mb-3">
                <RHFTextField label="Full name" name="name" />
                <RHFTextField label="Phone" name="phone" />
              </div>
              <RHFTextField label="Address" name="address" />
              <Divider sx={{ my: 2 }} />
              <Typography variant="h6" gutterBottom>
                Payment Method
              </Typography>
              <Controller
                name="paymentMethod"
                control={control}
                render={({ field }) => (
                  <RadioGroup {...field}>
                    <FormControlLabel
                      value="cashOnDelivery"
                      control={<Radio />}
                      label="Cash on Delivery"
                    />
                    <FormControlLabel
                      value="aamarpay"
                      control={<Radio />}
                      label="Pay with Aamarpay"
                    />
                  </RadioGroup>
                )}
              />
            </Paper>
            <Box
              sx={{
                mt: 3,
              }}
            >
              {items.map((item) => (
                <CartItemView item={item} key={item.productId} />
              ))}
            </Box>
          </Grid>

          {/* Right Section */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ padding: 3 }}>
              <Typography variant="h6" gutterBottom>
                Order Summary
              </Typography>
              <Box display="flex" justifyContent="space-between">
                <Typography>Subtotal:</Typography>
                <Typography>${totalCost.toFixed(2)}</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" mt={1}>
                <Typography>Discount:</Typography>
                <Typography>{discount.toFixed(2)}</Typography>{" "}
                {/* Replace with coupon logic */}
              </Box>
              <Divider sx={{ my: 2 }} />
              <Box display="flex" justifyContent="space-between">
                <Typography>Total:</Typography>
                <Typography>${(totalCost - discount).toFixed(2)}</Typography>
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
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
                fullWidth
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <CircularProgress size={24} />
                ) : (
                  "Proceed to Payment"
                )}
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </FormProvider>
    </div>
  );
};

export default CheckoutPage;
