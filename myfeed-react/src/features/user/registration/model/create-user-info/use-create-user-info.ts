import { CreatePostInfo } from "./types";
import { useCreateUserInfoMutation } from "@shared/__generated__/hooks";
import { useForm } from "react-hook-form";

interface Args {
  userEmail: string;
  onCompleted: () => void;
}
export const useCreateUserInfo = ({ userEmail, onCompleted }: Args) => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CreatePostInfo>();

  const [createPostInfo, { loading, error }] = useCreateUserInfoMutation({
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
      createPostInfo({
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
    control,
    watch,
    error,
    loading,
    errors,
  };
};
