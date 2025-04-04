import { useForm } from "react-hook-form";
import { Input } from "../../shared/components/input/input";
import styles from "./registration-form.module.scss";
import { Button } from "../../shared/components/buttons/button";
import { useState } from "react";

export const RegistrationForm = () => {
  const [nextStep, setNextStep] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string; password: string; accept_password: string }>();

  const handleNextStep = () => {
    setNextStep((active) => !active);
  };

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
      <form onSubmit={handleSubmit(handleNextStep)}>
        <Input
          id="registration-email"
          title="Email"
          register={register("email", {
            required: "required",
          })}
          wrong={errors.email ? true : false}
        >
          {errors.email?.message}
        </Input>
        <Input
          id="registration-password"
          title="Пароль"
          type="password"
          register={register("password", {
            required: "required",
          })}
          wrong={errors.password ? true : false}
        >
          {errors.email?.message}
        </Input>
        <Input
          id="registration-accept-password"
          title="Введите пароль еще раз"
          type="password"
          register={register("accept_password", {
            required: "required",
          })}
          wrong={errors.password ? true : false}
        >
          {errors.email?.message}
        </Input>
        <Button typeView="primary" size="large" type="submit">
          Далее
        </Button>
      </form>
    </div>
  );
};
