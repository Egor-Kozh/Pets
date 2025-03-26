import styles from "./dropdown.module.scss";

interface DropDownProps {
  children: React.ReactNode;
  active?: boolean;
  width?: string;
  gap?: string;
}
export const DropDown = ({ children, active, width, gap }: DropDownProps) => {
  return (
    <div
      className={`${styles.dropdown} ${active && styles.active}`}
      style={{ width: width, marginTop: gap }}
    >
      {children}
    </div>
  );
};
