import styles from "./profile.module.scss";
import { Input } from "@shared/components/input/input";
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

interface Args {
  userData: UserProfileQuery | undefined;
}
export const Profile = ({ userData }: Args) => {
  const [isNewImage, setIsNewImage] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const [fileImage, setFileImage] = useState<File>();

  const { handleOnSubmit, register, errors } = useEditUser({
    fileImage,
    userData,
  });

  const gender = userData?.userMe.gender;

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
      <form className={styles["profile__form"]} onSubmit={handleOnSubmit}>
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
          register={register("country")}
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
    </>
  );
};
