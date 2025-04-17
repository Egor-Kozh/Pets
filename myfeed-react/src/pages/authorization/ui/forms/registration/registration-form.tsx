import styles from "./registration-form.module.scss";
import { useState } from "react";
import { RegistrationFirtStep } from "./registration-first-step";
import { RegistrationSecondStep } from "./registration-second-step";

export const RegistrationForm = () => {
  const [nextStep, setNextStep] = useState(false);

  return (
    <div className={styles["registration-form"]}>
      <div className={styles["step"]}>
        <span>Шаг {nextStep ? "2" : "1"} из 2</span>
      </div>
      <div className={styles["info"]}>
        <span>
          Чтобы создать аккаунт введите Ваш Email и придумайте пароль.
        </span>
      </div>
      {nextStep ? (
        <RegistrationSecondStep setNextStep={setNextStep} />
      ) : (
        <RegistrationFirtStep setNextStep={setNextStep} />
      )}
    </div>
  );
};
