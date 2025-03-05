import { ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";

import { router } from "router";
import { theme } from "utils/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} fallbackElement={<span>Loading</span>} />
    </ThemeProvider>
  );
}

export default App;
