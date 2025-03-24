import { Button } from "../buttons/button";
import styles from "./tab.module.scss";

interface TabProps {
  type: "auth" | "registr";
}
export const Tab = ({ type }: TabProps) => {
  return (
    <div className={styles.tab}>
      <Button
        typeView={type === "auth" ? "primary" : "secondary"}
        size="small"
        id={styles.auth}
      >
        Авторизация
      </Button>
      <Button
        typeView={type === "registr" ? "primary" : "secondary"}
        size="small"
        id={styles.registr}
      >
        Регистрация
      </Button>
    </div>
  );
};
