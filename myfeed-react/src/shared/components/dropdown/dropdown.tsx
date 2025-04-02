import { CSSProperties, useEffect, useRef } from "react";
import styles from "./dropdown.module.scss";

interface DropDownProps {
  children: React.ReactNode;
  active?: boolean;
  style?: CSSProperties;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  parentRef: React.RefObject<HTMLDivElement | null>;
}
export const DropDown = ({
  children,
  active,
  style,
  setIsOpen,
  parentRef,
}: DropDownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (parentRef.current?.contains(event.target as Node)) return;
      setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div
      className={`${styles.dropdown} ${active && styles.active}`}
      style={style}
      ref={dropdownRef}
    >
      {children}
    </div>
  );
};
