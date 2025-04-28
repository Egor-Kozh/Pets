import { RouteObject } from "react-router-dom";
import { HomePage } from "@pages/home/home";
import { UiKitPage } from "@pages/ui-kit/ui-kit";
import { AuthorizationPage } from "@pages/authorization/authorization";
import { Routes } from "@shared/routes";
import { MainLayout } from "@widgets/layout/main-layout";
import { MyPostsPage } from "@pages/my-posts/my-posts";
import { FavouritePage } from "@pages/favourite/favourite";
import { CreatePostPage } from "@pages/create-post/create-post";
import { ProfilePage } from "@pages/profile/profile";
import { MobileMenuPage } from "@widgets/layout/mobile_header/ui/mobile-menu/mobile-menu";

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
      {
        path: Routes.create_post,
        element: <CreatePostPage />,
      },
      {
        path: Routes.profile,
        element: <ProfilePage />,
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
