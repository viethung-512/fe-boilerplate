import { Alert, Snackbar } from "@mui/material";
import { createContext, Dispatch, FC, PropsWithChildren, SetStateAction, SyntheticEvent, useCallback, useState } from "react";

import { GlobalNotificationProps } from "types/global-notification.type";

type GlobalState = {
  snackbarProps: GlobalNotificationProps;
  setSnackbarProps: Dispatch<SetStateAction<GlobalNotificationProps>>;
};

const DEFAULT_SNACKBAR_PROPS: GlobalNotificationProps = {
  isOpen: false,
  message: "",
  variant: "filled",
  color: "info",
};

export const GlobalContext = createContext<GlobalState>({
  snackbarProps: DEFAULT_SNACKBAR_PROPS,
  setSnackbarProps: () => {},
});

export const GlobalProvider: FC<PropsWithChildren> = ({ children }) => {
  const [snackbarProps, setSnackbarProps] = useState<GlobalNotificationProps>(DEFAULT_SNACKBAR_PROPS);

  const handleCloseNotification = useCallback((event: SyntheticEvent | Event) => {
    setSnackbarProps(DEFAULT_SNACKBAR_PROPS);
  }, []);

  return (
    <GlobalContext.Provider value={{ snackbarProps, setSnackbarProps }}>
      {children}
      <Snackbar open={snackbarProps.isOpen} autoHideDuration={2000} onClose={handleCloseNotification} anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
        <Alert onClose={handleCloseNotification} severity={snackbarProps.color} variant={snackbarProps.variant} sx={{ width: "100%" }}>
          {snackbarProps.message}
        </Alert>
      </Snackbar>
    </GlobalContext.Provider>
  );
};
