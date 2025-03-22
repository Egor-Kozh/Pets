import "./radio-button.scss";

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
    <div className="radio_button">
      <input
        className="input_radio"
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
