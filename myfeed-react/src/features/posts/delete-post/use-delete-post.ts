/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDeletePostMutation } from "@shared/__generated__/hooks";

export const useDeletePost = () => {
  const [deletePost, { loading, error }] = useDeletePostMutation({
    update(cache, { data: removePost }) {
      const postId = removePost?.postDelete.id;

      cache.evict({ id: `PostModel:${postId}` });

      cache.modify({
        fields: {
          MyPosts(existingData) {
            console.log("Existing data:", existingData);
            console.log(
              "Removing post with ref:",
              `PostModel:${removePost?.postDelete.id}`
            );
            if (!existingData || !existingData.data) return existingData;

            return {
              ...existingData.data.filter(
                (item: any) => item.__ref !== `PostModel:${postId}`
              ),
            };
          },
        },
      });
    },
  });

  return {
    deletePost,
    loading,
    error,
  };
};
