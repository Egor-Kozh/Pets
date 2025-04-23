import styles from "./home.module.scss";
import { Post } from "@entities/posts/ui/post/post";
import { SortPosts } from "@entities/posts/ui/sort-posts/sort-posts";
import { useUserIdQuery } from "@shared/__generated__/hooks";
import { useGetAllPosts } from "@entities/posts/model/get-all-posts/use-get-all-posts";

export const HomePage = () => {
  const { data: userData } = useUserIdQuery();

  const { data, setPostsSort, isLoading } = useGetAllPosts();

  if (isLoading) return "loading...";

  return (
    <div className={styles["posts-list"]}>
      <div className={styles["posts-list__sort"]}>
        <SortPosts setPostsSort={setPostsSort} />
      </div>

      <div className={styles["posts-list__list"]}>
        {data?.posts.data?.map((post) => (
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
