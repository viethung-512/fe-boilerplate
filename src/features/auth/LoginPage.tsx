import { FC, useState } from "react";
import { Button } from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";

import { authAPI } from "api/authAPI";
import { decodeString } from "helper/stringHelper";

export interface LoginPageProps {}

export const LoginPage: FC<LoginPageProps> = () => {
  const [username, setUserName] = useState("");
  const [searchParams] = useSearchParams();
  const redirectUrlInQuery = searchParams.get("redirectUrl");
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <input value={username} onChange={(e) => setUserName(e.target.value)} />
        <Button
          onClick={async () => {
            await authAPI.login(username);
            const redirectUrl = redirectUrlInQuery ? decodeString(redirectUrlInQuery) : "/";
            navigate(redirectUrl);
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};
