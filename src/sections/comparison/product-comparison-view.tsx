"use client";

import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Modal,
  Box,
  Snackbar,
  Alert,
  Autocomplete,
  TextField,
  CircularProgress,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { useGetProductListQuery } from "@/redux/reducers/product/productApi";
import Image from "next/image";
import { IProduct } from "@/types/product";

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

  // Automatically close the warning after 3 seconds
  useEffect(() => {
    if (warning) {
      const timer = setTimeout(() => setWarning(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [warning]);

  useEffect(() => {
    // Log warning for debugging purposes
    console.log(warning);
  }, [warning]);

  if (isFetching) {
    return <Typography>Loading products...</Typography>;
  }

  if (!data) {
    return <Typography>Error fetching products.</Typography>;
  }

  return (
    <div className="max-w-5xl mx-auto px-5 xl:px-0 py-11">
      <Typography variant="h4" gutterBottom>
        Product Comparison
      </Typography>

      {/* Display the warning as a Snackbar */}
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
      <Button
        variant="contained"
        color="primary"
        onClick={openModal}
        sx={{ mt: 2 }}
      >
        Select Products for Comparison
      </Button>

      <Modal open={isModalOpen} onClose={closeModal}>
        <Box
          sx={{
            width: 400,
            margin: "100px auto",
            background: "white",
            borderRadius: "8px",
            padding: "16px",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Select Products
          </Typography>
          <Autocomplete
            multiple
            options={data?.data || []}
            getOptionLabel={(product) => product.name}
            renderOption={(props, product) => (
              <Box
                {...props}
                component="div"
                display="flex"
                alignItems="center"
                padding={1}
                sx={{
                  "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.04)" },
                  cursor: "pointer",
                }}
              >
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  style={{
                    width: 40,
                    height: 40,
                    objectFit: "cover",
                    marginRight: 8,
                    borderRadius: "4px",
                  }}
                  height={500}
                  width={500}
                />
                <Typography variant="body1">{product.name}</Typography>
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Choose Products"
                placeholder="Search products"
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <>
                      {isFetching ? <CircularProgress size={20} /> : null}
                      {params.InputProps.endAdornment}
                    </>
                  ),
                }}
              />
            )}
            onChange={(event, selectedProducts: IProduct[]) => {
              const validProducts = selectedProducts.filter((product) => {
                if (
                  comparisonList.length > 0 &&
                  product.category !== comparisonList[0].category
                ) {
                  setWarning(
                    "Selected products must belong to the same category."
                  );
                  return false;
                }
                return true;
              });
              setComparisonList(validProducts.slice(0, 3)); // Restrict to 3 items
              setWarning(null);
            }}
          />

          <Box marginTop={2} textAlign="right">
            <Button onClick={closeModal} color="secondary">
              Close
            </Button>
          </Box>
        </Box>
      </Modal>

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
                  Remove from Comparison
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {comparisonList.length > 0 && (
        <Box marginTop={4}>
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
        </Box>
      )}
    </div>
  );
};

export default ProductComparison;
