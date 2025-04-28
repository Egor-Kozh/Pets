import {
  CreateUserMutation,
  useCreateUserMutation,
} from "@shared/__generated__/hooks";
import { useForm } from "react-hook-form";
import { CreateUser } from "./types";

interface Args {
  onCompleted: (data: CreateUserMutation) => void;
}
export const useCreateUser = ({ onCompleted }: Args) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
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
    register,
    watch,
    loading,
    errors,
    error,
  };
};
