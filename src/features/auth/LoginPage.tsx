import * as React from "react";
import { Button, Container, Stack } from "libs/components";
import { authAPI } from "api/authAPI";
import { useNavigate, useSearchParams } from "react-router-dom";
import { decodeString } from "helper/stringHelper";

export interface LoginPageProps {}

export const LoginPage: React.FC<LoginPageProps> = () => {
  const [username, setUserName] = React.useState("");
  const [searchParams] = useSearchParams();
  const redirectUrlInQuery = searchParams.get("redirectUrl");
  const navigate = useNavigate();

  return (
    <Container>
      <Stack>
        <input value={username} onChange={(e) => setUserName(e.target.value)} />
        <Button
          appearance={"primary"}
          onClick={async () => {
            await authAPI.login(username);
            const redirectUrl = redirectUrlInQuery ? decodeString(redirectUrlInQuery) : "/";
            navigate(redirectUrl);
          }}
        >
          Submit
        </Button>
      </Stack>
    </Container>
  );
};
