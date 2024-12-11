import React from "react";
import { Drawer } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const drawerWidth = 240;

interface Props {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}

const navItems = [
  { label: "Account", route: "/account" },
  { label: "Orders", route: "/account/orders" },
];

const AccountSidebar = ({ mobileOpen, handleDrawerToggle }: Props) => {
  const pathname = usePathname();
  const drawerContent = (
    <div>
      <div className="w-56 bg-gray-100 p-3 rounded-3xl flex flex-col gap-2 border shadow">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.route}
            className={`block px-4 py-2 rounded-3xl text-gray-700 hover:bg-gray-300 transition-all duration-200 ${
              pathname === item.route && "bg-gray-300"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <Drawer
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawerContent}
      </Drawer>

      <div>{drawerContent}</div>
    </>
  );
};

export default AccountSidebar;
