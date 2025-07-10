import styles from "../input.module.scss";
import classNames from "classnames";
import SvgErrorComponent from "@shared/assets/images/svg/components/error";

interface InputProps {
  id: string;
  placeholder?: string;
  title?: string;
  children?: React.ReactNode;
  wrong?: boolean;
  size?: string;
}
export const Input = ({
  id,
  placeholder,
  title,
  children,
  wrong,
  size,
  ...props
}: InputProps) => {
  const handleChangeLogo = () => {
    if (wrong) {
      return <SvgErrorComponent />;
    }
  };

  const inputClass = classNames(styles.input, wrong && styles.wrong);

  return (
    <div className={inputClass} style={{ width: size }}>
      <label htmlFor={id}>{title}</label>
      <div className={styles.input__inner}>
        <input placeholder={placeholder} id={id} {...props} />
        <div className={styles.input__svg}>{handleChangeLogo()}</div>
      </div>
      {children}
    </div>
  );
};
