import { createTheme, Theme } from "@mui/material";

export const theme = (outerTheme: Theme) =>
  createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {},
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            "--Paper-shadow": "none !important",
            borderBottom: `1px solid ${outerTheme.palette.divider}`,
          },
        },
      },
    },
  });
