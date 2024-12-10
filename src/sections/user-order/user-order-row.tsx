"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
  Collapse,
  Box,
  Typography,
  Chip,
} from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { IOrder } from "@/types/order";
import ProductReviewDialog from "./add-review-dialog";
import useBoolean from "@/hooks/use-boolean";

export enum OrderStatus {
  Pending = "pending",
  Confirmed = "confirmed",
  Shipped = "shipped",
  Delivered = "delivered",
  Cancelled = "cancelled",
}
// Dummy status colors based on status
const getStatusColor = (status: OrderStatus) => {
  switch (status) {
    case OrderStatus.Pending:
      return "orange";
    case OrderStatus.Shipped:
      return "blue";
    case OrderStatus.Delivered:
      return "green";
    case OrderStatus.Cancelled:
      return "red";
    case OrderStatus.Confirmed:
      return "purple";
    default:
      return "gray";
  }
};

const UserOrderRow = ({ row }: { row: IOrder }) => {
  const [open, setOpen] = useState(false);
  const dialog = useBoolean();

  console.log("order", row);

  return (
    <>
      <TableRow>
        <TableCell
          sx={{
            whiteSpace: "nowrap",
          }}
        >
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell
          sx={{
            whiteSpace: "nowrap",
          }}
        >
          {row.name}
        </TableCell>
        <TableCell
          sx={{
            whiteSpace: "nowrap",
          }}
        >
          {row.phone}
        </TableCell>
        <TableCell
          sx={{
            whiteSpace: "nowrap",
          }}
        >
          ৳{row.totalPrice.toFixed(2)}
        </TableCell>
        <TableCell>
          <Typography>
            {new Date(row.createdAt as Date).toLocaleString()}
          </Typography>
        </TableCell>
        <TableCell>
          <Chip
            label={row.status}
            style={{
              backgroundColor: getStatusColor(row.status as OrderStatus),
              color: "white",
            }}
          />
        </TableCell>
        <TableCell>
          {row.paymentMethod === "aamarpay" && (
            <div
              className="px-3 py-1 bg-gray-500 text-sm font-semibold text-white cursor-pointer rounded-xl"
              onClick={dialog.setTrue}
            >
              Give Review
            </div>
          )}
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6">পণ্যের বিস্তারিত:</Typography>
              <Table size="small" aria-label="products">
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{
                        whiteSpace: "nowrap",
                      }}
                    >
                      পণ্যের নাম
                    </TableCell>
                    <TableCell>পরিমাণ</TableCell>
                    <TableCell>মূল্য</TableCell>
                    <TableCell
                      sx={{
                        whiteSpace: "nowrap",
                      }}
                    >
                      পণ্যের আইডি
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.items.map((product, index) => (
                    <TableRow key={index}>
                      <TableCell
                        sx={{
                          whiteSpace: "nowrap",
                        }}
                      >
                        {product.product.name}
                      </TableCell>
                      <TableCell
                        sx={{
                          whiteSpace: "nowrap",
                        }}
                      >
                        {product.quantity}x
                      </TableCell>
                      <TableCell
                        sx={{
                          whiteSpace: "nowrap",
                        }}
                      >
                        ৳{product.price}
                      </TableCell>
                      <TableCell
                        sx={{
                          whiteSpace: "nowrap",
                        }}
                      >
                        {product.product._id}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <ProductReviewDialog
        dialog={dialog}
        productId={row.items[0].product._id as string}
        vendorId={row.vendor._id as string}
      />
    </>
  );
};

export default UserOrderRow;
