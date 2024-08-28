import * as React from "react";

import { Heading as RSuiteHeading, HeadingProps as RSuiteHeadingProps } from "rsuite";

export interface HeadingProps extends RSuiteHeadingProps {}

export const Heading: React.FC<HeadingProps> = ({ ...rest }) => {
  return <RSuiteHeading {...rest} />;
};
