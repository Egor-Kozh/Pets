import { useState } from "react";
import SvgLogoComponent from "@shared/assets/images/svg/components/logo";
import { Tabs } from "@shared/components/tabs/tabs";
import { AuthorizationForm } from "@features/user/authorization/ui/authorization-form";
import styles from "./authorization.module.scss";
import { RegistrationForm } from "./ui/forms/registration/registration-form";
import { AuthType, AuthTabs } from "./model/auth-type";


export const AuthorizationPage = () => {
  const [page, setPage] = useState<AuthType>(AuthType.authorization);

  return (
    <div className={styles["authorization"]}>
      <div className={styles["authorization__inner"]}>
        <div className={styles["authorization__header"]}>
          <SvgLogoComponent />
        </div>
        <div className={styles["authorization__tab"]}>
          <Tabs page={page} setPage={setPage} data={AuthTabs} />
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
