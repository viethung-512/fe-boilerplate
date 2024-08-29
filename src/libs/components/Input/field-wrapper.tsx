import * as React from "react";
import { BaseInputFieldProps, HorizontalStack, Text, TextProps, VerticalStack } from "libs/components";

export interface FieldWrapperProps extends BaseInputFieldProps {}

const HORIZONTAL_LABEL_WIDTH = "170px";

export const FieldWrapper: React.FC<React.PropsWithChildren<FieldWrapperProps>> = ({
  fieldLabel,
  fieldLayout = "vertical",
  helperText,
  isRequired = false,
  labelAlign = "left",
  statusState = "default",
  children,
}) => {
  const helperTextColor = React.useMemo<TextProps["color"]>(() => {
    switch (statusState) {
      case "alert":
        return "red";
      case "positive":
        return "green";
      case "warning":
        return "orange";
      default:
        return undefined;
    }
  }, [statusState]);

  if (fieldLayout === "vertical") {
    return (
      <VerticalStack spacing={4} style={{ flex: 1 }}>
        <Text>{fieldLabel}</Text>
        {children}
        {helperText && (
          <Text size={"sm"} color={helperTextColor}>
            {helperText}
          </Text>
        )}
      </VerticalStack>
    );
  }

  return (
    <VerticalStack spacing={4} style={{ flex: 1 }}>
      <HorizontalStack spacing={12} alignItems={"center"}>
        <Text
          style={{
            minWidth: HORIZONTAL_LABEL_WIDTH,
            maxWidth: HORIZONTAL_LABEL_WIDTH,
            textAlign: labelAlign,
          }}
        >
          {fieldLabel}
        </Text>
        {children}
      </HorizontalStack>
      {helperText && (
        <Text size={"sm"} color={helperTextColor} style={{ marginLeft: `calc(${HORIZONTAL_LABEL_WIDTH} + 12px)` }}>
          {helperText}
        </Text>
      )}
    </VerticalStack>
  );
};
