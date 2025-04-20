import { useForm } from "react-hook-form";
import { Input } from "@shared/components/input/input";
import styles from "./authorization-form.module.scss";
import { Button } from "@shared/components/buttons/button";
import { useLoginUserMutation } from "@shared/__generated__/hooks";
import { tokenVar } from "@app/api/clients";
import { useNavigate } from "react-router-dom";
import { Routes } from "@shared/routes";
import { useEffect, useState } from "react";

export const AuthorizationForm = () => {
  const navigate = useNavigate();

  const [authError, setAuthError] = useState<string>();

  const [login, { loading }] = useLoginUserMutation({
    onCompleted: (data) => {
      if (data.loginUser.problem)
        return setAuthError(data.loginUser.problem.message);

      if (data.loginUser.token) {
        tokenVar(data.loginUser.token);
        localStorage.setItem("authToken", data.loginUser.token);
      }

      navigate(Routes.home, { replace: true });
    },
    update(cache, { data }) {
      cache.modify({
        fields: {
          token() {
            return data?.loginUser.token;
          },
        },
      });
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<{ email: string; password: string }>();

  const userEmail = watch("email");
  const userPassword = watch("password");

  useEffect(() => {
    if (!authError) return;
    setAuthError("");
  }, [userEmail, userPassword]);

  const handleOnClick = () => {
    login({
      variables: {
        email: userEmail,
        password: userPassword,
      },
    });
  };

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
          wrong={!!(errors.email || authError)}
        >
          <span>{errors.email?.message}</span>
          <span>{authError}</span>
        </Input>
        <Input
          id="authorization_password"
          title="Пароль"
          type="password"
          register={register("password", {
            required: "required",
          })}
          wrong={!!(errors.password || authError)}
        >
          <span>{errors.email?.message}</span>
          <span>{authError}</span>
        </Input>
        <Button typeView="primary" size="large" type="submit" loading={loading}>
          Войти
        </Button>
      </form>
    </div>
  );
};
