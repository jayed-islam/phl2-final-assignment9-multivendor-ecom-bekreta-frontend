"use client";
import React, { useState } from "react";
import { Box, Typography, IconButton, Snackbar } from "@mui/material";
import logo from "../../../public/logo.jpg";
import Image from "next/image";
import { paths } from "../paths";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  YouTube,
} from "@mui/icons-material";

// Define social media links array
const socialMediaLinks = [
  { name: "Facebook", link: "https://facebook.com", icon: <Facebook /> },
  { name: "Twitter", link: "https://twitter.com", icon: <Twitter /> },
  { name: "LinkedIn", link: "https://linkedin.com", icon: <LinkedIn /> },
  { name: "Instagram", link: "https://instagram.com", icon: <Instagram /> },
  { name: "YouTube", link: "https://youtube.com", icon: <YouTube /> },
];

// Define navConfs for the footer links
const navConfs = [
  { title: "Compaire", path: paths.comparisonProduct },
  { title: "Recent", path: paths.product.recent },
  { title: "Shops", path: paths.vendor.allVendors },
  { title: "My Account", path: paths.account.root },
  { title: "Cart", path: paths.cart.root },
];

// Define navConf2 for additional footer links
const navConf2 = [
  { title: "FAQ", path: "/faq" },
  { title: "About Us", path: "/about-us" },
  { title: "Contact", path: "/contact" },
  { title: "Privacy Policy", path: "/privacy-policy" },
];

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [openToast, setOpenToast] = useState(false);
  const [errorToast, setErrorToast] = useState(false);

  const handleSubscribe = () => {
    if (validateEmail(email)) {
      // Email is valid, show success toast
      setOpenToast(true);
      setEmail(""); // Clear the email input after submission
    } else {
      // Show error toast if email is invalid
      setErrorToast(true);
    }
  };

  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <Box
      sx={{
        bgcolor: "#F6F6F6",
        px: {
          xs: "11px",
          xl: 0,
        },
        pt: "3rem",
        pb: "1.5rem",
        borderTop: "1px solid #E7E7E7",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">
              Subscribe to our newsletter to get updates.
            </h1>

            <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                placeholder="Email Address"
              />
              <button
                onClick={handleSubscribe}
                className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
              >
                Subscribe
              </button>
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-800 dark:text-white">
              Quick Links
            </p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              {navConfs.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.path}
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-800 dark:text-white">
              Additional Links
            </p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              {navConf2.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.path}
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700" />

        <div className="flex items-center justify-between">
          <Link href={paths.root}>
            <Image
              src={logo}
              alt="logo"
              height={500}
              width={500}
              className="w-24"
            />
          </Link>
          <div>
            <Typography variant="h6" gutterBottom>
              Follow Us on Social Media
            </Typography>
            <div className="flex space-x-4">
              {socialMediaLinks.map((social) => (
                <IconButton
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:text-blue-500"
                >
                  {social.icon}
                </IconButton>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Success Toast */}
      <Snackbar
        open={openToast}
        autoHideDuration={6000}
        onClose={() => setOpenToast(false)}
        message="Subscription successful! You will receive updates via email."
      />

      {/* Error Toast */}
      <Snackbar
        open={errorToast}
        autoHideDuration={6000}
        onClose={() => setErrorToast(false)}
        message="Please enter a valid email address."
      />
    </Box>
  );
};

export default Footer;
