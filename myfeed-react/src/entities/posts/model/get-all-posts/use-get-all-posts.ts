import { PostFilterType, useAllPostsQuery } from "@shared/__generated__/hooks";

export const useGetAllPosts = (sortType: PostFilterType) => {
  const { data, loading, error } = useAllPostsQuery({
    variables: {
      type: sortType,
    },
  });

  return {
    data,
    isLoading: loading,
    isError: error,
  };
};
