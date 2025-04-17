import { useState } from "react";
import { Toggle } from "../../../shared/components/toggle/toggle";
import { MiniProfile } from "../../user/mini-profile/mini-profile";
import styles from "./header.module.scss";
import SvgLogoComponent from "../../../shared/assets/images/svg/components/logo";
import { useColorTheme } from "../../../shared/hooks/useColorTheme";
import { navItems } from "./model/nav-types";
import { useUserMiniProfileQuery } from "../../../shared/__generated__/hooks";

interface HeaderProps {
  page?: "main" | "posts" | "favourites";
}
export const Header = ({ page = "main" }: HeaderProps) => {
  const [isAvtive, setIsActive] = useState(page);
  const setTheme = useColorTheme();

  const { data } = useUserMiniProfileQuery();

  const handleChangePage = (activePage: "main" | "posts" | "favourites") => {
    setIsActive(activePage);
  };

  return (
    <header className={styles.header}>
      <div className={styles["header__inner"]}>
        <div className={styles["header__left"]}>
          <div className={styles["header__logo"]}>
            <SvgLogoComponent />
          </div>
        </div>
        <div className={styles["header__center"]}>
          <nav className={styles["header__nav"]}>
            <ul className={styles["header__nav-list"]}>
              {navItems.map((navItem) => (
                <li
                  key={navItem.page}
                  className={`${styles["header__nav-item"]} ${
                    isAvtive === navItem.page && styles.active
                  }`}
                  onClick={() => handleChangePage(navItem.page)}
                >
                  <a href={navItem.href}>{navItem.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={styles["header__right"]}>
          <Toggle id="switch_theme" onClick={setTheme} />
          <MiniProfile user={data?.userMe} />
        </div>
      </div>
    </header>
  );
};
