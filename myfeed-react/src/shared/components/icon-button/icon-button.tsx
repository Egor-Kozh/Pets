import styles from "./icon-button.module.scss";

interface IconButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}
export const IconButton = ({ children, onClick }: IconButtonProps) => {
  return (
    <div className={styles["icon-button"]} onClick={onClick}>
      {children}
    </div>
  );
};
