import { useState } from "react";
import SvgClosedChevronComponent from "../icons/components/closed-chevron";
import styles from "./mini-profile.module.scss";
import SvgOpenedChevronComponent from "../icons/components/opened-chevron";
import { DropDown } from "../../../shared/components/dropdown/dropdown";

interface ProfileDropDownProps {
  userFirstName: string;
  userLastName: string;
}
export const MiniProfile = ({
  userFirstName,
  userLastName,
}: ProfileDropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenDropDown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles["mini-profile"]}>
      <div
        className={styles["mini-profile__inner"]}
        onClick={handleOpenDropDown}
      >
        <div className={styles["mini-profile__logo"]}></div>
        <div className={styles["mini-profile__name"]}>
          <span>{userFirstName}</span>
          <span>{userLastName}</span>
        </div>
        <div className={styles["mini-profile__drop-icon"]}>
          {isOpen ? (
            <SvgOpenedChevronComponent />
          ) : (
            <SvgClosedChevronComponent />
          )}
        </div>
      </div>
      <DropDown active={isOpen}>
        <div>
          <span>Мой профиль</span>
        </div>
        <div>
          <span>Выйти</span>
        </div>
      </DropDown>
    </div>
  );
};
