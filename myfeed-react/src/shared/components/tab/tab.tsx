import { AuthType } from "@pages/authorization/model/auth-type";
import { Button } from "../buttons/button";
import styles from "./tab.module.scss";

interface TabProps {
  page: AuthType;
  setPage: React.Dispatch<React.SetStateAction<AuthType>>;
}
export const Tab = ({ page, setPage }: TabProps) => {
  const authButton = page === AuthType.authorization ? "primary" : "secondary";
  const registrButton =
    page === AuthType.registration ? "primary" : "secondary";

  return (
    <div className={styles.tab}>
      <Button
        typeView={authButton}
        size="small"
        id={styles.auth}
        onClick={() => setPage(AuthType.authorization)}
      >
        Авторизация
      </Button>
      <Button
        typeView={registrButton}
        size="small"
        id={styles.registr}
        onClick={() => setPage(AuthType.registration)}
      >
        Регистрация
      </Button>
    </div>
  );
};
