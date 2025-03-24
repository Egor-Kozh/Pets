import { useState } from "react";
import SvgEyeComponent from "./icons/components/eye";
import SvgEyeSlashComponent from "./icons/components/eye-slash";
import "./input.scss";
import classNames from "classnames";
import { UseFormRegisterReturn } from "react-hook-form";
import SvgErrorComponent from "./icons/components/error";

interface InputProps {
  id: string;
  placeholder?: string;
  title?: string;
  type?: "password" | "date";
  children?: React.ReactNode;
  wrong?: boolean;
  register?: UseFormRegisterReturn<string>;
}
export const Input = ({
  id,
  placeholder,
  title,
  type,
  children,
  wrong,
  register,
}: InputProps) => {
  const [isNotVisible, setIsNotVisible] = useState(type === "password");

  const inputType = () => {
    if (isNotVisible) return "password";
    else if (type === "date") return "date";
    else return "text";
  };

  const handleChangeLogo = () => {
    switch (type) {
      case "password":
        if (isNotVisible) return <SvgEyeSlashComponent />;
        else return <SvgEyeComponent />;
      case undefined:
        if (wrong) return <SvgErrorComponent />;
    }
  };

  const handleLogoAction = () => {
    if (type == "password") {
      setIsNotVisible(!isNotVisible);
    }
  };

  const inputClass = classNames("input", wrong && "wrong");

  return (
    <div className={inputClass}>
      <label htmlFor={id}>{title}</label>
      <div className="input__inner">
        <input
          type={inputType()}
          placeholder={placeholder}
          id={id}
          {...register}
        />
        <div className="input__svg" onClick={handleLogoAction}>
          {handleChangeLogo()}
        </div>
      </div>
      {children}
    </div>
  );
};
