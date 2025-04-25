import {
  LoginUserMutation,
  useLoginUserMutation,
} from "@shared/__generated__/hooks";
import { useForm } from "react-hook-form";
import { AuthorizationUser } from "./types";

export const useAuthorizationUser = (
  onComplete: (data: LoginUserMutation) => void
) => {
  const [login, { loading, error }] = useLoginUserMutation({
    onCompleted: (data) => {
      onComplete(data);
    },
    update(cache, { data }) {
      cache.modify({
        fields: {
          token() {
            return data?.loginUser.token;
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
  } = useForm<AuthorizationUser>();

  const handleOnSubmit = handleSubmit((values: AuthorizationUser) => {
    login({
      variables: {
        email: values.email,
        password: values.password,
      },
    });
  });

  return {
    handleOnSubmit,
    register,
    handleSubmit,
    watch,
    loading,
    errors,
    error,
  };
};
