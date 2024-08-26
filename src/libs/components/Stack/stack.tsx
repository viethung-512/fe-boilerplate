import * as React from "react";
import { Stack as RSuiteStack, StackProps as RSuiteStackProps } from "rsuite";

export interface StackProps extends RSuiteStackProps {}

export const Stack: React.FC<StackProps> = ({ ...rest }) => {
  return <RSuiteStack {...rest} />;
};
