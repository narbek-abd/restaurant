import s from "./style.module.scss";
import g from "Src/App.module.scss";
import Modal from "Src/components/Modal";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterFormTypes } from "Src/types/FormTypes";
import { RegisterFormValidation } from "Src/validation";
import { useState } from "react";
import Button from "../Button";

interface RegisterModalFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegisterModalForm = ({ isOpen, onClose }: RegisterModalFormProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<RegisterFormTypes>({
    resolver: yupResolver(RegisterFormValidation),
  });

  const onSubmit: SubmitHandler<RegisterFormTypes> = async (
    registrationData
  ) => {
    setIsLoading(true);

    try {
      //   await dispatch(registerUser(registrationData));
    } catch (e: any) {
      if (e.response.status === 422) {
        Object.keys(e.response.data.errors).forEach((key) => {
          setError(key, {
            type: "fromServer",
            message: e.response.data.errors[key],
          });
        });
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={s.registerModal}>
        <p className={s.registerModalTitle}>Зарегистрироваться</p>

        <form className={s.registerForm} onSubmit={handleSubmit(onSubmit)}>
          <>
            {errors.fromServer && (
              <span className={g.err} role="alert">
                {errors.fromServer.message}
              </span>
            )}

            {[
              { type: "text", name: "email", placeholder: "Email" },
              { type: "password", name: "password", placeholder: "Пароль" },
              {
                type: "password",
                name: "password_confirm",
                placeholder: "Пароль",
              },
            ].map((input) => {
              return (
                <div className={s.formGroup} key={input.name}>
                  <input
                    className={g.input}
                    type={input.type}
                    placeholder={input.placeholder}
                    {...register(input.name)}
                    autoComplete={input.name}
                    aria-invalid={errors[input.name] ? "true" : "false"}
                  />

                  {errors.email && (
                    <span className={g.err} role="alert">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              );
            })}

            <div className={`${s.formGroup} ${s.formGroupAgreement}`}>
              <label className={g.formCheckbox}>
                <input type="checkbox" {...register("agreement")} />
                <span className={g.checkboxCheckmark}></span>
                <p className={s.agreement}>
                  Я принимаю условия
                  <a href="#">
                    Пользовательского соглашения, политики конфиденциальности,
                    Обработки и распространения персональных данных
                  </a>
                </p>
              </label>

              {errors.agreement && (
                <span className={g.err} role="alert">
                  {errors.agreement.message}
                </span>
              )}
            </div>

            <Button type="submit" color="blue" size="large" isLoading={true}>
              Далее
            </Button>
          </>
        </form>
      </div>
    </Modal>
  );
};

export default RegisterModalForm;
