import React from "react";
import s from "./style.module.scss";
import Spinner from "../Spinner";
import classNames from "classnames";

interface ButtonProps {
  children?: React.ReactNode;
  size?: "small" | "large";
  color?: "transparent" | "blue";
  variant?: "contained" | "outlined";
  disabled?: boolean;
  isLoading?: boolean;
  [params: string]: unknown;
}

const Button = (props: ButtonProps) => {
  const {
    children,
    disabled,
    variant = "contained",
    size = "small",
    color = "transparent",
    isLoading,
    ...params
  } = props;

  const cx = classNames(
    s.btn,
    s[`btn-${variant}`],
    s[`btn-${size}`],
    s[`btn-${color}`],
    {
      [s[`btn-loading`]]: isLoading,
    }
  );

  return (
    <button disabled={disabled || isLoading} {...params} className={cx}>
      {isLoading ? (
        <>
          <span>{children}</span>
          <Spinner variant="button" />
        </>
      ) : (
        <>{children}</>
      )}
    </button>
  );
};

export default Button;
