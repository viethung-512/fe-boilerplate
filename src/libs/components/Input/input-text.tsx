import * as React from "react";

import clsx from "clsx";
import { Input as RSuiteInput, InputGroup as RSuiteInputGroup, InputProps as RSuiteInputProps } from "rsuite";

import { BaseInputProps, InputAddonItem } from "./index";
import { useInputHelper } from "libs/components/Input/useInputHelper";

export interface InputTextProps extends RSuiteInputProps, BaseInputProps {
  addons?: InputAddonItem[];
}

export const InputText: React.FC<InputTextProps> = ({ addons, statusState = "default", ...rest }) => {
  const { renderInputAddonItem } = useInputHelper();

  return (
    <RSuiteInputGroup inside={true} className={"input-wrapper"}>
      {addons?.filter((addon) => addon.placement === "left")?.map((addon) => renderInputAddonItem(addon))}
      <RSuiteInput
        {...rest}
        className={clsx(rest.className, {
          "input-positive": statusState === "positive",
          "input-alert": statusState === "alert",
          "input-warning": statusState === "warning",
        })}
      />
      {addons?.filter((addon) => addon.placement === "right")?.map((addon) => renderInputAddonItem(addon))}
    </RSuiteInputGroup>
  );
};
