import * as React from "react";
import { HStack, HStackProps } from "rsuite";

export interface HorizontalStackProps extends HStackProps {}

export const HorizontalStack: React.FC<HorizontalStackProps> = ({ ...rest }) => {
  return <HStack {...rest} />;
};
