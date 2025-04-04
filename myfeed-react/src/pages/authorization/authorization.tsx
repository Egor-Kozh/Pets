import { useState } from "react";
import SvgLogoComponent from "../../app/assets/images/svg/components/logo";
import { Tab } from "../../shared/components/tab/tab";
import { AuthorizationForm } from "../../widgets/forms/authorization-form";
import styles from "./authorization.module.scss";
import { RegistrationForm } from "../../widgets/forms/registration-from";

export const Authorization = () => {
  const [page, setPage] = useState<"auth" | "registr">("auth");

  return (
    <div className={styles["authorization"]}>
      <div className={styles["authorization__inner"]}>
        <div className={styles["authorization__header"]}>
          <SvgLogoComponent />
        </div>
        <div className={styles["authorization__tab"]}>
          <Tab page={page} setPage={setPage} />
        </div>
        {page === "auth" ? <AuthorizationForm /> : <RegistrationForm />}
      </div>
    </div>
  );
};
