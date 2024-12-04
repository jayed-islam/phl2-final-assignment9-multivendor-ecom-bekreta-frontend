"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Container,
  Stack,
} from "@mui/material";
import { navConfs } from "./config-navigations";
import Link from "next/link";
import Image from "next/image";
import { paths } from "../paths";
import iqaLogo from "../../../public/assets/logo/iqa-logo-h.svg";
import SadakahIcon from "@/components/icons/sadakah-icon";
import UserIcon from "@/components/icons/user-icon";
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
      // variant="outlined"
      style={{
        boxShadow:
          "0px 1px 3px 0px rgba(10, 5, 41, 0.10), 0px 1px 2px 0px rgba(10, 5, 41, 0.06)",
        // zIndex: 99999
      }}
    >
      <Container
        disableGutters
        maxWidth="xl"
        sx={{
          maxWidth: 1300,
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            justifyContent: "space-between",
          }}
        >
          <Link href={paths.root}>
            <Image
              src={iqaLogo}
              alt="iqa logo horiz."
              style={{
                width: "14.625rem",
                height: "2rem",
              }}
            />
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
            <Stack direction="row" spacing="0.5rem">
              <Button
                startIcon={<SadakahIcon />}
                sx={{
                  bgcolor: "primary.light",
                  color: "primary.dark",
                  "&:hover": {
                    bgcolor: "primary.mediumLight",
                  },
                }}
              >
                দান করুন
              </Button>
              <Button startIcon={<UserIcon />}>লগ ইন করুন</Button>
            </Stack>
          </Box>

          <IconButton
            edge="end"
            color="inherit"
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={toggleDrawer(true)}
          >
            menu
          </IconButton>
        </Toolbar>
      </Container>

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
