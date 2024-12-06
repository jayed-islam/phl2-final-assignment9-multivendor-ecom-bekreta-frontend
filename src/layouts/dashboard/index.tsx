"use client";

import React, { useState } from "react";
import { Drawer, Box, useMediaQuery, Theme } from "@mui/material";
import Sidebar from "./sidebar";
import Header from "./header";
import { useAppSelector } from "@/redux/hooks";

interface LayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<LayoutProps> = ({ children }) => {
  const { user } = useAppSelector((state) => state.auth);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  // Media query for responsive design
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <Box sx={{ display: "flex" }}>
        <Drawer
          variant={isDesktop ? "persistent" : "temporary"}
          open={isSidebarOpen || isDesktop}
          onClose={toggleSidebar}
          sx={{
            width: 265,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: 265,
              boxSizing: "border-box",
            },
          }}
        >
          {user?.role && <Sidebar role={user.role as "admin" | "vendor"} />}
        </Drawer>

        {/* Page Content */}
        <Box
          component="main"
          className="flex-1 bg-gray-50 p-4 h-screen"
          sx={{
            ml: isDesktop && isSidebarOpen ? "265px" : "0",
            transition: "margin 0.3s",
          }}
        >
          {children}
        </Box>
      </Box>
    </div>
  );
};

export default DashboardLayout;
