import { useNavigate } from "react-router-dom";
import { MyPostsQuery } from "@shared/__generated__/graphql";
import { useUserMiniProfileQuery } from "@shared/__generated__/hooks";
import { Button } from "@shared/components/buttons/button";
import { Post } from "@entities/posts/ui/post/post";
import styles from "./my-posts.module.scss";
import { Routes } from "@shared/routes";
import { Avatar } from "@entities/user/ui/avatar/avatar";

interface MyPostsProps {
  data: MyPostsQuery | undefined;
}
export const MyPosts = ({ data }: MyPostsProps) => {
  const { data: userData } = useUserMiniProfileQuery();

  const navigate = useNavigate();

  const handleCreatePost = () => {
    navigate(Routes.create_post, { replace: true });
  };

  return (
    <div className={styles["my-posts"]}>
      <div className={styles["my-posts__create"]}>
        <div className={styles["my-posts__info"]}>
          <Avatar size="38px" src={userData?.userMe.avatarUrl} />
          <span>Что у вас нового, {userData?.userMe.firstName}</span>
        </div>
        <Button typeView="primary" size="small" onClick={handleCreatePost}>
          Создать пост
        </Button>
      </div>
      <div className={styles["my-posts__list"]}>
        {data?.myPosts.data?.map((post) => (
          <Post mine post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};
