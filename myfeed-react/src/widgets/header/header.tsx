import { useState } from "react";
import { Toggle } from "../../shared/components/toggle/toggle";
import { MiniProfile } from "../dropdowns/mini-profile/mini-profile";
import styles from "./header.module.scss";
import SvgHeaderLogoComponent from "./icons/components/header-logo";
import { useColorTheme } from "../../shared/hooks/useColorTheme";

interface HeaderProps {
  page?: "main" | "posts" | "favourites";
}
export const Header = ({ page = "main" }: HeaderProps) => {
  const [isAvtive, setIsActive] = useState(page);
  const setTheme = useColorTheme();

  const handleChangePage = (activePage: "main" | "posts" | "favourites") => {
    setIsActive(activePage);
  };

  return (
    <header className={styles.header}>
      <div className={styles["header__left"]}>
        <div className={styles["header__logo"]}>
          <SvgHeaderLogoComponent />
        </div>
      </div>
      <div className={styles["header__center"]}>
        <nav className={styles["header__nav"]}>
          <ul className={styles["header__nav-list"]}>
            <li
              className={`${styles["header__nav-item"]} ${
                isAvtive === "main" && styles.active
              }`}
              onClick={() => handleChangePage("main")}
            >
              <a href="#">Главная</a>
            </li>
            <li
              className={`${styles["header__nav-item"]} ${
                isAvtive === "posts" && styles.active
              }`}
              onClick={() => handleChangePage("posts")}
            >
              <a href="#">Мои Посты</a>
            </li>
            <li
              className={`${styles["header__nav-item"]} ${
                isAvtive === "favourites" && styles.active
              }`}
              onClick={() => handleChangePage("favourites")}
            >
              <a href="#">Избранное</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles["header__right"]}>
        <Toggle id="switch_theme" onClick={setTheme} />
        <MiniProfile userFirstName="Мария" userLastName="Иванова" />
      </div>
    </header>
  );
};
