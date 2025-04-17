import { Routes } from "../../../../shared/routes";

interface NavItem {
  href: string;
  label: string;
}
export const navItems: NavItem[] = [
  { href: Routes.home, label: "Главная" },
  { href: Routes.my_posts, label: "Мои Посты" },
  { href: Routes.favourite_posts, label: "Избранное" },
];
