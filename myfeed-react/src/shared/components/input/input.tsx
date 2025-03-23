import { useState } from "react";
import SvgEyeComponent from "./icons/components/eye";
import SvgEyeSlashComponent from "./icons/components/eye-slash";
import "./input.scss";

interface InputProps {
  id: string;
  placeholder?: string;
  title?: string;
  type?: "password" | "date";
}
export const Input = ({ id, placeholder, title, type }: InputProps) => {
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
    }
  };

  const handleLogoAction = () => {
    if (type == "password") {
      setIsNotVisible(!isNotVisible);
    }
  };

  return (
    <div className="input">
      <label htmlFor={id}>{title}</label>
      <div className="input__inner">
        <input type={inputType()} placeholder={placeholder} id={id} />
        <div className="input__svg" onClick={handleLogoAction}>
          {handleChangeLogo()}
        </div>
      </div>
    </div>
  );
};
