import styles from "./icon-button.module.scss";

interface IconButtonProps {
  children: React.ReactNode;
}
export const IconButton = ({ children }: IconButtonProps) => {
  return <div className={styles["icon-button"]}>{children}</div>;
};
