import { useState } from "react";

export const useColorTheme = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("colorTheme") || "light"
  );

  const html = document.documentElement;
  html.setAttribute("color-theme", theme);

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("colorTheme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("colorTheme", "light");
    }
  };

  return changeTheme;
};
