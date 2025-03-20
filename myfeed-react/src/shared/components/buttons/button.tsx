import className from "classnames";
import "./buttons.scss";
import SvgLoadingComponent from "./icons/components/loading";

interface ButtonProps {
  type: "primary" | "secondary";
  size: "small" | "large";
  disabled?: boolean;
  loading?: boolean;
  children?: React.ReactNode;
}
export const Button = ({
  type,
  size,
  disabled = false,
  loading = false,
  children,
}: ButtonProps) => {
  const buttonClass = className(
    "button",
    disabled ? type + "-disabled" : type,
    size
  );

  return (
    <button disabled={disabled} className={buttonClass}>
      {loading ? <SvgLoadingComponent type={`svg_${type}`} /> : children}
    </button>
  );
};
