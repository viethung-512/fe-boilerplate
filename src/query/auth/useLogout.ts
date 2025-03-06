import { useMutation } from "@tanstack/react-query";
import { authAPI } from "api/authAPI";

export function useLogout(cb?: () => void) {
  const { mutate, isPending } = useMutation<void, any, void>({
    mutationFn: () => authAPI.logout(),
    onSuccess: async () => {
      if (cb) {
        cb();
      }
    },
    onError: (error) => {},
  });
  return {
    logout: mutate,
    isLoading: isPending,
  };
}
