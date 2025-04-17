import { useRef, useState } from "react";
import SvgClosedChevronComponent from "../../../shared/assets/images/svg/components/closed-chevron";
import SvgOpenedChevronComponent from "../../../shared/assets/images/svg/components/opened-chevron";
import styles from "./sort-posts.module.scss";
import { DropDown } from "../../../shared/components/dropdown/dropdown";
import { PostFilterType } from "../../../shared/__generated__/graphql";

interface SortPostsProps {
  sortBy?: PostFilterType;
  setPostsSort: React.Dispatch<React.SetStateAction<PostFilterType>>;
}
export const SortPosts = ({
  sortBy = PostFilterType.New,
  setPostsSort,
}: SortPostsProps) => {
  const [isActive, setIsActive] = useState(sortBy);
  const [isOpen, setIsOpen] = useState(false);
  const sortPostRef = useRef(null);

  const handleOpenDropDown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleChangeSort = (sort: PostFilterType) => {
    if (isActive === sort) return;
    setIsActive(sort);
    setPostsSort(sort);
  };

  const title = isActive === PostFilterType.New ? "Новое" : "Лучшее";

  return (
    <div
      className={styles["sort-posts"]}
      ref={sortPostRef}
      onClick={handleOpenDropDown}
    >
      <div className={styles["sort-posts__inner"]}>
        <span>{title}</span>
        {isOpen ? <SvgOpenedChevronComponent /> : <SvgClosedChevronComponent />}
      </div>
      <DropDown
        active={isOpen}
        setIsOpen={setIsOpen}
        parentRef={sortPostRef}
        style={{ width: "117px", marginTop: "8px" }}
      >
        <div onClick={() => handleChangeSort(PostFilterType.New)}>
          <span>Новое</span>
        </div>
        <div onClick={() => handleChangeSort(PostFilterType.Top)}>
          <span>Лучшее</span>
        </div>
      </DropDown>
    </div>
  );
};
