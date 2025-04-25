import { usePostLikeMutation } from "@shared/__generated__/hooks";

export const usePostLike = (onComplete: () => void) => {
  const [like, { loading, error }] = usePostLikeMutation({
    onCompleted: () => {
      onComplete();
    },
  });

  return {
    like,
    loading,
    error,
  };
};
