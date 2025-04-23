import { useFavouritePostsQuery } from "@shared/__generated__/hooks";

export const useGetFavouritePosts = () => {
  const { data, loading, error } = useFavouritePostsQuery();

  const hasPosts =
    data?.favouritePosts?.data && data.favouritePosts.data.length > 0;

  return {
    data,
    loading,
    hasPosts,
    error,
  };
};
