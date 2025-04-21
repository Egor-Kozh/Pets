import { useFavouritePostsQuery } from "@shared/__generated__/hooks";
import { PostSkeleton } from "@shared/components/skeleton/skeleton";
import { FavouritePosts } from "@widgets/favourite-posts/favourite-posts";
import { EmptyPostsType } from "@widgets/posts-empty.tsx/model/types";
import { PostsEmpty } from "@widgets/posts-empty.tsx/posts-empty";
import Skeleton from "react-loading-skeleton";

export const FavouritePage = () => {
  const { data, loading } = useFavouritePostsQuery();

  const hasPosts =
    data?.favouritePosts?.data && data.favouritePosts.data.length > 0;

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
