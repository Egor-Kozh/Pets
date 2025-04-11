import { useEffect } from "react";
import { tokenVar } from "../../app/api/clients";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../shared/routes";

export const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      navigate(Routes.auth, { replace: true });
    }
    tokenVar(token);
  }, []);

  return <></>;
};
