import * as yup from "yup";

export const LoginFormValidation = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export const RegisterFormValidation = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(3).required(),
  password_confirmation: yup.string().min(3).required(),
});
