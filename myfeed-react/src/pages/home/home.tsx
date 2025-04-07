import { useEffect } from "react";
import { tokenVar } from "../../app/api/clients";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      navigate("/authorization", { replace: true });
    }
    tokenVar(token);
  }, []);

  return <></>;
};
