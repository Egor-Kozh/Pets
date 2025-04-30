import { Link } from "react-router-dom";
import styles from "./mobile-menu.module.scss";
import { MenuList } from "./model/model";
import { MiniProfile } from "@entities/user/ui/mini-profile/mini-profile";
import { useUserMiniProfileQuery } from "@shared/__generated__/hooks";
import { Toggle } from "@shared/components/toggle/toggle";
import { useTheme } from "@app/providers/theme-provider";
import className from "classnames";

interface Args {
  isActiveMenu: boolean;
  handleOpenMenu: () => void;
}
export const MobileMenu = ({ isActiveMenu, handleOpenMenu }: Args) => {
  const { data: userData } = useUserMiniProfileQuery({
    fetchPolicy: "cache-first",
    nextFetchPolicy: "cache-first",
  });

  const { toggleTheme } = useTheme();

  const colorTheme = localStorage.getItem("colorTheme");

  const mobileMenuClass = className(
    styles["mobile-menu"],
    isActiveMenu && styles.active
  );

  return (
    <div className={mobileMenuClass}>
      <div className={styles["mobile-menu__info"]}>
        <div className={styles["mobile-menu__mini-profile"]}>
          <MiniProfile
            user={userData?.userMe}
            style={{ backgroundColor: "rgba(255, 255, 255, 0)" }}
          />
        </div>
        <ul className={styles["mobile-menu__list"]}>
          {MenuList.map((item) => (
            <li>
              {item.href ? (
                <Link to={item.href} onClick={handleOpenMenu}>
                  {item.label}
                </Link>
              ) : (
                <p onClick={item.onClick}>{item.label}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles["mobile-menu__switch-theme"]}>
        <span>{colorTheme === "light" ? "Светлая тема" : "Темная тема"}</span>
        <Toggle id="switch_theme_mobile" onClick={toggleTheme} />
      </div>
    </div>
  );
};
