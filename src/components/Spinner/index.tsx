import classNames from "classnames";
import s from "./style.module.scss";

interface SpinnerProps {
  variant?: "default" | "button";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [params: string]: any;
}

const Spinner = ({ variant = "default", ...params }: SpinnerProps) => {
  const cx = classNames(s.spinner, s[`spinner-${variant}`]);

  return <div className={cx} {...params}></div>;
};

export default Spinner;
