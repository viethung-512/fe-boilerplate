import * as React from "react";

import { Footer as RSuiteFooter, FooterProps as RSuiteFooterProps } from "rsuite";

export interface FooterProps extends RSuiteFooterProps {}

export const Footer: React.FC<FooterProps> = ({ ...rest }) => {
  return <RSuiteFooter {...rest} />;
};
