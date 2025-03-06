import { useMutation } from "@tanstack/react-query";
import { LoginInput, LoginOutput } from "types/auth.type";
import { authAPI } from "api/authAPI";
import { localstorageConfig } from "config";

export function useLogin(cb?: () => void) {
  const { mutate, isPending } = useMutation<LoginOutput, any, LoginInput>({
    mutationFn: (input) => authAPI.login(input),
    onSuccess: async (_, { username }) => {
      localStorage.setItem(localstorageConfig.keys.AUTH_USERNAME, username);
      if (cb) {
        cb();
      }
    },
    onError: (error) => {},
  });
  return {
    login: mutate,
    isLoading: isPending,
  };
}
