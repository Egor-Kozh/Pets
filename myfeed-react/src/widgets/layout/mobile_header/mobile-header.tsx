import { useLocation } from "react-router-dom";
import styles from "./mobile-header.module.scss";
import { navItems } from "../header/model/nav-types";
import SvgBurgerButtonComponent from "@shared/assets/images/svg/components/burger_button";
import { IconButton } from "@shared/components/icon-button/icon-button";
import SvgLogoComponent from "@shared/assets/images/svg/components/logo";
import { useState } from "react";
import { MobileMenu } from "./ui/mobile-menu/mobile-menu";
import SvgCloseModalComponent from "@shared/assets/images/svg/components/close-modal";

export const MobileHeader = () => {
  const isAсtivePage = useLocation();
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  const handleOpenMenu = () => {
    setIsActiveMenu((prev) => !prev);
  };

  const page = navItems.find((item) => isAсtivePage.pathname === item.href);

  return (
    <header className={styles["mobile-header"]}>
      <div className={styles["mobile-header__burger-button"]}>
        {isActiveMenu ? (
          <IconButton onClick={handleOpenMenu}>
            <SvgBurgerButtonComponent />
          </IconButton>
        ) : (
          <IconButton onClick={handleOpenMenu}>
            <SvgCloseModalComponent />
          </IconButton>
        )}
      </div>
      <div className={styles["mobile-header__page"]}>
        {page?.label ?? <SvgLogoComponent />}
      </div>
      <MobileMenu />
    </header>
  );
};
