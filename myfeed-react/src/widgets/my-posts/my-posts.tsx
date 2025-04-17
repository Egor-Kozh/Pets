import { MyPostsQuery } from "../../shared/__generated__/graphql";
import { Post } from "../posts/post/post";
import styles from "./my-posts.module.scss";

interface MyPostsProps {
  data: MyPostsQuery | undefined;
}
export const MyPosts = ({ data }: MyPostsProps) => {
  return (
    <div className={styles["my-posts"]}>
      <div className={styles["my-posts__create"]}></div>
      <div className={styles["my-posts__list"]}>
        {data?.myPosts.data?.map((post) => (
          <Post mine post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};
