import * as React from "react";
import { VStack, VStackProps } from "rsuite";

export interface VerticalStackProps extends VStackProps {}

export const VerticalStack: React.FC<VerticalStackProps> = ({ ...rest }) => {
  return <VStack {...rest} />;
};
