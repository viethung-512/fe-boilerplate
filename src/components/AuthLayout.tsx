import { FC } from "react";

import { Button, Container, Stack } from "@mui/material";
import { Link, Outlet, useNavigate } from "react-router-dom";

import { authAPI } from "api/authAPI";

export interface AuthLayoutProps {}

export const AuthLayout: FC<AuthLayoutProps> = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div>
        <ul>
          <li>
            <Link to={"/"}>Dashboard</Link>
          </li>
          <li>
            <Link to={"/feature-1"}>Feature 1</Link>
          </li>
          <li>
            <Link to={"/feature-2"}>Feature 2</Link>
          </li>
          <li>
            <Link to={"/feature-3"}>Feature 3</Link>
          </li>
          <li>
            <Link to={"/feature-4"}>Feature 4</Link>
          </li>
        </ul>
      </div>
      <Container>
        <div>
          <Stack direction={"row"} justifyContent={"flex-end"}>
            <Button
              onClick={async () => {
                await authAPI.logout();
                navigate("/login");
              }}
              style={{ marginLeft: "auto" }}
            >
              Logout
            </Button>
          </Stack>
        </div>
        <div>
          <Outlet />
        </div>
      </Container>
    </Container>
  );
};
