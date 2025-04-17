import { useRef, useState } from "react";
import SvgClosedChevronComponent from "../../../shared/assets/images/svg/components/closed-chevron";
import styles from "./mini-profile.module.scss";
import SvgOpenedChevronComponent from "../../../shared/assets/images/svg/components/opened-chevron";
import { DropDown } from "../../../shared/components/dropdown/dropdown";

interface ProfileDropDownProps {
  user:
    | {
        avatarUrl?: string | null;
        firstName?: string | null;
        lastName?: string | null;
      }
    | undefined;
}
export const MiniProfile = ({ user }: ProfileDropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  const handleOpenDropDown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={styles["mini-profile"]}
      onClick={handleOpenDropDown}
      ref={profileRef}
    >
      <div className={styles["mini-profile__inner"]}>
        <div className={styles["mini-profile__logo"]}>
          {user?.avatarUrl && <img src={user.avatarUrl} alt="" />}
        </div>
        <div className={styles["mini-profile__name"]}>
          <span>{user?.firstName}</span>
          <span>{user?.lastName}</span>
        </div>
        <div className={styles["mini-profile__drop-icon"]}>
          {isOpen ? (
            <SvgOpenedChevronComponent />
          ) : (
            <SvgClosedChevronComponent />
          )}
        </div>
      </div>
      <DropDown active={isOpen} setIsOpen={setIsOpen} parentRef={profileRef}>
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
