import * as React from "react";

import clsx from "clsx";
import { InputGroup as RSuiteInputGroup, InputNumber as RSuiteInputNumber, InputNumberProps as RSuiteInputNumberProps } from "rsuite";

import { BaseInputProps } from "libs/components";
import { InputAddonItem } from "libs/components/Input/index";
import { useInputHelper } from "libs/components/Input/useInputHelper";

export interface InputNumberProps extends RSuiteInputNumberProps, BaseInputProps {
  addons?: InputAddonItem[];
}

export const InputNumber: React.FC<InputNumberProps> = ({ addons, statusState = "default", ...rest }) => {
  const { renderInputAddonItem } = useInputHelper();

  return (
    <RSuiteInputGroup inside={true} className={"input-wrapper"}>
      {addons?.filter((addon) => addon.placement === "left")?.map((addon) => renderInputAddonItem(addon))}
      <RSuiteInputNumber
        {...rest}
        className={clsx(rest.className, {
          "input-number-positive": statusState === "positive",
          "input-number-alert": statusState === "alert",
          "input-number-warning": statusState === "warning",
        })}
      />
      {addons?.filter((addon) => addon.placement === "right")?.map((addon) => renderInputAddonItem(addon))}
    </RSuiteInputGroup>
  );
};
