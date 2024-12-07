"use client";

import React, { useState } from "react";
import {
  AppBar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import { navConfs } from "./config-navigations";
import Link from "next/link";
import { paths } from "../paths";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Toggle the drawer state
  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const routes = ["Home", "About", "Services", "Contact"];

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
          Logo
        </Link>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: "3.12rem",
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
          <Button>Login</Button>
        </Box>

        <IconButton
          edge="end"
          color="inherit"
          sx={{ display: { xs: "block", md: "none" } }}
          onClick={toggleDrawer(true)}
        >
          menu
        </IconButton>
      </div>

      {/* Drawer Component */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {routes.map((route) => (
              <ListItem key={route}>
                <ListItemText primary={route} />
              </ListItem>
            ))}
            <ListItem>
              <Button variant="outlined" color="primary" fullWidth>
                Login
              </Button>
            </ListItem>
            <ListItem>
              <Button variant="contained" color="secondary" fullWidth>
                Sign Up
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
