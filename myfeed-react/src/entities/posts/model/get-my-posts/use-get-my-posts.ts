import { useMyPostsQuery } from "@shared/__generated__/hooks";

export const useGetMyPosts = () => {
  const { data, loading, error } = useMyPostsQuery();

  const hasPosts = data?.myPosts?.data && data.myPosts.data.length > 0;

  return {
    data,
    loading,
    error,
    hasPosts,
  };
};
