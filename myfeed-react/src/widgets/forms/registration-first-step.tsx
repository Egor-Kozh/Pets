import { useForm } from "react-hook-form";
import { Button } from "../../shared/components/buttons/button";
import { Input } from "../../shared/components/input/input";
import { useMutation } from "@apollo/client";
import { tokenVar } from "../../app/api/clients";
import { CREATE_USER } from "../../app/api/user/gql/mutations/create-user";
import { useEffect, useState } from "react";

interface RegistrationFirtStepProps {
  setNextStep: React.Dispatch<React.SetStateAction<boolean>>;
}
export const RegistrationFirtStep = ({
  setNextStep,
}: RegistrationFirtStepProps) => {
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordConfirmError, setPasswordConfirmError] = useState<
    string | null
  >(null);

  const [login, { loading }] = useMutation(CREATE_USER, {
    onCompleted: (data) => {
      if (data.newUser.problem)
        return setEmailError(data.newUser.problem.message);

      tokenVar(data.newUser.token);

      localStorage.setItem("authToken", data.newUser.token);
      setNextStep((active) => !active);
    },
    update(cache, { data: { login } }) {
      cache.modify({
        fields: {
          token() {
            return login.token;
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
  } = useForm<{ email: string; password: string; accept_password: string }>();

  const userEmail = watch("email");
  const userPassword = watch("password");
  const userPasswordConfirm = watch("accept_password");

  useEffect(() => {
    if (!emailError) return;
    setEmailError(null);
  }, [userEmail]);

  useEffect(() => {
    if (!passwordConfirmError) return;
    setPasswordConfirmError(null);
  }, [userPasswordConfirm]);

  const handleLogin = () => {
    if (userPassword !== userPasswordConfirm)
      return setPasswordConfirmError("Пароли не совпадают!");
    login({
      variables: {
        email: userEmail,
        password: userPassword,
        passwordConfirm: userPasswordConfirm,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <Input
        id="registration_email"
        title="Email"
        register={register("email", {
          required: "Это поле обязательно!",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+[.]+[A-Z]{2,4}$/i,
            message: "Неверный формат почты",
          },
        })}
        wrong={errors.email || emailError ? true : false}
      >
        <span>{errors.email?.message}</span>
        <span>{emailError}</span>
      </Input>
      <Input
        id="registration_password"
        title="Пароль"
        type="password"
        register={register("password", {
          required: "Это поле обязательно!",
        })}
        wrong={errors.password ? true : false}
      >
        <span>{errors.password?.message}</span>
      </Input>
      <Input
        id="registration_accept-password"
        title="Введите пароль еще раз"
        type="password"
        register={register("accept_password", {
          required: "Это поле обязательно!",
        })}
        wrong={errors.accept_password || passwordConfirmError ? true : false}
      >
        <span>{errors.accept_password?.message}</span>
        <span>{passwordConfirmError}</span>
      </Input>
      <Button typeView="primary" size="large" type="submit" loading={loading}>
        Далее
      </Button>
    </form>
  );
};
