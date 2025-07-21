import { Profile } from "@entities/user/ui/profile/profile";
import styles from "./profile.module.scss";
import { useUserProfileQuery } from "@shared/__generated__/hooks";
import Skeleton from "react-loading-skeleton";
import { PostSkeleton } from "@shared/components/skeleton/post-skeleton/post-skeleton";

export const ProfilePage = () => {
  const { data: userData, loading } = useUserProfileQuery();

  if (loading) return <Skeleton wrapper={PostSkeleton} />;

  return (
    <div className={styles["profile"]}>
      <div className={styles["profile__inner"]}>
        <div className={styles["profile__header"]}>
          <span>Мой профиль</span>
        </div>
        <Profile userData={userData} />
      </div>
    </div>
  );
};
