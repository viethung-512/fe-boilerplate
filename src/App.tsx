import { ThemeProvider, useTheme } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";

import { router } from "router";
import { theme } from "utils/theme";
import { queryClient } from "query/queryClient";
import { GlobalProvider } from "context/global.context";

function App() {
  const outerTheme = useTheme();

  return (
    <ThemeProvider theme={theme(outerTheme)}>
      <QueryClientProvider client={queryClient}>
        <GlobalProvider>
          <RouterProvider router={router} fallbackElement={<span>Loading</span>} />
        </GlobalProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
