import { Button } from "@shared/components/buttons/button";
import styles from "./posts-empty.module.scss";
import { EmptyPostsItems, EmptyPostsType } from "./model/types";
import { useNavigate } from "react-router-dom";

interface PostsEmptyProps {
  type: EmptyPostsType;
}
export const PostsEmpty = ({ type }: PostsEmptyProps) => {
  const navigate = useNavigate();

  const postType = EmptyPostsItems.find((item) => item.type === type);

  const onClick = () => {
    if (!postType?.href) return;
    navigate(postType?.href, { replace: true });
  };

  return (
    <div className={styles["empty_posts"]}>
      <div className={styles["empty_posts__inner"]}>
        <div className={styles["empty_posts__img"]}>
          <img src="src/shared/assets/images/png/Illustration.png" alt="" />
        </div>
        <div className={styles["empty_posts__footer"]}>
          <span>{postType?.message}</span>
          <Button typeView="primary" size="small" onClick={onClick}>
            {postType?.label}
          </Button>
        </div>
      </div>
    </div>
  );
};
