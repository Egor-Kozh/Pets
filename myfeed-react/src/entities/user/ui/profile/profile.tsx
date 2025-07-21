import styles from "./profile.module.scss";
import { Input } from "@shared/components/inputs/base-input/input";
import { Button } from "@shared/components/buttons/button";
import { RadioButton } from "@shared/components/radio-buttons/radio-button";
import { RadioGroup } from "@shared/components/radio-buttons/ui/radio-group";
import { GenderType, UserProfileQuery } from "@shared/__generated__/hooks";
import { useRef, useState } from "react";
import { Avatar } from "../avatar/avatar";
import { IconButton } from "@shared/components/icon-button/icon-button";
import SvgEditButtonComponent from "@shared/assets/images/svg/components/edit-buttons";
import { DropDown } from "@shared/components/dropdown/dropdown";
import { useEditUser } from "@features/user/edit/model/use-edit-user";
import { Controller } from "react-hook-form";
import { InputDate } from "@shared/components/inputs/date-input/date-input";

interface ProfileProps {
  userData: UserProfileQuery | undefined;
}
export const Profile = ({ userData }: ProfileProps) => {
  const [isNewImage, setIsNewImage] = useState(false);
  const [image, setImage] = useState<string | undefined | null>(
    userData?.userMe.avatarUrl
  );
  const [fileImage, setFileImage] = useState<File>();

  const { handleOnSubmit, control, isEditLoading, isDirty } = useEditUser({
    fileImage,
    image,
    userData,
  });

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
    <>
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
                onChange={(e) => {
                  handleFileChange(e);
                }}
                style={{ display: "none" }}
              />
            </div>
            <div onClick={handleDeleteImg}>
              <span>Удалить фото</span>
            </div>
          </DropDown>
        </IconButton>
      </Avatar>
      <form className={styles["profile__form"]} onSubmit={handleOnSubmit}>
        <Controller
          name="firstName"
          control={control}
          rules={{ required: "Поле не должно быть пустым!" }}
          render={({ field }) => (
            <Input id="profile_firstName" title="Имя" size="100%" {...field} />
          )}
        />
        <Controller
          name="lastName"
          control={control}
          rules={{ required: "Поле не должно быть пустым!" }}
          render={({ field }) => (
            <Input
              id="profile_lastName"
              title="Фамилия"
              size="100%"
              {...field}
            />
          )}
        />
        <Controller
          name="middleName"
          control={control}
          rules={{ required: "Поле не должно быть пустым!" }}
          render={({ field }) => (
            <Input
              id="profile_middleName"
              title="Отчество"
              size="100%"
              {...field}
            ></Input>
          )}
        />
        <Controller
          name="birthDay"
          control={control}
          render={({ field }) => (
            <InputDate
              id="profile_birthDay"
              title="Дата рождения"
              size="100%"
              {...field}
            />
          )}
        />
        <Controller
          name="gender"
          control={control}
          render={({ field }) => (
            <RadioGroup label="Выберите пол" {...field}>
              <RadioButton
                id="profile_male"
                value={GenderType.Male}
                info="Мужской"
                checked={field.value === GenderType.Male}
              />
              <RadioButton
                id="profile_female"
                value={GenderType.Female}
                info="Женский"
                checked={field.value === GenderType.Female}
              />
            </RadioGroup>
          )}
        />
        <Controller
          name="email"
          control={control}
          rules={{ required: "Поле не должно быть пустым!" }}
          render={({ field }) => (
            <Input id="profile_email" title="Email" size="100%" {...field} />
          )}
        />
        <Controller
          name="phone"
          control={control}
          rules={{
            pattern: {
              value:
                /(\+7|8)[- _]*\(?[- _]*(\d{3}[- _]*\)?([- _]*\d){7}|\d\d[- _]*\d\d[- _]*\)?([- _]*\d){6})/i,
              message: "Неверный формат телефона",
            },
          }}
          render={({ field, fieldState: { error } }) => (
            <Input
              id="profile_phone"
              title="Номер телефона"
              size="100%"
              wrong={!!error}
              {...field}
            >
              <span>{error?.message}</span>
            </Input>
          )}
        />
        <Controller
          name="country"
          control={control}
          render={({ field }) => (
            <Input id="profile_country" title="Страна" size="100%" {...field} />
          )}
        />
        <div className={styles["profile__actions"]}>
          <Button typeView="secondary" size="small" type="button">
            Отменить
          </Button>
          <Button
            typeView="primary"
            size="small"
            type="submit"
            disabled={!isDirty}
            loading={isEditLoading}
          >
            Сохранить
          </Button>
        </div>
      </form>
    </>
  );
};
