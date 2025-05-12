import { Post } from "@entities/posts/ui/post/post";
import { usePostLikeMutation } from "@shared/__generated__/hooks";

interface Args {
  onCompletedLike: () => void;
  post: Post;
}
export const usePostLike = ({ onCompletedLike, post }: Args) => {
  const [like, { loading, error }] = usePostLikeMutation({
    onCompleted: () => {
      onCompletedLike();
    },
  });

  const handleLike = () => {
    like({
      variables: {
        id: post.id,
      },
    });
  };

  return {
    handleLike,
    loading,
    error,
  };
};
