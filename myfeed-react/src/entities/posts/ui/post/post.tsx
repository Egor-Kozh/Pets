import { ReactNode, useEffect, useRef, useState } from "react";
import { MiniProfilePost } from "../../../user/ui/mini-profile/mini-profile-post";
import styles from "./post.module.scss";
import { Button } from "@shared/components/buttons/button";
import { PostType } from "@entities/posts/model/types";

interface PostProps {
  mine?: boolean;
  post: PostType;
  headerActionSlot?: ReactNode;
  footerActionSlot?: ReactNode;
  handleClickReadMore?: (id: string) => void;
}
export const Post = ({
  post,
  headerActionSlot,
  footerActionSlot,
  handleClickReadMore,
}: PostProps) => {
  const [isReadMore, setIsReadMore] = useState(false);

  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (containerRef.current && !handleClickReadMore) {
      const { scrollHeight, clientHeight } = containerRef.current;
      setIsReadMore(scrollHeight > clientHeight);
    }
  }, []);

  if (!post) return;

  const author = post?.author || {
    id: "unknown",
    username: "Неизвестный автор",
    avatarUrl: null,
  };

  return (
    <section className={styles["post"]}>
      <div className={styles["post__inner"]}>
        <header className={styles["post__header"]}>
          <div className={styles["post__user-profile"]}>
            <MiniProfilePost author={author} date={post.createdAt} />
          </div>
          {headerActionSlot}
        </header>
        <section className={styles["post__content"]}>
          <header className={styles["post__content-header"]}>
            <span>{post.title}</span>
          </header>
          <div className={styles["post__content-image"]}>
            <img src={post.mediaUrl} alt="post_img" />
          </div>
          <div className={styles["post__content-text"]}>
            <span ref={containerRef}>{post.description}</span>
            {isReadMore && (
              <Button
                typeView="flat"
                onClick={() => handleClickReadMore?.(post.id)}
              >
                Читать дальше
              </Button>
            )}
          </div>
        </section>
        {!footerActionSlot && (
          <footer className={styles["post__footer"]}>{footerActionSlot}</footer>
        )}
      </div>
    </section>
  );
};
