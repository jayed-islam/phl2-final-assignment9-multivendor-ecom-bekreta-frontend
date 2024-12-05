"use client";

import React from "react";
import { Box, Typography, Card, Button, Grid, Avatar } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";
import UpdateVendorProfileDilaog from "./update-my-profile";
import useBoolean from "@/hooks/use-boolean";

const VendorAccountView = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const dialog = useBoolean();

  return (
    <Box
      className="p-4"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Shop Profile Section */}
      <Card
        sx={{
          width: "100%",
          maxWidth: 800,
          p: 3,
          mb: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: "start",
              gap: 3,
            }}
          >
            <Avatar
              alt="Shop Logo"
              src="/shop-logo-placeholder.png"
              sx={{
                width: 95,
                height: 95,
              }}
            />
            <Box>
              <Typography variant="h5" fontWeight="bold">
                Vendor Shop Name
              </Typography>
              <Typography variant="body1" color="textSecondary" mt={1}>
                Welcome to our shop! We offer the best products at amazing
                prices.
              </Typography>
              <Typography variant="body2" color="textSecondary" mt={1}>
                <strong>Contact:</strong> +123 456 7890
              </Typography>
              <Typography variant="body2" color="textSecondary" mt={1}>
                <strong>Email:</strong> shop@example.com
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  mt: 3,
                  fontWeight: "bold",
                }}
                onClick={dialog.setTrue}
              >
                Update Profile
              </Button>
            </Box>
          </Box>
        </Box>
      </Card>

      {/* Metrics Section */}
      <Grid container spacing={2} sx={{ maxWidth: 800 }}>
        {[
          { label: "Products", value: 120 },
          { label: "Reviews", value: 450 },
          { label: "Orders", value: 320 },
          { label: "Profit", value: "$12,500" },
        ].map((item, index) => (
          <Grid item xs={6} sm={3} key={index}>
            <Card sx={{ p: 2, textAlign: "center", m: 0 }}>
              <Typography variant="h6" fontWeight="bold" color="primary" mb={1}>
                {item.value}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {item.label}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
      <UpdateVendorProfileDilaog dialog={dialog} />
    </Box>
  );
};

export default VendorAccountView;
