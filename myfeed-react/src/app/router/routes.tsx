import { RouteObject } from "react-router-dom";
import { HomePage } from "../../pages/home/home";
import { UiKitPage } from "../../pages/ui-kit/ui-kit";
import { AuthorizationPage } from "../../pages/authorization/authorization";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/ui-kit",
    element: <UiKitPage />,
  },
  {
    path: "/authorization",
    element: <AuthorizationPage />,
  },
];
