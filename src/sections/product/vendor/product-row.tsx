import useBoolean from "@/hooks/use-boolean";
import { IProduct } from "@/types/product";
import { Button, TableCell, TableRow } from "@mui/material";
import Image from "next/image";
import React from "react";
import { UpdateProductView } from "./edit-product-dilaog";
import SoftDeleteDialog from "./soft-delete-product-dialog";

interface Props {
  product: IProduct;
}
const ProductRow = ({ product }: Props) => {
  const editDialog = useBoolean();
  const deleteDialog = useBoolean();
  return (
    <>
      <TableRow key={product._id}>
        <TableCell>{product.name}</TableCell>
        <TableCell>
          {product.images.map((item, idx) => (
            <Image
              key={idx}
              src={item}
              alt="image"
              height={500}
              width={500}
              className="h-12 w-20 rounded-sm border p-1"
            />
          ))}
        </TableCell>
        <TableCell>{product?.category?.name}</TableCell>
        <TableCell>${product.price}</TableCell>
        <TableCell>{product.inventoryCount}</TableCell>
        <TableCell>
          <div className="flex gap-3">
            <Button
              size="small"
              color="secondary"
              variant="outlined"
              onClick={deleteDialog.setTrue}
            >
              Delete
            </Button>
            <Button
              onClick={editDialog.setTrue}
              size="small"
              color="success"
              variant="outlined"
            >
              Edit
            </Button>
            <Button size="small" color="warning">
              Duplicate
            </Button>
          </div>
        </TableCell>
      </TableRow>
      <UpdateProductView dialog={editDialog} initialValues={product} />
      <SoftDeleteDialog
        onClose={deleteDialog.setFalse}
        open={deleteDialog.value}
        productId={product._id}
      />
    </>
  );
};

export default ProductRow;