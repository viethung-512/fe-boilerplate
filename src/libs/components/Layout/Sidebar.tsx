import * as React from "react";

import { Sidebar as RSuiteSidebar, SidebarProps as RSuiteSidebarProps } from "rsuite";

export interface SidebarProps extends RSuiteSidebarProps {}

export const Sidebar: React.FC<SidebarProps> = ({ ...rest }) => {
  return <RSuiteSidebar {...rest} />;
};
