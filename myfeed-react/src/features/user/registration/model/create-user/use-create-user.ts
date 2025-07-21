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
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [passwordErrorWeak, setPasswordErrorWeak] = useState<string[] | null>(
    null
  );

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUser>();

  const [createUser, { loading, error }] = useCreateUserMutation({
    onCompleted: (data) => {
      onCompleted(data);
    },
    onError: (error: unknown) => {
      interface GraphQLError {
        message: string;
        extensions?: {
          errors?: Array<{
            errors?: string[];
            field?: string;
          }>;
        };
      }

      const gqlError = error as { graphQLErrors?: GraphQLError[] };
      const validError = gqlError.graphQLErrors?.[0];

      if (validError) {
        return setPasswordErrorWeak(
          validError.extensions?.errors?.[0]?.errors || []
        );
      }
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
    if (values.password !== values.accept_password) {
      return setPasswordError("Пароли не совпадают!");
    }

    createUser({
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
    passwordError: { message: passwordError, setPasswordError },
    passwordErrorWeak: { message: passwordErrorWeak, setPasswordErrorWeak },
  };
};
