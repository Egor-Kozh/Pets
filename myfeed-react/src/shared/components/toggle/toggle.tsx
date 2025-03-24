import styles from "./toggle.module.scss";

interface ToggleProps {
  id: string;
  disabled?: boolean;
  onClick?: () => void;
}
export const Toggle = ({ id, disabled, onClick }: ToggleProps) => {
  return (
    <div className={styles.toggle}>
      <input
        type="checkbox"
        id={id}
        className={styles.input_checkbox}
        disabled={disabled}
        onClick={onClick}
      />
      <label htmlFor={id}></label>
    </div>
  );
};
