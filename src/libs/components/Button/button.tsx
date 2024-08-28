import * as React from "react";

import { Button as RSuiteButton, ButtonProps as RSuiteButtonProps } from "rsuite";

export interface ButtonProps extends RSuiteButtonProps {}

export const Button: React.FC<ButtonProps> = ({ ...rest }) => {
  return <RSuiteButton {...rest} />;
};
