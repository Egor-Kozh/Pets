import { useForm } from "react-hook-form";
import { Button } from "../../../../../shared/components/buttons/button";
import { Input } from "../../../../../shared/components/inputs/input/input";
import {
  useCreateUserInfoMutation,
  useUserEmailQuery,
} from "../../../../../shared/__generated__/hooks";

interface RegistrationSecondStepProps {
  setNextStep: React.Dispatch<React.SetStateAction<boolean>>;
}
export const RegistrationSecondStep = ({
  setNextStep,
}: RegistrationSecondStepProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<{ first_name: string; last_name: string; patronymic: string }>();

  const firstName = watch("first_name");
  const lastName = watch("last_name");
  const middleName = watch("patronymic");
  const { data } = useUserEmailQuery();

  const [login, { loading }] = useCreateUserInfoMutation({
    onCompleted: () => {
      localStorage.removeItem("registrToken");

      setNextStep((active) => !active);
    },
    update(cache) {
      cache.modify({
        fields: {
          token() {
            return null;
          },
        },
      });
    },
  });

  const handleClick = () => {
    if (data?.userEmail) {
      login({
        variables: {
          email: data.userEmail.email,
          firstName: firstName,
          lastName: lastName,
          middleName: middleName,
        },
      });
    }
  };

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
      <Button typeView="primary" size="large" type="submit" loading={loading}>
        Далее
      </Button>
    </form>
  );
};
