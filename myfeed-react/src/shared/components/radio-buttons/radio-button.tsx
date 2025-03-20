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
    <>
      <input
        type="radio"
        id={id}
        name={name}
        disabled={disabled}
        checked={checked}
      />
      <label htmlFor={id}>{value}</label>
    </>
  );
};
