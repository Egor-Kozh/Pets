import { Post } from "@entities/posts/ui/post/post";
import { usePostUnlikeMutation } from "@shared/__generated__/hooks";

interface Args {
  onCompletedUnLike: () => void;
  post: Post;
}
export const usePostUnLike = ({ onCompletedUnLike, post }: Args) => {
  const [unLike, { loading, error }] = usePostUnlikeMutation({
    onCompleted: () => {
      onCompletedUnLike();
    },
  });

  const handleUnLike = () => {
    unLike({
      variables: {
        id: post.id,
      },
    });
  };

  return {
    handleUnLike,
    loading,
    error,
  };
};
