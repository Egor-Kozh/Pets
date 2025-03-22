import "./toggle.scss";

interface ToggleProps {
  id: string;
  disabled?: boolean;
}
export const Toggle = ({ id, disabled }: ToggleProps) => {
  return (
    <div className="toggle">
      <input
        type="checkbox"
        id={id}
        className="input_checkbox"
        disabled={disabled}
      />
      <label htmlFor={id}></label>
    </div>
  );
};
