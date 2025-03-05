import { FC, useState } from "react";

import { Box, CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";

import { Header } from "components/layout/Header";
import { DrawerHeader, Sidebar } from "components/layout/Sidebar";

export interface AuthLayoutProps {}

export const AuthLayout: FC<AuthLayoutProps> = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <Box display={"flex"}>
      <CssBaseline />
      <Header isSidebarOpen={sidebarOpen} onSidebarToggle={() => setSidebarOpen((prev) => !prev)} />
      <Sidebar isSidebarOpen={sidebarOpen} onSidebarToggle={() => setSidebarOpen((prev) => !prev)} />
      <Box component={"main"} sx={{ flexGrow: 1, height: "100vh" }}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
};
