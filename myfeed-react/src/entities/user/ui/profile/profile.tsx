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

interface Args {
  userData: UserProfileQuery;
}
export const Profile = ({ userData }: Args) => {
  const [isNewImage, setIsNewImage] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const [fileImage, setFileImage] = useState<File>();
  const [inputChanges, setInputChanges] = useState<string[]>([]);

  const checkInputChanges = (
    name: keyof typeof userData.userMe,
    value: string | null
  ) => {
    if (userData?.userMe[name] == value) {
      setInputChanges((arr) => arr.filter((input) => input !== name));
    }
    if (!inputChanges.includes(name)) {
      setInputChanges((arr) => [...arr, name]);
    }
  };

  const { handleOnSubmit, control } = useEditUser({
    fileImage,
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
    checkInputChanges("avatarUrl", "");
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
                  checkInputChanges("avatarUrl", "");
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
          defaultValue={userData?.userMe.firstName || ""}
          rules={{ required: "Поле не должно быть пустым!" }}
          render={({ field }) => (
            <Input
              id="profile_firstName"
              title="Имя"
              size="100%"
              {...field}
              onChange={(e) => {
                const newValue = e.target.value;
                field.onChange(newValue);
                checkInputChanges(field.name, newValue);
              }}
            />
          )}
        />
        <Controller
          name="lastName"
          control={control}
          defaultValue={userData?.userMe.lastName || ""}
          rules={{ required: "Поле не должно быть пустым!" }}
          render={({ field }) => (
            <Input
              id="profile_lastName"
              title="Фамилия"
              size="100%"
              {...field}
              onChange={(e) => {
                const newValue = e.target.value;
                field.onChange(newValue);
                checkInputChanges(field.name, newValue);
              }}
            />
          )}
        />
        <Controller
          name="middleName"
          control={control}
          defaultValue={userData?.userMe.middleName || ""}
          rules={{ required: "Поле не должно быть пустым!" }}
          render={({ field }) => (
            <Input
              id="profile_middleName"
              title="Отчество"
              size="100%"
              {...field}
              onChange={(e) => {
                const newValue = e.target.value;
                field.onChange(newValue);
                checkInputChanges(field.name, newValue);
              }}
            ></Input>
          )}
        />
        <Controller
          name="birthDay"
          control={control}
          defaultValue={userData?.userMe.birthDate || ""}
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
          defaultValue={userData?.userMe.gender || ""}
          render={({ field }) => (
            <RadioGroup label="Выберите пол" {...field}>
              <RadioButton
                id="profile_male"
                value={GenderType.Male}
                info="Мужской"
                checked={field.value === GenderType.Male}
                onChange={(e) => {
                  const newValue = e.target.value;
                  field.onChange(newValue);
                  checkInputChanges(field.name, newValue);
                }}
              />
              <RadioButton
                id="profile_female"
                value={GenderType.Female}
                info="Женский"
                checked={field.value === GenderType.Female}
                onChange={(e) => {
                  const newValue = e.target.value;
                  field.onChange(newValue);
                  checkInputChanges(field.name, newValue);
                }}
              />
            </RadioGroup>
          )}
        />
        <Controller
          name="email"
          control={control}
          defaultValue={userData?.userMe.email || ""}
          rules={{ required: "Поле не должно быть пустым!" }}
          render={({ field }) => (
            <Input
              id="profile_email"
              title="Email"
              size="100%"
              {...field}
              onChange={(e) => {
                const newValue = e.target.value;
                field.onChange(newValue);
                checkInputChanges(field.name, newValue);
              }}
            />
          )}
        />
        <Controller
          name="phone"
          control={control}
          defaultValue={userData?.userMe.phone || ""}
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
              onChange={(e) => {
                const newValue = e.target.value;
                field.onChange(newValue);
                checkInputChanges(field.name, newValue);
              }}
            >
              <span>{error?.message}</span>
            </Input>
          )}
        />
        <Controller
          name="country"
          control={control}
          defaultValue={userData?.userMe.country || ""}
          render={({ field }) => (
            <Input
              id="profile_country"
              title="Страна"
              size="100%"
              {...field}
              onChange={(e) => {
                const newValue = e.target.value;
                field.onChange(newValue);
                checkInputChanges(field.name, newValue);
              }}
            />
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
            disabled={inputChanges.length === 0}
          >
            Сохранить
          </Button>
        </div>
      </form>
    </>
  );
};
