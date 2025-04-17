import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "./header/header";
import { useEffect } from "react";
import { Routes } from "../../shared/routes";
import { tokenVar } from "../../app/api/clients";
import styles from "./main-layout.module.scss";

export const MainLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      navigate(Routes.auth, { replace: true });
    }
    tokenVar(token);
  }, []);

  return (
    <div className={styles.layout}>
      <div id="modal"></div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
