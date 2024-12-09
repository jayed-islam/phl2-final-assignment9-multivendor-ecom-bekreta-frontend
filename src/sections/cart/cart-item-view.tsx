import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@mui/material";
import { Add, Remove, Delete } from "@mui/icons-material";
import {
  deleteItem,
  ICartItem,
  updateQuantity,
} from "@/redux/reducers/cart/cartSlice";
import ConfirmationDialog from "./cart-item-delete-confirmation";
import useBoolean from "@/hooks/use-boolean";
import Link from "next/link";
import { paths } from "@/layouts/paths";
import { useAppDispatch } from "@/redux/hooks";

interface CartItemViewProps {
  item: ICartItem;
}

const CartItemView: React.FC<CartItemViewProps> = ({ item }) => {
  const dispatch = useAppDispatch();

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    dispatch(updateQuantity({ productId, quantity }));
  };

  const handleRemoveItem = (productId: string) => {
    dispatch(deleteItem(productId));
  };

  const dialog = useBoolean();
  return (
    <>
      <Card
        key={item.productId}
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: 2,
          borderRadius: "1rem",
          width: "100%",
        }}
      >
        <CardMedia
          component="img"
          image={item.image}
          alt={item.name}
          sx={{
            width: 120,
            height: 120,
            objectFit: "contain",
            m: 1,
            borderRadius: "1rem",
          }}
        />
        <CardContent sx={{ flex: 1 }}>
          <Link
            href={`${paths.product.root}/${item.productId}`}
            className="group"
          >
            <span className="group-hover:underline">
              <Typography variant="h6">{item.name}</Typography>
            </span>
          </Link>

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
          <IconButton color="error" onClick={dialog.setTrue}>
            <Delete />
          </IconButton>
        </CardActions>
      </Card>
      <ConfirmationDialog
        onCancel={dialog.setFalse}
        onConfirm={() => handleRemoveItem(item.productId)}
        open={dialog.value}
      />
    </>
  );
};

export default CartItemView;
