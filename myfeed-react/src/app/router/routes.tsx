import { RouteObject } from "react-router-dom";
import { HomePage } from "../../pages/home/home";
import { UiKitPage } from "../../pages/ui-kit/ui-kit";
import { AuthorizationPage } from "../../pages/authorization/authorization";
import { Routes } from "../../shared/routes";
import { MainLayout } from "../../widgets/layout/main-layout";
import { MyPostsPage } from "../../pages/my-posts/my-posts";
import { FavouritePage } from "../../pages/favourite/favourite";

export const routes: RouteObject[] = [
  {
    path: Routes.home,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: Routes.my_posts,
        element: <MyPostsPage />,
      },
      {
        path: Routes.favourite_posts,
        element: <FavouritePage />,
      },
    ],
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
