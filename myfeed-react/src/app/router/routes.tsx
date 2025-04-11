import { RouteObject } from "react-router-dom";
import { HomePage } from "../../pages/home/home";
import { UiKitPage } from "../../pages/ui-kit/ui-kit";
import { AuthorizationPage } from "../../pages/authorization/authorization";
import { Routes } from "../../shared/routes";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: Routes.uiKit,
    element: <UiKitPage />,
  },
  {
    path: Routes.auth,
    element: <AuthorizationPage />,
  },
];
