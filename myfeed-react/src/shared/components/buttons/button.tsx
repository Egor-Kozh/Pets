import className from "classnames";
import styles from "./button.module.scss";
import SvgLoadingComponent from "@shared/assets/images/svg/components/loading";

interface ButtonProps {
  typeView: "primary" | "secondary" | "flat";
  size?: "small" | "large";
  disabled?: boolean;
  loading?: boolean;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  id?: string;
  adaptive?: "mobile" | "desctop";
  onClick?: () => void;
}
export const Button = ({
  typeView,
  size,
  disabled = false,
  loading = false,
  children,
  type,
  id,
  adaptive,
  onClick,
}: ButtonProps) => {
  const buttonClass = className(
    styles.button,
    styles[typeView],
    size && styles[size],
    adaptive && styles[adaptive]
  );

  return (
    <button
      disabled={disabled}
      className={buttonClass}
      type={type}
      id={id}
      onClick={onClick}
    >
      {loading ? <SvgLoadingComponent type={`svg_${typeView}`} /> : children}
    </button>
  );
};
