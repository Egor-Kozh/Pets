import { formatDate } from "@shared/hooks/formatDate";
import { Avatar } from "../avatar/avatar";
import styles from "./mini-profile.module.scss";

interface MiniProfilePostProps {
  author: {
    firstName?: string | null;
    lastName?: string | null;
    avatarUrl?: string | null;
  };
  date: string;
}
export const MiniProfilePost = ({ author, date }: MiniProfilePostProps) => {
  return (
    <div className={styles["mini-profile"]}>
      <div className={styles["mini-profile__inner"]}>
        <div className={styles["mini-profile__logo"]}>
          <Avatar size="38px" src={author ? author.avatarUrl : null} />
        </div>
        <div className={styles["mini-profile__content"]}>
          <div className={styles["mini-profile__name"]}>
            <span>{author.firstName}</span>
            <span>{author.lastName}</span>
          </div>
          <div className={styles["mini-profile__date-post"]}>
            <span>{formatDate(date)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
