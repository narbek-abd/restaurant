import s from "./style.module.scss";
import g from "Src/App.module.scss";
import Modal from "Src/components/Modal";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginFormTypes } from "Src/types/FormTypes";
import { LoginFormValidation } from "Src/validation";
import Button from "../Button";
import { useAppDispatch, useAppSelector } from "Src/store";
import { loginUser } from "Src/store/actions/User";

interface LoginModalFormProps {
  isOpen: boolean;
  onClose: () => void;
  onCallRegisterModal: () => void;
}

const LoginModalForm = ({
  isOpen,
  onClose,
  onCallRegisterModal,
}: LoginModalFormProps) => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.user);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginFormTypes>({
    resolver: yupResolver(LoginFormValidation),
  });

  const onSubmit: SubmitHandler<LoginFormTypes> = async (loginData) => {
    try {
      await dispatch(loginUser(loginData)).unwrap();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      if (e.response?.status === 422) {
        Object.keys(e.response.data.errors).forEach((key) => {
          setError(key, {
            type: "fromServer",
            message: e.response.data.errors[key],
          });
        });
      }
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={s.loginModal}>
        <p className={s.loginModalTitle}>Войти</p>

        <form className={s.loginForm} onSubmit={handleSubmit(onSubmit)}>
          <>
            {errors.fromServer && (
              <span className={g.err} role="alert">
                {errors.fromServer.message}
              </span>
            )}

            {[
              { type: "text", name: "email", placeholder: "Email" },
              { type: "password", name: "password", placeholder: "Пароль" },
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

                  {errors[input.name] && (
                    <span className={g.err} role="alert">
                      {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        (errors[input.name] as any).message
                      }
                    </span>
                  )}
                </div>
              );
            })}

            <div className={s.submitButton}>
              <Button
                type="submit"
                color="blue"
                size="large"
                isLoading={loading === "pending"}
              >
                Войти
              </Button>
            </div>

            <div className={s.registerBtn}>
              <Button onClick={onCallRegisterModal}>Зарегистрироваться</Button>
            </div>

            <a className={s.forgotPassLink} href="#">
              Забыли пароль?
            </a>
          </>
        </form>
      </div>
    </Modal>
  );
};

export default LoginModalForm;
