import { Outlet } from "react-router-dom";
import { Header } from "./header/header";
import styles from "./main-layout.module.scss";
import { useUserMiniProfileQuery } from "@shared/__generated__/hooks";
import { MobileHeader } from "./mobile_header/mobile-header";

export const MainLayout = () => {
  const { data: userData } = useUserMiniProfileQuery({
    fetchPolicy: "cache-first",
    nextFetchPolicy: "cache-first",
  });

  return (
    <div className={styles.layout}>
      <div id="modal"></div>
      <Header data={userData} />
      <MobileHeader />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
