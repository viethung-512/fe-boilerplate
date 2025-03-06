import * as yup from "yup";

export const LOGIN_VALIDATION_SCHEMA = yup.object({
  username: yup.string().required(),
});
