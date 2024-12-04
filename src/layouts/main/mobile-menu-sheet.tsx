"use client";

import { useState } from "react";
import { navConfs } from "./config-navigations";
import logo from "../../assets/logo/logo.png";
import Link from "next/link";
import { Drawer, IconButton } from "@mui/material";
import Image from "next/image";

const MobileMenu = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (title: string) => {
    setOpenMenu((prev) => (prev === title ? null : title));
  };

  const handleMenuItemClick = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="block md:hidden">
      <IconButton
        onClick={() => setIsDrawerOpen(true)}
        className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </IconButton>

      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <div className="p-4 w-64">
          <Image src={logo} alt="Logo" className="mb-7" />
          <nav aria-label="Mobile Menu">
            {navConfs.map((item) => (
              <div key={item.title}>
                <div
                  className="flex justify-between items-center py-2 cursor-pointer bg-gray-100 mb-2 px-3"
                  onClick={() => {
                    if (item.children) {
                      toggleMenu(item.title);
                    } else {
                      handleMenuItemClick();
                    }
                  }}
                >
                  <Link
                    className="block text-black text-base font-normal"
                    href={item.path || "#"}
                  >
                    {item.title}
                  </Link>
                  {item.children && item.children.length > 0 && (
                    <button className="text-gray-700 hover:text-black text-2xl">
                      {openMenu === item.title ? "−" : "+"}
                    </button>
                  )}
                </div>
                {item.children && item.children.length > 0 && (
                  <div
                    className={`ml-4 overflow-hidden transition-all duration-500 ${
                      openMenu === item.title ? "max-h-screen" : "max-h-0"
                    }`}
                  >
                    <ul className="space-y-2 my-3 ml-3">
                      {item.children.map((child) => (
                        <li key={child.title}>
                          <Link
                            className="block text-md text-gray-700 bg-gray-100 py-1 px-3"
                            href={child.path || "#"}
                            onClick={handleMenuItemClick}
                          >
                            {child.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </Drawer>
    </div>
  );
};

export default MobileMenu;
