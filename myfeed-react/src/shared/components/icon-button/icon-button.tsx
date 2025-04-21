import styles from "./icon-button.module.scss";

interface IconButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  ref?: React.RefObject<HTMLDivElement | null>;
}
export const IconButton = ({ children, onClick, ref }: IconButtonProps) => {
  return (
    <div className={styles["icon-button"]} onClick={onClick} ref={ref}>
      {children}
    </div>
  );
};
