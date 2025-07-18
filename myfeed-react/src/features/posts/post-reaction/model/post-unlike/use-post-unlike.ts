import { PostType } from "@entities/posts/model/types";
import { useUnlikePostMutation } from "@shared/__generated__/hooks";
import { POST_UNLIKE_FRAGMENT } from "./post-unlike";

interface Args {
  onCompletedUnLike: () => void;
  post: PostType;
}
export const usePostUnLike = ({ onCompletedUnLike, post }: Args) => {
  const [unLike, { loading, error }] = useUnlikePostMutation({
    onCompleted: () => {
      onCompletedUnLike();
    },

    update(cache, { data }) {
      cache.writeFragment({
        id: `PostModel:${data?.postUnlike.id}`,
        fragment: POST_UNLIKE_FRAGMENT,
        data: {
          isLiked: false,
        },
      });
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
