import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Category,
  Payment,
  Reviews,
  ReviewsOutlined,
} from "@mui/icons-material";
import { paths } from "../paths";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InfoIcon from "@mui/icons-material/Info";

export const routes = {
  admin: [
    { path: "/admin", name: "Dashboard", icon: <DashboardIcon /> },
    { path: "/admin/users", name: "Manage Users", icon: <PeopleIcon /> },
    { path: paths.admin.products, name: "Products", icon: <InventoryIcon /> },
    { path: paths.admin.categories, name: "Categories", icon: <Category /> },
    { path: paths.admin.reviews, name: "Reviews", icon: <ReviewsOutlined /> },
    { path: paths.admin.transactions, name: "Transactions", icon: <Payment /> },
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

export const getMenuItems = (role: "admin" | "vendor" | "user") => {
  switch (role) {
    case "admin":
      return [
        { path: "/admin", name: "Dashboard", icon: <DashboardIcon /> },
        { path: "/admin/users", name: "Manage Users", icon: <PeopleIcon /> },
        {
          path: paths.admin.products,
          name: "Products",
          icon: <InventoryIcon />,
        },
        {
          path: paths.admin.categories,
          name: "Categories",
          icon: <Category />,
        },
        {
          path: paths.admin.reviews,
          name: "Reviews",
          icon: <ReviewsOutlined />,
        },
        {
          path: paths.admin.transactions,
          name: "Transactions",
          icon: <Payment />,
        },
      ];
    case "vendor":
      return [
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
      ];
    default: // "user"
      return [
        {
          name: "My Info",
          path: paths.account.orders,
          icon: <InfoIcon />,
        },
        {
          name: "My Orders",
          path: paths.account.orders,
          icon: <AccountCircleIcon />,
        },
        {
          name: "Change Password",
          path: paths.account.changePassword,
          icon: <AccountCircleIcon />,
        },
      ];
  }
};
