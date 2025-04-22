import { useMyPostsQuery } from "@shared/__generated__/hooks";
import { PostsEmpty } from "@widgets/posts-empty.tsx/posts-empty";
import { MyPosts } from "@widgets/my-posts/my-posts";
import { EmptyPostsType } from "@widgets/posts-empty.tsx/model/types";
import Skeleton from "react-loading-skeleton";
import { PostSkeleton } from "@shared/components/skeleton/skeleton";

export const MyPostsPage = () => {
  const { data, loading } = useMyPostsQuery({});

  const hasPosts = data?.myPosts?.data && data.myPosts.data.length > 0;

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
