export type PostType = {
  createdAt: string;
  description: string;
  likesCount: number;
  isLiked: boolean;
  title: string;
  mediaUrl: string;
  id: string;
  author: {
    firstName?: string | null;
    lastName?: string | null;
    avatarUrl?: string | null;
  };
};
