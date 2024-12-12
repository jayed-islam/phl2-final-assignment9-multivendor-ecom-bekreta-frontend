import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { IProduct } from "@/types/product";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  productList: IProduct[];
  comparisonList: IProduct[];
  setComparisonList: (products: IProduct[]) => void;
  setWarning: (message: string | null) => void;
}

const SelectProductDialog: React.FC<Props> = ({
  isOpen,
  onClose,
  productList,
  comparisonList,
  setComparisonList,
  setWarning,
}) => {
  const handleAddToComparison = (product: IProduct) => {
    if (comparisonList.length >= 3) {
      setWarning("You can only compare up to 3 products.");
      return;
    }

    if (
      comparisonList.length > 0 &&
      product.category.name !== comparisonList[0].category.name
    ) {
      setWarning("Selected products must belong to the same category.");
      return;
    }

    if (!comparisonList.find((p) => p._id === product._id)) {
      setComparisonList([...comparisonList, product]);
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="lg">
      <DialogTitle>Select Products for Comparison</DialogTitle>
      <DialogContent>
        <Box className="p-4">
          <Grid container spacing={4}>
            {productList.map((product) => (
              <Grid item xs={12} sm={4} md={3} key={product._id}>
                <Card className="shadow-lg">
                  <CardMedia
                    component="img"
                    height="140"
                    image={product.images[0]}
                    alt={product.name}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Category: {product.category.name}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      className="mt-4"
                      fullWidth
                      onClick={() => handleAddToComparison(product)}
                      disabled={comparisonList.some(
                        (p) => p._id === product._id
                      )}
                    >
                      {comparisonList.some((p) => p._id === product._id)
                        ? "Already Added"
                        : "Add to Compare"}
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box textAlign="right" marginTop={4}>
            <Button onClick={onClose} variant="outlined" color="secondary">
              Close
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default SelectProductDialog;
