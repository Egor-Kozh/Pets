import { useEffect, useRef, useState } from "react";
import SvgEyeComponent from "@shared/assets/images/svg/components/eye";
import SvgEyeSlashComponent from "@shared/assets/images/svg/components/eye-slash";
import styles from "./input.module.scss";
import classNames from "classnames";
import { UseFormRegisterReturn } from "react-hook-form";
import SvgErrorComponent from "@shared/assets/images/svg/components/error";

interface InputProps {
  id: string;
  placeholder?: string;
  title?: string;
  type?: "password" | "date";
  children?: React.ReactNode;
  wrong?: boolean;
  size?: string;
  register?: UseFormRegisterReturn<string>;
  large?: boolean;
}
export const Input = ({
  id,
  placeholder,
  title,
  type,
  children,
  wrong,
  register,
  large,
  size,
}: InputProps) => {
  const [isNotVisible, setIsNotVisible] = useState(type === "password");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const updateHeight = () => {
      textarea.style.height = "22px";
      textarea.style.height = `${textarea.scrollHeight}px`;
    };

    textarea.addEventListener("input", updateHeight);

    return () => textarea.removeEventListener("input", updateHeight);
  }, []);

  const inputType = () => {
    if (isNotVisible) return "password";

    if (type === "date") return "date";

    return "text";
  };

  const handleChangeLogo = () => {
    if (type === "password") {
      return isNotVisible ? <SvgEyeSlashComponent /> : <SvgEyeComponent />;
    }
    if (type === undefined && wrong) {
      return <SvgErrorComponent />;
    }
  };

  const handleLogoAction = () => {
    if (type == "password") {
      setIsNotVisible(!isNotVisible);
    }
  };

  const inputClass = classNames(
    styles.input,
    wrong && styles.wrong,
    large && styles.large
  );

  return (
    <div className={inputClass} style={{ width: size }}>
      <label htmlFor={id}>{title}</label>
      <div className={styles.input__inner}>
        {large ? (
          <textarea
            placeholder={placeholder}
            id={id}
            {...register}
            ref={(e) => {
              register?.ref(e);
              textareaRef.current = e;
            }}
          />
        ) : (
          <input
            type={inputType()}
            placeholder={placeholder}
            id={id}
            {...register}
          />
        )}
        <div className={styles.input__svg} onClick={handleLogoAction}>
          {handleChangeLogo()}
        </div>
      </div>
      {children}
    </div>
  );
};
