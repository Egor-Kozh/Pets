import { Input } from "@shared/components/inputs/base-input/input";
import styles from "./authorization-form.module.scss";
import { Button } from "@shared/components/buttons/button";
import { LoginUserMutation } from "@shared/__generated__/hooks";
import { tokenVar } from "@app/api/clients";
import { useNavigate } from "react-router-dom";
import { Routes } from "@shared/routes";
import { useEffect, useState } from "react";
import { useAuthorizationUser } from "@features/user/authorization/model/use-authorization-user";
import { Controller } from "react-hook-form";
import { InputPassword } from "@shared/components/inputs/passowrd-input/password-input";

export const AuthorizationForm = () => {
  const navigate = useNavigate();

  const [authError, setAuthError] = useState<string>();

  const onCompleted = (data: LoginUserMutation) => {
    if (data.loginUser.problem)
      return setAuthError(data.loginUser.problem.message);

    if (data.loginUser.token) {
      tokenVar(data.loginUser.token);
      localStorage.setItem("authToken", data.loginUser.token);
    }

    navigate(Routes.home, { replace: true });
  };
  const { handleOnSubmit, control, watch, loading } =
    useAuthorizationUser(onCompleted);

  const userEmail = watch("email");
  const userPassword = watch("password");

  useEffect(() => {
    if (!authError) return;
    setAuthError("");
  }, [userEmail, userPassword]);

  return (
    <div className={styles["authorization-form"]}>
      <div className={styles["info"]}>
        <span>Введите Ваш Email и пароль, чтобы войти в аккаунт.</span>
      </div>
      <form onSubmit={handleOnSubmit}>
        <div className={styles["inputs"]}>
          <Controller
            name="email"
            control={control}
            rules={{ required: "Почта пользователя обязательно!" }}
            render={({ field, fieldState: { error } }) => (
              <Input
                id="authorization_email"
                title="Email"
                wrong={!!(error || authError)}
                {...field}
              >
                <span>{error?.message}</span>
                <span>{authError}</span>
              </Input>
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={{ required: "Пароль пользователя обязательно!" }}
            render={({ field, fieldState: { error } }) => (
              <InputPassword
                id="authorization_password"
                title="Пароль"
                wrong={!!(error || authError)}
                {...field}
              >
                <span>{error?.message}</span>
                <span>{authError}</span>
              </InputPassword>
            )}
          />
        </div>
        <Button typeView="primary" size="large" type="submit" loading={loading}>
          Войти
        </Button>
      </form>
    </div>
  );
};
