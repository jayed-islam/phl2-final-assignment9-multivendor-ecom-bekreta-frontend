"use client";

import React from "react";
import { Typography, Grid, Card, Button, Divider, Box } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { clearCart } from "@/redux/reducers/cart/cartSlice";
import Link from "next/link";
import { paths } from "@/layouts/paths";
import CartItemView from "../cart-item-view";
import { useRouter } from "next/navigation";

const CartView: React.FC = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);
  const { items, totalCost } = cart;

  const router = useRouter();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleCheckout = () => {
    router.push(paths.checkout.root);
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
              <Typography>101</Typography>
            </Box>
            <Divider sx={{ marginY: 2 }} />
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
            >
              <Typography variant="h6">Total</Typography>
              <Typography variant="h6">${totalCost.toFixed(2)}</Typography>
            </Box>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleCheckout}
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
