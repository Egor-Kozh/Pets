import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./skeleton.module.scss";

export function PostSkeleton() {
  const colorTheme = localStorage.getItem("colorTheme");

  return (
    <SkeletonTheme
      baseColor={colorTheme === "light" ? "#DBDBDB" : "#000000"}
      customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)"
    >
      <div className={styles["post"]}>
        <div className={styles["post-skeleton"]}>
          <div className="post-header">
            <Skeleton circle width={40} height={40} />
            <div className="post-mini-profile">
              <Skeleton width={126} height={20} />
              <Skeleton width={68} height={20} />
            </div>
          </div>
          <Skeleton width={333} />
          <Skeleton height={346} />
          <Skeleton count={3} />
          <div className={styles["post-footer"]}>
            <Skeleton width={24} height={24} />
            <Skeleton width={24} height={24} />
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
}
