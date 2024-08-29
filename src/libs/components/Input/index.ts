import "./input.css";
import * as React from "react";
import { ButtonProps } from "libs/components";

export interface BaseInputProps {
  statusState?: "default" | "positive" | "alert" | "warning";
}

export interface BaseInputFieldProps extends BaseInputProps {
  fieldLabel: string;
  fieldLayout?: "horizontal" | "vertical";
  labelAlign?: "left" | "right"; // only apply for layout horizontal
  helperText?: string;
  isRequired?: boolean;
}

export type InputAddonItem = {
  isButton?: boolean;
  data: React.ReactNode;
  placement?: "left" | "right";
  props?: ButtonProps;
};

export { FieldWrapper } from "./field-wrapper";
export type { FieldWrapperProps } from "./field-wrapper";

export { InputText } from "./input-text";
export type { InputTextProps } from "./input-text";
export { TextField } from "./text-field";
export type { TextFieldProps } from "./text-field";

export { InputNumber } from "./input-number";
export type { InputNumberProps } from "./input-number";
