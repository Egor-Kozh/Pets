import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./skeleton.module.scss";

export function ProfileSkeleton() {
  const colorTheme = localStorage.getItem("colorTheme");

  return (
    <SkeletonTheme
      baseColor={colorTheme === "light" ? "#DBDBDB" : "#000000"}
      customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)"
    >
      <div className={styles["profile"]}>
        <div className={styles["profile-skeleton"]}>
          <div className={styles["profile-header"]}>
            <Skeleton width={151} height={30} />
          </div>
          <div className={styles["profile-avatar"]}>
            <Skeleton circle width={148} height={148} />
          </div>
          <div className={styles["profile-main"]}>
            <Skeleton
              width={415}
              height={44}
              count={3}
              style={{ marginTop: "24px" }}
            />
            <div
              className={styles["profile-checkbox"]}
              style={{ marginTop: "24px" }}
            >
              <Skeleton circle width={24} height={24} />
              <Skeleton width={70} height={24} />
            </div>
            <div className={styles["profile-checkbox"]}>
              <Skeleton circle width={24} height={24} />
              <Skeleton width={70} height={24} />
            </div>
            <Skeleton
              width={415}
              height={44}
              count={3}
              style={{ marginTop: "24px" }}
            />
          </div>
          <div
            className={styles["profile-footer"]}
            style={{ marginTop: "24px" }}
          >
            <Skeleton width={164} height={44} />
            <Skeleton width={164} height={44} />
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
}
