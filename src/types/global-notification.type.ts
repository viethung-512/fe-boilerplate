import { ReactNode } from "react";
import { AlertProps } from "@mui/material";

export type GlobalNotificationProps = {
  isOpen: boolean;
  message: string | ReactNode;
  color?: AlertProps["severity"];
  variant?: AlertProps["variant"];
};
