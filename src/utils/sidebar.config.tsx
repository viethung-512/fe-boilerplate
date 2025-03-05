import { ReactNode } from "react";

import { Dashboard as DashboardIcon, Inbox as InboxIcon, Mail as MailIcon } from "@mui/icons-material";

export interface ISidebarItem {
  icon: ReactNode;
  label: string;
  routeUrl: string;
}

export const SIDEBAR_ITEMS: ISidebarItem[] = [
  {
    icon: <DashboardIcon />,
    label: "Dashboard",
    routeUrl: "/",
  },
  {
    icon: <MailIcon />,
    label: "Feature 1",
    routeUrl: "/feature-1",
  },
  {
    icon: <InboxIcon />,
    label: "Feature 2",
    routeUrl: "/feature-2",
  },
  {
    icon: <MailIcon />,
    label: "Feature 3",
    routeUrl: "/feature-3",
  },
  {
    icon: <InboxIcon />,
    label: "Feature 4",
    routeUrl: "/feature-4",
  },
];
