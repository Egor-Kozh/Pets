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

interface Args {
  fileImage: File | undefined;
  userData: UserProfileQuery | undefined;
}
export const useEditUser = ({ fileImage }: Args) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<EditUser>({
    // defaultValues: {
    //   firstName: userData?.userMe.firstName ?? "",
    //   lastName: userData?.userMe.lastName ?? "",
    //   middleName: userData?.userMe.middleName ?? "",
    //   birthDay: userData?.userMe.birthDate ?? "",
    //   gender: userData?.userMe.gender ?? undefined,
    //   email: userData?.userMe.email ?? "",
    //   phone: userData?.userMe.phone ?? "",
    //   country: userData?.userMe.country ?? "",
    // },
  });

  const [editUser, { loading: edit_loading, error }] = useEditUserMutation({
    onCompleted: () => {
      window.location.reload();
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
