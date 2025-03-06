import { useMutation } from "@tanstack/react-query";

import { authAPI } from "api/authAPI";
import { useNotification } from "hooks/useNotification";

export function useLogout(cb?: () => void) {
  const { showSuccess, showError } = useNotification();

  const { mutate, isPending } = useMutation<void, any, void>({
    mutationFn: () => authAPI.logout(),
    onSuccess: async () => {
      showSuccess({ message: "Logout successfully" });
      if (cb) {
        cb();
      }
    },
    onError: (error) => {
      showError({ message: error.message || "Something went wrong while logging out" });
    },
  });

  return {
    logout: mutate,
    isLoading: isPending,
  };
}
