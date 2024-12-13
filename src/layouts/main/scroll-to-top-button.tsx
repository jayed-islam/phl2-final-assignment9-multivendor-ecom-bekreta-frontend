"use client";

import { IconButton } from "@mui/material";
import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll the page to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      {isVisible && (
        <IconButton
          onClick={scrollToTop}
          sx={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            backgroundColor: "primary.main",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
            cursor: "pointer",
            fontSize: "24px",
            zIndex: 1000,
            "&: hover": {
              bgcolor: "gray",
            },
          }}
        >
          ↑
        </IconButton>
      )}
    </div>
  );
};

export default ScrollToTopButton;
