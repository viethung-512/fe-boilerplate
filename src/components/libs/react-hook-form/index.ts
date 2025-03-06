import { FieldPath } from "react-hook-form";

export type BaseHookFormInput<T extends object = {}> = {
  fieldName: FieldPath<T>;
};

export * from "./HookFormInputTextField";
