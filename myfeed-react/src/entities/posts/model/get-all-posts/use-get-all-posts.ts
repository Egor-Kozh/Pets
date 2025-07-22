import { NetworkStatus } from "@apollo/client";
import { PostFilterType, useAllPostsQuery } from "@shared/__generated__/hooks";

export const useGetAllPosts = (sortType: PostFilterType) => {
  const { data, loading, error, fetchMore, networkStatus } = useAllPostsQuery({
    variables: {
      type: sortType,
    },
    notifyOnNetworkStatusChange: true,
  });

  const isLoading = loading && networkStatus !== NetworkStatus.fetchMore;

  return {
    data,
    loading,
    isLoading,
    isError: error,
    fetchMore,
  };
};
