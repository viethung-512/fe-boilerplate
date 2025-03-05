import { FC } from "react";
import { CSSObject, Divider, Drawer as MUIDrawer, drawerClasses as muiDrawerClasses, IconButton, List, styled, Theme, useTheme } from "@mui/material";
import { ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon } from "@mui/icons-material";

import { SIDEBAR_WIDTH } from "utils/constants";
import { SIDEBAR_ITEMS } from "utils/sidebar.config";
import { SidebarItem } from "components/layout/SidebarItem";

export type SidebarProps = {
  isSidebarOpen: boolean;
  onSidebarToggle: () => void;
};

const openedMixin = (theme: Theme): CSSObject => ({
  width: SIDEBAR_WIDTH,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MUIDrawer, { shouldForwardProp: (propName: string) => !["isSidebarOpen", "onSidebarToggle"].includes(propName) })(({ theme }) => ({
  width: SIDEBAR_WIDTH,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        [`& .${muiDrawerClasses.paper}`]: openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        [`& .${muiDrawerClasses.paper}`]: closedMixin(theme),
      },
    },
  ],
}));

export const Sidebar: FC<SidebarProps> = ({ isSidebarOpen, onSidebarToggle }) => {
  const theme = useTheme();

  return (
    <Drawer open={isSidebarOpen} variant={"permanent"}>
      <DrawerHeader>
        <IconButton onClick={onSidebarToggle}>{theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}</IconButton>
      </DrawerHeader>
      <Divider />
      {/* menus content */}
      <List>
        {SIDEBAR_ITEMS.map((item) => (
          <SidebarItem key={item.label} {...item} isSidebarOpen={isSidebarOpen} />
        ))}
      </List>
    </Drawer>
  );
};
