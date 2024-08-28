import * as React from "react";

import { Content as RSuiteContent, ContentProps as RSuiteContentProps } from "rsuite";

export interface ContentProps extends RSuiteContentProps {}

export const Content: React.FC<ContentProps> = ({ ...rest }) => {
  return <RSuiteContent {...rest} />;
};
