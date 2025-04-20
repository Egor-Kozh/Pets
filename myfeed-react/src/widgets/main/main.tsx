import { useState } from "react";
import {
  PostFilterType,
  useAllPostsQuery,
  useUserIdQuery,
} from "@shared/__generated__/hooks";
import { Post } from "@entities/posts/ui/post/post";
import { SortPosts } from "@entities/posts/ui/sort-posts/sort-posts";
import styles from "./main.module.scss";

export const Main = () => {
  const [postsSort, setPostsSort] = useState<PostFilterType>(
    PostFilterType.New
  );

  const { data: userData } = useUserIdQuery();

  const { data: postsData } = useAllPostsQuery({
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
        {postsData?.posts.data?.map((post) => (
          <Post
            post={post}
            key={post.id}
            mine={userData?.userId.id === post.author.id}
          />
        ))}
      </div>
    </div>
  );
};
