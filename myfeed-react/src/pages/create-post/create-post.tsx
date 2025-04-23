import { CreatePostFeature } from "@features/posts/create-post/ui/create-post";
import styles from "./create-post.module.scss";

export const CreatePostPage = () => {
  return (
    <div className={styles["create-post"]}>
      <div className={styles["create-post__inner"]}>
        <div className={styles["create-post__header"]}>
          <span>Создание поста</span>
        </div>
        <CreatePostFeature />
      </div>
    </div>
  );
};
