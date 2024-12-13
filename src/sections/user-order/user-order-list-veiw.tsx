"use client";

import { useGetUserOrderByIdQuery } from "@/redux/reducers/order/orderApi";
import {
  Button,
  Pagination,
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { IOrder } from "@/types/order";
import { useRouter } from "next/navigation";
import { paths } from "@/layouts/paths";
import { useAppSelector } from "@/redux/hooks";
import UserOrderRow from "./user-order-row";

const UserOrderView = () => {
  const { user } = useAppSelector((state) => state.auth);
  const [page, setPage] = useState(1);
  const { data, isFetching, isError } = useGetUserOrderByIdQuery({
    page: page,
    userId: user?._id as string,
  });

  const router = useRouter();
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  return (
    <div>
      <div>
        {isFetching ? (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Order ID</TableCell>
                  <TableCell>Total Price</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {[...Array(2)].map((_, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Skeleton width={80} />
                    </TableCell>
                    <TableCell>
                      <Skeleton width={100} />
                    </TableCell>
                    <TableCell>
                      <Skeleton width={120} />
                    </TableCell>
                    <TableCell>
                      <Skeleton width={60} />
                    </TableCell>
                    <TableCell>
                      <Skeleton width={90} />
                    </TableCell>
                    <TableCell>
                      <Skeleton width={80} />
                    </TableCell>
                    <TableCell>
                      <Skeleton width={120} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : data?.data?.orders.length === 0 || isError ? (
          <div className="text-center bg-white p-16 border rounded-xl">
            <Typography variant="h6" gutterBottom>
              No orders found
            </Typography>
            <Button
              variant="contained"
              color="success"
              sx={{
                textTransform: "capitalize",
              }}
              onClick={() => router.push(paths.product.root)}
            >
              Shop Now
            </Button>
          </div>
        ) : (
          <div>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell
                      sx={{
                        whiteSpace: "nowrap",
                      }}
                    >
                      Order ID
                    </TableCell>
                    <TableCell
                      sx={{
                        whiteSpace: "nowrap",
                      }}
                    >
                      Total Price
                    </TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.data.orders.map((order: IOrder) => (
                    <UserOrderRow key={order._id} row={order} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <div className="flex justify-center my-4">
              <Pagination
                count={data?.data?.pagination?.totalPages || 1}
                page={page}
                onChange={handlePageChange}
                color="standard"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserOrderView;
