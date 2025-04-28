import { Toggle } from "@shared/components/toggle/toggle";
import { MiniProfile } from "@entities/user/ui/mini-profile/mini-profile";
import styles from "./header.module.scss";
import SvgLogoComponent from "@shared/assets/images/svg/components/logo";
import { navItems } from "./model/nav-types";
import { Link, useLocation } from "react-router-dom";
import { UserMiniProfileQuery } from "@shared/__generated__/hooks";
import { useTheme } from "@app/providers/theme-provider";

interface HeaderProps {
  data: UserMiniProfileQuery | undefined;
}
export const Header = ({ data }: HeaderProps) => {
  const isAсtive = useLocation();

  const { toggleTheme } = useTheme();

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
                  key={navItem.href}
                  className={`${styles["header__nav-item"]} ${
                    isAсtive.pathname === navItem.href && styles.active
                  }`}
                >
                  <Link to={navItem.href}>{navItem.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={styles["header__right"]}>
          <Toggle id="switch_theme" onClick={toggleTheme} />
          <MiniProfile user={data?.userMe} dropdown />
        </div>
      </div>
    </header>
  );
};
