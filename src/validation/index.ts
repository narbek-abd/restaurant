import * as yup from "yup";

export const LoginFormValidation = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export const RegisterFormValidation = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(3).required(),
  password_confirm: yup.string().min(3).required(),
  agreement: yup.boolean().oneOf([true], "This field must be checked"),
});
