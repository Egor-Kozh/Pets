import { useState } from "react";

export const useColorTheme = () => {
  const [theme, setTheme] = useState("light");

  const html = document.documentElement;
  html.setAttribute("color-theme", theme);

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return changeTheme;
};
