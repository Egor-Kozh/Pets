interface NavItem {
  page: "main" | "posts" | "favourites";
  href: string;
  label: string;
}
export const navItems: NavItem[] = [
  { page: "main", href: "#", label: "Главная" },
  { page: "posts", href: "#", label: "Мои Посты" },
  { page: "favourites", href: "#", label: "Избранное" },
];
