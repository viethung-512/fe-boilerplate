import { FC } from "react";

import { useNavigate } from "react-router-dom";
import { AppBar as MUIAppBar, AppBarProps as MUIAppBarProps, Button, IconButton, styled, Toolbar, Typography } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

import { SIDEBAR_WIDTH } from "utils/constants";
import { useLogout } from "query/auth/useLogout";

export type HeaderProps = MUIAppBarProps & {
  isSidebarOpen: boolean;
  onSidebarToggle: () => void;
};

const AppBar = styled(MUIAppBar, {
  shouldForwardProp(propName: string) {
    return !["isSidebarOpen", "onSidebarToggle"].includes(propName);
  },
})<HeaderProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ isSidebarOpen }) => isSidebarOpen,
      style: {
        marginLeft: SIDEBAR_WIDTH,
        width: `calc(100% - ${SIDEBAR_WIDTH}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

export const Header: FC<HeaderProps> = ({ isSidebarOpen, onSidebarToggle }) => {
  const navigate = useNavigate();
  const { logout, isLoading } = useLogout(() => {
    navigate("/login");
  });

  return (
    <AppBar position={"fixed"} color={"transparent"} isSidebarOpen={isSidebarOpen} onSidebarToggle={onSidebarToggle}>
      <Toolbar>
        <IconButton
          color={"inherit"}
          aria-label={"open drawer"}
          onClick={onSidebarToggle}
          edge={"start"}
          sx={[
            {
              marginRight: 5,
            },
            isSidebarOpen && { display: "none" },
          ]}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant={"h6"} noWrap component={"div"}>
          FE Boilerplate
        </Typography>
        <Button variant={"contained"} color={"primary"} onClick={() => logout()} sx={{ ml: "auto" }} loading={isLoading}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};
