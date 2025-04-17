import { IconButton } from "../../../shared/components/icon-button/icon-button";
import { MiniProfilePost } from "../../user/mini-profile/mini-profile-post";
import SvgChangeComponent from "../../../shared/assets/images/svg/components/change";
import SvgDeleteComponent from "../../../shared/assets/images/svg/components/delete";
import SvgLikeComponent from "../../../shared/assets/images/svg/components/like";
import SvgShareComponent from "../../../shared/assets/images/svg/components/share";
import styles from "./post.module.scss";
import SvgCloseModalComponent from "../../../shared/assets/images/svg/components/close-modal";

interface PostModalProps {
  mine?: boolean;
  handleModal: () => void;
  post: {
    createdAt: string;
    description: string;
    likesCount: number;
    isLiked: boolean;
    title: string;
    mediaUrl: string;
    author: {
      firstName?: string | null;
      lastName?: string | null;
    };
  };
}
export const PostModal = ({ mine, handleModal, post }: PostModalProps) => {
  return (
    <section className={styles["post"]}>
      <div className={styles["post__inner"]}>
        <header className={styles["post__header"]}>
          <div className={styles["post__user-profile"]}>
            <MiniProfilePost author={post.author} date={post.createdAt} />
          </div>
          <IconButton onClick={handleModal}>
            <SvgCloseModalComponent />
          </IconButton>
        </header>
        <section className={styles["post__content"]}>
          <header className={styles["post__content-header"]}>
            <span>{post.title}</span>
          </header>
          <div className={styles["post__content-image"]}>
            <img src={post.mediaUrl} alt="" />
          </div>
          <div
            className={styles["post__content-text"]}
            style={{ maxHeight: "none" }}
          >
            <span style={{ display: "block" }}>{post.description}</span>
          </div>
        </section>
        <footer className={styles["post__footer"]}>
          {mine ? (
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
          ) : (
            <ul className={styles["post__actions-another"]}>
              <li>
                <IconButton>
                  <SvgLikeComponent />
                </IconButton>
              </li>
              <li>
                <IconButton>
                  <SvgShareComponent />
                </IconButton>
              </li>
            </ul>
          )}
        </footer>
      </div>
    </section>
  );
};
