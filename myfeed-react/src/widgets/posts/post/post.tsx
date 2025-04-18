import { useEffect, useRef, useState } from "react";
import { IconButton } from "../../../shared/components/icon-button/icon-button";
import { MiniProfilePost } from "../../user/mini-profile/mini-profile-post";
import SvgChangeComponent from "../../../shared/assets/images/svg/components/change";
import SvgDeleteComponent from "../../../shared/assets/images/svg/components/delete";
import SvgLikeComponent from "../../../shared/assets/images/svg/components/like";
import SvgShareComponent from "../../../shared/assets/images/svg/components/share";
import styles from "./post.module.scss";
import { Button } from "../../../shared/components/buttons/button";
import { Modal } from "../../../shared/components/modal/modal";
import { useLockScroll } from "../../../shared/hooks/useLockScroll";
import { PostModal } from "./post-modal";
import {
  usePostLikeMutation,
  usePostUnlikeMutation,
} from "../../../shared/__generated__/hooks";

interface PostProps {
  mine?: boolean;
  post: {
    createdAt: string;
    description: string;
    likesCount: number;
    isLiked: boolean;
    title: string;
    mediaUrl: string;
    id: string;
    author: {
      firstName?: string | null;
      lastName?: string | null;
      avatarUrl?: string | null;
    };
  };
}
export const Post = ({ mine, post }: PostProps) => {
  const [activeModal, setActiveModal] = useState(false);
  const [isReadMore, setIsReadMore] = useState(false);
  const [isLike, setIsLike] = useState(post.isLiked);
  const setScroll = useLockScroll();

  const [like] = usePostLikeMutation({
    onCompleted: () => {
      setIsLike(true);
    },
  });
  const [unLike] = usePostUnlikeMutation({
    onCompleted: () => {
      setIsLike(false);
    },
  });

  const containerRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (containerRef.current) {
      const { scrollHeight, clientHeight } = containerRef.current;
      setIsReadMore(scrollHeight > clientHeight);
    }
  }, []);

  const handleModal = () => {
    setScroll();
    setActiveModal((active) => !active);
  };

  const handleLikePost = () => {
    if (isLike) {
      unLike({
        variables: {
          id: post.id,
        },
      });
    } else {
      like({
        variables: {
          id: post.id,
        },
      });
    }
  };

  return (
    <section className={styles["post"]}>
      <div className={styles["post__inner"]}>
        <header className={styles["post__header"]}>
          <div className={styles["post__user-profile"]}>
            <MiniProfilePost author={post.author} date={post.createdAt} />
          </div>
          {mine && (
            <ul className={styles["post__actions-mine"]}>
              <li>
                <IconButton>
                  <SvgShareComponent />
                </IconButton>
              </li>
              <li>
                <IconButton>
                  <SvgDeleteComponent />
                </IconButton>
              </li>
              <li>
                <IconButton>
                  <SvgChangeComponent />
                </IconButton>
              </li>
            </ul>
          )}
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
              <Button typeView="flat" onClick={handleModal}>
                Читать дальше
              </Button>
            )}
          </div>
        </section>
        {!mine && (
          <footer className={styles["post__footer"]}>
            <ul className={styles["post__actions-another"]}>
              <li>
                <IconButton onClick={handleLikePost}>
                  <SvgLikeComponent isLiked={isLike} />
                </IconButton>
              </li>
              <li>
                <IconButton>
                  <SvgShareComponent />
                </IconButton>
              </li>
            </ul>
          </footer>
        )}
        {mine && (
          <footer className={styles["post__footer"]}>
            <ul className={styles["post__actions-mine"]}>
              <li>
                <IconButton>
                  <SvgShareComponent />
                </IconButton>
              </li>
              <li>
                <IconButton>
                  <SvgDeleteComponent />
                </IconButton>
              </li>
              <li>
                <IconButton>
                  <SvgChangeComponent />
                </IconButton>
              </li>
            </ul>
          </footer>
        )}
      </div>
      {activeModal && (
        <Modal active={true} setActiveModal={handleModal}>
          <PostModal
            mine={mine}
            handleModal={handleModal}
            post={post}
            isLike={isLike}
            handleLikePost={handleLikePost}
          />
        </Modal>
      )}
    </section>
  );
};
