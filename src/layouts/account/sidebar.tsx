import React from "react";
import { Drawer, Box } from "@mui/material";
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
  { label: "Change password", route: "/account/change-password" },
  { label: "My Reviews", route: "/account/my-reviews" },
];

const AccountSidebar: React.FC<Props> = ({
  mobileOpen,
  handleDrawerToggle,
}) => {
  const pathname = usePathname();

  const renderNavItems = () =>
    navItems.map((item) => (
      <Link
        key={item.label}
        href={item.route}
        className={`block px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-200 transition ${
          pathname === item.route ? "bg-gray-300 font-semibold" : ""
        }`}
      >
        {item.label}
      </Link>
    ));

  const drawerContent = (
    <Box
      className="p-3 lg:bg-gray-100 lg:rounded-xl lg:shadow-md flex flex-col gap-2"
      role="presentation"
    >
      {renderNavItems()}
    </Box>
  );

  return (
    <>
      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <h2 className="text-2xl font-semibold p-5">My Account</h2>
        {drawerContent}
      </Drawer>

      {/* Desktop Sidebar */}
      <Box
        sx={{
          display: { xs: "none", lg: "block" },
          width: drawerWidth,
        }}
      >
        {drawerContent}
      </Box>
    </>
  );
};

export default AccountSidebar;
