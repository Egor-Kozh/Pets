import { useState } from "react";
import {
  PostFilterType,
  useAllPostsQuery,
} from "../../shared/__generated__/hooks";
import { Post } from "../posts/post/post";
import { SortPosts } from "../posts/sort-posts/sort-posts";
import styles from "./main.module.scss";

export const Main = () => {
  const [postsSort, setPostsSort] = useState<PostFilterType>(
    PostFilterType.New
  );

  const { data } = useAllPostsQuery({
    variables: {
      type: postsSort,
    },
  });

  return (
    <div className={styles["posts-list"]}>
      <div className={styles["posts-list__sort"]}>
        <SortPosts setPostsSort={setPostsSort} />
      </div>
      <div className={styles["posts-list__list"]}>
        {data?.posts.data?.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};
