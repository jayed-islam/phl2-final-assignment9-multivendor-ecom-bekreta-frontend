import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";

interface VendorConflictModalProps {
  open: boolean;
  onReplaceCart: () => void;
  onCancel: () => void;
}

const VendorConflictModal: React.FC<VendorConflictModalProps> = ({
  open,
  onReplaceCart,
  onCancel,
}) => (
  <Dialog open={open} onClose={onCancel}>
    <DialogTitle>Vendor Conflict</DialogTitle>
    <DialogContent>
      You can only add products from one vendor at a time. Would you like to
      replace your current cart with the new product(s)?
    </DialogContent>
    <DialogActions>
      <Button onClick={onCancel} color="secondary">
        Cancel
      </Button>
      <Button onClick={onReplaceCart} color="primary">
        Replace Cart
      </Button>
    </DialogActions>
  </Dialog>
);

export default VendorConflictModal;
