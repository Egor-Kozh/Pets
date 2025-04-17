import { useMyPostsQuery } from "../../shared/__generated__/hooks";
import { MyPostsEmpty } from "../../widgets/my-posts-empty.tsx/my-posts-empty";
import { MyPosts } from "../../widgets/my-posts/my-posts";

export const MyPostsPage = () => {
  const { data } = useMyPostsQuery();

  const hasPosts = data?.myPosts?.data && data.myPosts.data.length > 0;

  return <>{hasPosts ? <MyPosts /> : <MyPostsEmpty />}</>;
};
