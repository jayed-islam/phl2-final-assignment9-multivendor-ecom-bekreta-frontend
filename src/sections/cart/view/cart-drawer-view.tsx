"use client";

import React from "react";
import {
  Drawer,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  IconButton,
  Typography,
  Divider,
} from "@mui/material";
import { Add, Close, Delete, Remove } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  clearCart,
  deleteItem,
  toggleCart,
  updateQuantity,
} from "@/redux/reducers/cart/cartSlice";
import Link from "next/link";
import { paths } from "@/layouts/paths";

const CartDrawer: React.FC = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);
  const { items, totalCost, isCartOpen } = cart;

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    dispatch(updateQuantity({ productId, quantity }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleCheckout = () => {
    console.log("Proceed to checkout");
  };

  const handleDeleteItem = (productId: string) => {
    dispatch(deleteItem(productId));
  };

  const handleClose = () => {
    dispatch(toggleCart());
  };

  return (
    <Drawer anchor="right" open={isCartOpen} onClose={handleClose}>
      <div style={{ width: 400, padding: "20px" }} className="relative">
        <div className="absolute right-3 top-3">
          <IconButton onClick={handleClose}>
            <Close />
          </IconButton>
        </div>
        <Typography variant="h6" align="center" gutterBottom>
          Shopping Cart
        </Typography>
        {items.length === 0 ? (
          // If no items in the cart, show only this message
          <Typography
            align="center"
            color="textSecondary"
            style={{ marginTop: "20px" }}
          >
            No items in cart. Add some products!
          </Typography>
        ) : (
          <>
            <List>
              {items.map((item) => (
                <ListItem key={item.productId} alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      src={item.image}
                      variant="rounded"
                      sx={{
                        height: "3rem",
                        width: "3rem",
                      }}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.name}
                    secondary={
                      <>
                        <Typography variant="body2" color="textSecondary">
                          ${item.price} x {item.quantity} = ${item.total}
                        </Typography>
                        <div className="flex items-center gap-3 border w-min rounded-xl">
                          <IconButton
                            size="small"
                            onClick={() =>
                              handleUpdateQuantity(
                                item.productId,
                                item.quantity - 1
                              )
                            }
                            disabled={item.quantity <= 1}
                            sx={{
                              px: 1,
                              py: 0,
                            }}
                          >
                            <Remove />
                          </IconButton>
                          <Typography variant="body1">
                            {item.quantity}
                          </Typography>
                          <IconButton
                            size="small"
                            onClick={() =>
                              handleUpdateQuantity(
                                item.productId,
                                item.quantity + 1
                              )
                            }
                            sx={{
                              px: 1,
                              py: 0,
                            }}
                          >
                            <Add />
                          </IconButton>
                        </div>
                      </>
                    }
                  />
                  <IconButton
                    size="small"
                    color="error"
                    onClick={() => handleDeleteItem(item.productId)}
                    sx={{
                      border: "1px solid red",
                      mt: 2,
                    }}
                  >
                    <Delete />
                  </IconButton>
                </ListItem>
              ))}
            </List>

            <Divider />

            {/* Total and Buttons */}
            <div style={{ marginTop: "20px" }}>
              <Typography variant="h6" align="right">
                Total: ${totalCost}
              </Typography>
              <div
                style={{
                  marginTop: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={handleClearCart}
                >
                  Clear Cart
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleCheckout}
                >
                  Checkout
                </Button>
              </div>
            </div>
          </>
        )}

        {/* Close Button */}
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <Link href={paths.cart.root} onClick={handleClose}>
            <Button variant="text" style={{ textDecoration: "underline" }}>
              View carts
            </Button>
          </Link>
        </div>
      </div>
    </Drawer>
  );
};

export default CartDrawer;
