import { ReactNode } from "react";
import styles from "./avatar.module.scss";

interface AvatarProps {
  size?: string;
  src: string | null | undefined;
  children?: ReactNode;
}
export const Avatar = ({ size, src, children }: AvatarProps) => {
  return (
    <div className={styles["avatar"]} style={{ width: size, height: size }}>
      {src ? (
        <img src={src} alt="user_avatar" />
      ) : (
        <img
          src="src/shared/assets/images/png/empty_avatar.png"
          alt="empty_avatar"
        />
      )}
      {children}
    </div>
  );
};
