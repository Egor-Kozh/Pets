import { useForm } from "react-hook-form";
import { Button } from "../../../../shared/components/buttons/button";
import { Input } from "../../../../shared/components/inputs/input/input";

export const RegistrationSecondStep = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ first_name: string; last_name: string; patronymic: string }>();

  const handleClick = () => {};

  return (
    <form onSubmit={handleSubmit(handleClick)}>
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
      <Button typeView="primary" size="large" type="submit">
        Далее
      </Button>
    </form>
  );
};
