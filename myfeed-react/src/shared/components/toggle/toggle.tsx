import styles from "./toggle.module.scss";

interface ToggleProps {
  id: string;
  disabled?: boolean;
  onClick?: () => void;
}
export const Toggle = ({ id, disabled, onClick }: ToggleProps) => {
  const toggleChecked = localStorage.getItem("colorTheme") === "dark";

  return (
    <div className={styles.toggle}>
      <input
        type="checkbox"
        id={id}
        className={styles.input_checkbox}
        disabled={disabled}
        onClick={onClick}
        defaultChecked={toggleChecked}
      />
      <label htmlFor={id}></label>
    </div>
  );
};
