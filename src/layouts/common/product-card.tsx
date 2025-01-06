"use client";

import { IProduct } from "@/types/product";
import { IconButton, Rating, Tooltip } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {
  addProduct,
  ICartItem,
  replaceCart,
  toggleCart,
} from "@/redux/reducers/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import useBoolean from "@/hooks/use-boolean";
import VendorConflictModal from "@/sections/cart/view/vendor-confllict-on-cart-dialog";

interface Props {
  product: IProduct;
}

const ProductCard = ({ product }: Props) => {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const conflictDilaog = useBoolean();
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
    dispatch(toggleCart());
  };

  const cartItem: ICartItem = {
    image: product?.images[0] as string,
    name: product?.name as string,
    price: product?.price as number,
    productId: product?._id as string,
    quantity: 1,
    total: product?.price as number,
    vendorId:
      typeof product?.vendor === "object"
        ? (product?.vendor?._id as string)
        : (product?.vendor as string),
  };

  return (
    <>
      <Link
        href={`/products/${product._id}`}
        className="bg-white shadow border rounded flex flex-col items-center justify-center group"
      >
        <div className="relative w-full md:h-48 h-38 bg-gray-100 rounded overflow-hidden">
          <Link href={`/products/${product._id}`} className="h-full w-full">
            <Image
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover"
              height={500}
              width={500}
            />
          </Link>
          <div className="absolute top-2 right-2 rounded-full border border-primary bg-green-100 group-hover:translate-y-5 transition-all duration-300">
            <Tooltip title="Add to Cart" arrow>
              <IconButton
                color="primary"
                onClick={(e) => {
                  e.preventDefault();
                  handleAddToCart(cartItem);
                }}
              >
                <AddShoppingCartIcon />
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-3">
          <h3 className="text-md font-semibold line-clamp-1 overflow-ellipsis text-center">
            {product.name}
          </h3>
          <p className="text-gray-600 mt-2">${product.price.toFixed(2)}</p>
          <Rating readOnly value={product.rating} size="small" />
          <Link
            href={`/products/${product._id}`}
            className="inline-block mt-3 bg-gray-600 text-white py-1 px-4 rounded-3xl hover:bg-gray-700 transition-colors text-xs md:text-sm"
          >
            View Details
          </Link>
        </div>
      </Link>
      <VendorConflictModal
        onReplaceCart={() => handleReplaceCart(cartItem)}
        onCancel={conflictDilaog.setFalse}
        open={conflictDilaog.value}
      />
    </>
  );
};

export default ProductCard;
