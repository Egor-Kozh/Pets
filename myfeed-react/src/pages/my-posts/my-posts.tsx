import { useMyPostsQuery } from "../../shared/__generated__/hooks";
import { PostsEmpty } from "../../widgets/posts-empty.tsx/posts-empty";
import { MyPosts } from "../../widgets/my-posts/my-posts";
import { EmptyPostsType } from "../../widgets/posts-empty.tsx/model/types";

export const MyPostsPage = () => {
  const { data } = useMyPostsQuery();

  const hasPosts = data?.myPosts?.data && data.myPosts.data.length > 0;

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
