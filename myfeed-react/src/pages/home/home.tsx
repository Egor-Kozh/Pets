import { Feed } from "@widgets/post/feed/feed";
import { useUserIdQuery } from "@shared/__generated__/hooks";

export const HomePage = () => {
  const { data: userData } = useUserIdQuery();

  return <Feed userId={userData?.userId.id} />;
};
