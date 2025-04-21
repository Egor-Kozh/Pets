import { useRef, useState } from "react";
import SvgClosedChevronComponent from "@shared/assets/images/svg/components/closed-chevron";
import styles from "./mini-profile.module.scss";
import SvgOpenedChevronComponent from "@shared/assets/images/svg/components/opened-chevron";
import { DropDown } from "@shared/components/dropdown/dropdown";
import { useNavigate } from "react-router-dom";
import { Routes } from "@shared/routes";
import { Avatar } from "../avatar/avatar";

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
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  const handleOpenDropDown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleProfile = () => {
    navigate(Routes.profile, { replace: true });
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    window.location.reload();
  };

  return (
    <div
      className={styles["mini-profile"]}
      onClick={handleOpenDropDown}
      ref={profileRef}
    >
      <div className={styles["mini-profile__inner"]}>
        <div className={styles["mini-profile__logo"]}>
          <Avatar size="38px" src={user ? user.avatarUrl : null} />
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
        <div onClick={handleProfile}>
          <span>Мой профиль</span>
        </div>
        <div onClick={handleLogout}>
          <span>Выйти</span>
        </div>
      </DropDown>
    </div>
  );
};
