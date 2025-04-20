import { useFavouritePostsQuery } from "@shared/__generated__/hooks";
import { FavouritePosts } from "@widgets/favourite-posts/favourite-posts";
import { EmptyPostsType } from "@widgets/posts-empty.tsx/model/types";
import { PostsEmpty } from "@widgets/posts-empty.tsx/posts-empty";

export const FavouritePage = () => {
  const { data } = useFavouritePostsQuery();

  const hasPosts =
    data?.favouritePosts?.data && data.favouritePosts.data.length > 0;

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
