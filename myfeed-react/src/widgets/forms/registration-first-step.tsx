import { useForm } from "react-hook-form";
import { Button } from "../../shared/components/buttons/button";
import { Input } from "../../shared/components/input/input";

interface RegistrationFirtStepProps {
  setNextStep: React.Dispatch<React.SetStateAction<boolean>>;
}
export const RegistrationFirtStep = ({
  setNextStep,
}: RegistrationFirtStepProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string; password: string; accept_password: string }>();

  const handleNextStep = () => {
    setNextStep((active) => !active);
  };

  return (
    <form onSubmit={handleSubmit(handleNextStep)}>
      <Input
        id="registration_email"
        title="Email"
        register={register("email", {
          required: "required",
        })}
        wrong={errors.email ? true : false}
      >
        {errors.email?.message}
      </Input>
      <Input
        id="registration_password"
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
        id="registration_accept-password"
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
  );
};
