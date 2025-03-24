import { Button } from "../buttons/button";
import "./tab.scss";
import classNames from "classnames";

interface TabProps {
  type: "auth" | "registr";
}
export const Tab = ({ type }: TabProps) => {
  const tabClass = classNames("tab", `tab_${type}`);

  return (
    <div className={tabClass}>
      <Button
        typeView={type === "auth" ? "primary" : "secondary"}
        size={"small"}
        id={"auth"}
      >
        Авторизация
      </Button>
      <Button
        typeView={type === "registr" ? "primary" : "secondary"}
        size={"small"}
        id={"registr"}
      >
        Регистрация
      </Button>
    </div>
  );
};
