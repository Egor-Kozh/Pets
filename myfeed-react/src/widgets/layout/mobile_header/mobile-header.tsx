import { useLocation, useNavigate } from "react-router-dom";
import styles from "./mobile-header.module.scss";
import { navItems } from "../header/model/nav-types";
import SvgBurgerButtonComponent from "@shared/assets/images/svg/components/burger_button";
import { IconButton } from "@shared/components/icon-button/icon-button";
import { Routes } from "@shared/routes";
import SvgLogoComponent from "@shared/assets/images/svg/components/logo";

export const MobileHeader = () => {
  const isAсtivePage = useLocation();
  const navigate = useNavigate();

  const handleOpenMenu = () => {
    navigate(Routes.mobile_menu, { replace: true });
  };

  const page = navItems.find((item) => isAсtivePage.pathname === item.href);

  return (
    <header className={styles["mobile-header"]}>
      <div className={styles["mobile-header__burger-button"]}>
        <IconButton onClick={handleOpenMenu}>
          <SvgBurgerButtonComponent />
        </IconButton>
      </div>
      <div className={styles["mobile-header__page"]}>
        {page?.label ?? <SvgLogoComponent />}
      </div>
    </header>
  );
};
