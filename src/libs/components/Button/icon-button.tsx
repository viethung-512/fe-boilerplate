import * as React from "react";

import { IconButton as RSuiteIconButton, IconButtonProps as RSuiteIconButtonProps } from "rsuite";

export interface IconButtonProps extends RSuiteIconButtonProps {}

export const IconButton: React.FC<IconButtonProps> = ({ ...rest }) => {
  return <RSuiteIconButton {...rest} />;
};
