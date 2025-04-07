import { useForm } from "react-hook-form";
import { Button } from "../../shared/components/buttons/button";
import { Input } from "../../shared/components/input/input";
import { useMutation } from "@apollo/client";
import { tokenVar } from "../../app/api/clients";
import { CREATE_USER } from "../../app/api/user/gql/mutations/create-user";

interface RegistrationFirtStepProps {
  setNextStep: React.Dispatch<React.SetStateAction<boolean>>;
}
export const RegistrationFirtStep = ({
  setNextStep,
}: RegistrationFirtStepProps) => {
  const [login, { loading, error }] = useMutation(CREATE_USER, {
    onCompleted: (data) => {
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

  const handleLogin = () => {
    if (userPassword !== userPasswordConfirm)
      return console.log("пароли не совпадают");
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
          required: "required",
        })}
        wrong={errors.email || error ? true : false}
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
      <Button typeView="primary" size="large" type="submit" loading={loading}>
        Далее
      </Button>
    </form>
  );
};
