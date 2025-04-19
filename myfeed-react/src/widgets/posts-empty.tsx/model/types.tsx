import { Routes } from "../../../shared/routes";

export enum EmptyPostsType {
  myPosts = "MY_POSTS",
  favourite = "FAVOURITE",
}

interface EmptyPostsItem {
  href?: string;
  label: string;
  message: string;
  type: EmptyPostsType;
}
export const EmptyPostsItems: EmptyPostsItem[] = [
  {
    href: Routes.home,
    label: "На главную",
    message: "У вас пока нет избранных постов",
    type: EmptyPostsType.favourite,
  },
  {
    href: Routes.create_post,
    label: "Создать пост",
    message: "У вас пока нет ни одного поста",
    type: EmptyPostsType.myPosts,
  },
];
