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

  return <>{children}</>;
};
