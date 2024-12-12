import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Box,
  Typography,
} from "@mui/material";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

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
  <Dialog open={open} onClose={onCancel} maxWidth="sm" fullWidth>
    <DialogTitle>
      <Box display="flex" alignItems="center" gap={1}>
        <WarningAmberIcon color="warning" />
        <Typography variant="h6">Vendor Conflict</Typography>
      </Box>
    </DialogTitle>
    <DialogContent>
      <Typography variant="body1" color="textSecondary">
        You can only add products from one vendor at a time. Would you like to
        replace your current cart with the new product(s)?
      </Typography>
    </DialogContent>
    <DialogActions>
      <Button onClick={onCancel} color="secondary" variant="outlined">
        Cancel
      </Button>
      <Button onClick={onReplaceCart} color="primary" variant="contained">
        Replace Cart
      </Button>
    </DialogActions>
  </Dialog>
);

export default VendorConflictModal;
