import { useForm } from "react-hook-form";
import { Input } from "../../../../../shared/components/inputs/input/input";
import styles from "./authorization-form.module.scss";
import { Button } from "../../../../../shared/components/buttons/button";

export const AuthorizationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string; password: string }>();

  const handleOnClick = () => {};

  return (
    <div className={styles["authorization-form"]}>
      <div className={styles["info"]}>
        <span>Введите Ваш Email и пароль, чтобы войти в аккаунт.</span>
      </div>
      <form onSubmit={handleSubmit(handleOnClick)}>
        <Input
          id="authorization_email"
          title="Email"
          register={register("email", {
            required: "required",
          })}
          wrong={errors.email ? true : false}
        >
          {errors.email?.message}
        </Input>
        <Input
          id="authorization_password"
          title="Пароль"
          type="password"
          register={register("password", {
            required: "required",
          })}
          wrong={errors.password ? true : false}
        >
          {errors.email?.message}
        </Input>
        <Button typeView="primary" size="large" type="submit">
          Войти
        </Button>
      </form>
    </div>
  );
};
