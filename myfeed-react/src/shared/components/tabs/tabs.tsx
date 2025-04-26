import { AuthType } from "@pages/authorization/model/auth-type";
import { Button } from "../buttons/button";
import styles from "./tabs.module.scss";
import { TabsType } from "./types";

interface TabProps {
  page: AuthType;
  setPage: React.Dispatch<React.SetStateAction<AuthType>>;
  data: TabsType[];
}
export const Tabs = ({ page, setPage, data }: TabProps) => {
  return (
    <div className={styles.tab}>
      {data.map((tab) => {
        const isActive = page == tab.id;

        return (
          <Button
            key={tab.id}
            typeView={isActive ? "primary" : "secondary"}
            size="small"
            id={tab.id}
            onClick={() => setPage(tab.id as AuthType)}
          >
            {tab.label}
          </Button>
        );
      })}
    </div>
  );
};
