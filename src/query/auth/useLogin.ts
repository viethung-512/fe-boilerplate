import { useMutation } from "@tanstack/react-query";

import { LoginInput, LoginOutput } from "types/auth.type";
import { authAPI } from "api/authAPI";
import { localstorageConfig } from "config";
import { useNotification } from "hooks/useNotification";

export function useLogin(cb?: () => void) {
  const { showSuccess, showError } = useNotification();

  const { mutate, isPending } = useMutation<LoginOutput, any, LoginInput>({
    mutationFn: (input) => authAPI.login(input),
    onSuccess: async (_, { username }) => {
      showSuccess({ message: "Login successfully" });
      localStorage.setItem(localstorageConfig.keys.AUTH_USERNAME, username);
      if (cb) {
        cb();
      }
    },
    onError: (error) => {
      showError({ message: error.message || "Something went wrong while logging in" });
    },
  });

  return {
    login: mutate,
    isLoading: isPending,
  };
}
