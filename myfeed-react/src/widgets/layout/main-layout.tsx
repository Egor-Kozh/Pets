import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "./header/header";
import { useEffect } from "react";
import { Routes } from "@shared/routes";
import { tokenVar } from "@app/api/clients";
import styles from "./main-layout.module.scss";
import {
  useUserIdQuery,
  useUserMiniProfileQuery,
} from "@shared/__generated__/hooks";
import { MobileHeader } from "./mobile_header/mobile-header";

export const MainLayout = () => {
  const navigate = useNavigate();

  const { data: userIdData } = useUserIdQuery();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      navigate(Routes.auth, { replace: true });
    }
    if (userIdData?.userId) {
      localStorage.removeItem("authToken");
      navigate(Routes.auth, { replace: true });
    }
    tokenVar(token);
  }, []);

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
