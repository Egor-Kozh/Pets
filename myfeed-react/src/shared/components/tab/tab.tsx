import "./tab.scss";
import classNames from "classnames";

interface TabProps {
  type: "auth" | "registr";
}
export const Tab = ({ type }: TabProps) => {
  const tabClass = classNames("tab", `tab_${type}`);

  return (
    <div className={tabClass}>
      <div className="tab__autharization">
        <span>Авторизация</span>
      </div>
      <div className="tab__registration">
        <span>Регистрация</span>
      </div>
    </div>
  );
};
