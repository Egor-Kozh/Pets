import styles from "./radio-button.module.scss";

interface RadioButtonProps {
  id: string;
  value: string;
  disabled?: boolean;
  checked?: boolean;
  info: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const RadioButton = ({
  id,
  value,
  disabled,
  checked,
  info,
  onChange,
}: RadioButtonProps) => {
  return (
    <div className={styles.radio_button}>
      <input
        className={styles.input_radio}
        type="radio"
        id={id}
        disabled={disabled}
        checked={checked}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={id}></label>
      <span>{info}</span>
    </div>
  );
};
