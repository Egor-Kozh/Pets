import styles from "./toggle.module.scss";

interface ToggleProps {
  id: string;
  disabled?: boolean;
}
export const Toggle = ({ id, disabled }: ToggleProps) => {
  return (
    <div className={styles.toggle}>
      <input
        type="checkbox"
        id={id}
        className={styles.input_checkbox}
        disabled={disabled}
      />
      <label htmlFor={id}></label>
    </div>
  );
};
