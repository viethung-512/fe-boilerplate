import { useCallback, useContext } from "react";
import { GlobalContext } from "context/global.context";
import { GlobalNotificationProps } from "types/global-notification.type";

export function useNotification() {
  const { setSnackbarProps } = useContext(GlobalContext);

  return {
    showSuccess: useCallback(
      (props: Omit<GlobalNotificationProps, "color" | "isOpen">) => {
        setSnackbarProps({
          isOpen: true,
          color: "success",
          ...props,
        });
      },
      [setSnackbarProps],
    ),
    showError: useCallback(
      (props: Omit<GlobalNotificationProps, "color" | "isOpen">) => {
        setSnackbarProps({
          isOpen: true,
          color: "error",
          ...props,
        });
      },
      [setSnackbarProps],
    ),
  };
}
