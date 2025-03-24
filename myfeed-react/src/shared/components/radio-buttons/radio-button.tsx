import styles from "./radio-button.module.scss";

interface RadioButtonProps {
  id: string;
  name: string;
  value: string;
  disabled?: boolean;
  checked?: boolean;
}
export const RadioButton = ({
  id,
  name,
  value,
  disabled,
  checked,
}: RadioButtonProps) => {
  return (
    <div className={styles.radio_button}>
      <input
        className={styles.input_radio}
        type="radio"
        id={id}
        name={name}
        disabled={disabled}
        checked={checked}
      />
      <label htmlFor={id}></label>
      <span>{value}</span>
    </div>
  );
};
