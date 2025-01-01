import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  CircularProgress,
  Paper,
} from "@mui/material";
import { useAppSelector } from "@/redux/hooks";
import { useGetAllReivewForCustomerQuery } from "@/redux/reducers/review/reviewApi";
import { IReview } from "@/types/review";

const CustomerReviewListView = () => {
  const { user } = useAppSelector((state) => state.auth);

  const { data: reviews, isFetching } = useGetAllReivewForCustomerQuery(
    {
      customerId: user?._id as string,
    },
    {
      skip: !user,
    }
  );

  if (isFetching) {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <CircularProgress />
      </div>
    );
  }

  if (!reviews || reviews?.data?.length === 0) {
    return (
      <Typography
        variant="h6"
        align="center"
        color="textSecondary"
        style={{ marginTop: "20px" }}
      >
        No reviews found.
      </Typography>
    );
  }

  return (
    <TableContainer component={Paper} style={{ marginTop: "20px" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Product Name</TableCell>
            <TableCell align="center">Rating</TableCell>
            <TableCell align="center">Content</TableCell>
            <TableCell align="center">Image</TableCell>
            <TableCell align="center">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reviews?.data?.map((review: IReview) => (
            <TableRow key={review._id}>
              <TableCell align="center">{review.product.name}</TableCell>
              <TableCell align="center">{review.rating}</TableCell>
              <TableCell align="center">{review.content}</TableCell>
              <TableCell align="center">
                {review.image ? (
                  <img
                    src={review.image}
                    alt="Review"
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  "N/A"
                )}
              </TableCell>
              <TableCell align="center">
                {new Date(review.createdAt).toLocaleDateString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomerReviewListView;
