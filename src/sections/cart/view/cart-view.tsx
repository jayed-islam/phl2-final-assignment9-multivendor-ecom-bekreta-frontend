"use client";

import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  IconButton,
  Divider,
  Box,
} from "@mui/material";
import { Add, Remove, Delete } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  clearCart,
  updateQuantity,
  deleteItem,
} from "@/redux/reducers/cart/cartSlice";
import Link from "next/link";
import { paths } from "@/layouts/paths";

const CartView: React.FC = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);
  const { items, totalCost } = cart;

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    dispatch(updateQuantity({ productId, quantity }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = (productId: string) => {
    dispatch(deleteItem(productId));
  };

  const handleCheckout = () => {
    console.log("Proceed to checkout");
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
      <Grid container spacing={3}>
        {/* Cart Items */}
        <Grid item xs={12} md={8}>
          {items.map((item) => (
            <Card
              key={item.productId}
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: 2,
              }}
            >
              <CardMedia
                component="img"
                image={item.image}
                alt={item.name}
                sx={{ width: 120, height: 120, objectFit: "contain" }}
              />
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  ${item.price} x {item.quantity} = ${item.total.toFixed(2)}
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton
                  onClick={() =>
                    handleUpdateQuantity(item.productId, item.quantity - 1)
                  }
                  disabled={item.quantity <= 1}
                  sx={{
                    border: "1px solid gray",
                  }}
                >
                  <Remove />
                </IconButton>
                <Typography>{item.quantity}</Typography>
                <IconButton
                  onClick={() =>
                    handleUpdateQuantity(item.productId, item.quantity + 1)
                  }
                  sx={{
                    border: "1px solid gray",
                  }}
                >
                  <Add />
                </IconButton>
                <IconButton
                  color="error"
                  onClick={() => handleRemoveItem(item.productId)}
                >
                  <Delete />
                </IconButton>
              </CardActions>
            </Card>
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
              <Typography>Free</Typography>
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
