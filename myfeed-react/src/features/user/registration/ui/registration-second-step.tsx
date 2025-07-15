import { Button } from "@shared/components/buttons/button";
import { Input } from "@shared/components/inputs/base-input/input";
import { useUserEmailQuery } from "@shared/__generated__/hooks";
import { useCreateUserInfo } from "@features/user/registration/model/create-user-info/use-create-user-info";
import { Controller } from "react-hook-form";
import { useNavigate  } from "react-router-dom";

export const RegistrationSecondStep = () => {
  const { data: userData } = useUserEmailQuery();
  const userEmail = userData?.userEmail.email ?? "";
  const navigate = useNavigate()

  const onCompleted = () => {
    localStorage.setItem("authToken", localStorage.getItem("registrToken") || "")
    localStorage.removeItem("registrToken");
    navigate("/")
  };
  const { handleOnSubmit, control, loading } = useCreateUserInfo({
    userEmail,
    onCompleted,
  });

  return (
    <form onSubmit={handleOnSubmit}>
      <Controller
        name="first_name"
        control={control}
        defaultValue=""
        rules={{ required: "Это поле обязательно!" }}
        render={({ field, fieldState: { error } }) => (
          <Input
            id="registration_firt-name"
            title="Имя"
            wrong={!!error}
            {...field}
          >
            {error?.message}
          </Input>
        )}
      />
      <Controller
        name="last_name"
        control={control}
        defaultValue=""
        rules={{ required: "Это поле обязательно!" }}
        render={({ field, fieldState: { error } }) => (
          <Input
            id="registration_last-name"
            title="Фамилия"
            wrong={!!error}
            {...field}
          >
            {error?.message}
          </Input>
        )}
      />
      <Controller
        name="patronymic"
        control={control}
        defaultValue=""
        rules={{ required: "Это поле обязательно!" }}
        render={({ field, fieldState: { error } }) => (
          <Input
            id="registration_patronymic"
            title="Отчество"
            wrong={!!error}
            {...field}
          >
            {error?.message}
          </Input>
        )}
      />
      <Button typeView="primary" size="large" type="submit" loading={loading}>
        Далее
      </Button>
    </form>
  );
};
