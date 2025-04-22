import { useForm } from "react-hook-form";
import styles from "./profile.module.scss";
import { ProfileForm } from "./model/type";
import { Input } from "@shared/components/input/input";
import { Button } from "@shared/components/buttons/button";
import { RadioButton } from "@shared/components/radio-buttons/radio-button";
import { RadioGroup } from "@shared/components/radio-buttons/ui/radio-group";
import {
  GenderType,
  useEditUserMutation,
  useUserProfileQuery,
} from "@shared/__generated__/hooks";
import { useEffect, useRef, useState } from "react";
import { Avatar } from "../avatar/avatar";
import { IconButton } from "@shared/components/icon-button/icon-button";
import SvgEditButtonComponent from "@shared/assets/images/svg/components/edit-buttons";
import { DropDown } from "@shared/components/dropdown/dropdown";
import { uploadToS3 } from "@shared/hooks/imageToS3";

export const Profile = () => {
  const { data: userData } = useUserProfileQuery();
  const [isNewImage, setIsNewImage] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const [fileImage, setFileImage] = useState<File>();

  const [editUser] = useEditUserMutation({
    onCompleted: () => {
      window.location.reload();
    },
  });

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<ProfileForm>({
    defaultValues: {
      firstName: userData?.userMe.firstName ?? "",
      lastName: userData?.userMe.lastName ?? "",
      middleName: userData?.userMe.middleName ?? "",
      birthDay: userData?.userMe.birthDate ?? "",
      email: userData?.userMe.email ?? "",
      phone: userData?.userMe.phone ?? "",
      contry: userData?.userMe.country ?? "",
    },
  });

  useEffect(() => {
    if (userData) {
      reset({
        firstName: userData.userMe.firstName ?? "",
        lastName: userData.userMe.lastName ?? "",
        middleName: userData.userMe.middleName ?? "",
        birthDay: userData.userMe.birthDate ?? "",
        gender: userData.userMe.gender ?? GenderType.Male,
        email: userData.userMe.email ?? "",
        phone: userData.userMe.phone ?? "",
        contry: userData.userMe.country ?? "",
      });
    }
  }, [userData]);

  const fisrtName = watch("firstName");
  const lastName = watch("lastName");
  const middleName = watch("middleName");
  const birthDate = watch("birthDay");
  const gender = watch("gender") as GenderType;
  const email = watch("email");
  const phone = watch("phone");
  const country = watch("contry");

  const handleEditUser = async () => {
    if (!email) return;

    let imageUrl: string | null = null;
    if (fileImage) {
      console.log(fileImage);
      imageUrl = await uploadToS3(fileImage);
    }
    editUser({
      variables: {
        firstName: fisrtName,
        lastName: lastName,
        middleName: middleName,
        birthDate: birthDate || null,
        gender: gender,
        email: email,
        phone: phone || null,
        country: country || null,
        avatarUrl: imageUrl || null,
      },
    }).catch((error) => {
      console.error("Ошибка при создании поста:", error.message);
      console.error("Детали ошибки:", error.graphQLErrors);
    });
  };

  const [isOpen, setIsOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  const handleOpenDropDown = () => {
    setIsOpen((prev) => !prev);
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleLoadImg = () => {
    setIsOpen(false);
    fileInputRef.current?.click();
  };
  const handleDeleteImg = () => {
    setIsOpen(false);
    setIsNewImage(true);
    setFileImage(undefined);
    setImage(null);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileImg = event.target.files ? event.target.files[0] : null;
    if (!fileImg) return;

    setIsNewImage(true);
    setFileImage(fileImg);
    const imgURL = URL.createObjectURL(fileImg);
    setImage(imgURL);
  };

  return (
    <div className={styles["profile"]}>
      <div className={styles["profile__inner"]}>
        <div className={styles["profile__header"]}>
          <span>Мой профиль</span>
        </div>
        <Avatar
          size="148px"
          src={isNewImage ? image : userData?.userMe.avatarUrl}
        >
          <IconButton onClick={handleOpenDropDown} ref={profileRef}>
            <SvgEditButtonComponent />
            <DropDown
              active={isOpen}
              setIsOpen={setIsOpen}
              parentRef={profileRef}
              style={{ top: 0, left: 0, marginTop: "45px", minWidth: "130px" }}
            >
              <div onClick={handleLoadImg}>
                <span>Загрузить фото</span>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
              </div>
              <div onClick={handleDeleteImg}>
                <span>Удалить фото</span>
              </div>
            </DropDown>
          </IconButton>
        </Avatar>
        <form
          className={styles["profile__form"]}
          onSubmit={handleSubmit(handleEditUser)}
        >
          <Input
            id="profile_firstName"
            title="Имя"
            size="100%"
            register={register("firstName", {
              required: "Поле не должно быть пустым!",
            })}
          />
          <Input
            id="profile_lastName"
            title="Фамилия"
            size="100%"
            register={register("lastName", {
              required: "Поле не должно быть пустым!",
            })}
          />
          <Input
            id="profile_middleName"
            title="Отчество"
            size="100%"
            wrong={!!errors.middleName}
            register={register("middleName", {
              required: "Поле не должно быть пустым!",
            })}
          >
            <span>{errors.middleName?.message}</span>
          </Input>
          <Input
            id="profile_birthDay"
            type="date"
            title="Дата рождения"
            size="100%"
            register={register("birthDay")}
          />
          <RadioGroup label="Выберите пол">
            <RadioButton
              id="profile_male"
              value={GenderType.Male}
              info="Мужской"
              checked={gender === GenderType.Male}
              register={register("gender")}
            />
            <RadioButton
              id="profile_female"
              value={GenderType.Female}
              info="Женский"
              checked={gender === GenderType.Female}
              register={register("gender")}
            />
          </RadioGroup>
          <Input
            id="profile_email"
            title="Email"
            size="100%"
            register={register("email", {
              required: "Поле не должно быть пустым!",
            })}
          />
          <Input
            id="profile_phone"
            title="Номер телефона"
            size="100%"
            register={register("phone")}
          />
          <Input
            id="profile_country"
            title="Страна"
            size="100%"
            register={register("contry")}
          />
          <div className={styles["profile__actions"]}>
            <Button typeView="secondary" size="small" type="button">
              Отменить
            </Button>
            <Button typeView="primary" size="small" type="submit">
              Сохранить
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
