import * as React from "react";

import { Header as RSuiteHeader, HeaderProps as RSuiteHeaderProps } from "rsuite";

export interface HeaderProps extends RSuiteHeaderProps {}

export const Header: React.FC<HeaderProps> = ({ ...rest }) => {
  return <RSuiteHeader {...rest} />;
};
