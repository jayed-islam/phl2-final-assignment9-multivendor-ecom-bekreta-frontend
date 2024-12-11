"use client";

import React, { useState } from "react";
import {
  AppBar,
  Typography,
  IconButton,
  Button,
  Drawer,
  Box,
  Stack,
  TextField,
  InputAdornment,
} from "@mui/material";
import { navConfs } from "./config-navigations";
import Link from "next/link";
import { paths } from "../paths";
import { ShoppingCart, Search, Menu } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toggleCart } from "@/redux/reducers/cart/cartSlice";
import UserProfilePopover from "./user-profile-popover";
import Image from "next/image";
import logo from "../../../public/logo.jpg";
import { useRouter } from "next/navigation";

const Header = () => {
  const { user } = useAppSelector((state) => state.auth);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useAppDispatch();
  const router = useRouter();

  const toggleMenu = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const handleOpenCart = () => {
    dispatch(toggleCart());
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      router.push(
        `${paths.product.root}?search=${encodeURIComponent(searchTerm)}`
      );
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <AppBar
      position="relative"
      style={{
        boxShadow:
          "0px 1px 3px 0px rgba(10, 5, 41, 0.10), 0px 1px 2px 0px rgba(10, 5, 41, 0.06)",
      }}
    >
      <div className="max-w-5xl mx-auto w-full h-full flex items-center justify-between">
        <Link href={paths.root} className="text-black">
          <Image src={logo} alt="bekreta logo" className="w-24" />
        </Link>
        <Box
          sx={{
            display: {
              md: "flex",
              xs: "none",
            },
            alignItems: "center",
            flex: 1,
            maxWidth: "400px",
            ml: 2,
          }}
        >
          <TextField
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
            variant="outlined"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton color="primary" onClick={handleSearch}>
                    <Search />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "3rem",
              },
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: "2.5rem",
            alignItems: "center",
          }}
        >
          <div className="items-center gap-[2.5rem] hidden md:flex">
            {navConfs.map((route) => (
              <Link
                href={route.path}
                key={route.title}
                style={{
                  textDecoration: "none",
                  color: "#0A0A0A",
                }}
              >
                <Typography
                  color="inherit"
                  variant="h6"
                  sx={{
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  {route.title}
                </Typography>
              </Link>
            ))}
            {!user && (
              <Link href={paths.signin}>
                <Button>Login</Button>
              </Link>
            )}
          </div>
          <Stack direction="row" alignItems="center" spacing={2}>
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleOpenCart}
              sx={{
                border: "1px solid gray",
              }}
            >
              <ShoppingCart />
            </IconButton>
            {user && user._id && user.role === "customer" && (
              <UserProfilePopover />
            )}
            {user && user._id && user.role === "vendor" && (
              <Link href={paths.vendor.root}>
                <Button>Dashboard</Button>
              </Link>
            )}
          </Stack>
        </Box>

        <IconButton
          edge="end"
          color="inherit"
          sx={{ display: { xs: "block", md: "none" } }}
          onClick={toggleMenu(true)}
        >
          <Menu />
        </IconButton>
      </div>

      {/* Drawer Component */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleMenu(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleMenu(false)}
          onKeyDown={toggleMenu(false)}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "2.5rem",
              alignItems: "center",
            }}
          >
            {navConfs.map((route) => (
              <Link
                href={route.path}
                key={route.title}
                style={{
                  textDecoration: "none",
                  color: "#0A0A0A",
                }}
              >
                <Typography
                  color="inherit"
                  variant="h6"
                  sx={{
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  {route.title}
                </Typography>
              </Link>
            ))}
            {!user && (
              <Link href={paths.signin}>
                <Button>Login</Button>
              </Link>
            )}
            <Stack direction="row" alignItems="center" spacing={2}>
              <IconButton
                edge="end"
                color="inherit"
                onClick={handleOpenCart}
                sx={{
                  border: "1px solid gray",
                }}
              >
                <ShoppingCart />
              </IconButton>
              {user && user._id && user.role === "customer" && (
                <UserProfilePopover />
              )}
              {user && user._id && user.role === "vendor" && (
                <Link href={paths.vendor.root}>
                  <Button>Dashboard</Button>
                </Link>
              )}
            </Stack>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
