import { useState } from "react";
import SvgEyeComponent from "@shared/assets/images/svg/components/eye";
import SvgEyeSlashComponent from "@shared/assets/images/svg/components/eye-slash";
import styles from "../input.module.scss";
import classNames from "classnames";

interface InputProps {
  id: string;
  placeholder?: string;
  title?: string;
  children?: React.ReactNode;
  wrong?: boolean;
  size?: string;
}
export const InputPassword = ({
  id,
  placeholder,
  title,
  children,
  wrong,
  size,
  ...props
}: InputProps) => {
  const [isNotVisible, setIsNotVisible] = useState(true);

  const handleChangeLogo = () => {
    return isNotVisible ? <SvgEyeSlashComponent /> : <SvgEyeComponent />;
  };

  const handleLogoAction = () => {
    setIsNotVisible(!isNotVisible);
  };

  const inputClass = classNames(styles.input, wrong && styles.wrong);

  return (
    <div className={inputClass} style={{ width: size }}>
      <label htmlFor={id}>{title}</label>
      <div className={styles.input__inner}>
        <input
          placeholder={placeholder}
          id={id}
          type={isNotVisible ? "password" : ""}
          {...props}
        />
        <div className={styles.input__svg} onClick={handleLogoAction}>
          {handleChangeLogo()}
        </div>
      </div>
      {children}
    </div>
  );
};
