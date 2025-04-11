import { Button } from "../buttons/button";
import styles from "./tab.module.scss";

interface TabProps {
  page: "auth" | "registr";
  setPage: React.Dispatch<React.SetStateAction<"auth" | "registr">>;
}
export const Tab = ({ page, setPage }: TabProps) => {
  const authButton = page === "auth" ? "primary" : "secondary";
  const registrButton = page === "registr" ? "primary" : "secondary";

  return (
    <div className={styles.tab}>
      <Button
        typeView={authButton}
        size="small"
        id={styles.auth}
        onClick={() => setPage("auth")}
      >
        Авторизация
      </Button>
      <Button
        typeView={registrButton}
        size="small"
        id={styles.registr}
        onClick={() => setPage("registr")}
      >
        Регистрация
      </Button>
    </div>
  );
};
