import { PostFilterType, useAllPostsQuery } from "@shared/__generated__/hooks";
import { useState } from "react";

export const useGetAllPosts = () => {
  const [postsSort, setPostsSort] = useState<PostFilterType>(
    PostFilterType.New
  );

  const { data, loading, error } = useAllPostsQuery({
    variables: {
      type: postsSort,
    },
  });

  return {
    data,
    isLoading: loading,
    isError: error,
    setPostsSort,
  };
};
