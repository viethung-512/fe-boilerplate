import { FC } from "react";
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { SidebarProps } from "components/layout/Sidebar";
import { ISidebarItem } from "utils/sidebar.config";

export type SidebarItemProps = Pick<SidebarProps, "isSidebarOpen"> & ISidebarItem;

export const SidebarItem: FC<SidebarItemProps> = ({ isSidebarOpen, icon, label, routeUrl }) => {
  const navigate = useNavigate();

  return (
    <ListItem disablePadding={true} sx={{ display: "block" }}>
      <ListItemButton onClick={() => navigate(routeUrl)}>
        <ListItemIcon sx={{ minWidth: 0, justifyContent: "center", mr: isSidebarOpen ? 3 : "auto" }}>{icon}</ListItemIcon>
        <ListItemText primary={label} sx={{ opacity: isSidebarOpen ? 1 : 0 }} />
      </ListItemButton>
    </ListItem>
  );
};
