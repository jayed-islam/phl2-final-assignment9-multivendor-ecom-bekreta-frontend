"use client";

import React, { ReactNode, useState } from "react";
import AccountSidebar from "./sidebar";

interface Props {
  children: ReactNode;
}

const AccountLayout = ({ children }: Props) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className="max-w-5xl mx-auto flex items-start py-11 gap-5">
      <AccountSidebar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default AccountLayout;
