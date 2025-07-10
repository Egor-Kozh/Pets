import { useEffect, useRef } from "react";
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
export const InputBig = ({
  id,
  placeholder,
  title,
  children,
  wrong,
  size,
  ...props
}: InputProps) => {
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

  const inputClass = classNames(
    styles.input,
    wrong && styles.wrong,
    styles.large
  );

  return (
    <div className={inputClass} style={{ width: size }}>
      <label htmlFor={id}>{title}</label>
      <div className={styles.input__inner}>
        <textarea
          placeholder={placeholder}
          id={id}
          ref={(e) => {
            textareaRef.current = e;
          }}
          {...props}
        />
      </div>
      {children}
    </div>
  );
};
