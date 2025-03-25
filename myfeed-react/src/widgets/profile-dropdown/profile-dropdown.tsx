import { useState } from "react";
import SvgClosedChevronComponent from "./icons/components/closed-chevron";
import styles from "./profile-dropdown.module.scss";
import classNames from "classnames";
import SvgOpenedChevronComponent from "./icons/components/opened-chevron";

interface ProfileDropDownProps {
  userName: string;
}
export const ProfileDropDown = ({ userName }: ProfileDropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenDropDown = () => {
    setIsOpen(!isOpen);
  };

  const dropMenuClass = classNames(
    styles["profile-dropdown__drop-menu"],
    isOpen && styles.active
  );

  return (
    <div className={styles["profile-dropdown"]}>
      <div
        className={styles["profile-dropdown__inner"]}
        onClick={handleOpenDropDown}
      >
        <div className={styles["profile-dropdown__logo"]}></div>
        <div className={styles["profile-dropdown__name"]}>{userName}</div>
        <div className={styles["profile-dropdown__drop-icon"]}>
          {isOpen ? (
            <SvgOpenedChevronComponent />
          ) : (
            <SvgClosedChevronComponent />
          )}
        </div>
      </div>
      <div className={dropMenuClass}>
        <div className={`${styles["drop-menu__item"]} ${styles.top}`}>
          <span>Мой профиль</span>
        </div>
        <div className={`${styles["drop-menu__item"]} ${styles.bottom}`}>
          <span>Выйти</span>
        </div>
      </div>
    </div>
  );
};
