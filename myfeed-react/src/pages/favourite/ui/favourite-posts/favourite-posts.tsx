import { FavouritePostsQuery } from "@shared/__generated__/graphql";
import { Post } from "@entities/posts/ui/post/post";
import styles from "./favourite-posts.module.scss";
import { PostType } from "@entities/posts/model/types";
import { LikePost } from "@features/posts/post-reaction/ui/post-like";
import { SharedPost } from "@features/posts/shared-post/ui/shared-post";

interface FavouritePostsProps {
  data: FavouritePostsQuery | undefined;
}
export const FavouritePosts = ({ data }: FavouritePostsProps) => {
  const footerAction = (post: PostType) => {
    return (
      <>
        <LikePost post={post} />
        <SharedPost post={post} />
      </>
    );
  };

  return (
    <div className={styles["favourite-posts"]}>
      <div className={styles["favourite-posts__list"]}>
        {data?.favouritePosts.data?.map((post) => (
          <Post
            post={post}
            key={post.id}
            footerActionSlot={footerAction(post)}
          />
        ))}
      </div>
    </div>
  );
};
