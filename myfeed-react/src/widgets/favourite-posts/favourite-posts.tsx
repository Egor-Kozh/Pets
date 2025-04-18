import { FavouritePostsQuery } from "../../shared/__generated__/graphql";
import { Post } from "../posts/post/post";
import styles from "./favourite-posts.module.scss";

interface FavouritePostsProps {
  data: FavouritePostsQuery | undefined;
}
export const FavouritePosts = ({ data }: FavouritePostsProps) => {
  return (
    <div className={styles["favourite-posts"]}>
      <div className={styles["favourite-posts__list"]}>
        {data?.favouritePosts.data?.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};
