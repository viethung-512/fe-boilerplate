import * as React from "react";
import { Divider as RSuiteDivider, DividerProps as RSuiteDividerProps } from "rsuite";

import "./divider.css";

export interface DividerProps extends RSuiteDividerProps {}

export const Divider: React.FC<DividerProps> = ({ ...rest }) => {
  return <RSuiteDivider {...rest} />;
};
