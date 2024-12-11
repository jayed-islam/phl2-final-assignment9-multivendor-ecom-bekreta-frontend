import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Checkbox,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  CircularProgress,
  Typography,
} from "@mui/material";

import { IUser } from "@/types/user";
import { BooleanState } from "@/types/utils";
import { useUpdateUserStatusMutation } from "@/redux/reducers/user/userApi";

interface Props {
  user: IUser;
  dialog: BooleanState;
}

const UpdateUserStatusDialog = ({ user, dialog }: Props) => {
  const [status, setStatus] = useState(user.status || "active");
  const [isBlocklisted, setIsBlocklisted] = useState(
    user.role === "vendor" ? user.isBlocklisted : false
  );
  const [loading, setLoading] = useState(false);

  const [updateUserStatus, { isLoading }] = useUpdateUserStatusMutation();

  const handleStatusChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setStatus(event.target.value as string);
  };

  const handleBlocklistChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsBlocklisted(event.target.checked);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await updateUserStatus({
        userId: user._id,
        status,
        isBlocklisted,
      });
      setLoading(false);
      onClose(); // Close dialog on success
    } catch (error) {
      setLoading(false);
      console.error("Failed to update user status", error);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Update User Status</DialogTitle>
      <DialogContent>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {/* User Name */}
          <Typography variant="body1">User: {user.name}</Typography>

          {/* Status Field */}
          <FormControl fullWidth>
            <InputLabel>Status</InputLabel>
            <Select value={status} onChange={handleStatusChange} label="Status">
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="blocked">Blocked</MenuItem>
              <MenuItem value="suspended">Suspended</MenuItem>
            </Select>
          </FormControl>

          {/* Blocklist Option for Vendors Only */}
          {user.role === "vendor" && (
            <FormControlLabel
              control={
                <Checkbox
                  checked={isBlocklisted}
                  onChange={handleBlocklistChange}
                  name="blocklist"
                  color="primary"
                />
              }
              label="Blocklist Vendor"
            />
          )}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary" disabled={loading}>
          {loading ? <CircularProgress size={24} color="primary" /> : "Update"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UpdateUserStatusDialog;
