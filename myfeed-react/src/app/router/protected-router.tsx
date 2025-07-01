import { tokenVar } from "@app/api/clients";
import { useUserIdQuery } from "@shared/__generated__/hooks";
import { Routes } from "@shared/routes";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface Args {
  children: ReactNode;
}
export const ProtectedRoute = ({ children }: Args) => {
  const navigate = useNavigate();

  const { loading, data } = useUserIdQuery();
  const token = localStorage.getItem("authToken");

  const checkAuth = () => {
    if (!token) {
      navigate(Routes.auth, { replace: true });
    }
    if (!data?.userId.id) {
      localStorage.removeItem("authToken");
      navigate(Routes.auth, { replace: true });
    }
    if (token) {
      tokenVar(token);
    }
  };

  if (loading) return;

  checkAuth();

  return <>{children}</>;
};
