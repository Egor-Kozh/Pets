import {
  CreateUserMutation,
  useCreateUserMutation,
} from "@shared/__generated__/hooks";
import { useForm } from "react-hook-form";
import { CreateUser } from "./types";
import { useState } from "react";

interface Args {
  onCompleted: (data: CreateUserMutation) => void;
}
export const useCreateUser = ({ onCompleted }: Args) => {
  const [passwordError, setPasswordError] = useState<string | null>(null)

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUser>();

  const [login, { loading, error }] = useCreateUserMutation({
    onCompleted: (data) => {
      onCompleted(data);
    },
    update(cache, { data }) {
      cache.modify({
        fields: {
          token() {
            return data?.newUser.token;
          },
        },
      });
    },
  });

  const handleOnSubmit = handleSubmit((values: CreateUser) => {
    if(values.password !== values.accept_password){
      return setPasswordError("Пароли не совпадают!")
    }

    login({
      variables: {
        email: values.email,
        password: values.password,
        passwordConfirm: values.accept_password,
      },
    });
  });

  return {
    handleOnSubmit,
    control,
    loading,
    errors,
    error,
    passwordError : {message : passwordError, setPasswordError}
  };
};
