import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function PostSkeleton() {
  const colorTheme = localStorage.getItem("colorTheme");

  return (
    <SkeletonTheme
      baseColor={colorTheme === "light" ? "#DBDBDB" : "#000000"}
      customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)"
    >
      <div className="post" style={{ position: "relative", marginTop: "24px" }}>
        <div
          className="post-skeleton"
          style={{ display: "flex", flexDirection: "column", rowGap: "16px" }}
        >
          <div
            className="post-header"
            style={{ display: "flex", flexDirection: "row", columnGap: "5px" }}
          >
            <Skeleton circle width={40} height={40} />
            <div className="post-mini-profile">
              <Skeleton width={126} height={20} />
              <Skeleton width={68} height={20} />
            </div>
          </div>
          <Skeleton width={333} />
          <Skeleton height={346} width="100%" />
          <Skeleton count={3} width="100%" />
          <div
            className="post-footer"
            style={{ display: "flex", flexDirection: "row", columnGap: "24px" }}
          >
            <Skeleton width={24} height={24} />
            <Skeleton width={24} height={24} />
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
}
