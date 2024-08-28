import * as React from "react";
import { Divider as RSuiteDivider, DividerProps as RSuiteDividerProps } from "rsuite";

export interface DividerProps extends RSuiteDividerProps {}

export const Divider: React.FC<DividerProps> = ({ ...rest }) => {
  return <RSuiteDivider {...rest} />;
};
