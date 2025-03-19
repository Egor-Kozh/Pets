import className from "classnames";
import "./buttons.scss";

interface ButtonProps {
  type: string;
  size: string;
  content: string;
}
export const Button = ({ type, size, content }: ButtonProps) => {
  const buttonClass = className("button", type, size);

  return <button className={buttonClass}>{content}</button>;
};
