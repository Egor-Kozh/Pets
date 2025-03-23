import className from "classnames";
import "./button.scss";
import SvgLoadingComponent from "./icons/components/loading";

interface ButtonProps {
  typeView: "primary" | "secondary";
  size: "small" | "large";
  disabled?: boolean;
  loading?: boolean;
  children?: React.ReactNode;
  type?: string;
}
export const Button = ({
  typeView,
  size,
  disabled = false,
  loading = false,
  children,
  type,
}: ButtonProps) => {
  const buttonClass = className(
    "button",
    disabled ? typeView + "-disabled" : typeView,
    size
  );

  return (
    <button disabled={disabled} className={buttonClass} type={type}>
      {loading ? <SvgLoadingComponent type={`svg_${typeView}`} /> : children}
    </button>
  );
};
