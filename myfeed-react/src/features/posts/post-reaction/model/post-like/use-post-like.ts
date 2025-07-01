import { PostType } from "@entities/posts/model/types";
import { usePostLikeMutation } from "@shared/__generated__/hooks";

interface Args {
  onCompletedLike: () => void;
  post: PostType;
}
export const usePostLike = ({ onCompletedLike, post }: Args) => {
  const [like, { loading, error }] = usePostLikeMutation({
    onCompleted: () => {
      onCompletedLike();
    },
    update(cache, { data }) {
      cache.modify({
        fields: {
          favouritePosts(existingFavourites = { data: [] }) {
            return { ...existingFavourites, data };
          },
        },
      });
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
