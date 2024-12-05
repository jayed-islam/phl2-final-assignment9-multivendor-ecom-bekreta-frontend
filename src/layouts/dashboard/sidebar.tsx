import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

import { routes } from "./config-navigation";
import { useRouter } from "next/navigation";

interface SidebarProps {
  role: "admin" | "vendor";
}

const Sidebar: React.FC<SidebarProps> = ({ role }) => {
  const router = useRouter();

  return (
    <div className="bg-gray-100 h-full p-4">
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
    </div>
  );
};

export default Sidebar;
