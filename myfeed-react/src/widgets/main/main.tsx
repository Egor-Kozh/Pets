import { useState } from "react";
import {
  PostFilterType,
  useAllPostsQuery,
  useUserIdQuery,
} from "@shared/__generated__/hooks";
import { Post } from "@entities/posts/ui/post/post";
import { SortPosts } from "@entities/posts/ui/sort-posts/sort-posts";
import styles from "./main.module.scss";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { PostSkeleton } from "@shared/components/skeleton/skeleton";

export const Main = () => {
  const [postsSort, setPostsSort] = useState<PostFilterType>(
    PostFilterType.New
  );

  const { data: userData } = useUserIdQuery();

  const { data: postsData, loading } = useAllPostsQuery({
    variables: {
      type: postsSort,
      limit: 20,
    },
  });

  return (
    <div className={styles["posts-list"]}>
      <div className={styles["posts-list__sort"]}>
        <SortPosts setPostsSort={setPostsSort} />
      </div>
      <div className={styles["posts-list__list"]}>
        {loading ? (
          <Skeleton wrapper={PostSkeleton} count={2} />
        ) : (
          postsData?.posts.data?.map((post) => (
            <Post
              post={post}
              key={post.id}
              mine={userData?.userId.id === post.author.id}
            />
          ))
        )}
      </div>
    </div>
  );
};
