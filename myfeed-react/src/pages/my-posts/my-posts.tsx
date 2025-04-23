import { PostsEmpty } from "@widgets/post/posts-empty.tsx/posts-empty";
import { MyPosts } from "@pages/my-posts/ui/my-posts/my-posts";
import { EmptyPostsType } from "@widgets/post/posts-empty.tsx/model/types";
import Skeleton from "react-loading-skeleton";
import { PostSkeleton } from "@shared/components/skeleton/skeleton";
import { useGetMyPosts } from "@entities/posts/model/get-my-posts/use-get-my-posts";

export const MyPostsPage = () => {
  const { data, loading, hasPosts } = useGetMyPosts();

  if (loading) return <Skeleton wrapper={PostSkeleton} count={2} />;

  return (
    <>
      {hasPosts ? (
        <MyPosts data={data} />
      ) : (
        <PostsEmpty type={EmptyPostsType.myPosts} />
      )}
    </>
  );
};
