import "../app/styles/global.scss";
import { Button } from "../shared/components/buttons/button";
import { ButtonsEnum } from "../shared/components/buttons/types";

export const UiKit = () => {
  function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute("color-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    html.setAttribute("color-theme", newTheme);
  }
  return (
    <>
      <p>Hello world!</p>
      <button onClick={toggleTheme}>Toggle Theme</button>

      <Button
        size={ButtonsEnum.SMALL}
        type={ButtonsEnum.PRIMARY}
        content="Текст"
      />
      <Button
        size={ButtonsEnum.LARGE}
        type={ButtonsEnum.PRIMARY}
        content="Текст"
      />
      <Button
        size={ButtonsEnum.SMALL}
        type={ButtonsEnum.SECONDARY}
        content="Текст"
      />
    </>
  );
};
