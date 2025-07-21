import { useGetFavouritePosts } from "@entities/posts/model/get-favourite-posts/use-get-favourite-posts";
import { PostSkeleton } from "@shared/components/skeleton/post-skeleton/post-skeleton";
import { FavouritePosts } from "@pages/favourite/ui/favourite-posts/favourite-posts";
import Skeleton from "react-loading-skeleton";
import { EmptyState } from "@shared/components/empty-state/empty-state";
import { Routes } from "@shared/routes";

export const FavouritePage = () => {
  const { data, loading, hasPosts } = useGetFavouritePosts();

  if (loading) return <Skeleton wrapper={PostSkeleton} count={2} />;

  return (
    <>
      {hasPosts ? (
        <FavouritePosts data={data} />
      ) : (
        <EmptyState
          button={{ href: Routes.home, label: "На главную" }}
          message="У вас пока нет избранных постов"
        />
      )}
    </>
  );
};
