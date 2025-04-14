import { authType } from "../../../pages/authorization/model/auth-type";
import { Button } from "../buttons/button";
import styles from "./tab.module.scss";

interface TabProps {
  page: authType;
  setPage: React.Dispatch<React.SetStateAction<authType>>;
}
export const Tab = ({ page, setPage }: TabProps) => {
  const authButton = page === authType.authorization ? "primary" : "secondary";
  const registrButton =
    page === authType.registration ? "primary" : "secondary";

  return (
    <div className={styles.tab}>
      <Button
        typeView={authButton}
        size="small"
        id={styles.auth}
        onClick={() => setPage(authType.authorization)}
      >
        Авторизация
      </Button>
      <Button
        typeView={registrButton}
        size="small"
        id={styles.registr}
        onClick={() => setPage(authType.registration)}
      >
        Регистрация
      </Button>
    </div>
  );
};
