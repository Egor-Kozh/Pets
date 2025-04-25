import { CreatePostInfo } from "./types";
import { useCreateUserInfoMutation } from "@shared/__generated__/hooks";
import { useForm } from "react-hook-form";

interface Args {
  userEmail: string;
  onCompleted: () => void;
}
export const useCreateUserInfo = ({ userEmail, onCompleted }: Args) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CreatePostInfo>();

  const [login, { loading, error }] = useCreateUserInfoMutation({
    onCompleted: () => {
      onCompleted();
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

  const handleOnSubmit = handleSubmit((values: CreatePostInfo) => {
    if (userEmail) {
      login({
        variables: {
          email: userEmail,
          firstName: values.first_name,
          lastName: values.last_name,
          middleName: values.patronymic,
        },
      });
    }
  });

  return {
    handleOnSubmit,
    register,
    watch,
    error,
    loading,
    errors,
  };
};
