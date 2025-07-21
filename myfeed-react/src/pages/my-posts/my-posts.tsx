import { EmptyState } from "@shared/components/empty-state/empty-state";
import { MyPosts } from "@pages/my-posts/ui/my-posts/my-posts";
import Skeleton from "react-loading-skeleton";
import { PostSkeleton } from "@shared/components/skeleton/post-skeleton/post-skeleton";
import { useGetMyPosts } from "@entities/posts/model/get-my-posts/use-get-my-posts";
import { Routes } from "@shared/routes";

export const MyPostsPage = () => {
  const { data, loading, hasPosts } = useGetMyPosts();

  if (loading) return <Skeleton wrapper={PostSkeleton} count={2} />;

  return (
    <>
      {hasPosts ? (
        <MyPosts data={data} />
      ) : (
        <EmptyState
          button={{ href: Routes.create_post, label: "Создать пост" }}
          message="У вас пока нет ни одного поста"
        />
      )}
    </>
  );
};
