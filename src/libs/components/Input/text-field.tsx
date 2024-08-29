import * as React from "react";
import { FieldWrapper, FieldWrapperProps, InputText, InputTextProps } from "libs/components";

export interface TextFieldProps extends FieldWrapperProps, InputTextProps {}

export const TextField: React.FC<TextFieldProps> = ({ fieldLabel, fieldLayout, helperText, isRequired, statusState, ...rest }) => {
  return (
    <FieldWrapper fieldLabel={fieldLabel} fieldLayout={fieldLayout} helperText={helperText} isRequired={isRequired} statusState={statusState}>
      <InputText {...rest} statusState={statusState} />
    </FieldWrapper>
  );
};
