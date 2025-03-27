import { CSSProperties } from "react";
import styles from "./dropdown.module.scss";

interface DropDownProps {
  children: React.ReactNode;
  active?: boolean;
  style?: CSSProperties;
}
export const DropDown = ({ children, active, style }: DropDownProps) => {
  return (
    <div
      className={`${styles.dropdown} ${active && styles.active}`}
      style={style}
    >
      {children}
    </div>
  );
};
