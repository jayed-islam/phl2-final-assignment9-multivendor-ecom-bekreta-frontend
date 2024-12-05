import React from "react";
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { routes } from "./config-navigation";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { logout } from "@/redux/reducers/auth/authSlice";

interface SidebarProps {
  role: "admin" | "vendor";
}

const Sidebar: React.FC<SidebarProps> = ({ role }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="bg-gray-100 p-4 flex flex-col justify-between items-start h-screen">
      <List>
        {routes[role].map((route) => (
          <ListItem
            key={route.path}
            onClick={() => router.push(route.path)}
            className="hover:bg-gray-200 rounded-lg cursor-pointer"
          >
            <ListItemIcon>{route.icon}</ListItemIcon>
            <ListItemText primary={route.name} />
          </ListItem>
        ))}
      </List>
      <Button
        fullWidth
        sx={{
          mb: 5,
        }}
        onClick={handleLogout}
      >
        Logout
      </Button>
    </div>
  );
};

export default Sidebar;
