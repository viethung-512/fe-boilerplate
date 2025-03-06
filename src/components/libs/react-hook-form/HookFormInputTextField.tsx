import { TextField, TextFieldProps } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

import { BaseHookFormInput } from "./index";

export type HookFormInputTextFieldProps<T extends object = {}> = BaseHookFormInput<T> & Omit<TextFieldProps, "value">;

export function HookFormInputTextField<T extends object>({ fieldName, ...rest }: HookFormInputTextFieldProps<T>) {
  const { control } = useFormContext<T>();

  return (
    <Controller
      render={({ field, fieldState: { error }, ...restFormField }) => {
        return (
          <TextField
            {...rest}
            {...restFormField}
            value={field.value}
            onChange={(e) => {
              field.onChange(e.target.value);
              if (rest.onChange) {
                rest.onChange(e);
              }
            }}
            helperText={error?.message || rest.helperText}
            error={!!error?.message}
          />
        );
      }}
      name={fieldName}
      control={control}
    />
  );
}
