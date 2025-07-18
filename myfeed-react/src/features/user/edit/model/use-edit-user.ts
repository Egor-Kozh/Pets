/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { EditUser } from "./type";
import {
  GenderType,
  useEditUserMutation,
  UserProfileQuery,
} from "@shared/__generated__/hooks";
import { uploadToS3 } from "@shared/hooks/imageToS3/imageToS3";
import { TypeFiles } from "@shared/hooks/imageToS3/model/types";
import { USER_PROFILE } from "@entities/user/model/user-profile/user-profile";

interface Args {
  fileImage: File | undefined;
  userData: UserProfileQuery | undefined;
}
export const useEditUser = ({ fileImage }: Args) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<EditUser>();

  const [editUser, { loading: edit_loading, error }] = useEditUserMutation({
    update(cache, { data }) {
      cache.writeQuery({
        query: USER_PROFILE,
        data: {
          userMe: data?.editUser.user,
        },
      });
    },
  });

  const handleOnSubmit = handleSubmit(async (values: EditUser) => {
    if (!values.email) return;

    let imageUrl: string | null = null;
    if (fileImage) {
      imageUrl = await uploadToS3({ fileImage, typeImage: TypeFiles.avatar });
    }
    editUser({
      variables: {
        firstName: values.firstName,
        lastName: values.lastName,
        middleName: values.middleName,
        birthDate: values.birthDay || null,
        gender: values.gender as GenderType,
        email: values.email,
        phone: values.phone || null,
        country: values.country || null,
        avatarUrl: imageUrl || null,
      },
    }).catch((error: any) => {
      console.error("Ошибка при создании поста:", error.message);
      console.error("Детали ошибки:", error.graphQLErrors);
    });
  });

  return { handleOnSubmit, control, errors, edit_loading, error };
};
