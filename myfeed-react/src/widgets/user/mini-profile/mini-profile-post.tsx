import styles from "./mini-profile.module.scss";

interface MiniProfilePostProps {
  userFirstName: string;
  userLastName: string;
  date: string;
}
export const MiniProfilePost = ({
  userFirstName,
  userLastName,
  date,
}: MiniProfilePostProps) => {
  return (
    <div className={styles["mini-profile"]}>
      <div className={styles["mini-profile__inner"]}>
        <div className={styles["mini-profile__logo"]}></div>
        <div className={styles["mini-profile__content"]}>
          <div className={styles["mini-profile__name"]}>
            <span>{userFirstName}</span>
            <span>{userLastName}</span>
          </div>
          <div className={styles["mini-profile__date-post"]}>
            <span>{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
