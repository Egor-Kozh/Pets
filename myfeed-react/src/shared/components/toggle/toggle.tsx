import "./toggle.scss";

interface ToggleProps {
  id: string;
}
export const Toggle = ({ id }: ToggleProps) => {
  return (
    <div className="toggle">
      <input type="checkbox" id={id} className="input_checkbox" />
      <label htmlFor={id}></label>
    </div>
  );
};
