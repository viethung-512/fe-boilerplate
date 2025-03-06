import { ThemeProvider, useTheme } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";

import { router } from "router";
import { theme } from "utils/theme";
import { queryClient } from "query/queryClient";

function App() {
  const outerTheme = useTheme();

  return (
    <ThemeProvider theme={theme(outerTheme)}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} fallbackElement={<span>Loading</span>} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
