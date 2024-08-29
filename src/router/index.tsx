import { createBrowserRouter, redirect } from "react-router-dom";
import queryString from "query-string";

import { authAPI } from "api/authAPI";
import { decodeString, encodeString } from "helper/stringHelper";
import { LoginPage } from "features/auth/LoginPage";
import { AuthLayout } from "components/AuthLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    loader: async ({ request }) => {
      const authUser = await authAPI.getMe();
      if (authUser) {
        return authUser;
      }
      const redirectUrl = new URL(request.url).searchParams.get("redirectUrl") || window.location.pathname;
      return redirect(
        queryString.stringifyUrl({
          url: "/login",
          query: { redirectUrl: encodeString(redirectUrl + window.location.search) },
        }),
      );
    },
    children: [
      { path: "", Component: () => <span>Hello</span> },
      { path: "/feature-1", Component: () => <span>Feature 1</span> },
      { path: "/feature-2", Component: () => <span>Feature 2</span> },
      { path: "/feature-3", Component: () => <span>Feature 3</span> },
      { path: "/feature-4", Component: () => <span>Feature 4</span> },
    ],
    Component: AuthLayout,
  },
  {
    path: "/login",
    loader: async ({ request }) => {
      const authUser = await authAPI.getMe();
      if (authUser) {
        const redirectUrlInQuery = new URL(request.url).searchParams.get("redirectUrl");
        const redirectUrl = redirectUrlInQuery ? decodeString(redirectUrlInQuery) : "/";
        return redirect(redirectUrl);
      }
      return null;
    },
    action: async ({ request }) => {
      console.log("login action");
      console.log(await request.formData());
    },
    Component: LoginPage,
  },
]);
