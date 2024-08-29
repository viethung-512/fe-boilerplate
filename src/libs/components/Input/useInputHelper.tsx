import * as React from "react";

import { InputGroup as RSuiteInputGroup } from "rsuite";

import { InputAddonItem } from "./index";

export function useInputHelper() {
  const renderInputAddonItem = React.useCallback((addonItem: InputAddonItem) => {
    if (addonItem.isButton) {
      return <RSuiteInputGroup.Button {...addonItem.props}>{addonItem.data}</RSuiteInputGroup.Button>;
    }
    return <RSuiteInputGroup.Addon>{addonItem.data}</RSuiteInputGroup.Addon>;
  }, []);

  return { renderInputAddonItem };
}
