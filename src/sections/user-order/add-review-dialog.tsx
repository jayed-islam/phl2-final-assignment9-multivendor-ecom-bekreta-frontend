import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Alert,
  Rating,
  IconButton,
} from "@mui/material";
import { useAppSelector } from "@/redux/hooks";
import toast from "react-hot-toast";
import { LoadingButton } from "@mui/lab";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BooleanState } from "@/types/utils";
import { Close, Image } from "@mui/icons-material";
import { useAddReviewMutation } from "@/redux/reducers/review/reviewApi";
import { reviewSchema } from "@/validations/review";
import FormProvider from "@/components/hook-form/form-provider";
import RHFTextField from "@/components/hook-form/rhf-text-field";

interface Props {
  productId: string;
  dialog: BooleanState;
  vendorId: string;
}

const ProductReviewDialog = ({ productId, dialog, vendorId }: Props) => {
  const [addReview, { isLoading }] = useAddReviewMutation();
  const { user } = useAppSelector((state) => state.auth);
  const [rating, setRating] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const methods = useForm({
    resolver: zodResolver(reviewSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(event.target.files[0]);
      setErrorMessage(null); // Clear error message on new selection
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
  };

  const onSubmit = handleSubmit(async (data) => {
    const formData = new FormData();

    const payload = {
      type: selectedImage ? "IMAGE" : "TEXT",
      product: productId,
      customer: user?._id,
      vendor: vendorId,
      rating,
      content: data.content,
    };

    // Append form fields
    formData.append("data", JSON.stringify(payload));

    // Append the single file if selected
    if (selectedImage) {
      formData.append("file", selectedImage);
    }

    try {
      const response = await addReview(formData).unwrap();
      if (response.success) {
        toast.success(response.message);
        setSelectedImage(null);
        dialog.setFalse();
      } else {
        toast.error(response.message);
      }
    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast.error(error.data.message);
    }
  });

  const handleCloseError = () => {
    setErrorMessage(null);
  };

  return (
    <Dialog
      open={dialog.value}
      onClose={dialog.setFalse}
      fullWidth
      maxWidth="xs"
    >
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h2>Add a Review</h2>
        <IconButton onClick={dialog.setFalse}>
          <Close />
        </IconButton>
      </DialogTitle>
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <DialogContent>
          <RHFTextField label="Your review" name="content" rows={3} multiline />
          <div className="mt-5">
            <h2 className="text-sm font-semibold mb-2">Rate this product!!</h2>
            <Rating
              name="rating"
              value={rating}
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
              precision={0.5}
              size="large"
              sx={{
                mb: 3,
              }}
            />
          </div>
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="upload-image"
            type="file"
            onChange={onImageChange}
          />
          <label htmlFor="upload-image">
            <Button
              variant="contained"
              component="span"
              size="small"
              color="info"
              sx={{
                textTransform: "capitalize",
              }}
              startIcon={<Image />}
            >
              Attach
            </Button>
          </label>

          {selectedImage && (
            <div className="mt-5 flex items-center gap-3">
              <div className="h-20 w-20 rounded-2xl relative border p-2">
                <img
                  src={URL.createObjectURL(selectedImage)}
                  alt="Preview"
                  className="h-full w-full object-contain"
                />
                <div
                  onClick={removeImage}
                  className="h-6 w-6 rounded-full text-red-500 border border-red-500 absolute -right-2 -top-2 bg-red-100 flex items-center justify-center cursor-pointer"
                >
                  <Close className="text-sm" />
                </div>
              </div>
            </div>
          )}

          {errorMessage && (
            <Alert onClose={handleCloseError} severity="error" className="mt-5">
              {errorMessage}
            </Alert>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={dialog.setFalse} color="inherit">
            Cancel
          </Button>
          <LoadingButton
            type="submit"
            color="success"
            variant="contained"
            loading={isLoading}
            disabled={isLoading}
          >
            Submit
          </LoadingButton>
        </DialogActions>
      </FormProvider>
    </Dialog>
  );
};

export default ProductReviewDialog;
