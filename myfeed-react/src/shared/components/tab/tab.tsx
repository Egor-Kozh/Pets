import { Button } from "../buttons/button";
import styles from "./tab.module.scss";

interface TabProps {
  type: "auth" | "registr";
}
export const Tab = ({ type }: TabProps) => {
  const authButton = type === "auth" ? "primary" : "secondary";
  const registrButton = type === "registr" ? "primary" : "secondary";

  return (
    <div className={styles.tab}>
      <Button typeView={authButton} size="small" id={styles.auth}>
        Авторизация
      </Button>
      <Button typeView={registrButton} size="small" id={styles.registr}>
        Регистрация
      </Button>
    </div>
  );
};
