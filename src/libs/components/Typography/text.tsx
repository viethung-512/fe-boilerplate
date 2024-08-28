import * as React from "react";
import { Text as RSuiteText, TextProps as RSuiteTextProps } from "rsuite";

export interface TextProps extends RSuiteTextProps {}

export const Text: React.FC<TextProps> = ({ ...rest }) => {
  return <RSuiteText {...rest} />;
};
