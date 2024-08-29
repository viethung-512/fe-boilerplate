import * as React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Button, Container, Content, Footer, Header, HorizontalStack, Sidebar } from "libs/components";
import { authAPI } from "api/authAPI";

export interface AuthLayoutProps {}

export const AuthLayout: React.FC<AuthLayoutProps> = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Sidebar>
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
      </Sidebar>
      <Container>
        <Header>
          <HorizontalStack justifyContent={"flex-end"}>
            <Button
              appearance={"primary"}
              onClick={async () => {
                await authAPI.logout();
                navigate("/login");
              }}
              style={{ marginLeft: "auto" }}
            >
              Logout
            </Button>
          </HorizontalStack>
        </Header>
        <Content>
          <Outlet />
        </Content>
        <Footer>Footer</Footer>
      </Container>
    </Container>
  );
};
