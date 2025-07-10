import styles from "../input.module.scss";
import classNames from "classnames";

interface InputProps {
  id: string;
  placeholder?: string;
  title?: string;
  children?: React.ReactNode;
  wrong?: boolean;
  size?: string;
  large?: boolean;
}
export const InputDate = ({
  id,
  placeholder,
  title,
  children,
  wrong,
  size,
  ...props
}: InputProps) => {
  const inputClass = classNames(styles.input, wrong && styles.wrong);

  return (
    <div className={inputClass} style={{ width: size }}>
      <label htmlFor={id}>{title}</label>
      <div className={styles.input__inner}>
        <input type="date" placeholder={placeholder} id={id} {...props} />
      </div>
      {children}
    </div>
  );
};
