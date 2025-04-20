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
import { useEffect } from "react";

export const Profile = () => {
  const { data: userData } = useUserProfileQuery();

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

  const handleEditUser = () => {
    if (!email) return;
    editUser({
      variables: {
        firstName: fisrtName,
        lastName: lastName,
        middleName: middleName,
        birthDate: birthDate ?? "",
        gender: gender,
        email: email,
        phone: phone ?? "",
        country: country ?? "",
      },
    }).catch((error) => {
      console.error("Ошибка при создании поста:", error.message);
      console.error("Детали ошибки:", error.graphQLErrors);
    });
  };

  return (
    <div className={styles["profile"]}>
      <div className={styles["profile__inner"]}>
        <div className={styles["profile__header"]}>
          <span>Мой профиль</span>
        </div>
        <form
          className={styles["profile__form"]}
          onSubmit={handleSubmit(handleEditUser)}
        >
          <Input
            id="profile_firstName"
            title="Имя"
            size="415px"
            register={register("firstName", {
              required: "Поле не должно быть пустым!",
            })}
          />
          <Input
            id="profile_lastName"
            title="Фамилия"
            size="415px"
            register={register("lastName", {
              required: "Поле не должно быть пустым!",
            })}
          />
          <Input
            id="profile_middleName"
            title="Отчество"
            size="415px"
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
            size="415px"
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
            size="415px"
            register={register("email", {
              required: "Поле не должно быть пустым!",
            })}
          />
          <Input
            id="profile_phone"
            title="Номер телефона"
            size="415px"
            register={register("phone")}
          />
          <Input
            id="profile_country"
            title="Страна"
            size="415px"
            register={register("contry")}
          />
          <div className={styles["profile__actions"]}>
            <Button typeView="secondary" size="small">
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
