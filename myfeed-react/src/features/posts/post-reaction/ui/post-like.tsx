import { useState } from "react";
import { usePostLike } from "../model/post-like/use-post-like";
import { IconButton } from "@shared/components/icon-button/icon-button";
import SvgLikeComponent from "@shared/assets/images/svg/components/like";
import { PostType } from "@entities/posts/model/types";
import { usePostUnLike } from "../model/post-unlike/use-post-unlike";

interface Args {
  post: PostType;
}
export const LikePost = ({ post }: Args) => {
  const [isLike, setIsLike] = useState(post.isLiked);

  const onCompletedLike = () => {
    setIsLike(true);
  };
  const { handleLike } = usePostLike({ onCompletedLike, post });

  const onCompletedUnLike = () => {
    setIsLike(false);
  };
  const { handleUnLike } = usePostUnLike({ onCompletedUnLike, post });

  const handleLikePost = () => {
    if (isLike) {
      handleUnLike();
    } else {
      handleLike();
    }
  };

  return (
    <IconButton onClick={handleLikePost}>
      <SvgLikeComponent isLiked={isLike} />
    </IconButton>
  );
};
