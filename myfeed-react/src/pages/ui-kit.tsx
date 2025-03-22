import "../app/styles/global.scss";
import { Button } from "../shared/components/buttons/button";
import { RadioButton } from "../shared/components/radio-buttons/radio-button";
import { Toggle } from "../shared/components/toggle/toggle";

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

      <RadioButton name="rad" id="1" value="text1" />
      <RadioButton name="rad" id="2" value="text2" />
      <RadioButton name="rad dis" id="4" value="text4" />
      <RadioButton name="rad dis" id="3" value="text3" disabled checked />

      <Toggle id="5" />
      <Toggle id="6" />
    </>
  );
};
