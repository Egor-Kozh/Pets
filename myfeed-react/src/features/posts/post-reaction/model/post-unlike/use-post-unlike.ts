import { PostType } from "@entities/posts/model/types";
import { usePostUnlikeMutation } from "@shared/__generated__/hooks";

interface Args {
  onCompletedUnLike: () => void;
  post: PostType;
}
export const usePostUnLike = ({ onCompletedUnLike, post }: Args) => {
  const [unLike, { loading, error }] = usePostUnlikeMutation({
    onCompleted: () => {
      onCompletedUnLike();
    },

    update(cache, { data }) {
      cache.modify({
        fields: {
          favouritePosts(existingFavourites = { data: [] }) {
            const currentData = existingFavourites.data || [];

            const newData = currentData.filter(
              (postRef: { __ref: string }) =>
                postRef.__ref !== `PostModel:${data?.postUnlike.id}`
            );
            return { data: newData };
          },
        },
      });
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
