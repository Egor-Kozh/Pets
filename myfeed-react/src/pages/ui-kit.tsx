import "../app/styles/global.scss";
import { Button } from "../shared/components/buttons/button";

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

      <Button size={"small"} type={"primary"}>
        Текст
      </Button>
      <Button size={"small"} type={"primary"} disabled>
        Текст
      </Button>
      <Button size={"small"} type={"primary"} loading></Button>
      <Button size={"large"} type={"primary"}>
        Текст
      </Button>
      <Button size={"large"} type={"primary"} disabled>
        Текст
      </Button>
      <Button size={"large"} type={"primary"} loading></Button>
      <Button size={"small"} type={"secondary"}>
        Текст
      </Button>
      <Button size={"small"} type={"secondary"} disabled>
        Текст
      </Button>
      <Button size={"small"} type={"secondary"} loading></Button>
    </>
  );
};
