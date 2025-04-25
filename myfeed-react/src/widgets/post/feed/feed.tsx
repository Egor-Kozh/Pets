import { useGetAllPosts } from "@entities/posts/model/get-all-posts/use-get-all-posts";
import { Post } from "@entities/posts/ui/post/post";
import { PostSkeleton } from "@shared/components/skeleton/skeleton";
import { SortPosts } from "./ui/sort-posts/sort-posts";
import { FC, useState } from "react";
import { PostFilterType } from "@shared/__generated__/hooks";
import styles from "./feed.module.scss";

interface FeedProps {
  userId?: string;
}
export const Feed: FC<FeedProps> = ({ userId }) => {
  const [postsSort, setPostsSort] = useState<PostFilterType>(
    PostFilterType.New
  );

  const { data, isLoading } = useGetAllPosts(postsSort);

  if (isLoading) return <PostSkeleton />;

  return (
    <div className={styles["posts-list"]}>
      <div className={styles["posts-list__sort"]}>
        <SortPosts setPostsSort={setPostsSort} />
      </div>

      <div className={styles["posts-list__list"]}>
        {data?.posts.data?.map((post) => (
          <Post post={post} key={post.id} mine={userId === post.author.id} />
        ))}
      </div>
    </div>
  );
};
