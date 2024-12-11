import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Reviews } from "@mui/icons-material";
import { paths } from "../paths";

export const routes = {
  admin: [
    { path: "/admin", name: "Dashboard", icon: <DashboardIcon /> },
    { path: "/admin/users", name: "Manage Users", icon: <PeopleIcon /> },
    { path: paths.admin.products, name: "Products", icon: <InventoryIcon /> },
  ],
  vendor: [
    { path: "/vendor", name: "Dashboard", icon: <DashboardIcon /> },
    {
      path: "/vendor/products",
      name: "Manage Products",
      icon: <InventoryIcon />,
    },
    { path: "/vendor/orders", name: "Orders", icon: <ShoppingCartIcon /> },
    {
      path: "/vendor/reviews",
      name: "Customer Reviews",
      icon: <Reviews />,
    },
  ],
};
