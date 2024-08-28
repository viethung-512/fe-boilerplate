import * as React from "react";
import { Highlight as RSuiteHighlight, HighlightProps as RSuiteHighlightProps } from "rsuite";

export interface HighlightProps extends RSuiteHighlightProps {}

export const Highlight: React.FC<HighlightProps> = ({ ...rest }) => {
  return <RSuiteHighlight {...rest} />;
};
