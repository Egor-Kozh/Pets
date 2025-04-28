import { UseFormRegisterReturn } from "react-hook-form";
import styles from "./radio-button.module.scss";

interface RadioButtonProps {
  id: string;
  value: string;
  disabled?: boolean;
  checked?: boolean;
  info: string;
  onClick?: () => void;
  register?: UseFormRegisterReturn<string>;
}
export const RadioButton = ({
  id,
  value,
  disabled,
  checked,
  info,
  register,
  onClick,
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
        onClick={onClick}
        {...register}
      />
      <label htmlFor={id}></label>
      <span>{info}</span>
    </div>
  );
};
