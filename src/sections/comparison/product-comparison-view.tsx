"use client";

import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Snackbar,
  Alert,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  CircularProgress,
  AlertTitle,
} from "@mui/material";
import { useGetProductListQuery } from "@/redux/reducers/product/productApi";
import { IProduct } from "@/types/product";
import SelectProductDialog from "./product-selection-diloag";

const ProductComparison: React.FC = () => {
  const { data, isFetching } = useGetProductListQuery();
  const [comparisonList, setComparisonList] = useState<IProduct[]>([]);
  const [warning, setWarning] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRemoveFromComparison = (productId: string) => {
    setComparisonList(comparisonList.filter((p) => p._id !== productId));
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  if (isFetching) {
    return (
      <div className="flex justify-center items-center h-[51vh]">
        <CircularProgress size={50} />
        <Typography variant="h6" className="ml-4">
          Loading products...
        </Typography>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex justify-center items-center h-[51vh]">
        <Alert severity="error" className="max-w-md">
          <AlertTitle>Error</AlertTitle>
          Failed to fetch products. Please try again later.
        </Alert>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-5 xl:px-0 py-11 min-h-[51vh]">
      <Typography variant="h4" gutterBottom>
        Product Comparison
      </Typography>

      {/* Warning Snackbar */}
      {warning && (
        <Snackbar
          open={Boolean(warning)}
          autoHideDuration={3000}
          onClose={() => setWarning(null)}
        >
          <Alert severity="warning" onClose={() => setWarning(null)}>
            {warning}
          </Alert>
        </Snackbar>
      )}

      {/* Comparison Selector */}
      <Button variant="contained" color="primary" onClick={openModal}>
        Select Products for Comparison
      </Button>

      {/* Product Selection Dialog */}
      <SelectProductDialog
        isOpen={isModalOpen}
        onClose={closeModal}
        productList={data.data}
        comparisonList={comparisonList}
        setComparisonList={setComparisonList}
        setWarning={setWarning}
      />

      {/* Comparison Grid */}
      <Grid container spacing={2} marginTop={2}>
        {comparisonList.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product._id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography>Category: {product.category.name}</Typography>
                <Typography>Price: ${product.price}</Typography>
                <Typography>Rating: {product.rating} ★</Typography>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => handleRemoveFromComparison(product._id)}
                >
                  Remove
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Comparison Table */}
      {comparisonList.length > 0 && (
        <div className="mt-10">
          <Typography variant="h5" gutterBottom>
            Compare Products
          </Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Attribute</TableCell>
                {comparisonList.map((product) => (
                  <TableCell key={product._id}>{product.name}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Category</TableCell>
                {comparisonList.map((product) => (
                  <TableCell key={product._id}>
                    {product.category.name}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell>Price</TableCell>
                {comparisonList.map((product) => (
                  <TableCell key={product._id}>${product.price}</TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell>Rating</TableCell>
                {comparisonList.map((product) => (
                  <TableCell key={product._id}>{product.rating} ★</TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default ProductComparison;
