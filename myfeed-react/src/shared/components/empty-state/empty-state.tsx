import { Button } from "@shared/components/buttons/button";
import styles from "./posts-empty.module.scss";
import { useNavigate } from "react-router-dom";
import { FC } from "react";

interface PostsEmptyProps {
  button: {
    label: string;
    href: string;
  };
  message: string;
}
export const EmptyState: FC<PostsEmptyProps> = ({ button, message }) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(button.href, { replace: true });
  };

  return (
    <div className={styles["empty_posts"]}>
      <div className={styles["empty_posts__inner"]}>
        <div className={styles["empty_posts__img"]}>
          <img src="src/shared/assets/images/png/Illustration.png" alt="" />
        </div>
        <div className={styles["empty_posts__footer"]}>
          <span>{message}</span>
          <Button typeView="primary" size="small" onClick={onClick}>
            {button.label}
          </Button>
        </div>
      </div>
    </div>
  );
};
