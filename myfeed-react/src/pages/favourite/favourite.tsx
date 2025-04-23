import { useGetFavouritePosts } from "@entities/posts/model/get-favourite-posts/use-get-favourite-posts";
import { PostSkeleton } from "@shared/components/skeleton/skeleton";
import { FavouritePosts } from "@pages/favourite/ui/favourite-posts/favourite-posts";
import { EmptyPostsType } from "@shared/components/empty-state/model/types";
import { PostsEmpty } from "@shared/components/empty-state/empty-state";
import Skeleton from "react-loading-skeleton";

export const FavouritePage = () => {
  const { data, loading, hasPosts } = useGetFavouritePosts();

  if (loading) return <Skeleton wrapper={PostSkeleton} count={2} />;

  return (
    <>
      {hasPosts ? (
        <FavouritePosts data={data} />
      ) : (
        <PostsEmpty type={EmptyPostsType.favourite} />
      )}
    </>
  );
};
