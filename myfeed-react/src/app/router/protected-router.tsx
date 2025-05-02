import { tokenVar } from "@app/api/clients";
import { useUserIdQuery } from "@shared/__generated__/hooks";
import { Routes } from "@shared/routes";
import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Args {
  children: ReactNode;
}
export const ProtectedRoute = ({ children }: Args) => {
  const navigate = useNavigate();

  const { loading, error } = useUserIdQuery();
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    if (!token) {
      navigate(Routes.auth, { replace: true });
    }
    if (error) {
      localStorage.removeItem("authToken");
      navigate(Routes.auth, { replace: true });
    }
    tokenVar(token);
  }, []);

  if (loading) return;

  return <>{children}</>;
};
