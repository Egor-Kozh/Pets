import { useRef, useState } from "react";
import SvgClosedChevronComponent from "../icons/components/closed-chevron";
import SvgOpenedChevronComponent from "../icons/components/opened-chevron";
import styles from "./sort-posts.module.scss";
import { DropDown } from "../../../shared/components/dropdown/dropdown";

interface SortPostsProps {
  sortBy?: "new" | "best";
}
export const SortPosts = ({ sortBy = "new" }: SortPostsProps) => {
  const [isActive, setIsActive] = useState(sortBy);
  const [isOpen, setIsOpen] = useState(false);
  const sortPostRef = useRef(null);

  const handleOpenDropDown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleChangeSort = (sort: "new" | "best") => {
    if (isActive === sort) return;
    setIsActive(sort);
  };

  const title = isActive === "new" ? "Новое" : "Лучшее";

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
        <div onClick={() => handleChangeSort("new")}>
          <span>Новое</span>
        </div>
        <div onClick={() => handleChangeSort("best")}>
          <span>Лучшее</span>
        </div>
      </DropDown>
    </div>
  );
};
