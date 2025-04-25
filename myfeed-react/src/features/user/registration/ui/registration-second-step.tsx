import { Button } from "@shared/components/buttons/button";
import { Input } from "@shared/components/input/input";
import { useUserEmailQuery } from "@shared/__generated__/hooks";
import { useContext } from "react";
import { registrationContext } from "@pages/authorization/authorization";
import { useCreateUserInfo } from "@features/user/registration/model/create-user-info/use-create-user-info";
import { AuthType } from "@pages/authorization/model/auth-type";

export const RegistrationSecondStep = () => {
  const context = useContext(registrationContext);
  const { data: userData } = useUserEmailQuery();
  const userEmail = userData?.userEmail.email ?? "";

  const onCompleted = () => {
    localStorage.removeItem("registrToken");

    context?.setPage(AuthType.authorization);
  };
  const { handleOnSubmit, register, loading, errors } = useCreateUserInfo({
    userEmail,
    onCompleted,
  });

  return (
    <form onSubmit={handleOnSubmit}>
      <Input
        id="registration_firt-name"
        title="Имя"
        register={register("first_name", {
          required: "required",
        })}
        wrong={!!errors.first_name}
      >
        {errors.first_name?.message}
      </Input>
      <Input
        id="registration_last-name"
        title="Фамилия"
        register={register("last_name", {
          required: "required",
        })}
        wrong={!!errors.last_name}
      >
        {errors.last_name?.message}
      </Input>
      <Input
        id="registration_patronymic"
        title="Отчество"
        register={register("patronymic", {
          required: "required",
        })}
        wrong={!!errors.patronymic}
      >
        {errors.patronymic?.message}
      </Input>
      <Button typeView="primary" size="large" type="submit" loading={loading}>
        Далее
      </Button>
    </form>
  );
};
