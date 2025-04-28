import styles from "./radio-group.module.scss";

interface RadioGroupProps {
  label: string;
  children: React.ReactNode;
}
export const RadioGroup = ({ label, children }: RadioGroupProps) => {
  return (
    <div className={styles["radio-group"]}>
      <span>{label}</span>
      {children}
    </div>
  );
};
