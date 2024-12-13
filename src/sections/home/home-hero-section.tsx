/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

// Import necessary MUI components
import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/system";
import { useRouter } from "next/router";

const HomeHeroSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const router = useRouter();

  const HeroBackground = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "90vh",
    backgroundImage: "url(https://via.placeholder.com/1920x1080)", // Replace with your image URL
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
  }));

  const Overlay = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  }));

  const handleCompareClick = () => {
    router.push("/compare");
  };

  return (
    <HeroBackground>
      <Overlay />
      <Grid
        container
        sx={{
          position: "relative",
          zIndex: 1,
          color: "#fff",
          textAlign: isSmallScreen ? "center" : "left",
          padding: isSmallScreen ? "20px" : "50px",
        }}
        spacing={4}
      >
        <Grid item xs={12} md={6}>
          <Typography variant={isSmallScreen ? "h4" : "h2"} fontWeight="bold">
            Revolutionize Your Online Shopping
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, mb: 4 }}>
            Experience unparalleled convenience and unbeatable deals from
            trusted vendors worldwide. Join our platform today and elevate your
            shopping journey.
          </Typography>
          <Box
            display="flex"
            flexDirection={isSmallScreen ? "column" : "row"}
            gap={2}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                textTransform: "none",
                borderRadius: "20px",
                padding: "10px 20px",
              }}
            >
              Explore Now
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              sx={{
                textTransform: "none",
                borderRadius: "20px",
                padding: "10px 20px",
                color: "#fff",
                borderColor: "#fff",
              }}
            >
              Become a Vendor
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              flexDirection: "column",
            }}
          >
            <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
              Compare Products
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              sx={{
                textTransform: "none",
                borderRadius: "20px",
                padding: "10px 20px",
              }}
              onClick={handleCompareClick}
            >
              Go to Compare Page
            </Button>
          </Box>
        </Grid>
      </Grid>
    </HeroBackground>
  );
};

export default HomeHeroSection;
