import * as React from "react";

import { Text } from "libs/components";
import { RouterProvider } from "react-router-dom";
import { router } from "router";

function App() {
  return <RouterProvider router={router} fallbackElement={<Text>Loading</Text>} />;
}

export default App;
