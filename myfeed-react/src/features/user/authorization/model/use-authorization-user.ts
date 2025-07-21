import {
  LoginUserMutation,
  useLoginUserMutation,
} from "@shared/__generated__/hooks";
import { useForm } from "react-hook-form";
import { AuthorizationUser } from "./types";

export const useAuthorizationUser = (
  onComplete: (data: LoginUserMutation) => void
) => {
  const [loginUser, { loading, error }] = useLoginUserMutation({
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
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<AuthorizationUser>();

  const handleOnSubmit = handleSubmit((values: AuthorizationUser) => {
    loginUser({
      variables: {
        email: values.email,
        password: values.password,
      },
    });
  });

  return {
    handleOnSubmit,
    control,
    handleSubmit,
    watch,
    loading,
    errors,
    error,
  };
};
