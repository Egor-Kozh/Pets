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
import { useEffect } from "react";

interface Args {
  fileImage: File | undefined;
  userData: UserProfileQuery | undefined;
  image: string | null | undefined;
}
export const useEditUser = ({ fileImage, image, userData }: Args) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
  } = useForm<EditUser>({
    defaultValues: {
      firstName: userData?.userMe.firstName ?? "",
      lastName: userData?.userMe.lastName ?? "",
      middleName: userData?.userMe.middleName ?? "",
      birthDay: userData?.userMe.birthDate ?? "",
      gender: userData?.userMe.gender ?? undefined,
      email: userData?.userMe.email ?? "",
      phone: userData?.userMe.phone ?? "",
      country: userData?.userMe.country ?? "",
    },
  });

  useEffect(() => {
    if (userData?.userMe) {
      reset(
        {
          firstName: userData?.userMe.firstName || "",
          lastName: userData?.userMe.lastName || "",
          middleName: userData?.userMe.middleName || "",
          birthDay: userData?.userMe.birthDate || "",
          gender: userData?.userMe.gender || "",
          email: userData?.userMe.email || "",
          phone: userData?.userMe.phone || "",
          country: userData?.userMe.country || "",
        },
        {
          keepDirty: false,
        }
      );
    }
  }, [userData?.userMe, reset]);

  const [editUser, { loading: isEditLoading, error }] = useEditUserMutation({
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

    let imageUrl: string | null | undefined;
    if (fileImage) {
      imageUrl = await uploadToS3({ fileImage, typeImage: TypeFiles.avatar });
    } else {
      imageUrl = image;
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

  return { handleOnSubmit, control, errors, isEditLoading, error, isDirty };
};
