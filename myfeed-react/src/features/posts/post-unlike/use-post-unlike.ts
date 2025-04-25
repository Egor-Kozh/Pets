import { usePostUnlikeMutation } from "@shared/__generated__/hooks";

export const usePostUnLike = (onComplete: () => void) => {
  const [unLike, { loading, error }] = usePostUnlikeMutation({
    onCompleted: () => {
      onComplete();
    },
  });

  return {
    unLike,
    loading,
    error,
  };
};
