import { Button } from "../../shared/components/buttons/button";
import styles from "./my-posts-empty.module.scss";

export const MyPostsEmpty = () => {
  return (
    <div className={styles["empty_posts"]}>
      <div className={styles["empty_posts__inner"]}>
        <div className={styles["empty_posts__img"]}>
          <img src="src/shared/assets/images/png/Illustration.png" alt="" />
        </div>
        <div className={styles["empty_posts__footer"]}>
          <span>У вас пока нет ни одного поста</span>
          <Button typeView="primary" size="small">
            Создать пост
          </Button>
        </div>
      </div>
    </div>
  );
};
