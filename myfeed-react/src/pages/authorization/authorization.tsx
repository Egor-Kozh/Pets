import { useState } from "react";
import SvgLogoComponent from "../../shared/assets/images/svg/components/logo";
import { Tab } from "../../shared/components/tab/tab";
import { AuthorizationForm } from "./ui/forms/authorization/authorization-form";
import styles from "./authorization.module.scss";
import { RegistrationForm } from "./ui/forms/registration/registration-form";
import { AuthType } from "./model/auth-type";

export const AuthorizationPage = () => {
  const [page, setPage] = useState<AuthType>(AuthType.authorization);

  return (
    <div className={styles["authorization"]}>
      <div className={styles["authorization__inner"]}>
        <div className={styles["authorization__header"]}>
          <SvgLogoComponent />
        </div>
        <div className={styles["authorization__tab"]}>
          <Tab page={page} setPage={setPage} />
        </div>
        {page === AuthType.authorization ? (
          <AuthorizationForm />
        ) : (
          <RegistrationForm />
        )}
      </div>
    </div>
  );
};
