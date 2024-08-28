import * as React from "react";

import { ButtonGroup as RSuiteButtonGroup, ButtonGroupProps as RSuiteButtonGroupProps } from "rsuite";

export interface ButtonGroupProps extends RSuiteButtonGroupProps {}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({ ...rest }) => {
  return <RSuiteButtonGroup {...rest} />;
};
