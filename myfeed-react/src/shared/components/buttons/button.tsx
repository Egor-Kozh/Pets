import className from "classnames";
import "./button.scss";
import SvgLoadingComponent from "./icons/components/loading";

interface ButtonProps {
  typeView: "primary" | "secondary";
  size: "small" | "large";
  disabled?: boolean;
  loading?: boolean;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  id?: string;
}
export const Button = ({
  typeView,
  size,
  disabled = false,
  loading = false,
  children,
  type,
  id,
}: ButtonProps) => {
  const buttonClass = className(
    "button",
    disabled ? typeView + "-disabled" : typeView,
    size
  );

  return (
    <button disabled={disabled} className={buttonClass} type={type} id={id}>
      {loading ? <SvgLoadingComponent type={`svg_${typeView}`} /> : children}
    </button>
  );
};
