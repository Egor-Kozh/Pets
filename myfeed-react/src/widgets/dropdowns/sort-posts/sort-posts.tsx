import { useState } from "react";
import SvgClosedChevronComponent from "../icons/components/closed-chevron";
import SvgOpenedChevronComponent from "../icons/components/opened-chevron";
import styles from "./sort-posts.module.scss";
import { DropDown } from "../../../shared/components/dropdown/dropdown";

interface SortPostsProps {
  sortBy?: "new" | "best";
}
export const SortPosts = ({ sortBy = "new" }: SortPostsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenDropDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles["sort-posts"]} onClick={handleOpenDropDown}>
      <div className={styles["sort-posts__inner"]}>
        <span>{sortBy === "new" ? "Новое" : "Лучшее"}</span>
        {isOpen ? <SvgOpenedChevronComponent /> : <SvgClosedChevronComponent />}
      </div>
      <DropDown active={isOpen} width="117px" gap="8px">
        <div>
          <span>Новое</span>
        </div>
        <div>
          <span>Лучшее</span>
        </div>
      </DropDown>
    </div>
  );
};
