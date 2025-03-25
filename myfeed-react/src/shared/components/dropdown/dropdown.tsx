import styles from "./dropdown.module.scss";

interface DropDownProps {
  children: React.ReactNode;
  active?: boolean;
  width?: string;
}
export const DropDown = ({ children, active, width }: DropDownProps) => {
  return (
    <div
      className={`${styles.dropdown} ${active && styles.active}`}
      style={{ width: width }}
    >
      {children}
    </div>
  );
};
