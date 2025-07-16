import { Button } from "@shared/components/buttons/button";
import { Input } from "@shared/components/inputs/base-input/input";
import { tokenVar } from "@app/api/clients";
import { useState } from "react";
import { CreateUserMutation } from "@shared/__generated__/hooks";
import { useCreateUser } from "@features/user/registration/model/create-user/use-create-user";
import { Controller } from "react-hook-form";
import { InputPassword } from "@shared/components/inputs/passowrd-input/password-input";

interface RegistrationFirtStepProps {
  setNextStep: React.Dispatch<React.SetStateAction<boolean>>;
}
export const RegistrationFirtStep = ({
  setNextStep,
}: RegistrationFirtStepProps) => {
  const [emailError, setEmailError] = useState<string | null>(null);

  const onCompleted = (data: CreateUserMutation) => {
    if (data.newUser.problem)
      return setEmailError(data.newUser.problem.message);

    if (data.newUser.token) {
      tokenVar(data.newUser.token);
      localStorage.setItem("registrToken", data.newUser.token);
    }
    setNextStep((active) => !active);
  };
  const { handleOnSubmit, control, passwordError, loading } = useCreateUser({
    onCompleted,
  });

  return (
    <form onSubmit={handleOnSubmit}>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        rules={{
          required: "Это поле обязательно!",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+[.]+[A-Z]{2,4}$/i,
            message: "Неверный формат почты",
          },
        }}
        render={({ field, fieldState: { error } }) => (
          <Input
            id="registration_email"
            title="Email"
            wrong={!!(error || emailError)}
            {...field}
          >
            <span>{error?.message}</span>
            <span>{emailError}</span>
          </Input>
        )}
      />
      <Controller
        name="password"
        control={control}
        defaultValue=""
        rules={{
          required: "Это поле обязательно!",
        }}
        render={({ field, fieldState: { error } }) => (
          <InputPassword
            id="registration_password"
            title="Пароль"
            wrong={!!error}
            {...field}
          >
            <span>{error?.message}</span>
          </InputPassword>
        )}
      />
      <Controller
        name="accept_password"
        control={control}
        defaultValue=""
        rules={{
          required: "Это поле обязательно!",
        }}
        render={({ field, fieldState: { error } }) => (
          <InputPassword
            id="registration_accept-password"
            title="Введите пароль еще раз"
            wrong={!!(error || passwordError.message)}
            {...field}
            onChange={(e) => {
              field.onChange(e)
              passwordError.setPasswordError(null)
            }}
          >
            <span>{error?.message}</span>
            <span>{passwordError.message}</span>
          </InputPassword>
        )}
      />
      <Button typeView="primary" size="large" type="submit" loading={loading}>
        Далее
      </Button>
    </form>
  );
};
