import { FC } from "react";
import { Button, Container, Stack } from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { decodeString } from "helper/stringHelper";
import { LoginInput } from "types/auth.type";
import { HookFormInputTextField } from "components/libs/react-hook-form";
import { useLogin } from "query/auth/useLogin";
import { LOGIN_VALIDATION_SCHEMA } from "features/auth/utils/validationSchema";

export interface LoginPageProps {}

export const LoginPage: FC<LoginPageProps> = () => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const redirectUrlInQuery = searchParams.get("redirectUrl");

  const formMethods = useForm<LoginInput>({
    defaultValues: { username: "" },
    resolver: yupResolver(LOGIN_VALIDATION_SCHEMA),
    mode: "onChange",
  });

  const { login, isLoading } = useLogin(() => {
    const redirectUrl = redirectUrlInQuery ? decodeString(redirectUrlInQuery) : "/";
    navigate(redirectUrl);
  });

  return (
    <Container sx={{ py: 4 }}>
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit((values) => login(values))}>
          <Stack spacing={2} width={500} sx={{ mx: "auto" }}>
            <HookFormInputTextField fieldName={"username"} label={"Username"} placeholder={"Enter value"} />
            <Button loading={isLoading} type={"submit"} variant={"contained"} color={"primary"} fullWidth={true} size={"large"}>
              Submit
            </Button>
          </Stack>
        </form>
      </FormProvider>
    </Container>
  );
};
