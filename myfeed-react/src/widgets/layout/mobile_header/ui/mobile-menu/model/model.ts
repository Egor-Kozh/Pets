import { handleLogout } from "@shared/hooks/userLogout";
import { Routes } from "@shared/routes";

interface MenuItem {
  href: string;
  label: string;
  onClick?: () => void;
}
export const MenuList: MenuItem[] = [
  { href: Routes.profile, label: "Мой профиль" },
  { href: Routes.home, label: "Главная" },
  { href: Routes.my_posts, label: "Мои Посты" },
  { href: Routes.favourite_posts, label: "Избранное" },
  { href: "", label: "Выйти", onClick: handleLogout },
];
