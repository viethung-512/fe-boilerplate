import * as React from "react";

import { Container as RSuiteContainer, ContainerProps as RSuiteContainerProps } from "rsuite";

export interface ContainerProps extends RSuiteContainerProps {}

export const Container: React.FC<ContainerProps> = ({ ...rest }) => {
  return <RSuiteContainer {...rest} />;
};
