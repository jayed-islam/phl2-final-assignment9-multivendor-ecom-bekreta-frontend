/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import {
  IconButton,
  Popover,
  MenuItem,
  ListItemIcon,
  Typography,
  Avatar,
  Divider,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Logout from "@mui/icons-material/Logout";
import { logout } from "@/redux/reducers/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { getMenuItems } from "../dashboard/config-navigation";

const UserProfilePopover = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { user } = useAppSelector((state) => state.auth);

  const handleOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const handleLogout = () => {
    dispatch(logout());
  };

  // const handleGO = (route: string) => {
  //   router.push(route);
  // };
  const handleNavigation = (path: string) => {
    router.push(path);
    handleClose();
  };

  return (
    <>
      <IconButton
        edge="end"
        color="inherit"
        onClick={handleOpen}
        sx={{
          border: "1px solid gray",
        }}
      >
        <AccountCircle />
      </IconButton>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        disableScrollLock
        disablePortal
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{
          sx: {
            mt: 2,
            borderRadius: "1rem",
            minWidth: "15rem",
            maxWidth: "15rem",
            p: "1rem",
          },
        }}
      >
        <div>
          {/* User Information */}
          {/* User Information */}
          <div className="mb-2 flex items-start gap-2">
            {user?.role === "vendor" ? (
              // Vendor Layout
              <>
                <Avatar
                  src={user?.vendor?.logo || ""}
                  alt={user?.vendor?.shopName || "Shop Logo"}
                  sx={{
                    width: 35,
                    height: 35,
                    bgcolor: user?.vendor?.logo
                      ? "transparent"
                      : "primary.main",
                  }}
                >
                  {!user?.vendor?.logo &&
                    user?.vendor?.shopName?.charAt(0).toUpperCase()}
                </Avatar>
                <div>
                  <Typography variant="body1" fontWeight="bold">
                    {user?.vendor?.shopName ?? "Shop Name"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Managed by: {user?.name ?? "Unnamed"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {user?.email}
                  </Typography>
                </div>
              </>
            ) : (
              // Default Layout for User/Admin
              <>
                <Avatar
                  src={user?.profilePicture || ""}
                  alt={user?.name}
                  sx={{
                    width: 35,
                    height: 35,
                    bgcolor: user?.profilePicture
                      ? "transparent"
                      : "primary.main",
                  }}
                >
                  {!user?.profilePicture && user?.name?.charAt(0).toUpperCase()}
                </Avatar>
                <div>
                  <Typography variant="body1" fontWeight="bold">
                    {user?.name ?? "Unnamed"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {user?.email}
                  </Typography>
                </div>
              </>
            )}
          </div>

          <Divider />

          {/* Navigation Options */}
          <div className="flex flex-col gap-3 mt-3">
            {/* {userNavConfs.map((route, index) => (
              <MenuItem
                key={index}
                onClick={() => {
                  handleGO(route.path);
                  handleClose();
                }}
              >
                <ListItemIcon>{route.icon}</ListItemIcon>
                <Typography>{route.title}</Typography>
              </MenuItem>
            ))} */}
            {getMenuItems(user?.role as any).map((item, index) => (
              <MenuItem key={index} onClick={() => handleNavigation(item.path)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <Typography>{item.name}</Typography>
              </MenuItem>
            ))}

            {/* Logout Option */}
            <MenuItem
              onClick={() => {
                handleLogout();
                handleClose();
              }}
            >
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              <Typography>Logout</Typography>
            </MenuItem>
          </div>
        </div>
      </Popover>
    </>
  );
};

export default UserProfilePopover;
